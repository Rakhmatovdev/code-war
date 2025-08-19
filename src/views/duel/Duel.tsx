// import DuelImg from "../../components/icons/outline/duel.png";
// import user from "../../components/icons/user.png";
// import badge from "../../components/icons/badge.png";
// import knife from "../../components/icons/knife.svg";
// import FightCard from "./FightCard";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import AuthService from "../../service/auth.service";
// import eye from "../../components/icons/outline/eye.svg";

// import { Dropdown, MenuProps } from "antd";
// import { format, parseISO } from "date-fns";

// const Duel = () => {
//     const { data: duel } = useQuery({
//         queryKey: ["duel"],
//         queryFn: () => AuthService.getDuels(),
//     });

//     // const { id } = duel?.duel || {};

//     // const { data: duelOne } = useQuery({
//     //     queryKey: ["duel-one"],
//     //     queryFn: () => AuthService.getAssignmentsByDuelId(id),
//     //     enabled: !!id,
//     // });

//     const { data: rating } = useQuery({
//         queryKey: ["ratings"],
//         queryFn: () => AuthService.getRating(),
//     });

//     const mutationCreate = useMutation({
//         mutationFn: () => AuthService.createDuel(),
//         onSuccess: (res) => {
//             console.log("Created duel:", res.data);
//         }
//     });

//     const mutationJoin = useMutation({
//         mutationFn: (id: number) => AuthService.joinDuel(id),
//         onSuccess: () => {
//             console.log("Joined the duel");
//         }
//     });

//     const mutationStatus = useMutation({
//         mutationFn: (id: number) => AuthService.getStatus(id),
//         onSuccess: () => {
//             console.log("Joined the duel");
//         }
//     });

//     // const mutationSubmit = useMutation({
//     //     mutationFn: ({ id, payload }: { id: number; payload: any }) =>
//     //         AuthService.submitDuel(id, payload),
//     //     onSuccess: () => {
//     //         console.log("Submitted duel");
//     //     }
//     // });

//     const getUserDuels = (userId: number) => {
//         return duel?.filter((d: any) => d.creator === userId) || [];
//     };

//     const createItemsForUser = (userId: number): MenuProps['items'] => {
//         const userDuels = getUserDuels(userId);

//         return userDuels.map((d: any, idx: number) => {
//             const date = d.created_at
//                 ? format(parseISO(d.created_at), 'dd-MM-yyyy HH:mm:ss')
//                 : 'N/A';

//             return {
//                 key: d.id.toString(),
//                 label: (
//                     <div style={{ display: 'flex', justifyContent: 'space-between' }}
//                          className="text-[9px] sm:text-base"
//                          onClick={() => mutationStatus.mutate(d.id)}>
//                         <p>
//                             <span className="font-semibold">{idx + 1}</span>. {date}
//                             <span className="ml-2 text-gray-500">
//                 (ID: {d.id})
//               </span>
//                         </p>
//                     </div>
//                 ),
//             };
//         });
//     };

//     const checkDuelCreator = (userId: number) => {
//         return duel?.some((item: any) => item?.creator === userId);
//     };

