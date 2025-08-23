// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import DuelImg from "../../components/icons/outline/duel.png";
// import AuthService from '../../service/auth.service';
// import { useMutation, useQuery,  } from '@tanstack/react-query';
// import { Modal } from 'antd';

// interface Assignment {
//     id: number;
//     plan: number;
//     task_description: string;
//     expected_output: string;
//     order: number;
// }

// interface TaskResponse {
//     assignment: Assignment;
// }

// interface CodeState {
//     [key: number]: string;
// }

// interface SubmissionData {
//     assignment_id: number | string;
//     code: string;
// }

// interface SubmittedState {
//     [key: number]: boolean;
// }

// const DuelStart: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
  
//     // Initialize codes from sessionStorage
//     const [codes, setCodes] = useState<CodeState>(() => {
//         if (typeof window !== 'undefined' && window.sessionStorage) {
//             const savedCodes = sessionStorage.getItem(`duel_codes_${id}`);
//             return savedCodes ? JSON.parse(savedCodes) : {};
//         }
//         return {};
//     });

//     // Track submitted tasks
//     const [submittedTasks, setSubmittedTasks] = useState<SubmittedState>(() => {
//         if (typeof window !== 'undefined' && window.sessionStorage) {
//             const savedSubmitted = sessionStorage.getItem(`duel_submitted_${id}`);
//             return savedSubmitted ? JSON.parse(savedSubmitted) : {};
//         }
//         return {};
//     });
    
//     // Initialize timer from sessionStorage
//     const [timeLeft, setTimeLeft] = useState<number>(() => {
//         if (typeof window !== 'undefined' && window.sessionStorage) {
//             const savedTime = sessionStorage.getItem(`duel_timer_${id}`);
//             return savedTime ? parseInt(savedTime) : 15 * 60; // 15 minutes
//         }
//         return 15 * 60;
//     });
    
//     // Store all tasks data in state to persist across refetches
//     const [persistedTasks, setPersistedTasks] = useState<Assignment[]>(() => {
//         if (typeof window !== 'undefined' && window.sessionStorage) {
//             const savedTasks = sessionStorage.getItem(`duel_tasks_${id}`);
//             return savedTasks ? JSON.parse(savedTasks) : [];
//         }
//         return [];
//     });

//     const { data: taskResponse, error, isError, isLoading } = useQuery<TaskResponse[]>({
//         queryKey: ["assignment", id],
//         queryFn: () => AuthService.getDuelAssignmentById(id!),
//         enabled: !!id,
//     });


//             const { data:status  } = useQuery({
//             queryKey: ["duel-status"],
//             queryFn: () => AuthService.getStatus(id!),
//             refetchInterval: 2000, 
//         });
//         console.log("status:",status);
        

//     const tasks: Assignment[] = taskResponse?.map(item => item.assignment) || persistedTasks;

//     useEffect(() => {
//         if (taskResponse && Array.isArray(taskResponse) && taskResponse.length > 0) {
//             const allTasks = taskResponse.map(item => item.assignment);
//             setPersistedTasks(allTasks);
            
//             if (typeof window !== 'undefined' && window.sessionStorage) {
//                 sessionStorage.setItem(`duel_tasks_${id}`, JSON.stringify(allTasks));
//             }
            
//             // Initialize default codes for all tasks if not already set
//             const defaultCodes: CodeState = {};
//             let hasNewCodes = false;
            
//             allTasks.forEach(task => {
//                 // Only set default code if not already exists
//                 if (!codes[task.id]) {
//                     let defaultCode = '';
//                     {
//                         defaultCode = `using System;
// class HelloWorld {
//   static void Main() {
//     Console.WriteLine("Hello World");
//   }
// }`;
//                     }
                    
//                     defaultCodes[task.id] = defaultCode;
//                     hasNewCodes = true;
//                 }
//             });
            
//             if (hasNewCodes) {
//                 setCodes(prev => {
//                     const newCodes = { ...prev, ...defaultCodes };
//                     if (typeof window !== 'undefined' && window.sessionStorage) {
//                         sessionStorage.setItem(`duel_codes_${id}`, JSON.stringify(newCodes));
//                     }
//                     return newCodes;
//                 });
//             }
//         }
//     }, [taskResponse, id, codes]);

