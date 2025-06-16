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
    return <div className="w-screen h-screen  bg-slate-900 " />;
  }
  return (
    <div>
      <section className="relative h-[80vh]">
        <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={Squest}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
      </section>
    </div>
  );
};

export default SideQuest;
