import { useQuery } from "@tanstack/react-query";
import Mquest from "../../../public/outline/mquest.png";
import AuthService from "../../config/service/auth.service";
import { Link } from "react-router";

const MainQuest = () => {
 

  const { data: topics } = useQuery({
    queryKey: ["topics"],
    queryFn: () => AuthService.getTopics(),
  });
  console.log(topics);


 if(MainQuest === undefined) {
return <div className="w-screen   h-screen  bg-slate-900"/>
}
  return (
    <div className="">
         <section className="sm:h-[calc(100vh-320px)]  text-white ">
              <div className="flex">
                <div className="sm:mx-16 mx-4 rounded-xl sm:rounded-3xl   w-full bg-[#D9D9D90D] overflow-y-scroll scroll-none  h-[calc(100vh-200px)] sm:h-[calc(100vh-200px)]">
                  {topics?.map((item:any) => (<div key={item.id} className="bg-[#C6DCE90D] mt-14 sm:mt-[100px] mx-2 sm:mx-14 rounded-xl sm:rounded-3xl sm:h-[520px] pb-4 relative">
                         <div className="absolute sm:-top-10 -top-6 right-2 sm:right-10 py-2 px-4  sm:py-[14px] sm:px-[75px] bg-[#3D6560] inline-block rounded-xl sm:rounded-3xl">
                          <p className="text-xs sm:text-xl text-center">{item.title}</p>
                          {/* <p className="text-xs sm:text-base">{item.lessonBall}</p> */}
                         </div>
                         <div className="sm:mx-16 mx-2 overflow-hidden">
                         <p className="text-center sm:pt-14 pt-6 text-base sm:text-2xl 2xl:text-3xl font-semibold">
                          {/* {item.title} */}
                          </p>
                         <hr className="border-none h-px bg-[#849BF5]  my-3"/>
                         <p className="text-center text-base sm:text-2xl 2xl:text-3xl font-light">{item.title}</p>
                           <div className="mt-10 sm:w-[600px] ">
                            {/* {item.text.map((text,index)=>(<div key={text} className="flex items-center gap-4 mt-2">
                              <div className="!w-4 !h-4  bg-[#4373CF]"/>
                              <p className="text-xs sm:text-base font-semibold line-clamp-1">{text} - <span className="font-light ">{item.describe[index]}</span></p>
                            </div>)
                            )} */}
                             {item?.plans.map((text:{title:string,id:number})=>(<Link to={`${text.id}`} key={text.id} className="flex items-center gap-4 mt-2">
                              <div className="!w-4 !h-4  bg-[#4373CF]"/>
                              <p className="text-xs sm:text-base font-semibold line-clamp-1">
                                 <span className="font-light ">{text.title}</span></p>
                            </Link>)

                            )}
                          
                           </div>
                           </div>
                  </div>))}
                  <div className="flex sm:mx-16 mx-2 my-6 sm:my-20 items-center justify-end ">
                  <button className="sm:px-[60px] sm:py-5 px-4 py-2 rounded-xl sm:rounded-3xl text-xs sm:text-2xl bg-[#3D6560]">Yakunlash</button></div>
                </div>
                <img
                  src={Mquest}
                  loading="lazy"
                  alt="main quest"
                  className="-z-10 absolute top-0 w-full h-screen "
                  />
              </div> 
            </section>
            <section className="bg-[#060D0F]  sm:h-[15vh]">
            </section>
    </div>
  )
}

export default MainQuest