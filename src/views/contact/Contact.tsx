import { useMutation } from "@tanstack/react-query";
import ContactImg from "../../../public/outline/contact.png";
import AuthService from "../../config/service/auth.service";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  full_name: string;
  email: string;
  phone_number: string;
  message: string;
  
};

const Contact = () => {
    const {
    register,
    handleSubmit,
    reset,
      formState: { errors },
  } = useForm<Inputs>()

  const { mutate, isPending:isLoading} = useMutation({
    mutationKey: ["create-comment"],
    mutationFn: (data: Inputs) => AuthService.createContact(data),
    onSuccess: (data) => {
      console.log("Xabar muvaffaqiyatli yuborildi:", data);
      reset();
    },
  });

 const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <div>
         <section className="h-[calc(50vw-216px)] ">
              <form  className="flex justify-center" onSubmit={handleSubmit(onSubmit)} >
             <div className="bg-[#D9D9D96E] mx-4 sm:mx-0 bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl p-4 w-full max-w-2xl">
             
<div className="flex flex-col sm:flex-row  gap-4">
     
        <div className="mb-1 sm:mb-4">
          <label htmlFor="full_name" className="block text-white  font-semibold mb-2">
            To'liq ismingiz
          </label>
          <input
            id="full_name"
            type="text"
            {...register("full_name", { required: "Ism majburiy" })}
            className={`w-full sm:px-4 px-3 py-1.5 sm:py-3 rounded-xl border ${
              errors.full_name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="Ismingizni kiriting"
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>
          )}
        </div>

      
        <div className="mb-1 sm:mb-4">
          <label htmlFor="email" className="block text-white font-semibold mb-2">
            Email manzilingiz
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email majburiy",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Noto'g'ri email manzili",
              },
            })}
            className={`w-full px-3 py-1.5 sm:px-4 sm:py-3 rounded-xl border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

       
        <div className="mb-1 sm:mb-4">
          <label htmlFor="phone_number" className="block text-white font-semibold mb-2">
            Telefon raqamingiz
          </label>
          <input
            id="phone_number"
            type="tel"
            {...register("phone_number", {
              required: "Telefon raqami majburiy",
              pattern: {
                value: /^\+?[0-9]{9,15}$/,
                message: "Noto'g'ri telefon raqami",
              },
            })}
            className={`w-full px-3 py-1.5 sm:px-4 sm:py-3 rounded-xl border ${
              errors.phone_number ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="+998901234567"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
          )}
        </div>
</div>
     
        <div className=" mb-2 sm:mb-6">
          <label htmlFor="message" className="block text-white font-semibold mb-1 sm:mb-2">
            Xabaringiz
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", { required: "Xabar majburiy" })}
            className={`w-full sm:px-4 px-3 py-1.5 sm:py-3 rounded-xl border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            placeholder="Xabaringizni yozing..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

      
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white  font-semibold sm:px-6 px-3 py-1.5 sm:py-3 rounded-xl transition duration-300"
          >
            {isLoading ? "Yuborilmoqda..." : "Xabarni yuborish"}
          </button>
        </div></div>
                <img
                  src={ContactImg}
                  alt="contact"
                  loading="lazy"
                  className="-z-10 absolute top-0 w-full h-screen "
                />
                <div className="absolute bottom-10   flex justify-center items-center  w-full gap-2">
                  </div>
              </form>
            </section>
    </div>
  )
}

export default Contact