//     // Timer effect with sessionStorage
//     useEffect(() => {
//         if (tasks.length === 0) return;

//         const interval = setInterval(() => {
//             setTimeLeft((prev) => {
//                 const newTime = prev <= 1 ? 0 : prev - 1;
                
//                 // Save timer to sessionStorage
//                 if (typeof window !== 'undefined' && window.sessionStorage) {
//                     sessionStorage.setItem(`duel_timer_${id}`, newTime.toString());
//                 }
                
//                 if (newTime <= 0) {
//                     clearInterval(interval);
//                     // Time's up - navigate to duel page
//                     handleTimeUp();
//                 }
//                 return newTime;
//             });
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [tasks, id]);

//     // Save codes to sessionStorage whenever they change
//     useEffect(() => {
//         if (typeof window !== 'undefined' && window.sessionStorage && Object.keys(codes).length > 0) {
//             sessionStorage.setItem(`duel_codes_${id}`, JSON.stringify(codes));
//         }
//     }, [codes, id]);

//     // Save submitted tasks to sessionStorage whenever they change
//     useEffect(() => {
//         if (typeof window !== 'undefined' && window.sessionStorage && Object.keys(submittedTasks).length > 0) {
//             sessionStorage.setItem(`duel_submitted_${id}`, JSON.stringify(submittedTasks));
//         }
//     }, [submittedTasks, id]);

//     // Individual task submission mutation
//     const { mutate: submitSingleTask, isPending: isSingleSubmitPending } = useMutation<any, Error, SubmissionData>({
//         mutationKey: ["submitSingleTask", id],
//         mutationFn: (submission: SubmissionData) =>
//             AuthService.submitDuel(id!, submission.assignment_id, submission.code),
//         onSuccess: ( variables) => {
//             // Mark this task as submitted
//             setSubmittedTasks(prev => {
//                 const newSubmitted = {
//                     ...prev,
//                     [variables.assignment_id as number]: true
//                 };
                
//                 // Check if all tasks are now submitted
//                 const allSubmitted = tasks.every(task => newSubmitted[task.id]);
                
//                 if (allSubmitted) {
//                     // Clear sessionStorage
//                     if (typeof window !== 'undefined' && window.sessionStorage) {
//                         sessionStorage.removeItem(`duel_timer_${id}`);
//                         sessionStorage.removeItem(`duel_codes_${id}`);
//                         sessionStorage.removeItem(`duel_tasks_${id}`);
//                         sessionStorage.removeItem(`duel_submitted_${id}`);
//                     }
                    
//                     // Navigate to duel page after a short delay
//                     setTimeout(() => {
//                         navigate('/duel');
//                     }, 1500);
                    
//                     Modal.success({
//                         title: "Barcha topshiriqlar bajarildi!",
//                         content: "Siz barcha topshiriqlarni muvaffaqiyatli bajardingiz. Duel sahifasiga yo'naltirilmoqdasiz...",
//                     });
//                 } else {
//                     Modal.success({
//                         title: "Muvaffaqiyatli!",
//                         content: `Topshiriq #${variables.assignment_id} muvaffaqiyatli yuborildi!`,
//                     });
//                 }
                
//                 return newSubmitted;
//             });
//         },
//         onError: (err: Error, variables) => {
//             console.error("Topshiriqni yuborishda xato:", err);
//             Modal.error({
//                 title: "Xatolik",
//                 content: `Topshiriq #${variables.assignment_id} yuborishda xatolik yuz berdi: ${(err as any)?.message || 'Noma\'lum xato'}`,
//             });
//         },
//     });

//     // All tasks submission mutation (removed as not needed)
//     // const { mutate: submitAllTasks, isPendin } = useMutation<any, Error, SubmissionData[]>({

