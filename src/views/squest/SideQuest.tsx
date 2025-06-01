import { Link } from "react-router";
import Squest from "../../../public/outline/squest.png";
import { mockTopshiriq } from "../../utils/mock";
const SideQuest = () => {
  if(Squest === undefined) {
return <div className="w-screen h-screen  bg-slate-900"/>
}
  return (
    <div>
         <section className="h-[calc(50vw-286px)] ">
              <div className="flex justify-end">
                
                <img
                  src={Squest}
                  loading="lazy"
                  alt=" side quest"
                  className="-z-10 absolute top-0 w-full h-screen "
                />
              </div>
                <div className="sm:mx-16 mx-4 text-white bg-[#D9D9D90D] sm:h-[calc(49vw-206px)] h-[calc(100vw+316px)] overflow-y-scroll scroll-none p-4 sm:p-16 rounded-xl sm:rounded-3xl">
              <div className="flex flex-wrap justify-between gap-4 ">{mockTopshiriq.map((item) => (<Link to={`/${item.id}`} key={item.id} className="sm:px-[54px] sm:py-[14px] px-7 py-4 bg-[#3D6560] rounded-md sm:rounded-lg cursor-pointer">
                     <p className="text-sm sm:text-xl text-center">{item.lesson}</p>   
                     <p className="text-[8px] sm:text-xs">{item.lessonBall}</p>
                  </Link>))}
                  </div> 
                </div>
            </section>
    </div>
  )
}

export default SideQuest