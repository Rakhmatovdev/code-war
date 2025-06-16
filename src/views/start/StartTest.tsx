import { useForm, Controller } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useMutation, useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import StartTestImg from "../../../public/authPic.png";
import { notification } from "antd";
import { useNavigate } from "react-router";

const StartTest = () => {
  const { handleSubmit, watch, setValue, control } = useForm();
  const navigate= useNavigate();
  useFormPersist("start-test-form", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const { data: initial } = useQuery({
    queryKey: ["initial-test"],
    queryFn: () => AuthService.getInitialTests(),
  });

  console.log("Initial test data:", initial);
  

  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => AuthService.getCharacters(),
  });


  const { mutate} = useMutation({
    mutationKey: ["submit-initial-test"],
    mutationFn: (data: any) => AuthService.submitInitialTest(data),
    onSuccess: (data) => {
      console.log("Profil yangilandi:", data);
    },
  });

  const onSubmit = (data:any) => {
   
    const answers:any[]= [];
    

 Object.keys(data).forEach(key => {
    if (key.startsWith('question-') && data[key]) {
      answers.push({
        answer_id: parseInt(data[key]) 
      });
    }
      const isValid = answers.length > 0 && answers.every(a => a.answer_id);

  if (!isValid) {
    notification.error({message:"Hamma savollarga javob berilmagan — yuborilmaydi"});
    return;
  }

  });
  const submitData = {
    answers: answers
  };
  console.log("Yuborilgan ma'lumotlar:", submitData);
mutate(submitData)
navigate("/");
  };

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
              {/* <p className="text-center sm:mt-40 mt-20 text-xl sm:text-4xl">Personajingizni tanlang</p> */}
              {/* <div className="flex justify-between sm:items-center flex-wrap mt-10 gap-4 sm:mx-16 mx-4">
                {data?.map((user) => (
                  <label
                    key={user.name}
                    className={`cursor-pointer rounded-xl p-1 transition-all ${
                      watch("selectedCharacter") === user.name
                        ? "ring-4 ring-blue-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <input
                      type="radio"
                      value={user.name}
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
              </div> */}
            </div>
          </section>
          
          <section className="text-white sm:mt-40 mt-20  bg-opacity-80">
            {initial?.map((item:any) => (
              <div key={item.id} className="bg-[#C6DCE90D] backdrop-blur-sm rounded-3xl mt-28 pt-[54px] mx-4 sm:mx-16 overflow-y-scroll scroll-smooth">
                {/* <p className="text-center text-xl sm:text-4xl">Kod sehrgarining birinchi qadamlari</p> */}
                {/* <hr className="h-px border-none mt-3 bg-[#849BF5] mx-4 sm:mx-16" /> */}
                <p className="text-center text-xl sm:text-4xl font-light mt-2 mb-8">{item?.question}</p>
                
                {item?.answers?.map((answer: any) => (
                  <Controller
                    key={answer.id}
                    name={`question-${item.id}`}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <label
                        htmlFor={`answer-${answer.id}`}
                        className={`block border rounded-lg p-4 mb-4 cursor-pointer transition-colors mx-4 sm:mx-16 backdrop-blur-sm ${
                          field.value === answer.id
                            ? "border-blue-500 bg-blue-500 bg-opacity-20"
                            : "border-gray-300 hover:border-blue-500 bg-white bg-opacity-10"
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id={`answer-${answer.id}`}
                            value={answer.id}
                            checked={field.value === answer.id}
                            onChange={() => field.onChange(answer.id)}
                            className="hidden"
                          />
                          <span className="text-lg sm:text-2xl text-white">{answer.answer_text}</span>
                        </div>
                      </label>
                    )}
                  />
                ))}
              </div>
            ))}
            
            <div className="flex mx-4 sm:mx-16 sm:py-20 py-10 items-center justify-end">
              <button 
                type="submit" 
                className="px-[60px] py-5 rounded-3xl text-xs sm:text-2xl bg-[#3D6560] hover:bg-[#2D5550] transition-colors backdrop-blur-sm"
              >
                Yakunlash
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default StartTest;