//     const handleTimeUp = (): void => {
//         // Clear sessionStorage
//         if (typeof window !== 'undefined' && window.sessionStorage) {
//             sessionStorage.removeItem(`duel_timer_${id}`);
//             sessionStorage.removeItem(`duel_codes_${id}`);
//             sessionStorage.removeItem(`duel_tasks_${id}`);
//             sessionStorage.removeItem(`duel_submitted_${id}`);
//         }
        
//         Modal.warning({
//             title: "Vaqt tugadi!",
//             content: "Duel vaqti tugadi. Duel sahifasiga yo'naltirilmoqdasiz...",
//             onOk: () => navigate('/duel'),
//             onCancel: () => navigate('/duel'),
//         });
        
//         // Navigate to duel page after a short delay
//         setTimeout(() => {
//             navigate('/duel');
//         }, 2000);
//     };

//     const handleSubmitSingleTask = (taskId: number): void => {
//         const code = codes[taskId];
//         if (!code?.trim()) {
//             Modal.warning({
//                 title: "Ogohlantirish",
//                 content: "Iltimos, avval kodni yozing!",
//             });
//             return;
//         }

//         submitSingleTask({
//             assignment_id: taskId,
//             code: code
//         });
//     };

//     const updateCode = (taskId: number, newCode: string): void => {
//         setCodes(prev => ({
//             ...prev,
//             [taskId]: newCode
//         }));
//     };

//     // Format time as MM:SS
//     const formatTime = (seconds: number): string => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     };

//     // Count submitted tasks
//     const submittedCount = Object.values(submittedTasks).filter(Boolean).length;

//     // Error handling effects
//     useEffect(() => {
//         if (isError && error) {
//             console.error("Error:", error);
//             Modal.error({
//                 title: "Xatolik",
//                 content: (error as any)?.message || "Ma'lumotni olishda xatolik yuz berdi",
//             });
//         }
//     }, [isError, error]);

//     if (isLoading && persistedTasks.length === 0) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                 <div className="text-white text-xl">Yuklanmoqda...</div>
//             </div>
//         );
//     }

//     if (error && persistedTasks.length === 0) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                 <div className="text-red-500 text-xl">Xatolik yuz berdi yoki topshiriqlar topilmadi</div>
//             </div>
//         );
//     }

//     if (tasks.length === 0) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                 <div className="text-red-500 text-xl">Topshiriqlar topilmadi</div>
//             </div>
//         );
//     }

//     return (
//         <section className="relative min-h-screen font-roboto">
//             {/* Background Image */}
//             <div className="fixed inset-0 -z-10 w-full h-full">
//                 <img
//                     src={DuelImg}
//                     loading="lazy"
//                     alt="duel background"
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10">
//                 <div className="container mx-auto px-4 sm:px-6 py-8">
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-6">
//                         <h1 className="text-3xl font-bold text-white">
//                             Duel Topshiriqlari ({submittedCount}/{tasks.length} yuborilgan)
//                         </h1>
//                         <div className="text-right text-white text-lg font-semibold">
//                             Qolgan vaqt: <span className={`${timeLeft < 300 ? 'text-red-400' : 'text-yellow-400'}`}>
//                                 {formatTime(timeLeft)}
//                             </span>
//                         </div>
//                     </div>

//                     {/* Tasks Grid */}
//                     <div className="space-y-8">
//                         {tasks.map((task: Assignment, index: number) => (
//                             <div key={task.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg ${submittedTasks[task.id] ? 'ring-2 ring-green-400' : ''}`}>
//                                 {/* Task Header */}
//                                 <div className={`px-6 py-3 flex justify-between items-center ${submittedTasks[task.id] ? 'bg-green-600' : 'bg-[#3D6560]'}`}>
//                                     <div className="text-white font-semibold flex items-center gap-2">
//                                         Topshiriq #{task.id} • Plan {task.plan} • Tartib: {task.order}
//                                         {submittedTasks[task.id] && (
//                                             <span className="bg-white/20 px-2 py-1 rounded text-xs">✓ Yuborilgan</span>
//                                         )}
//                                     </div>
//                                     <div className="text-white/80 text-sm">
//                                         {index + 1} / {tasks.length}
//                                     </div>
//                                 </div>

