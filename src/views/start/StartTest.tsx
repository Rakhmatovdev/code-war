import { useForm, Controller } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import StartTestImg from "../../../public/authPic.png";

const StartTest = () => {
  const { register, handleSubmit, watch, setValue, control } = useForm();

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

  const onSubmit = (data:any) => {
    console.log("Yuborilgan ma'lumotlar:", data);
    // Ma'lumotlarni serverga yuborish yoki boshqa amallarni bajarish
  };

  if (!data) {
    return <div className="text-white text-center mt-20">Yuklanmoqda...</div>;
  }

  if (data.length === 0) {
    return <div className="text-white text-center mt-20">Personajlar topilmadi</div>;
  }

  return (
    <div>
      <img
        src={StartTestImg}
        loading="lazy"
        alt="start test"
        className="z-[-1] absolute top-0 w-full h-screen"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="text-white -z-20">
          <div className="sm:mx-16 mx-4">
            <p className="text-center sm:mt-40 mt-20 text-xl sm:text-4xl">Personajingizni tanlang</p>
            <div className="flex justify-between sm:items-center flex-wrap mt-10 gap-4 sm:mx-16 mx-4">
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
            </div>
          </div>
        </section>
        <section className="text-white sm:mt-40 bg-[#080805]">
          {initial?.map((item:any) => (
            <div key={item.id} className="bg-[#C6DCE90D] rounded-3xl mt-28 pt-[54px] mx-4 sm:mx-16 overflow-y-scroll scroll-smooth">
              <p className="text-center text-xl sm:text-4xl">Kod sehrgarining birinchi qadamlari</p>
              <hr className="h-px border-none mt-3 bg-[#849BF5] mx-4 sm:mx-16" />
              <p className="text-center text-xl sm:text-4xl font-light mt-2">{item?.question}</p>
{item?.answers?.map((answer: any) => (
  <Controller
    key={answer.id}
    name={`question-${item.id}`}
    control={control}
    defaultValue=""
    render={({ field }) => (
      <label
        htmlFor={`answer-${answer.id}`}
        className={`block border rounded-lg p-4 mb-4 cursor-pointer transition-colors mx-4 sm:mx-16 ${
          field.value === answer.id
            ? "border-blue-500"
            : "border-gray-300 hover:border-blue-500"
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
          <span className="text-lg sm:text-2xl">{answer.answer_text}</span>
        </div>
      </label>
    )}
  />
))}


            </div>
          ))}
          <div className="flex mx-4 sm:mx-16 sm:py-20 py-10 items-center justify-end">
            <button type="submit" className="px-[60px] py-5 rounded-3xl text-xs sm:text-2xl bg-[#3D6560]">
              Yakunlash
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default StartTest;
