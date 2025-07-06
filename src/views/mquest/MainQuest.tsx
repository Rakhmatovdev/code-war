import { useQuery } from "@tanstack/react-query";
import Mquest from "../../components/icons/outline/mquest.png";
import AuthService from "../../config/service/auth.service";
import Sidebar from "../../components/LayoutStructure/slayout/Sidebar.tsx";

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

         <section className="relative  text-white  ">
             <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={Mquest}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
            <div className={'mx-4 sm:mx-16 h-screen mb-10'}>
                <Sidebar/>
            </div>
            </section>

            
    </div>
  )
}

export default MainQuest