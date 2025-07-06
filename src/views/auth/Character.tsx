import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import StartTestImg from "../../components/icons/authPic.png";
// import { useNavigate } from "react-router";
interface Props {
  setpersonaj: (value:string) => void;
  modal: (value:boolean) => void;
}

const Character = ({setpersonaj,modal}:Props) => {
  const { handleSubmit, watch, setValue,register } = useForm();
//   const navigate= useNavigate();
  useFormPersist("start-test-form", {
    watch,
    setValue,
    storage: window.localStorage,
  });




  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => AuthService.getCharacters(),
    
  });

  const onSubmit = (data:any) => {
setpersonaj(data?.selectedCharacter);
modal(false)

}

  if (!data) {
    return <div className="text-white text-center mt-20">Yuklanmoqda...</div>;
  }

  if (data.length === 0) {
    return <div className="text-white text-center mt-20">Personajlar topilmadi</div>;
  }



  return (
    <div className="relative min-h-screen">
      {/* Background image container */}
      <div className="fixed inset-0 w-full h-full">
        <img
          src={StartTestImg}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="text-white">
            <div className="sm:mx-16 mx-4">
              <p className="text-center sm:mt-40 mt-20 text-xl sm:text-4xl">Personajingizni tanlang</p>
              <div className="flex justify-center sm:justify-between sm:items-center flex-wrap mt-10 gap-4 sm:mx-16 mx-4">
                {data?.map((user) => (
                  <label
                    key={user.id}
                    className={`cursor-pointer rounded-xl p-1 transition-all ${
                      watch("selectedCharacter") == user.id
                        ? "ring-4 ring-blue-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      value={user.id}
                      {...register("selectedCharacter")}
                      className="hidden"
                    />
                    <img
                      src={user.image}
                      alt={user.name}
                      width={200}
                      height={300}
                      className="rounded-lg w-[120px] h-[160px] sm:w-[200px] sm:h-[300px]"
                    />
                  </label>
                ))}
              </div>
            </div>
          </section>
           <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mx-auto block transition-all"
              >
                Yakunlash
              </button>
         
        </form>
      </div>
    </div>
  );
};

export default Character;