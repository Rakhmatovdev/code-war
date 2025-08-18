import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import DuelImg from "../../components/icons/outline/duel.png";
import AuthService from '../../service/auth.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const DuelStart = () => {
    const { id } = useParams();
    const [code, setCode] = useState('');
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(60);

    const { data: task, isLoading, error } = useQuery({
        queryKey: ["assignment", id],
        queryFn: () => AuthService.getDuelAssignmentById(id!),
        enabled: !!id,
    });

    useEffect(() => {
        if (!task) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    handleFinish();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [task]);

    useEffect(() => {
        if (!task) return;
        setCode(`using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`);
    }, [task]);

    const { mutate } = useMutation({
        mutationKey: ["finishAssignment", id],
        mutationFn: ({ id, code }: { id: string; code: string }) =>
            AuthService.postAssignment(id, code),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["assignment", id], exact: true });
        },
        onError: (err) => {
            console.error("Yakunlashda xato:", err);
        },
    });

    const handleFinish = () => {
        if (!task) return;
        mutate({ id: id!, code });
    };

    if (isLoading) return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="text-white text-xl">Yuklanmoqda...</div>
        </div>
    );

    if (error || !task) return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="text-red-500 text-xl">Xatolik yuz berdi yoki topshiriq topilmadi</div>
        </div>
    );

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
                    {/* Timer */}
                    <div className="text-right text-white text-lg font-semibold mb-4">
                        Qolgan vaqt: <span className="text-yellow-400">{timeLeft}s</span>
                    </div>

                    {/* Task Container */}
                    <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                        {/* Task Description (Left Side) */}
                        <div className="w-full lg:w-1/2 p-6 md:p-8 text-white relative">
                            <div className="absolute top-4 left-4 bg-[#3D6560] px-4 py-1 rounded-full text-sm">
                                {task.id}‑topshiriq • {task.points} ball
                            </div>

                            <div className="mt-10">
                                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                                    {task.title}
                                </h1>
                                {task.plan?.title && (
                                    <p className="text-gray-300 italic mb-6 text-center">
                                        {task.plan.title}
                                    </p>
                                )}

                                <div className="prose prose-invert max-w-none">
                                    <p className="mb-6">{task.task_description}</p>

                                    <div className="bg-black/20 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2">Namuna:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Kirish:</p>
                                                <pre className="bg-black/30 p-2 rounded text-sm overflow-x-auto">
                                                    {task.sample_input}
                                                </pre>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Chiqish:</p>
                                                <pre className="bg-black/30 p-2 rounded text-sm overflow-x-auto">
                                                    {task.expected_output}
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Code Editor (Right Side) */}
                        <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col">
                            <div className="flex-1 mb-6">
                                <textarea
                                    className="w-full h-full bg-black/20 text-white rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3D6560]"
                                    value={code}
                                    rows={16}
                                    onChange={(e) => setCode(e.target.value)}
                                    spellCheck="false"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                <button
                                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                                    onClick={() => navigate(-1)}
                                >
                                    Orqaga
                                </button>
                                <button
                                    className="px-6 py-3 bg-[#3D6560] hover:bg-[#2a4a45] text-white rounded-lg transition-colors"
                                    onClick={handleFinish}
                                >
                                    Yakunlash
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DuelStart;