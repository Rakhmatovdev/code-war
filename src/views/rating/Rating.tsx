import RatingImg from "../../../public/outline/rating.png";
import user from "../../../public/user/user.png"
import badge from "../../../public/user/badge.png"
import eye from "../../../public/eye.svg"
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import { Link } from "react-router";
const Rating = () => {
  const { data: rating } = useQuery({
    queryKey: ["ratings"],
    queryFn: () => AuthService.getRating(),
  });
  return (
    <div>
         <section className="relative ">
               <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={RatingImg}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
              <div className="sm:mx-16 relative my-10 z-20 mx-4 bg-[#D9D9D90D]  rounded-3xl sm:px-[100px] px-4 pt-4 sm:pt-[38px] text-white">
              <table className="w-full">
                <thead>
                  <tr className="text-start border-b">
                    <th className="text-[9px] sm:text-base border-r ">№</th>
                    <th className="text-[9px] sm:text-base">rasm</th>
                    <th className="text-[9px] sm:text-base">ism</th>
                    <th className="text-[9px] sm:text-base">reyting</th>
                    <th className="text-[9px] sm:text-base">daraja</th>
                    <th className="text-[9px] sm:text-base">kuzatish</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {rating?.map((rate:any)=><tr>
                    <td className="border-r text-xs sm:text-base">{rate?.id}</td>
                    <td className="py-5 flex justify-center items-center">
                      <img className="rounded-full w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]" src={ user} alt="user image" width={50} height={50} />
                    </td>
                    <td className="text-[8px] sm:text-base">{rate?.full_name}</td>
                    <td className="text-xs sm:text-base">{rate?.rating}</td>
                    <td className="">
                      <div className="flex justify-center items-center">

                      <img src={rate?.level_image_url || badge} className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl" alt="badge" width={50} height={50}/>
                      </div>
                    </td>
                    <td className="">
                      <Link to={'/invertar'} className="flex justify-center items-center cursor-pointer hover:scale-95 transition-all duration-300">
                      <img className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px] rounded-xl"  src={eye} alt="user image" width={50} height={50} /></Link>
                    </td>
                  </tr>)}
                
                </tbody>
              </table>
              </div>
            </section>
             
               
    </div>
  )
}

export default Rating