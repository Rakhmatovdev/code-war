import { Input  } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router"; 
import  Back from "../../../public/authPic.png";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import AuthService from "../../config/service/auth.service";
import { useAppDispatch} from "../../config/hooks/useRedux";
import { adder } from "../../features/email/emailSlice";

interface RegisterResponse {
  message: string;
}

interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

type Email = {
  email: string;
};


export default function EmailSend() {
    
    const dispatch=useAppDispatch()
    
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    clearErrors,
  } = useForm<Email>({
  });

 useEffect(() => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    navigate("/");
  }
}, [navigate]);


  const { mutate, isPending } = useMutation<
    RegisterResponse,
    AxiosError<ErrorResponse>,
    Email
  >({
    mutationKey: ["Email"],
    mutationFn: (data: Email) => AuthService.forgotPassword(data),
    onSuccess: () =>navigate("/auth/reset"),
  });

  const onSubmit = (data: Email) => {
    const waiter=async()=>{
     await dispatch(adder(data.email));
     mutate(data);
    }
    waiter()
  };

  return (
    <>
      {(
        <div className="relative">
          <div className="video-container">
            <img src={Back} className="background-video"/>
            <div className="z-20 absolute mx-auto w-full ">
              <section className="bg-transparent text-white">
                <div className="flex flex-col items-center justify-center h-screen p-4 lg:py-0">
                  <div className="w-full rounded-2xl sm:max-w-[570px] xl:p-01">
                    <div className="sm:space-y-45 md:space-y-6 wrapper p-10 sm:p-[100px]">
                      <div className="flex items-center justify-center gap-3">
                     
                      </div>
                      <div>
                        <h4 className="sm:text-[28px] font-semibold text-center">
                          {t("login.title")}
                        </h4>
                        <h4 className="text-xs sm:text-base mt-2 sm:mt-4 font-light text-center">
                          {t("login.subtitle")}
                        </h4>
                      </div>
                      <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div>
                          <label
                            htmlFor="floating_login"
                            className="text-xs sm:text-sm font-medium"
                          >
                            {t("login.email")}
                          </label>
                          <Controller
                            name="email"
                            control={control}
                            rules={{ required: t("login.email_error") }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  clearErrors("email");
                                }}
                           
                                id="floating_login"
                                className="!bg-transparent mt-2.5 sm:px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#84878d] !text-white  font-medium border border-[#6B7280]  rounded-lg shinput"
                                placeholder={t("login.email_placeholder")}
                              />
                            )}
                          />
                        </div>

                        

                        <button
                          type="submit"
                          disabled={
                            !watch("email") || isPending
                          }
                          className="w-full text-white bg-[#2563EB] hover:bg-[#1563EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-[#6B7280] disabled:hover:bg-[#6A7280] disabled:focus:ring-[#6A7280]"
                        >
                          {t("login.sendemail")}
                        </button>
                        <div
                        //   type="submit"
                          className="flex"
                        >
                            <Link to={'/auth/login'}  className="px-5 py-2.5 w-full text-white bg-[#2563EB] hover:bg-[#1563EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm  text-center"> 
                             {t("login.back")}
                            </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
    
    
        </div>
      )}
    </>
  );
}





















