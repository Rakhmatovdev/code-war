import Mquest from "../../../public/outline/mquest.png";
import { mockQuestions } from "../../utils/mock";
const MainQuest = () => {
  return (
    <div className="">
         <section className="sm:h-[calc(100vh-300px)]  text-white ">
              <div className="flex">
                <div className="sm:mx-16 mx-4 rounded-xl sm:rounded-3xl   w-full bg-[#D9D9D90D] overflow-y-scroll scroll-none  h-[calc(100vh-200px)] sm:h-[calc(100vh-200px)]">
                  {mockQuestions.map((item) => (<div key={item.id} className="bg-[#C6DCE90D] mt-14 sm:mt-[100px] mx-2 sm:mx-14 rounded-xl sm:rounded-3xl sm:h-[520px] pb-4 relative">
                         <div className="absolute sm:-top-10 -top-6 right-2 sm:right-10 py-2 px-4  sm:py-[14px] sm:px-[75px] bg-[#3D6560] inline-block rounded-xl sm:rounded-3xl">
                          <p className="text-xs sm:text-xl text-center">{item.lesson}</p>
                          <p className="text-xs sm:text-base">{item.lessonBall}</p>
                         </div>
                         <div className="sm:mx-16 mx-2 overflow-hidden">
                         <p className="text-center sm:pt-14 pt-6 text-base sm:text-2xl 2xl:text-3xl font-semibold">{item.title}</p>
                         <hr className="border-none h-px bg-[#849BF5]  my-3"/>
                         <p className="text-center text-base sm:text-2xl 2xl:text-3xl font-light">{item.question}</p>
                           <div className="mt-10 sm:w-[600px] ">
                            {item.text.map((text,index)=>(<div key={text} className="flex items-center gap-4 mt-2">
                              <div className="!w-4 !h-4  bg-[#4373CF]"/>
                              <p className="text-xs sm:text-base font-semibold line-clamp-1">{text} - <span className="font-light ">{item.describe[index]}</span></p>
                            </div>)

                            )}
                            <div className="">

                            </div>
                           </div></div>
                  </div>))}
                  <div className="flex mx-16 my-20 items-center justify-end ">
                  <button className="px-[60px] py-5  rounded-3xl text-xs sm:text-2xl bg-[#3D6560]">Yakunlash</button></div>
                </div>
                <img
                  src={Mquest}
                  loading="lazy"
                  alt="main quest"
                  className="-z-10 absolute top-0 w-full h-screen "
                  />
              </div> 
            </section>
            <section className="bg-[#060D0F]  sm:h-[50vh]">
            </section>
    </div>
  )
}

export default MainQuest