//     return (
//         <div className="relative min-h-screen font-roboto">
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
//             <section className="relative z-10">
//                 <div className="sm:mx-16 mx-4 bg-[#D9D9D90D] rounded-3xl sm:px-[100px] px-4 pt-4 sm:pt-[38px] text-white overflow-y-scroll scroll-none">
//                     <table className="w-full">
//                         <thead>
//                         <tr className="text-start border-b">
//                             <th className="text-[9px] sm:text-base border-r">№</th>
//                             <th className="text-[9px] sm:text-base">rasm</th>
//                             <th className="text-[9px] sm:text-base">ism</th>
//                             <th className="text-[9px] sm:text-base">reyting</th>
//                             <th className="text-[9px] sm:text-base">daraja</th>
//                             <th className="text-[9px] sm:text-base">kuzatish</th>
//                             <th className="text-[9px] sm:text-base">duelga chaqirish</th>
//                             <th className="text-[9px] sm:text-base">duelga qoshilish</th>
//                         </tr>
//                         </thead>
//                         <tbody className="text-center">
//                         {rating?.map((rate: any) => (
//                             <tr key={rate?.id} className="hover:bg-white/10 transition-colors">
//                                 <td className="border-r text-xs sm:text-base py-2">{rate?.id}</td>
//                                 <td className="py-2">
//                                     <div className="flex justify-center">
//                                         <img
//                                             className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] object-cover"
//                                             src={user}
//                                             alt="User profile"
//                                         />
//                                     </div>
//                                 </td>
//                                 <td className="text-[8px] sm:text-base py-2">{rate?.full_name}</td>
//                                 <td className="text-xs sm:text-base py-2">{rate?.rating}</td>
//                                 <td className="py-2">
//                                     <div className="flex justify-center">
//                                         <img
//                                             src={rate?.level_image_url || badge}
//                                             className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl object-contain"
//                                             alt="Level badge"
//                                         />
//                                     </div>
//                                 </td>
//                                 <td className="py-2">
//                                     <Dropdown
//                                         menu={{ items: createItemsForUser(rate?.id) }}
//                                         disabled={!checkDuelCreator(rate?.id)}
//                                         trigger={['click']}
//                                         dropdownRender={(menu) => (
//                                             <div style={{ maxHeight: 200, overflowY: 'auto' }}>
//                                                 {menu}
//                                             </div>
//                                         )}
//                                     >
//                                         <div className="flex justify-center cursor-pointer">
//                                             <img
//                                                 className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"
//                                                 src={eye}
//                                                 alt="View duels"
//                                             />
//                                         </div>
//                                     </Dropdown>
//                                 </td>
//                                 <td className="py-2">
//                                     <div
//                                         className="flex justify-center cursor-pointer hover:scale-95 transition-all duration-300"
//                                         onClick={() => mutationCreate.mutate(rate?.id)}
//                                     >
//                                         <img
//                                             className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
//                                             src={knife}
//                                             alt="Challenge to duel"
//                                         />
//                                     </div>
//                                 </td>
//                                 <td className="py-2">
//                                     <div
//                                         className="flex justify-center cursor-pointer hover:scale-95 transition-all duration-300"
//                                         onClick={() => mutationJoin.mutate(rate?.id)}
//                                     >
//                                         <img
//                                             className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
//                                             src={knife}
//                                             alt="Join duel"
//                                         />
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </section>

//             {/* Duel History Section */}
//             <div className="relative z-10 my-20">
//                 <div className="sm:mx-16 mx-4 bg-[#D9D9D90D] rounded-3xl sm:p-12 p-4 text-white">
//                     <p className="text-center sm:text-3xl text-xl mb-2 sm:mb-8">
//                         History of duels
//                     </p>
//                     <hr className="h-px border-none bg-white/50 sm:mx-16 mx-4 my-2" />
//                     <FightCard
//                         leftPlayer={{
//                             name: "Xamrayev Nurbek",
//                             avatar: user,
//                             health: 2,
//                             damage: -110,
//                         }}
//                         rightPlayer={{
//                             name: "Umarzoda Shohruh",
//                             avatar: user,
//                             health: 3,
//                             damage: 110,
//                         }}
//                         time="00 : 12 : 58"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Duel;
import DuelImg from "../../components/icons/outline/duel.png";
import user from "../../components/icons/user.png";
import badge from "../../components/icons/badge.png";
import knife from "../../components/icons/knife.svg";
import FightCard from "./FightCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AuthService from "../../service/auth.service";
import eye from "../../components/icons/outline/eye.svg";
import { useNavigate } from "react-router";
import { Dropdown, MenuProps, Modal, Progress, Tag } from "antd";
import { format, parseISO } from "date-fns";
import { useState } from "react";

