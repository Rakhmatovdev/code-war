// import DuelImg from "../../components/icons/outline/duel.png";
// import user from "../../components/icons/user.png";
// import badge from "../../components/icons/badge.png";
// import knife from "../../components/icons/knife.svg";
// import FightCard from "./FightCard";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import AuthService from "../../service/auth.service";
// import eye from "../../components/icons/outline/eye.svg";
//
// import { Dropdown, MenuProps } from "antd";
// import { format, parseISO } from "date-fns";
//
// const Duel = () => {
//    const { data: duel } = useQuery({
//     queryKey: ["duel"],
//     queryFn: () => AuthService.getDuels(),
//   });
//
//   const { id } = duel?.duel || {};
//
//    const { data: duelOne } = useQuery({
//     queryKey: ["duel-one"],
//     queryFn: () => AuthService.getAssignmentsByDuelId(id),
//     enabled: !!id,
//   });
//   console.log("duel one",duelOne);
//
//
//    const { data: rating } = useQuery({
//       queryKey: ["ratings"],
//       queryFn: () => AuthService.getRating(),
//     });
//
//   console.log("duel",duel,rating);
//
// // Debug uchun ma'lumotlarni tekshiramiz
// console.log("Duel ma'lumotlari:", duel);
// console.log("Rating ma'lumotlari:", rating);
// if (duel && duel.length > 0) {
//   console.log("Birinchi duel obyekti:", duel[0]);
//   console.log("Duel obyektining kalitlari:", Object.keys(duel[0]));
// }
//
// const mutationCreate = useMutation({
//   mutationFn: () => AuthService.createDuel(),
//   onSuccess: (res) => {
//     console.log("Created duel:", res.data);
//   }
// });
//
// const mutationJoin = useMutation({
//   mutationFn: (id: number) => AuthService.joinDuel(id),
//   onSuccess: () => {
//     console.log("Joined the duel");
//   }
// });
//
// const mutationStatus = useMutation({
//   mutationFn: (id: number) => AuthService.getStatus(id),
//   onSuccess: () => {
//     console.log("Joined the duel");
//   }
// });
//
// const mutationSubmit = useMutation({
//   mutationFn: ({ id, payload }: { id: number; payload: any }) =>
//     AuthService.submitDuel(id, payload),
//   onSuccess: () => {
//     console.log("Submitted duel");
//   }
// });
//
// console.log("MC",mutationCreate.data);
// console.log("MJ",mutationJoin.data);
// console.log("MS",mutationSubmit.data);
// console.log("MSS",mutationStatus.data);
//
//
// const getUserDuels = (userId: number) => {
//   return duel?.filter((d: any) => d.creator === userId) || [];
// };
//
// const createItemsForUser = (userId: number): MenuProps['items'] => {
//   const userDuels = getUserDuels(userId);
//
//   return  userDuels.map((d: any, idx: number) => {
//     const date = d.created_at
//       ? format(parseISO(d.created_at), 'dd-MM-yyyy HH:mm:ss')
//       : 'N/A';
//
//     return {
//       key: d.id.toString(),
//       label: (
//         <div style={{ display: 'flex', justifyContent: 'space-between' }} className="text-[9px] sm:text-base " onClick={() => mutationStatus.mutate(d.id)}>
//           <p>
//             <span className="font-semibold">{idx + 1}</span>. {date}
//             <span className="ml-2  text-gray-500">
//               (ID: {d.id})
//             </span>
//           </p>
//         </div>
//       ),
//     };
//   });
// };
//
// const checkDuelCreator = (userId: number) => {
//   return duel?.some((item: any) => item?.creator === userId);
// };
//
//
//   return (
//     <div>
//       <section className="relative ">
//        <div className="fixed inset-0 -z-10 w-full h-full">
//         <img
//           src={DuelImg}
//           loading="lazy"
//           alt="start test background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//         <div className="sm:mx-16 mx-4 relative z-20 bg-[#D9D9D90D]  rounded-3xl sm:px-[100px] px-4 pt-4 sm:pt-[38px] text-white overflow-y-scroll scroll-none">
//           <table className="w-full">
//             <thead>
//               <tr className="text-start border-b">
//                 <th className="text-[9px] sm:text-base border-r ">№</th>
//                 <th className="text-[9px] sm:text-base">rasm</th>
//                 <th className="text-[9px] sm:text-base">ism</th>
//                 <th className="text-[9px] sm:text-base">reyting</th>
//                 <th className="text-[9px] sm:text-base">daraja</th>
//                 <th className="text-[9px] sm:text-base">kuzatish</th>
//                 <th className="text-[9px] sm:text-base">duelga chaqirish</th>
//                 <th className="text-[9px] sm:text-base">duelga qoshilish</th>
//               </tr>
//             </thead>
//             <tbody className="text-center ">
//             {rating?.map((rate: any) => (
//               <tr key={rate?.id}>
//                 <td className="border-r text-xs sm:text-base">{rate?.id}</td>
//                 <td className="py-5 flex justify-center items-center">
//                   <img
//                     className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
//                     src={user}
//                     alt="user image"
//                     width={50}
//                     height={50}
//                   />
//                 </td>
//                 <td className="text-[8px] sm:text-base">{rate?.full_name}</td>
//                 <td className="text-xs sm:text-base">{rate?.rating}</td>
//                 <td className="">
//                   <div className="flex justify-center items-center">
//                     <img
//                       src={rate?.level_image_url || badge}
//                       className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"
//                       alt="badge"
//                       width={50}
//                       height={50}
//                     />
//                   </div>
//                 </td>
//                 <td className="">
//                   <Dropdown
//                     menu={{ items: createItemsForUser(rate?.id) }}
//                     disabled={!checkDuelCreator(rate?.id)}
//                     trigger={['click']}
//                     dropdownRender={(menu) => (
//                         <div style={{ maxHeight: 200, overflowY: 'auto' }}>
//                             {menu}
//                         </div>
//                     )}
//                   >
//                     <div className="flex justify-center items-center cursor-pointer">
//                       <img
//                         className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"
//                         src={eye}
//                         alt="user image"
//                         width={50}
//                         height={50}
//                       />
//                     </div>
//                   </Dropdown>
//                 </td>
//                 <td className="">
//                   <div
//                     className="flex justify-center items-center cursor-pointer hover:scale-95 transition-all duration-300"
//                     onClick={() => mutationCreate.mutate(rate?.id)}
//                   >
//                     <img
//                       className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
//                       src={knife}
//                       alt="user image create"
//                       width={50}
//                       height={50}
//                     />
//                   </div>
//                 </td>
//                 <td className="">
//                   <div
//                     className="flex justify-center items-center cursor-pointer hover:scale-95 transition-all duration-300"
//                     onClick={() => mutationJoin.mutate(rate?.id)}
//                   >
//                     <img
//                       className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
//                       src={knife}
//                       alt="user image join"
//                       width={50}
//                       height={50}
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//
//       <div className="my-20 relative z-20  ">
//         <div className=" sm:mx-16 mx-4 bg-[#D9D9D90D] rounded-3xl sm:p-12 text-white">
//           <p className="text-center sm:text-3xl mb-2 sm:mb-8 ">
//             History of duels
//           </p>
//           <hr className="h-px border-none bg-[#FFFFFF] sm:mx-16 mx-4 my-2" />
//           <FightCard
//             leftPlayer={{
//               name: "Xamrayev Nurbek",
//               avatar: user,
//               health: 2,
//               damage: -110,
//             }}
//             rightPlayer={{
//               name: "Umarzoda Shohruh",
//               avatar: user,
//               health: 3,
//               damage: 110,
//             }}
//             time="00 : 12 : 58"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Duel;
import DuelImg from "../../components/icons/outline/duel.png";
import user from "../../components/icons/user.png";
import badge from "../../components/icons/badge.png";
import knife from "../../components/icons/knife.svg";
import FightCard from "./FightCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import AuthService from "../../service/auth.service";
import eye from "../../components/icons/outline/eye.svg";

