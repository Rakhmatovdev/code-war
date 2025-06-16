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
         <section className="relative  text-white h-[80vh] ">
             <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={Mquest}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
            </section>
            
    </div>
  )
}

export default MainQuest