//                                 {/* Task Content */}
//                                 <div className="flex flex-col lg:flex-row">
//                                     {/* Task Description (Left Side) */}
//                                     <div className="w-full lg:w-1/2 p-6 text-white">
//                                         <div className="prose prose-invert max-w-none">
//                                             <p className="mb-4 text-base leading-relaxed">{task.task_description}</p>

//                                             <div className="bg-black/20 p-4 rounded-lg mb-4">
//                                                 <h3 className="font-semibold mb-2 text-sm">Kutilgan natija:</h3>
//                                                 <div className="bg-black/30 p-3 rounded">
//                                                     <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
//                                                         {task.expected_output?.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n') || 'N/A'}
//                                                     </pre>
//                                                 </div>
//                                             </div>

//                                             {/* Task-specific hints */}
//                                             <div className="bg-blue-500/20 p-3 rounded-lg">
//                                                 <h3 className="font-semibold mb-2 text-sm">Maslahat:</h3>
//                                                 {task.task_description.includes('eng kichik') && (
//                                                     <p className="text-xs">min() funksiyasidan foydalaning yoki if/else bilan taqqoslang.</p>
//                                                 )}
//                                                 {task.task_description.includes('uzunlik') && (
//                                                     <p className="text-xs">len() funksiyasi yordamida satr uzunligini hisoblang.</p>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Code Editor (Right Side) */}
//                                     <div className="w-full lg:w-1/2 p-6 flex flex-col">
//                                         <div className="flex-1 flex flex-col">
//                                             <textarea
//                                                 className="flex-1 w-full h-64 bg-black/20 text-white rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3D6560] disabled:opacity-50"
//                                                 value={codes[task.id] || ''}
//                                                 onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateCode(task.id, e.target.value)}
//                                                 spellCheck="false"
//                                                 disabled={isSingleSubmitPending  || submittedTasks[task.id]}
//                                                 placeholder="Bu yerda kodingizni yozing..."
//                                             />
                                            
//                                             {/* Individual Submit Button */}
//                                             <div className="mt-4">
//                                                 <button
//                                                     className={`w-full px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
//                                                         submittedTasks[task.id] 
//                                                             ? 'bg-green-600 text-white cursor-not-allowed'
//                                                             : 'bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white'
//                                                     }`}
//                                                     onClick={() => handleSubmitSingleTask(task.id)}
//                                                     disabled={
//                                                         isSingleSubmitPending || 
                                             
//                                                         submittedTasks[task.id] || 
//                                                         !codes[task.id]?.trim()
//                                                     }
//                                                 >
//                                                     {submittedTasks[task.id] 
//                                                         ? '✓ Yuborilgan' 
//                                                         : isSingleSubmitPending 
//                                                             ? 'Yuborilmoqda...' 
//                                                             : 'Bu topshiriqni yuborish'
//                                                     }
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

                  
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DuelStart;
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import DuelImg from "../../components/icons/outline/duel.png";
import AuthService from '../../service/auth.service';
import { useMutation, useQuery } from '@tanstack/react-query';
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
    assignment_id: number | string;
    code: string;
}

interface SubmittedState {
    [key: number]: boolean;
}

interface DuelUser {
    id: number;
    full_name: string;
    profile_image: string | null;
    assignments: Array<{
        assignment_id: number;
        title: string;
        is_completed: boolean;
    }>;
}

interface DuelStatus {
    duel_id: number;
    started_at_iso: string;
    started_at_text: string;
    started_at_unix: number;
    started_at: string;
    elapsed_time_seconds: number;
    is_active: boolean;
    creator: DuelUser;
    opponent: DuelUser;
    winner_id: number | null;
}

const DUEL_DURATION = 15 * 60; // 15 minutes in seconds

