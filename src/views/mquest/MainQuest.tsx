import { useQuery } from "@tanstack/react-query";
import Mquest from "../../../public/outline/mquest.png";
import AuthService from "../../config/service/auth.service";

const MainQuest = () => {
 

  const { data: topics } = useQuery({
    queryKey: ["topics"],
    queryFn: () => AuthService.getTopics(),
  });
  console.log(topics);


 if(MainQuest === undefined) {
return <div className="w-screen h-screen bg-slate-900"/>
}
  return (
    <div className="">
         <section className="sm:h-[calc(100vh-320px)]  text-white ">
              <div className="flex">
                <img
                  src={Mquest}
                  loading="lazy"
                  alt="main quest"
                  className="-z-10 absolute top-0 w-full h-screen "
                  />
              </div> 
            </section>
            <section className="bg-[#060D0F]   sm:h-[20vh]">
            </section>
    </div>
  )
}

export default MainQuest