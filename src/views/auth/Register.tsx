import { Input,  Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Back from "../../../public/authPic.png";

import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import eyemy from "../../components/icons/eye.svg";
import eyemyo from "../../components/icons/eyeo.svg";
import AuthService from "../../config/service/auth.service";
import { Option } from "antd/es/mentions";
import { adder } from "../../features/email/emailSlice";
import { useAppDispatch, useAppSelector } from "../../config/hooks/useRedux";

interface RegisterResponse {
  access: string;
}

interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

type Inputs = {
  email: string; //1
  middle_name: string; //2
  first_name: string; //3
  last_name: string; //4
  otm: string; //5
  course: number; //6
  group: string; //7
  direction: string; //8
  role: string; //9
  password: string; //10
};

export default function Register() {
  const [eyeShow, setEyeShow] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {data:choice}=useQuery({
    queryKey: ["choice"],
    queryFn: () => AuthService.getChoice(),
  })
  console.log("Choice data:", choice);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      middle_name: "",
      first_name: "",
      last_name: "",
      otm: "",
      course: 1,
      group: "",
      direction: "",
      role: "talaba",
      password: "",
    },
  });

  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const { mutate, isPending } = useMutation<
    RegisterResponse,
    AxiosError<ErrorResponse>,
    Inputs
  >({
    mutationKey: ["register"],
    mutationFn: (data: Inputs) => AuthService.register(data),
    onSuccess: () => {
      navigate("/auth/Accept");
    }
  });

  const email = useAppSelector((data) => data.email);
  console.log(email);
  const dispatch = useAppDispatch();

  const onSubmit = (data: Inputs) => {
    const waiter = async () => {

        await dispatch(adder(data?.email));
      mutate(data);
      
      
    };
    waiter();
  };

  return (
    <>
      {token ? (
        <div className="flex w-full h-full justify-center items-center sm:mt-96">
          <Spin />
        </div>
      ) : (
        <div className="relative">
          <div className="video-container">
            <img src={Back} className="background-video" />
            <div className="z-20 absolute mx-auto w-full ">
              <section className="bg-transparent text-white">
                <div className="flex flex-col items-center justify-center p-4 h-screen lg:py-0">
                  <div className="w-full rounded-2xl sm:max-w-[570px] xl:p-01">
                    <div className="sm:space-y-45 p-10 md:space-y-6 wrapper px-4 sm:p-[100px]">
                      <div>
                        <h4 className="sm:text-[28px] mt-4 sm:mt-0 font-semibold text-center">
                          {t("login.title")}
                        </h4>
                      </div>
                      <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="grid grid-cols-2 gap-2 ">
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
                                  }}
                                  id="floating_login"
                                  className="!bg-transparent mt-2.5 px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#6B7280] !text-white  font-medium border border-[#6B7280] focus:border-[#3B82F6] rounded-lg shinput"
                                  placeholder={t("login.email_placeholder")}
                                />
                              )}
                            />
                          </div>
                          {/* first_name */}
                          <div>
                            <label
                              htmlFor="first_name"
                              className="text-xs sm:text-sm font-medium"
                            >
                              Ism
                            </label>
                            <Controller
                              name="first_name"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                  id="first_name"
                                  className="!bg-transparent mt-2.5 px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#6B7280] !text-white  font-medium border border-[#6B7280] focus:border-[#3B82F6] rounded-lg shinput"
                                  placeholder={"Ismingizni kiriting"}
                                />
                              )}
                            />
                          </div>
                        </div>
                        {/* last_name */}
                        <div className="grid grid-cols-2 gap-2 ">
                          <div>
                            <label
                              htmlFor="last_name"
                              className="text-xs sm:text-sm font-medium"
                            >
                              Familya
                            </label>
                            <Controller
                              name="last_name"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                  id="last_name"
                                  className="!bg-transparent mt-2.5 px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#6B7280] !text-white  font-medium border border-[#6B7280] focus:border-[#3B82F6] rounded-lg shinput"
                                  placeholder={"Familyangizni kiriting"}
                                />
                              )}
                            />
                          </div>
                          {/* middle_name */}
                          <div>
                            <label
                              htmlFor="middle_name"
                              className="text-xs sm:text-sm font-medium"
                            >
                              Otasining ismi
                            </label>
                            <Controller
                              name="middle_name"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                  id="middle_name"
                                  className="!bg-transparent mt-2.5 px-4 py-2 sm:py-3.5 placeholder:sm:text-[15px] placeholder:text-xs placeholder:text-[#6B7280] !text-white  font-medium border border-[#6B7280] focus:border-[#3B82F6] rounded-lg shinput"
                                  placeholder={"Otasining ismi kiriting"}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 ">
                          {/* otm - converted to Select */}
                          <div>
                            <label
                              htmlFor="otm"
                              className="text-xs sm:text-sm font-medium"
                            >
                              Universitet
                            </label>
                            <Controller
                              name="otm"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  suffixIcon=""
                                  id="otm"
                                  onChange={(value) => field.onChange(value)}
                                  placeholder="Universitetni tanlang"
                                  style={{
                                    color: "#fff",
                                  }}
                                  className="sm:h-11 h-10 sm:mt-2 w-full mt-1 !bg-transparent !text-white !placeholder:text-[#fff] !placeholder:text-xs sm:placeholder:text-[15px] border border-[#6B7280] focus:border-[#3B82F6] focus:ring-0 rounded-lg shinput"
                                >
                                  {choice?.universities?.map((university: string) => (
                                    <Option key={university} value={university}>{university}</Option>
                                  ))}
                                </Select>
                              )}
                            />
                          </div>
                          {/* course */}
                          <div>
                            <label
                              htmlFor="course"
                              className="text-xs sm:text-sm  font-medium"
                            >
                              Kurs
                            </label>
                            <Controller
                              name="course"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  suffixIcon=""
                                  defaultValue={1}
                                  id="course"
                                  onChange={(value) => field.onChange(value)}
                                  placeholder="Kursni tanlang"
                                  style={{
                                    color: "#fff",
                                  }}
                                  className="sm:h-11 h-10 sm:mt-2 w-full mt-1 !bg-transparent !text-white !placeholder:text-[#fff] !placeholder:text-xs sm:placeholder:text-[15px] border border-[#6B7280] focus:border-[#3B82F6] focus:ring-0 rounded-lg shinput"
                                >
                                  {choice?.courses?.map((course: string) => (
                                    <Option value={course}>{course}</Option>
                                  ))}
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {/* group - converted to Select */}
                          <div>
                            <label
                              htmlFor="group"
                              className="text-xs sm:text-sm font-medium"
                            >
                              Guruh
                            </label>
                            <Controller
                              name="group"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  suffixIcon=""
                                  id="group"
                                  onChange={(value) => field.onChange(value)}
                                  placeholder="Guruhni tanlang"
                                  style={{
                                    color: "#fff",
                                  }}
                                  className="sm:h-11 h-10 sm:mt-2 w-full mt-1 !bg-transparent !text-white !placeholder:text-[#fff] !placeholder:text-xs sm:placeholder:text-[15px] border border-[#6B7280] focus:border-[#3B82F6] focus:ring-0 rounded-lg shinput"
                                >
                                  {choice?.groups?.map((group: string) => (
                                    <Option key={group} value={group}>{group}</Option>
                                  ))}
                                </Select>
                              )}
                            />
                          </div>
                          {/* direction - converted to Select */}
                          <div>
                            <label
                              htmlFor="direction"
                              className="text-xs sm:text-sm font-medium"
                            >
                              Yo'nalish
                            </label>
                            <Controller
                              name="direction"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  suffixIcon=""
                                  id="direction"
                                  onChange={(value) => field.onChange(value)}
                                  placeholder="Yo'nalishni tanlang"
                                  style={{
                                    color: "#fff",
                                  }}
                                  className="sm:h-11 h-10 sm:mt-2 w-full mt-1 !bg-transparent !text-white !placeholder:text-[#fff] !placeholder:text-xs sm:placeholder:text-[15px] border border-[#6B7280] focus:border-[#3B82F6] focus:ring-0 rounded-lg shinput"
                                >
                                  {choice?.directions?.map((direction: string) => (
                                    <Option key={direction} value={direction}>{direction}</Option>
                                  ))}
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {/* role */}
                          <div>
                            <label
                              htmlFor="role"
                              className="text-xs sm:text-sm  font-medium"
                            >
                              Rol
                            </label>
                            <Controller
                              name="role"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  suffixIcon=""
                                  defaultValue="talaba"
                                  id="role"
                                  onChange={(value) => field.onChange(value)}
                                  placeholder="Rolni tanlang"
                                  style={{
                                    color: "#fff",
                                  }}
                                  className="sm:h-11 h-10 sm:mt-2 w-full mt-1 !bg-transparent !text-white !placeholder:text-[#fff] !placeholder:text-xs sm:placeholder:text-[15px] border border-[#6B7280] focus:border-[#3B82F6] focus:ring-0 rounded-lg shinput"
                                >
                                  <Option value="talaba">Talaba</Option>
                                  <Option value="oqtivchi">O'qituvchi</Option>
                                </Select>
                              )}
                            />
                          </div>
                          <div className="relative">
                            <div className="flex items-center justify-between text-xs sm:text-sm font-medium ">
                              <label
                                htmlFor="floating_password"
                                className="font-medium"
                              >
                                {t("login.password")}
                              </label>
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
                                    className=" !bg-transparent mt-2.5 px-4 py-3 sm:py-3.5 placeholder:text-[#6B7280]  placeholder:sm:text-[15px] placeholder:text-xs sm:text-[15px] text-xs text-white font-medium border border-[#6B7280] rounded-lg shinput"
                                    placeholder="Parolni kiriting"
                                    type={eyeShow ? "text" : "password"}
                                  />
                                )}
                              />
                              <img
                                src={eyeShow ? eyemyo : eyemy}
                                alt={
                                  eyeShow ? "Hide password" : "Show password"
                                }
                                className="text-xs sm:text-xl text-white absolute bottom-4 sm:bottom-5 right-4 cursor-pointer"
                                onClick={() => setEyeShow((prev) => !prev)}
                              />
                            </div>
                          </div>
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

                      <div className="flex items-center justify-center py-2 sm:py-3.5 ">
                        <div className="flex gap-2.5 text-xs sm:text-sm font-semibold">
                          <p>
                            Siz ro'yhatdan o'tganmisiz ?{" "}
                            <span
                              className="hover:text-blue-500 hover:underline cursor-pointer"
                              onClick={() => navigate("/auth/login")}
                            >
                              Login
                            </span>
                          </p>
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