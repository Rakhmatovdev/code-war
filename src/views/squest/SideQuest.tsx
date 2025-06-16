import { Link } from "react-router";
import Squest from "../../../public/outline/squest.png";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
const SideQuest = () => {
  const { data: Assigment } = useQuery({
    queryKey: ["Assigment"],
    queryFn: () => AuthService.getAssignments(),
  });
  console.log(Assigment);

  if (Squest === undefined) {
    return <div className="w-screen h-screen  bg-slate-900" />;
  }
  return (
    <div>
      <section className="relative">
        <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={Squest}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>

        <div className="sm:mx-16 mx-4 z-20 text-white bg-[#D9D9D90D] my-10 overflow-y-scroll scroll-none p-4 sm:p-16 rounded-xl sm:rounded-3xl">
          <div className="flex flex-wrap justify-between flex-col sm:flex-row gap-4">
            {Assigment?.map((item) => (<>
              <Link
                to={`${item.id}`}
                key={item.id}
                className="sm:px-[54px] sm:py-[14px] px-7 py-4 flex-1  bg-[#3D6560] rounded-md sm:rounded-lg cursor-pointer"
              >
                <p className="text-base sm:text-xl text-center">{item.plan_title}</p>
                <p className="text-xs text-center w-[200px] sm:w-[160px] mx-auto sm:text-xs">{item.title}</p>
              </Link>
           </> ))}
          </div>
        </div>
      </section>
           <section className="bg-[#060D0F]  sm:h-[20vh]">
            </section>
    </div>
  );
};

export default SideQuest;
