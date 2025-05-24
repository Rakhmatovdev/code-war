import { Input, Spin } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router"; 
import  Back from "../../../public/authPic.png";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import eyemy from "../../components/icons/eye.svg";
import eyemyo from "../../components/icons/eyeo.svg";
import AuthService from "../../config/service/auth.service";

interface LoginResponse {
  access: string;
}

interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
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
  } = useForm<Inputs>();

  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
  setToken(localStorage.getItem("accessToken"));
    if (token) {
      navigate("/");
    }
  }, [token,navigate]); 

  const { mutate, isPending } = useMutation<
    LoginResponse,
    AxiosError<ErrorResponse>,
    Inputs
  >({
    mutationKey: ["login"],
    mutationFn:(data:any)=> AuthService.login(data),
    onSuccess: () =>navigate("/"),
    onError: (error) => {
      const errorMsg = error.response?.data.message || "Данный пользователь не найден";
      const errorMsg2 = error.response?.data.message || "Неверный пароль";
      setError("email", { type: "manual", message: errorMsg });
      setError("password", { type: "manual", message: errorMsg2 });
    },
  });

  const onSubmit = (data: Inputs) => {
    mutate(data);
  };

  return (
    <>
      {token ? (
        <div className="flex w-full h-full justify-center items-center mt-96">
          <Spin />
        </div>
      ) : (
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
                                status={errors.email ? "error" : ""}
                                id="floating_login"
                                className="!bg-transparent mt-2.5 sm:px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#6B7280] !text-white  font-medium border border-[#6B7280] focus:border-[#3B82F6] rounded-lg shinput"
                                placeholder={t("login.email_placeholder")}
                              />
                            )}
                          />
                          {errors.email && (
                            <span className="text-rose-500">
                              {errors.email.message}
                            </span>
                          )}
                        </div>

                        <div className="relative">
                          <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                            <label
                              htmlFor="floating_password"
                              className="font-medium"
                            >
                              {t("login.password")}
                            </label>
                            <Link to={'/auth/email'}
                              className="text-[#6B7280] z-10 hover:underline cursor-pointer"
                             
                            >
                              {t("login.forgot_password.title")}
                            </Link>
                          </div>
                          <div className="relative">
                            <Controller
                              name="password"
                              control={control}
                              rules={{ required: t("login.password_error") }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                    clearErrors("password");
                                  }}
                                  status={errors.password ? "error" : ""}
                                  id="floating_password"
                                  className=" !bg-transparent mt-2.5 sm:px-4 py-3 sm:py-3.5 placeholder:text-[#6B7280]  placeholder:sm:text-[15px] placeholder:text-xs text-xs sm:text-[15px] text-white font-medium border border-[#6B7280] rounded-lg shinput"
                                  placeholder="Введите пароль"
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
                          {errors.password && (
                            <span className="text-rose-500">
                              {errors.password.message}
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={
                            !watch("email") || !watch("password") || isPending
                          }
                          className="w-full text-white bg-[#2563EB] hover:bg-[#1563EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-[#6B7280] disabled:hover:bg-[#6A7280] disabled:focus:ring-[#6A7280]"
                        >
                          {t("login.login")}
                        </button>
                      </form>

                       <div
                        className="flex items-center justify-center py-3.5 " 
                      >
                        <div className="flex gap-2.5 text-xs sm:text-sm font-semibold">
                          <p>Siz royhatdan o'tmaganmisiz? <span className="hover:text-blue-500 hover:underline" onClick={() => navigate("/auth/register")}>Register</span></p>
                        </div>
                        </div>
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





















