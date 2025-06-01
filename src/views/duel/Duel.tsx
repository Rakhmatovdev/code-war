import DuelImg from "../../../public/outline/duel.png";
import user from "../../../public/user/user.png";
import badge from "../../../public/user/badge.png";
import eye from "../../../public/eye.svg";
import knife from "../../../public/knife.svg";
import FightCard from "./FightCard";
const Duel = () => {
  return (
    <div>
      <section className="h-[calc(50vw-375px)] ">
        <div className="flex justify-end">
          <img
            src={DuelImg}
            alt=" duel"
            loading="lazy"
            className="-z-10 absolute top-0 w-full h-screen"
          />
        </div>
        <div className="sm:mx-16 mx-4 bg-[#D9D9D90D] sm:h-[calc(100vh-340px)] h-[calc(100vh-150px)] rounded-t-3xl sm:px-[100px] px-4 pt-4 sm:pt-[38px] text-white">
          <table className="w-full">
            <thead>
              <tr className="text-start border-b">
                <th className="text-[9px] sm:text-base border-r ">№</th>
                <th className="text-[9px] sm:text-base">rasm</th>
                <th className="text-[9px] sm:text-base">ism</th>
                <th className="text-[9px] sm:text-base">reyting</th>
                <th className="text-[9px] sm:text-base">daraja</th>
                <th className="text-[9px] sm:text-base">kuzatish</th>
                <th className="text-[9px] sm:text-base">dulega chaqirish</th>
              </tr>
            </thead>
            <tbody className="text-center ">
              <tr>
                <td className="border-r text-xs sm:text-base">1</td>
                <td className="py-5 flex justify-center items-center">
                  <img
                    className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                    src={user}
                    alt="user image"
                    width={50}
                    height={50}
                  />
                </td>
                <td className="text-[8px] sm:text-base">Xamrayev Nurbek</td>
                <td className="text-xs sm:text-base">4500</td>
                <td className="">
                  <div className="flex justify-center items-center">
                    <img
                      src={badge}
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      alt="badge"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center items-center ">
                    <img
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      src={eye}
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      src={knife}
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r text-xs sm:text-base">2</td>
                <td className="py-5 flex justify-center items-center">
                  <img
                    src={user}
                    className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                    alt="user image"
                    width={50}
                    height={50}
                  />
                </td>
                <td className="text-[8px] sm:text-base">Xamrayev Nurbek</td>
                <td className="text-xs sm:text-base">4500</td>
                <td className="">
                  <div className="flex justify-center items-center">
                    <img
                      src={badge}
                      alt="badge"
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center items-center">
                    <img
                      src={eye}
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center items-center">
                    <img
                      src={knife}
                      className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className=" bg-[#070A07] mt-80  sm:mt-0 sm:pt-40 sm:h-[calc(100vh-340px)] h-[calc(100vh-150px)]">
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
