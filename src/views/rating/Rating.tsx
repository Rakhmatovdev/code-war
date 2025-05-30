import RatingImg from "../../../public/outline/rating.png";
import user from "../../../public/user/user.png"
import badge from "../../../public/user/badge.png"
import eye from "../../../public/eye.svg"
import knife from "../../../public/knife.svg"
const Rating = () => {
  return (
    <div>
         <section className="h-[calc(60vw-375px)] ">
              <div className="flex justify-end">
                <img
                  src={RatingImg}
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
                      <img className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" src={user} alt="user image" width={50} height={50} />
                    </td>
                    <td className="text-[8px] sm:text-base">Xamrayev Nurbek</td>
                    <td className="text-xs sm:text-base">4500</td>
                    <td className="">
                      <div className="flex justify-center items-center">

                      <img src={badge} className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" alt="badge" width={50} height={50}/>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center ">
                      <img className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"  src={eye} alt="user image" width={50} height={50} /></div>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center">
                      <img className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"  src={knife} alt="user image" width={50} height={50} /></div>
                    </td>
               
                  </tr>
                  <tr>
                    <td className="border-r text-xs sm:text-base">2</td>
                    <td className="py-5 flex justify-center items-center">
                      <img src={user} className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" alt="user image" width={50} height={50} />
                    </td>
                    <td className="text-[8px] sm:text-base">Xamrayev Nurbek</td>
                    <td className="text-xs sm:text-base">4500</td>
                    <td className="">
                      <div className="flex justify-center items-center">

                      <img src={badge} alt="badge" className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" width={50} height={50}/>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center">
                      <img  src={eye} className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" alt="user image" width={50} height={50} /></div>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center">
                      <img  src={knife} className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" alt="user image" width={50} height={50} /></div>
                    </td>
               
                  </tr>
                 
                </tbody>
              </table>
              </div>
            </section>
               
    </div>
  )
}

export default Rating