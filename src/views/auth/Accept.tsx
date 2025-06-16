import { Input  } from "antd";
import {useState } from "react";
import {Controller, useForm } from "react-hook-form";
import {useNavigate } from "react-router"; 
import  Back from "../../../public/authPic.png";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import eyemy from "../../components/icons/eye.svg";
import eyemyo from "../../components/icons/eyeo.svg";
import AuthService from "../../config/service/auth.service";
import { useAppSelector } from "../../config/hooks/useRedux";

interface RegisterResponse {
  access: string;
}

interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

type Accept = {
  email: string;
  code: string;
};


export default function Accept() {
  const email=useAppSelector(data=>data.email.email)
  const [eyeShow, setEyeShow] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm<Accept>({
    defaultValues:{
        email,
        code:""
    }
  });




  const { mutate, isPending } = useMutation<
    RegisterResponse,
    AxiosError<ErrorResponse>,
    Accept
  >({
    mutationKey: ["Accept"],
    mutationFn: (data: Accept) => AuthService.accept(data),
    onSuccess: () =>navigate("auth/start"),
   onError: (error) => {
  const message = error.response?.data?.message  || "Invalid code";
  setError("code", { type: "manual", message });
},

  });

  const onSubmit = (data: Accept) => {
    mutate(data);
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
                                disabled
                           
                                id="floating_login"
                                className="!bg-transparent mt-2.5 sm:px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#84878d] !text-white  font-medium border border-[#6B7280]  rounded-lg shinput"
                                placeholder={t("login.email_placeholder")}
                              />
                            )}
                          />
                        </div>

                        <div className="relative">
                          <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                            <label
                              htmlFor="floating_password"
                              className="font-medium"
                            >
                              Code
                            </label>
                           
                          </div>
                          <div className="relative">
                            <Controller
                              name="code"
                              control={control}
                              rules={{ required: t("login.password_error") }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                    clearErrors("code");
                                  }}
                                  status={errors.code ? "error" : ""}
                                  id="floating_password"
                                  className=" !bg-transparent mt-2.5 sm:px-4 py-3 sm:py-3.5 placeholder:text-[#6B7280]  placeholder:sm:text-[15px] placeholder:text-xs text-xs sm:text-[15px] text-white font-medium border border-[#6B7280] rounded-lg shinput"
                                  placeholder="Code please"
                                  type={eyeShow ? "text" : "password"}
                                />
                              )}
                            />
                             <img
                             src={eyeShow ? eyemyo : eyemy}
                             alt={eyeShow ? "Hide password" : "Show password"}
                             className={`text-xs sm:text-xl text-white absolute bottom-4 sm:bottom-5 right-4 cursor-pointer `}
                             onClick={() => setEyeShow((prev) => !prev)}
                           />  
                          </div>
                          {errors.code && (
                            <span className="text-rose-500">
                              {errors.code.message}
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={
                            !watch("email") || !watch("code") || isPending
                          }
                          className="w-full text-white bg-[#2563EB] hover:bg-[#1563EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-[#6B7280] disabled:hover:bg-[#6A7280] disabled:focus:ring-[#6A7280]"
                        >
                          {t("login.login")}
                        </button>
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





















