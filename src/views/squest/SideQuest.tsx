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
      <section>
        <img
          src={Squest}
          loading="lazy"
          alt=" side quest"
          className="-z-10 absolute top-0 w-full h-screen "
        />

        <div className="sm:mx-16 mx-4 text-white bg-[#D9D9D90D] sm:h-[calc(39vw-106px)] h-[calc(100vw+316px)] overflow-y-scroll scroll-none p-4 sm:p-16 rounded-xl sm:rounded-3xl">
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
        <div data-pym-src="https://www.jdoodle.com/embed/v0/2IhG?stdin=1&arg=0"></div>
      </section>
    </div>
  );
};

export default SideQuest;