const DuelStart: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    // Initialize codes from sessionStorage
    const [codes, setCodes] = useState<CodeState>(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const savedCodes = sessionStorage.getItem(`duel_codes_${id}`);
            return savedCodes ? JSON.parse(savedCodes) : {};
        }
        return {};
    });

    // Track submitted tasks
    const [submittedTasks, setSubmittedTasks] = useState<SubmittedState>(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const savedSubmitted = sessionStorage.getItem(`duel_submitted_${id}`);
            return savedSubmitted ? JSON.parse(savedSubmitted) : {};
        }
        return {};
    });
    
    const [timeLeft, setTimeLeft] = useState<number>(DUEL_DURATION);
    const [isDuelFinished, setIsDuelFinished] = useState<boolean>(false);
    
    // Store all tasks data in state to persist across refetches
    const [persistedTasks, setPersistedTasks] = useState<Assignment[]>(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const savedTasks = sessionStorage.getItem(`duel_tasks_${id}`);
            return savedTasks ? JSON.parse(savedTasks) : [];
        }
        return [];
    });

    // Fetch task assignments
    const { data: taskResponse, error, isError, isLoading } = useQuery<TaskResponse[]>({
        queryKey: ["assignment", id],
        queryFn: () => AuthService.getDuelAssignmentById(id!),
        enabled: !!id && !isDuelFinished,
    });

    // Fetch duel status with polling
    const { data: duelStatus, isLoading: isStatusLoading } = useQuery<DuelStatus>({
        queryKey: ["duel-status", id],
        queryFn: () => AuthService.getStatus(id!),
        refetchInterval: 2000, // Poll every 2 seconds
        enabled: !!id && !isDuelFinished,
    });

    const tasks: Assignment[] = taskResponse?.map(item => item.assignment) || persistedTasks;

    // Calculate remaining time based on duel status
    const calculateRemainingTime = useCallback((status: DuelStatus): number => {
        if (!status.is_active) return 0;
        
        const elapsed = status.elapsed_time_seconds;
        const remaining = DUEL_DURATION - elapsed;
        return Math.max(0, remaining);
    }, []);

    // Handle duel status updates
    useEffect(() => {
        if (!duelStatus) return;

        console.log("Duel Status:", duelStatus);

        // Check if duel is no longer active
        if (!duelStatus.is_active || duelStatus.winner_id !== null) {
            setIsDuelFinished(true);
            handleDuelEnd(duelStatus);
            return;
        }

        // Update remaining time based on server status
        const remainingTime = calculateRemainingTime(duelStatus);
        setTimeLeft(remainingTime);

        // Update submitted tasks based on current user's completion status
        const currentUserId = getCurrentUserId(); // You need to implement this
        const currentUser = duelStatus.creator.id === currentUserId ? duelStatus.creator : duelStatus.opponent;
        
        const newSubmittedState: SubmittedState = {};
        currentUser.assignments.forEach(assignment => {
            if (assignment.is_completed) {
                newSubmittedState[assignment.assignment_id] = true;
            }
        });
        
        setSubmittedTasks(prev => ({
            ...prev,
            ...newSubmittedState
        }));

        // Check if time is up
        if (remainingTime <= 0) {
            setIsDuelFinished(true);
            handleDuelEnd(duelStatus);
        }
    }, [duelStatus, calculateRemainingTime]);

    // Get current user ID (implement this based on your auth system)
    const getCurrentUserId = (): number => {
        // This should return the current logged-in user's ID
        // You might get this from your auth context/service
        return 20; // Replace with actual implementation
    };

    // Handle duel end
    const handleDuelEnd = (status: DuelStatus) => {
        // Clear session storage
        clearSessionStorage();
        
        let message = "Duel tugadi!";
        const navigateDelay = 2000;

        if (status.winner_id !== null) {
            const currentUserId = getCurrentUserId();
            if (status.winner_id === currentUserId) {
                message = "Tabriklaymiz! Siz g'olib bo'ldingiz! 🎉";
            } else {
                message = "Afsuski, bu safar yutqazib qo'ydingiz. Keyingi safar omad tilaymiz! 💪";
            }
        } else if (!status.is_active) {
            message = "Vaqt tugadi! Duel yakunlandi.";
        }

        Modal.info({
            title: "Duel Yakunlandi",
            content: message,
            onOk: () => navigate('/duel'),
            onCancel: () => navigate('/duel'),
        });

        setTimeout(() => {
            navigate('/duel');
        }, navigateDelay);
    };

    // Clear session storage
    const clearSessionStorage = () => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            sessionStorage.removeItem(`duel_timer_${id}`);
            sessionStorage.removeItem(`duel_codes_${id}`);
            sessionStorage.removeItem(`duel_tasks_${id}`);
            sessionStorage.removeItem(`duel_submitted_${id}`);
        }
    };

    // Handle page unload/refresh
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (!isDuelFinished && Object.keys(codes).some(taskId => codes[parseInt(taskId)]?.trim() && !submittedTasks[parseInt(taskId)])) {
                e.preventDefault();
                e.returnValue = 'Duel davom etmoqda! Sahifani tark etishingizga ishonchingiz komilmi?';
            }
        };

        const handleUnload = () => {
            // Save current state before leaving
            if (typeof window !== 'undefined' && window.sessionStorage) {
                sessionStorage.setItem(`duel_codes_${id}`, JSON.stringify(codes));
                sessionStorage.setItem(`duel_submitted_${id}`, JSON.stringify(submittedTasks));
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('unload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('unload', handleUnload);
        };
    }, [isDuelFinished, codes, submittedTasks, id]);

    // Initialize tasks and codes
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
                if (!codes[task.id]) {
                    const defaultCode = `using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`;
                    
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

    // Save codes to sessionStorage whenever they change
    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage && Object.keys(codes).length > 0) {
            sessionStorage.setItem(`duel_codes_${id}`, JSON.stringify(codes));
        }
    }, [codes, id]);

    // Save submitted tasks to sessionStorage whenever they change
    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage && Object.keys(submittedTasks).length > 0) {
            sessionStorage.setItem(`duel_submitted_${id}`, JSON.stringify(submittedTasks));
        }
    }, [submittedTasks, id]);

    // Individual task submission mutation
    const { mutate: submitSingleTask, isPending: isSingleSubmitPending } = useMutation<any, Error, SubmissionData>({
        mutationKey: ["submitSingleTask", id],
        mutationFn: (submission: SubmissionData) =>
            AuthService.submitDuel(id!, submission.assignment_id, submission.code),
        onSuccess: ( variables) => {
            Modal.success({
                title: "Muvaffaqiyatli!",
                content: `Topshiriq #${variables.assignment_id} muvaffaqiyatli yuborildi!`,
            });
        },
        onError: (err: Error, variables) => {
            console.error("Topshiriqni yuborishda xato:", err);
            Modal.error({
                title: "Xatolik",
                content: `Topshiriq #${variables.assignment_id} yuborishda xatolik yuz berdi: ${(err as any)?.message || 'Noma\'lum xato'}`,
            });
        },
    });

    const handleSubmitSingleTask = (taskId: number): void => {
        if (isDuelFinished) {
            Modal.warning({
                title: "Ogohlantirish",
                content: "Duel allaqachon tugagan!",
            });
            return;
        }

        const code = codes[taskId];
        if (!code?.trim()) {
            Modal.warning({
                title: "Ogohlantirish",
                content: "Iltimos, avval kodni yozing!",
            });
            return;
        }

        submitSingleTask({
            assignment_id: taskId,
            code: code
        });
    };

    const updateCode = (taskId: number, newCode: string): void => {
        if (isDuelFinished || submittedTasks[taskId]) return;
        
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

    // Count submitted tasks
    const submittedCount = Object.values(submittedTasks).filter(Boolean).length;

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

    // Show loading screen
    if ((isLoading || isStatusLoading) && persistedTasks.length === 0) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-white text-xl">Yuklanmoqda...</div>
            </div>
        );
    }

    // Show error screen
    if (error && persistedTasks.length === 0) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-red-500 text-xl">Xatolik yuz berdi yoki topshiriqlar topilmadi</div>
            </div>
        );
    }

    // Show no tasks screen
    if (tasks.length === 0) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-red-500 text-xl">Topshiriqlar topilmadi</div>
            </div>
        );
    }

    // Show duel ended screen
    if (isDuelFinished) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="text-white text-xl">Duel tugadi. Sahifadan chiqilmoqda...</div>
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
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
                        <h1 className="text-3xl font-bold text-white">
                            Duel Topshiriqlari ({submittedCount}/{tasks.length} yuborilgan)
                        </h1>
                        
                        {/* Status Information */}
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-white">
                            
                            <div className="text-lg font-semibold">
                                Qolgan vaqt: <span className={`${timeLeft < 300 ? 'text-red-400' : 'text-yellow-400'}`}>
                                    {formatTime(timeLeft)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(submittedCount / tasks.length) * 100}%` }}
                            ></div>
                        </div>
                        <div className="text-white text-sm mt-1">
                            Jarayon: {submittedCount}/{tasks.length} topshiriq bajarilgan
                        </div>
                    </div>

                    {/* Tasks Grid */}
                    <div className="space-y-8">
                        {tasks.map((task: Assignment, index: number) => (
                            <div key={task.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${submittedTasks[task.id] ? 'ring-2 ring-green-400' : ''}`}>
                                {/* Task Header */}
                                <div className={`px-6 py-3 flex justify-between items-center transition-all duration-300 ${submittedTasks[task.id] ? 'bg-green-600' : 'bg-[#3D6560]'}`}>
                                    <div className="text-white font-semibold flex items-center gap-2">
                                        Topshiriq #{task.id} • Plan {task.plan} • Tartib: {task.order}
                                        {submittedTasks[task.id] && (
                                            <span className="bg-white/20 px-2 py-1 rounded text-xs animate-pulse">✓ Yuborilgan</span>
                                        )}
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
                                                    <p className="text-xs">Math.Min() funksiyasidan foydalaning yoki if/else bilan taqqoslang.</p>
                                                )}
                                                {task.task_description.includes('uzunlik') && (
                                                    <p className="text-xs">Length property yordamida satr uzunligini hisoblang.</p>
                                                )}
                                                {!task.task_description.includes('eng kichik') && !task.task_description.includes('uzunlik') && (
                                                    <p className="text-xs">Console.ReadLine() dan foydalanib kiritish oling va Console.WriteLine() bilan natija chiqaring.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Editor (Right Side) */}
                                    <div className="w-full lg:w-1/2 p-6 flex flex-col">
                                        <div className="flex-1 flex flex-col">
                                            <textarea
                                                className="flex-1 w-full h-64 bg-black/20 text-white rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3D6560] disabled:opacity-50 transition-all duration-200"
                                                value={codes[task.id] || ''}
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateCode(task.id, e.target.value)}
                                                spellCheck="false"
                                                disabled={isSingleSubmitPending || submittedTasks[task.id] || isDuelFinished}
                                                placeholder="Bu yerda kodingizni yozing..."
                                            />
                                            
                                            {/* Individual Submit Button */}
                                            <div className="mt-4">
                                                <button
                                                    className={`w-full px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                                                        submittedTasks[task.id] 
                                                            ? 'bg-green-600 text-white cursor-not-allowed'
                                                            : isDuelFinished
                                                                ? 'bg-gray-600 text-white cursor-not-allowed'
                                                                : 'bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white hover:scale-105 active:scale-95'
                                                    }`}
                                                    onClick={() => handleSubmitSingleTask(task.id)}
                                                    disabled={
                                                        isSingleSubmitPending || 
                                                        submittedTasks[task.id] || 
                                                        !codes[task.id]?.trim() ||
                                                        isDuelFinished
                                                    }
                                                >
                                                    {submittedTasks[task.id] 
                                                        ? '✓ Yuborilgan' 
                                                        : isDuelFinished
                                                            ? 'Duel tugagan'
                                                            : isSingleSubmitPending 
                                                                ? 'Yuborilmoqda...' 
                                                                : 'Bu topshiriqni yuborish'
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Back Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                            onClick={() => navigate('/duel')}
                            disabled={isSingleSubmitPending}
                        >
                            Duel sahifasiga qaytish
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DuelStart;