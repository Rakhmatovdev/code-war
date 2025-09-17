import InvetarImg from "../../components/icons/outline/invertar.png";
import warrior from "../../../public/user/warrior.png";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../service/auth.service";
import { useParams } from "react-router";



const Invertar = () => {
  const { id } = useParams();

  const { data: invertar, isLoading } = useQuery({
    queryKey: ["invertar", id],
    queryFn: () => AuthService.getRatingById(id!),
  });

  if (isLoading) {
    return <div className="w-screen h-screen bg-slate-900" />;
  }

 
  return (
    <div>
      <section className="relative font-roboto ">
        <div className="fixed inset-0 -z-10 w-full h-full">
          <img
            src={InvetarImg}
            loading="lazy"
            alt="start test background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex z-20 sm:p-12  mx-4  sm:mx-16">
          <div className="bg-[#D9D9D90D] mx-auto flex p-3 sm:p-12 sm:gap-14 rounded-xl sm:rounded-3xl">
            {/* Chap tomonda (shield + armor) */}
            <div className="h-full flex flex-col justify-between">
              {invertar?.gears
                ?.filter(
                  (item: any) =>
                    item.gear.type === "shield" || item.gear.type === "armor" || item.gear.type === "helmet"
                )
                .map((item: any) => (
                  <div
                    key={item.id}
                    className="relative group flex justify-center"
                  >
                    <img
                      src={item.gear.image}
                      alt={item.gear.name}
                      width={125}
                      height={125}  
                    />
                    {/* Hoverda description */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded-lg text-center max-w-[140px]">
                      {item.gear.name}
                      <br />
                      <span className="text-gray-300">
                        ({item.gear.quality})
                      </span>
                    </div>
                  </div>
                ))}
            </div>

            {/* O‘rtada Warrior */}
            <div className="">
              <img src={invertar?.character?.image ||warrior} alt="warrior" width={354} height={531} className="rounded-xl object-cover" />
            </div>

            {/* O‘ng tomonda (sword + helmet + boots + ring) */}
            <div className="h-full flex flex-col justify-between">
              {invertar?.gears
                ?.filter(
                  (item: any) =>
                    item.gear.type === "sword" ||
                    item.gear.type === "boots" ||
                    item.gear.type === "ring"
                )
                .map((item: any) => (
                  <div
                    key={item.id}
                    className="relative group flex justify-center"
                  >
                    <img
                      src={item.gear.image}
                      alt={item.gear.name}
                      width={125}
                      height={125}
                    />
                    {/* Hoverda description */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded-lg text-center max-w-[140px]">
                      {item.gear.name}
                      <br />
                      <span className="text-gray-300">
                        ({item.gear.quality})
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invertar;
