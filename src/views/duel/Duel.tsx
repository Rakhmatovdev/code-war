import DuelImg from "../../../public/outline/duel.png";
import user from "../../../public/user/user.png";
import badge from "../../../public/user/badge.png";
import eye from "../../../public/eye.svg";
import knife from "../../../public/knife.svg";
import FightCard from "./FightCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import { Link } from "react-router";
const Duel = () => {
   const { data: duel } = useQuery({
    queryKey: ["duel"],
    queryFn: () => AuthService.getDuels(),
  });

  const { id } = duel?.duel || {};

   const { data: duelOne } = useQuery({
    queryKey: ["duel-one"],
    queryFn: () => AuthService.getAssignmentsByDuelId(id),
    enabled: !!id,
  });
  console.log(duelOne);
  

   const { data: rating } = useQuery({
      queryKey: ["ratings"],
      queryFn: () => AuthService.getRating(),
    });

  console.log(duel);
  
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

const mutationSubmit = useMutation({
  mutationFn: ({ id, payload }: { id: number; payload: any }) =>
    AuthService.submitDuel(id, payload),
  onSuccess: () => {
    console.log("Submitted duel");
  }
});

console.log("MC",mutationCreate.data);
console.log("MJ",mutationJoin.data);
console.log("MS",mutationSubmit.data);



  return (
    <div>
      <section className="relative ">
       <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={DuelImg}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="sm:mx-16 mx-4 relative z-20 bg-[#D9D9D90D]  rounded-3xl sm:px-[100px] px-4 pt-4 sm:pt-[38px] text-white overflow-y-scroll scroll-none">
          <table className="w-full">
            <thead>
              <tr className="text-start border-b">
                <th className="text-[9px] sm:text-base border-r ">№</th>
                <th className="text-[9px] sm:text-base">rasm</th>
                <th className="text-[9px] sm:text-base">ism</th>
                <th className="text-[9px] sm:text-base">reyting</th>
                <th className="text-[9px] sm:text-base">daraja</th>
                <th className="text-[9px] sm:text-base">kuzatish</th>
                <th className="text-[9px] sm:text-base">duelga chaqirish</th>
                <th className="text-[9px] sm:text-base">duelga qoshilish</th>
              </tr>
            </thead>
            <tbody className="text-center ">
            {  rating?.map((rate:any)=><tr>
                <td className="border-r text-xs sm:text-base">{rate?.id}</td>
                <td className="py-5 flex justify-center items-center">
                  <img
                    className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                    src={user}
                    alt="user image"
                    width={50}
                    height={50}
                  />
                </td>
                <td className="text-[8px] sm:text-base">{rate?.full_name}</td>
                <td className="text-xs sm:text-base">{rate?.rating}</td>
                <td className="">
                  <div className="flex justify-center items-center">
                    <img
                      src={rate?.level_image_url || badge}
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"
                      alt="badge"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td className="">
                  <Link to={'/invertar'} className="flex justify-center items-center " >
                    <img
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"
                      src={eye}
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  </Link>
                </td>
                <td className="">
                  <div className="flex justify-center items-center cursor-pointer hover:scale-95 transition-all duration-300"
                  onClick={() => mutationCreate.mutate(rate?.id)}
                  >
                    <img
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      src={knife}
                      alt="user image create"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center items-center cursor-pointer hover:scale-95 transition-all duration-300"
                  onClick={() => mutationJoin.mutate(rate?.id)}
                  >
                    <img
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      src={knife}
                      alt="user image join"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
              </tr>)}
             
            </tbody>
          </table>
        </div>
      </section>
      
      <div className="my-20 relative z-20  ">
        <div className=" sm:mx-16 mx-4 bg-[#D9D9D90D] rounded-3xl sm:p-12 text-white">
          <p className="text-center sm:text-3xl mb-2 sm:mb-8 ">
            History of duels
          </p>
          <hr className="h-px border-none bg-[#FFFFFF] sm:mx-16 mx-4 my-2" />
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