import { Dropdown, MenuProps } from "antd";
import { format, parseISO } from "date-fns";

const Duel = () => {
    const { data: duel } = useQuery({
        queryKey: ["duel"],
        queryFn: () => AuthService.getDuels(),
    });

    // const { id } = duel?.duel || {};

    // const { data: duelOne } = useQuery({
    //     queryKey: ["duel-one"],
    //     queryFn: () => AuthService.getAssignmentsByDuelId(id),
    //     enabled: !!id,
    // });

    const { data: rating } = useQuery({
        queryKey: ["ratings"],
        queryFn: () => AuthService.getRating(),
    });

    const mutationCreate = useMutation({
        mutationFn: () => AuthService.createDuel(),
        onSuccess: (res) => {
            console.log("Created duel:", res.data);
        }
    });

    const mutationJoin = useMutation({
        mutationFn: (id: number) => AuthService.joinDuel(id),
        onSuccess: () => {
            console.log("Joined the duel");
        }
    });

    const mutationStatus = useMutation({
        mutationFn: (id: number) => AuthService.getStatus(id),
        onSuccess: () => {
            console.log("Joined the duel");
        }
    });

    // const mutationSubmit = useMutation({
    //     mutationFn: ({ id, payload }: { id: number; payload: any }) =>
    //         AuthService.submitDuel(id, payload),
    //     onSuccess: () => {
    //         console.log("Submitted duel");
    //     }
    // });

    const getUserDuels = (userId: number) => {
        return duel?.filter((d: any) => d.creator === userId) || [];
    };

    const createItemsForUser = (userId: number): MenuProps['items'] => {
        const userDuels = getUserDuels(userId);

        return userDuels.map((d: any, idx: number) => {
            const date = d.created_at
                ? format(parseISO(d.created_at), 'dd-MM-yyyy HH:mm:ss')
                : 'N/A';

            return {
                key: d.id.toString(),
                label: (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}
                         className="text-[9px] sm:text-base"
                         onClick={() => mutationStatus.mutate(d.id)}>
                        <p>
                            <span className="font-semibold">{idx + 1}</span>. {date}
                            <span className="ml-2 text-gray-500">
                (ID: {d.id})
              </span>
                        </p>
                    </div>
                ),
            };
        });
    };

    const checkDuelCreator = (userId: number) => {
        return duel?.some((item: any) => item?.creator === userId);
    };

    return (
        <div className="relative min-h-screen">
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
                    <table className="w-full">
                        <thead>
                        <tr className="text-start border-b">
                            <th className="text-[9px] sm:text-base border-r">№</th>
                            <th className="text-[9px] sm:text-base">rasm</th>
                            <th className="text-[9px] sm:text-base">ism</th>
                            <th className="text-[9px] sm:text-base">reyting</th>
                            <th className="text-[9px] sm:text-base">daraja</th>
                            <th className="text-[9px] sm:text-base">kuzatish</th>
                            <th className="text-[9px] sm:text-base">duelga chaqirish</th>
                            <th className="text-[9px] sm:text-base">duelga qoshilish</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        {rating?.map((rate: any) => (
                            <tr key={rate?.id} className="hover:bg-white/10 transition-colors">
                                <td className="border-r text-xs sm:text-base py-2">{rate?.id}</td>
                                <td className="py-2">
                                    <div className="flex justify-center">
                                        <img
                                            className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] object-cover"
                                            src={user}
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
                                                className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"
                                                src={eye}
                                                alt="View duels"
                                            />
                                        </div>
                                    </Dropdown>
                                </td>
                                <td className="py-2">
                                    <div
                                        className="flex justify-center cursor-pointer hover:scale-95 transition-all duration-300"
                                        onClick={() => mutationCreate.mutate(rate?.id)}
                                    >
                                        <img
                                            className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                                            src={knife}
                                            alt="Challenge to duel"
                                        />
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div
                                        className="flex justify-center cursor-pointer hover:scale-95 transition-all duration-300"
                                        onClick={() => mutationJoin.mutate(rate?.id)}
                                    >
                                        <img
                                            className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                                            src={knife}
                                            alt="Join duel"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

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
        </div>
    );
};

export default Duel;