interface DuelData {
    id: number;
    creator: number;
    creator_name: string;
    opponent: number | null;
    opponent_name: string;
    created_at: string;
    is_active: boolean;
    winner: number | null;
    started_at: string | null;
}

interface DuelStatus {
    duel_id: number;
    started_at: string;
    elapsed_time_seconds: number;
    is_active: boolean;
    winner_id: number | null;
    creator: {
        id: number;
        full_name: string;
        profile_image: string;
        assignments: Array<{
            assignment_id: number;
            title: string;
            is_completed: boolean;
        }>;
    };
    opponent: {
        id: number;
        full_name: string;
        profile_image: string;
        assignments: Array<{
            assignment_id: number;
            title: string;
            is_completed: boolean;
        }>;
    } | null;
}

const Duel = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [statusModalVisible, setStatusModalVisible] = useState(false);
    const [selectedDuelStatus, setSelectedDuelStatus] = useState<DuelStatus | null>(null);
    const [currentUserId, setCurrentUserId] = useState<number>(1); // Bu sizning auth sistemingizdan olish kerak
console.log(setCurrentUserId);

    // Available duellar (opponentsiz)
    const { data: availableDuels, refetch: refetchDuels } = useQuery({
        queryKey: ["duel"],
        queryFn: () => AuthService.getDuels(),
        refetchInterval: 5000, // Har 5 soniyada yangilanadi
    });

    // Reyting ro'yxati
    const { data: rating } = useQuery({
        queryKey: ["ratings"],
        queryFn: () => AuthService.getRating(),
    });

    // Duel yaratish
    const mutationCreate = useMutation({
        mutationFn: () => AuthService.createDuel(),
        onSuccess: (res) => {
            console.log("Created duel:", res.data);
            queryClient.invalidateQueries({ queryKey: ["duel"] });
            refetchDuels();
        }
    });

    // Duelga qo'shilish (bu yerda duel ID ni yuborish kerak)
    const mutationJoin = useMutation({
        mutationFn: (duelId: number) => AuthService.joinDuel(duelId),
        onSuccess: () => {
            console.log("Joined the duel");
            queryClient.invalidateQueries({ queryKey: ["duel"] });
            refetchDuels();
        }
    });

    // Status tekshirish
    const mutationStatus = useMutation({
        mutationFn: (duelId: number) => AuthService.getStatus(duelId),
        onSuccess: (statusData) => {
            console.log("Status data:", statusData);
            
            // Agar 403 error bo'lsa
            if (statusData?.error && statusData?.status === 403) {
                Modal.warning({
                    title: "Ruxsat yo'q",
                    content: statusData.message || "Siz bu duel ishtirokchisi emassiz",
                });
                return;
            }
            
            setSelectedDuelStatus(statusData);
            setStatusModalVisible(true);
        },
        onError: (error: any) => {
            console.error("Status check error:", error);
        }
    });

    // Foydalanuvchining yaratgan duellari
    const getUserCreatedDuels = (userId: number): DuelData[] => {
        return availableDuels?.filter((d: DuelData) => d.creator === userId) || [];
    };

    // Foydalanuvchining qo'shilishi mumkin bo'lgan duellar
    const getAvailableDuelsForUser = (): DuelData[] => {
        return availableDuels?.filter((d: DuelData) => 
            d.opponent === null && d.creator !== currentUserId && d.is_active
        ) || [];
    };

    // User dropdown menusini yaratish
    const createItemsForUser = (userId: number): MenuProps['items'] => {
        const userDuels = getUserCreatedDuels(userId);

        if (userDuels.length === 0) {
            return [{
                key: 'no-duels',
                label: (
                    <div className="text-gray-500 text-center py-2">
                        Hech qanday duel yaratilmagan
                    </div>
                ),
                disabled: true
            }];
        }

        return userDuels.map((d: DuelData, idx: number) => {
            const date = d.created_at
                ? format(parseISO(d.created_at), 'dd-MM-yyyy HH:mm:ss')
                : 'N/A';

            const getStatusTag = () => {
                if (!d.opponent) return <Tag color="orange">Kutilmoqda</Tag>;
                if (d.is_active && d.started_at) return <Tag color="green">Davom etmoqda</Tag>;
                if (d.winner) return <Tag color="blue">Tugagan</Tag>;
                return <Tag color="default">Noma'lum</Tag>;
            };

            return {
                key: d.id.toString(),
                label: (
                    <div 
                        className="text-[9px] sm:text-base p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => mutationStatus.mutate(d.id)}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p>
                                    <span className="font-semibold">{idx + 1}</span>. {date}
                                    <span className="ml-2 text-gray-500 text-xs">
                                        (ID: {d.id})
                                    </span>
                                </p>
                                <div className="mt-1">
                                    {getStatusTag()}
                                    {d.opponent_name && (
                                        <span className="ml-2 text-xs text-gray-600">
                                            vs {d.opponent_name}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ),
            };
        });
    };

    // Foydalanuvchi duel yaratganini tekshirish
    const checkDuelCreator = (userId: number) => {
        return availableDuels?.some((item: DuelData) => item?.creator === userId);
    };

    // Status modalini yopish
    const closeStatusModal = () => {
        setStatusModalVisible(false);
        setSelectedDuelStatus(null);
    };

    // Duelga o'tish
    const goToDuel = () => {
        if (selectedDuelStatus?.duel_id) {
            navigate(`/duel/${selectedDuelStatus.duel_id}/start`);
            closeStatusModal();
        }
    };

    // Vaqtni formatlash
    const formatElapsedTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Progress hisoblash
    const calculateProgress = (assignments: any[]) => {
        const completed = assignments.filter(a => a.is_completed).length;
        return (completed / assignments.length) * 100;
    };

    return (
        <div className="relative min-h-screen font-roboto">
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
            <section className="relative z-10">
                <div className="sm:mx-16 mx-4 bg-[#D9D9D90D] rounded-3xl sm:px-[100px] px-4 pt-4 sm:pt-[38px] text-white overflow-y-scroll scroll-none">
                    
                    {/* Available Duels Section */}
                    {getAvailableDuelsForUser().length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl mb-4 text-center">Mavjud Duellar (Qo'shilish uchun)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {getAvailableDuelsForUser().map((duel: DuelData) => (
                                    <div 
                                        key={duel.id}
                                        className="bg-blue-900/30 p-4 rounded-lg border border-blue-400 hover:bg-blue-900/50 transition-colors"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">Duel #{duel.id}</span>
                                            <Tag color="blue">Ochiq</Tag>
                                        </div>
                                        <p className="text-sm text-gray-300 mb-3">
                                            Yaratuvchi: {duel.creator_name}
                                        </p>
                                        <p className="text-xs text-gray-400 mb-3">
                                            {format(parseISO(duel.created_at), 'dd-MM-yyyy HH:mm')}
                                        </p>
                                        <button
                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                                            onClick={() => mutationJoin.mutate(duel.id)}
                                            disabled={mutationJoin.isPending}
                                        >
                                            {mutationJoin.isPending ? "Qo'shilmoqda..." : "Qo'shilish"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <hr className="h-px border-none bg-white/50 my-6" />
                        </div>
                    )}

                    {/* Users Rating Table */}
                    <table className="w-full">
                        <thead>
                        <tr className="text-start border-b">
                            <th className="text-[9px] sm:text-base border-r">№</th>
                            <th className="text-[9px] sm:text-base">rasm</th>
                            <th className="text-[9px] sm:text-base">ism</th>
                            <th className="text-[9px] sm:text-base">reyting</th>
                            <th className="text-[9px] sm:text-base">daraja</th>
                            <th className="text-[9px] sm:text-base">mening duellarim</th>
                            <th className="text-[9px] sm:text-base">duel yaratish</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        {rating?.map((rate: any, index: number) => (
                            <tr key={rate?.id} className="hover:bg-white/10 transition-colors">
                                <td className="border-r text-xs sm:text-base py-2">{index + 1}</td>
                                <td className="py-2">
                                    <div className="flex justify-center">
                                        <img
                                            className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] object-cover"
                                            src={rate?.profile_image || user}
                                            alt="User profile"
                                        />
                                    </div>
                                </td>
                                <td className="text-[8px] sm:text-base py-2">{rate?.full_name}</td>
                                <td className="text-xs sm:text-base py-2">{rate?.rating}</td>
                                <td className="py-2">
                                    <div className="flex justify-center">
                                        <img
                                            src={rate?.level_image_url || badge}
                                            className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl object-contain"
                                            alt="Level badge"
                                        />
                                    </div>
                                </td>
                                <td className="py-2">
                                    <Dropdown
                                        menu={{ items: createItemsForUser(rate?.id) }}
                                        disabled={!checkDuelCreator(rate?.id)}
                                        trigger={['click']}
                                        dropdownRender={(menu) => (
                                            <div style={{ maxHeight: 200, overflowY: 'auto' }}>
                                                {menu}
                                            </div>
                                        )}
                                    >
                                        <div className="flex justify-center cursor-pointer">
                                            <img
                                                className={`w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl ${
                                                    !checkDuelCreator(rate?.id) 
                                                        ? 'opacity-50 cursor-not-allowed' 
                                                        : 'hover:scale-110 transition-transform'
                                                }`}
                                                src={eye}
                                                alt="View duels"
                                            />
                                            {checkDuelCreator(rate?.id) && getUserCreatedDuels(rate?.id).length > 0 && (
                                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                    {getUserCreatedDuels(rate?.id).length}
                                                </span>
                                            )}
                                        </div>
                                    </Dropdown>
                                </td>
                                <td className="py-2">
                                    <div
                                        className="flex justify-center cursor-pointer hover:scale-95 transition-all duration-300"
                                        onClick={() => mutationCreate.mutate()}
                                    >
                                        <img
                                            className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                                            src={knife}
                                            alt="Create new duel"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Status Modal */}
            <Modal
                title={
                    <div className="flex items-center justify-between">
                        <span>Duel #{selectedDuelStatus?.duel_id} Status</span>
                        {selectedDuelStatus?.is_active && (
                            <Tag color="green" className="animate-pulse">Aktiv</Tag>
                        )}
                    </div>
                }
                open={statusModalVisible}
                onCancel={closeStatusModal}
                width={800}
                footer={[
                    <button
                        key="close"
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors mr-2"
                        onClick={closeStatusModal}
                    >
                        Yopish
                    </button>,
                    selectedDuelStatus?.is_active && (
                        <button
                            key="join"
                            className="px-4 py-2 bg-[#3D6560] hover:bg-[#2a4a45] text-white rounded transition-colors"
                            onClick={goToDuel}
                        >
                            Duelga o'tish
                        </button>
                    )
                ]}
            >
                {selectedDuelStatus && (
                    <div className="space-y-6">
                        {/* Duel Info */}
                        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                            <div>
                                <span className="font-semibold text-gray-700">Boshlanish vaqti:</span>
                                <p>{selectedDuelStatus.started_at 
                                    ? format(parseISO(selectedDuelStatus.started_at), 'dd-MM-yyyy HH:mm:ss')
                                    : 'Hali boshlanmagan'
                                }</p>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">O'tgan vaqt:</span>
                                <p className="text-lg font-mono">
                                    {formatElapsedTime(selectedDuelStatus.elapsed_time_seconds)}
                                </p>
                            </div>
                        </div>

                        {/* Players Progress */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Creator */}
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                    <img 
                                        src={selectedDuelStatus.creator.profile_image || user} 
                                        alt="Creator"
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{selectedDuelStatus.creator.full_name}</h4>
                                        <p className="text-sm text-gray-500">Yaratuvchi</p>
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Progress:</span>
                                        <span>
                                            {selectedDuelStatus.creator.assignments.filter(a => a.is_completed).length}/
                                            {selectedDuelStatus.creator.assignments.length}
                                        </span>
                                    </div>
                                    <Progress 
                                        percent={calculateProgress(selectedDuelStatus.creator.assignments)} 
                                        size="small"
                                        strokeColor="#3D6560"
                                    />
                                </div>

                                <div className="space-y-2">
                                    {selectedDuelStatus.creator.assignments.map((assignment, idx) => (
                                        <div 
                                            key={assignment.assignment_id}
                                            className={`p-2 rounded text-sm ${
                                                assignment.is_completed 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span>{idx + 1}. {assignment.title}</span>
                                                {assignment.is_completed && <span>✓</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Opponent */}
                            {selectedDuelStatus.opponent ? (
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center mb-3">
                                        <img 
                                            src={selectedDuelStatus.opponent.profile_image || user} 
                                            alt="Opponent"
                                            className="w-10 h-10 rounded-full mr-3"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{selectedDuelStatus.opponent.full_name}</h4>
                                            <p className="text-sm text-gray-500">Raqib</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Progress:</span>
                                            <span>
                                                {selectedDuelStatus.opponent.assignments.filter(a => a.is_completed).length}/
                                                {selectedDuelStatus.opponent.assignments.length}
                                            </span>
                                        </div>
                                        <Progress 
                                            percent={calculateProgress(selectedDuelStatus.opponent.assignments)} 
                                            size="small"
                                            strokeColor="#d97706"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        {selectedDuelStatus.opponent.assignments.map((assignment, idx) => (
                                            <div 
                                                key={assignment.assignment_id}
                                                className={`p-2 rounded text-sm ${
                                                    assignment.is_completed 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-gray-100 text-gray-600'
                                                }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span>{idx + 1}. {assignment.title}</span>
                                                    {assignment.is_completed && <span>✓</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="border rounded-lg p-4 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <p>Raqib kutilmoqda...</p>
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto mt-2"></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Winner */}
                        {selectedDuelStatus.winner_id && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                                <h4 className="font-bold text-yellow-800 text-lg mb-2">🏆 G'olib</h4>
                                <p className="text-yellow-700">
                                    {selectedDuelStatus.winner_id === selectedDuelStatus.creator.id 
                                        ? selectedDuelStatus.creator.full_name 
                                        : selectedDuelStatus.opponent?.full_name}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </Modal>

            {/* Duel History Section */}
            <div className="relative z-10 my-20">
                <div className="sm:mx-16 mx-4 bg-[#D9D9D90D] rounded-3xl sm:p-12 p-4 text-white">
                    <p className="text-center sm:text-3xl text-xl mb-2 sm:mb-8">
                        History of duels
                    </p>
                    <hr className="h-px border-none bg-white/50 sm:mx-16 mx-4 my-2" />
                    <FightCard
                        leftPlayer={{
                            name: "Xamrayev Nurbek",
                            avatar: user,
                            health: 2,
                            damage: -110,
                        }}
                        rightPlayer={{
                            name: "Umarzoda Shohruh",
                            avatar: user,
                            health: 3,
                            damage: 110,
                        }}
                        time="00 : 12 : 58"
                    />
                </div>
            </div>

            {/* Loading Overlay */}
            {(mutationCreate.isPending || mutationJoin.isPending || mutationStatus.isPending) && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#3D6560]"></div>
                            <span className="text-gray-700">
                                {mutationCreate.isPending && "Duel yaratilmoqda..."}
                                {mutationJoin.isPending && "Duelga qo'shilmoqda..."}
                                {mutationStatus.isPending && "Status tekshirilmoqda..."}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Duel;