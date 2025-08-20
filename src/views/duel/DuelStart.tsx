import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import DuelImg from "../../components/icons/outline/duel.png";
import AuthService from '../../service/auth.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Modal } from 'antd';

interface Assignment {
    id: number;
    plan: number;
    task_description: string;
    expected_output: string;
    order: number;
}

interface TaskResponse {
    assignment: Assignment;
}

interface CodeState {
    [key: number]: string;
}

interface SubmissionData {
    assignment_id: number |string;
    code: string;
}

const DuelStart: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
    // Initialize codes from sessionStorage
    const [codes, setCodes] = useState<CodeState>(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const savedCodes = sessionStorage.getItem(`duel_codes_${id}`);
            return savedCodes ? JSON.parse(savedCodes) : {};
        }
        return {};
    });
    
    // Initialize timer from sessionStorage
    const [timeLeft, setTimeLeft] = useState<number>(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const savedTime = sessionStorage.getItem(`duel_timer_${id}`);
            return savedTime ? parseInt(savedTime) : 15 * 60; // 15 minutes
        }
        return 15 * 60;
    });
    
    // Store all tasks data in state to persist across refetches
    const [persistedTasks, setPersistedTasks] = useState<Assignment[]>(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const savedTasks = sessionStorage.getItem(`duel_tasks_${id}`);
            return savedTasks ? JSON.parse(savedTasks) : [];
        }
        return [];
    });

    const { data: taskResponse, error, isError, isLoading } = useQuery<TaskResponse[]>({
        queryKey: ["assignment", id],
        queryFn: () => AuthService.getDuelAssignmentById(id!),
        enabled: !!id,
    });

    // Extract all tasks from the response array
    const tasks: Assignment[] = taskResponse?.map(item => item.assignment) || persistedTasks;

    // Save tasks to sessionStorage when data changes
    useEffect(() => {
        if (taskResponse && Array.isArray(taskResponse) && taskResponse.length > 0) {
            const allTasks = taskResponse.map(item => item.assignment);
            setPersistedTasks(allTasks);
            
            if (typeof window !== 'undefined' && window.sessionStorage) {
                sessionStorage.setItem(`duel_tasks_${id}`, JSON.stringify(allTasks));
            }
            
            // Initialize default codes for all tasks if not already set
            const defaultCodes: CodeState = {};
            let hasNewCodes = false;
            
            allTasks.forEach(task => {
                // Only set default code if not already exists
                if (!codes[task.id]) {
                    let defaultCode = '';
                    {

                        defaultCode = `using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`;
                    }
                    
                    defaultCodes[task.id] = defaultCode;
                    hasNewCodes = true;
                }
            });
            
            if (hasNewCodes) {
                setCodes(prev => {
                    const newCodes = { ...prev, ...defaultCodes };
                    if (typeof window !== 'undefined' && window.sessionStorage) {
                        sessionStorage.setItem(`duel_codes_${id}`, JSON.stringify(newCodes));
                    }
                    return newCodes;
                });
            }
        }
    }, [taskResponse, id, codes]);

    // Timer effect with sessionStorage
    useEffect(() => {
        if (tasks.length === 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev <= 1 ? 0 : prev - 1;
                
                // Save timer to sessionStorage
                if (typeof window !== 'undefined' && window.sessionStorage) {
                    sessionStorage.setItem(`duel_timer_${id}`, newTime.toString());
                }
                
                if (newTime <= 0) {
                    clearInterval(interval);
                    handleFinishAll();
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [tasks, id]);

    // Save codes to sessionStorage whenever they change
    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage && Object.keys(codes).length > 0) {
            sessionStorage.setItem(`duel_codes_${id}`, JSON.stringify(codes));
        }
    }, [codes, id]);

    const { mutate, isPending } = useMutation<any, Error, SubmissionData[]>({
        mutationKey: ["finishAssignment", id],
        mutationFn: (submissions: SubmissionData[]) =>
            Promise.all(submissions.map(sub => AuthService.submitDuel(id!,sub.assignment_id, sub.code))),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["assignment", id], exact: true });
            
            // Clear sessionStorage on success
            if (typeof window !== 'undefined' && window.sessionStorage) {
                sessionStorage.removeItem(`duel_timer_${id}`);
                sessionStorage.removeItem(`duel_codes_${id}`);
                sessionStorage.removeItem(`duel_tasks_${id}`);
            }
            
        
        },
        onError: (err: Error) => {
            console.error("Yakunlashda xato:", err);
    
        },
    });

    const handleFinishAll = (): void => {
        if (tasks.length === 0) return;
        
        const submissions: SubmissionData[] = tasks.map(task => ({
            assignment_id: task.id,
            code: codes[task.id] || ''
        }));
        
        mutate(submissions);
    };

    const updateCode = (taskId: number, newCode: string): void => {
        setCodes(prev => ({
            ...prev,
            [taskId]: newCode
        }));
    };

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Error handling effects
    useEffect(() => {
        if (isError && error) {
            console.error("Error:", error);
            Modal.error({
                title: "Xatolik",
                content: (error as any)?.message || "Ma'lumotni olishda xatolik yuz berdi",
            });
        }
    }, [isError, error]);

    if (isLoading && persistedTasks.length === 0) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-white text-xl">Yuklanmoqda...</div>
            </div>
        );
    }

    if (error && persistedTasks.length === 0) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-red-500 text-xl">Xatolik yuz berdi yoki topshiriqlar topilmadi</div>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-red-500 text-xl">Topshiriqlar topilmadi</div>
            </div>
        );
    }

    return (
        <section className="relative min-h-screen font-roboto">
            {/* Background Image */}
            <div className="fixed inset-0 -z-10 w-full h-full">
                <img
                    src={DuelImg}
                    loading="lazy"
                    alt="duel background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 sm:px-6 py-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-white">
                            Duel Topshiriqlari ({tasks.length} ta)
                        </h1>
                        <div className="text-right text-white text-lg font-semibold">
                            Qolgan vaqt: <span className={`${timeLeft < 300 ? 'text-red-400' : 'text-yellow-400'}`}>
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </div>

                    {/* Tasks Grid */}
                    <div className="space-y-8">
                        {tasks.map((task: Assignment, index: number) => (
                            <div key={task.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                                {/* Task Header */}
                                <div className="bg-[#3D6560] px-6 py-3 flex justify-between items-center">
                                    <div className="text-white font-semibold">
                                        Topshiriq #{task.id} • Plan {task.plan} • Tartib: {task.order}
                                    </div>
                                    <div className="text-white/80 text-sm">
                                        {index + 1} / {tasks.length}
                                    </div>
                                </div>

                                {/* Task Content */}
                                <div className="flex flex-col lg:flex-row">
                                    {/* Task Description (Left Side) */}
                                    <div className="w-full lg:w-1/2 p-6 text-white">
                                        <div className="prose prose-invert max-w-none">
                                            <p className="mb-4 text-base leading-relaxed">{task.task_description}</p>

                                            <div className="bg-black/20 p-4 rounded-lg mb-4">
                                                <h3 className="font-semibold mb-2 text-sm">Kutilgan natija:</h3>
                                                <div className="bg-black/30 p-3 rounded">
                                                    <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                                                        {task.expected_output?.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n') || 'N/A'}
                                                    </pre>
                                                </div>
                                            </div>

                                            {/* Task-specific hints */}
                                            <div className="bg-blue-500/20 p-3 rounded-lg">
                                                <h3 className="font-semibold mb-2 text-sm">Maslahat:</h3>
                            
                                                {task.task_description.includes('eng kichik') && (
                                                    <p className="text-xs">min() funksiyasidan foydalaning yoki if/else bilan taqqoslang.</p>
                                                )}
                                                {task.task_description.includes('uzunlik') && (
                                                    <p className="text-xs">len() funksiyasi yordamida satr uzunligini hisoblang.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Editor (Right Side) */}
                                    <div className="w-full lg:w-1/2 p-6 flex flex-col">
                                        <textarea
                                            className="w-full h-64 bg-black/20 text-white rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3D6560]"
                                            value={codes[task.id] || ''}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateCode(task.id, e.target.value)}
                                            spellCheck="false"
                                            disabled={isPending}
                                            placeholder="Bu yerda kodingizni yozing..."
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-end mt-8">
                        <button
                            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white rounded-lg transition-colors"
                            onClick={() => navigate(-1)}
                            disabled={isPending}
                        >
                            Orqaga
                        </button>
                        <button
                            className="px-8 py-3 bg-[#3D6560] hover:bg-[#2a4a45] disabled:opacity-50 text-white rounded-lg transition-colors"
                            onClick={handleFinishAll}
                            disabled={isPending || tasks.some(task => !codes[task.id]?.trim())}
                        >
                            {isPending ? 'Yuborilmoqda...' : `Barcha topshiriqlarni yakunlash (${tasks.length} ta)`}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DuelStart;