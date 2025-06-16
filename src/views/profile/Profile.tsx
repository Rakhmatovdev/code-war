import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InvetarImg from "../../../public/outline/invertar.png";
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";

import AuthService from "../../config/service/auth.service";
import user from "../../../public/user.png";
import { Modal, Select } from "antd";
import { useEffect, useState } from "react";
type Inputs = {
  username: string;
  first_name: string;
  last_name: string;
  otm: string;
  course:number;
  group: string;
  direction: string;
  role:'talaba' | 'oqituvchi'|string;
};
type Inputs2 = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};
const Profile = () => {

const [show, setShow] = useState(false)
const [showpas, setShowPas] = useState(false)
 const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => AuthService.getProfile(),
   
  });


  const {data:choice,refetch}=useQuery({
    queryKey: ["choice"],
    queryFn: () => AuthService.getChoice(),
  })
  console.log("Choice data:", choice);
  

  const { register:registerProfile, handleSubmit:handleSubmitProfile, reset:resetProfile ,control:controlProfile} = useForm<Inputs>({
    defaultValues:{
      username: profile?.user?.username || "",
      first_name: profile?.user?.first_name || "",
      last_name: profile?.user?.last_name || "",
      otm: profile?.user?.otm || "",
      course: profile?.user?.course || 1,
      group: profile?.user?.group || "",
      direction: profile?.user?.direction || "",
      role: profile?.user?.role || "talaba",
    }
  });

  const { register, handleSubmit, reset } = useForm<Inputs2>({
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  })

   const queryClient = useQueryClient();

  const { data: updateProfile, mutate} = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: (data: any) => AuthService.updateProfile(data),
    onSuccess: (data) => {
      console.log("Profil yangilandi:", data);
      resetProfile();
        refetch();
      setShow(false);
      queryClient.invalidateQueries({ queryKey: ["profile"] });

    },
  });
  const { mutate:mutatePas} = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: (data: Inputs2) => AuthService.changePassword(data),
    onSuccess: (data) => {
      console.log("", data);
    
      resetProfile();
    },

  });


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
    console.log(updateProfile);
    
  };
  const onSubmit2: SubmitHandler<Inputs2> = (data) => {
    if (data.new_password !== data.confirm_password) {
      alert("Yangi parol va tasdiqlash paroli mos kelmaydi");
      return reset({
        old_password: data.old_password,
        new_password: "",
        confirm_password: "",
      });
    }
    mutatePas(data);
    setShowPas(false);
    reset()
  };

  console.log(profile);
 

useEffect(() => {
  if (profile?.user) {
    // refetch()
    resetProfile({
      username: profile.user.username || "",
      first_name: profile.user.first_name || "",
      last_name: profile.user.last_name || "",
      otm: profile.user.otm || "",
      course: profile.user.course || 1,
      group: profile.user.group || "",
      direction: profile.user.direction || "",
      role: profile.user.role || "talaba",
    });
  }
}, [profile, resetProfile]);


  return (
    <div>
      <section className="relative my-20 ">
         <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={InvetarImg}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="bg-[#D9D9D90D] relative z-20 text-white mx-4 sm:mx-16 h-full rounded-2xl">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-4 gap-y-4 sm:gap-y-0 w-full items-center p-4">
            <div className=" bg-[#C6DCE90D] сol-span-1 rounded-xl h-full">
              <div className="flex w-28 h-28 sm:w-40 sm:h-40 items-center justify-center mx-auto mt-4  relative ">
                <img
                  src={profile?.user?.profile_image || user}
                  alt="user image"
                  className="w-full  rounded-full my-border cursor-pointer"
                />
                <img src={profile?.user?.level_image_url} alt="Level user" className="w-9 h-9      sm:w-12 sm:h-12 absolute bottom-0 right-0 rounded-full"  />
              </div>
              <p className="text-center sm:text-xl mt-2">
                {profile?.user?.first_name} {profile?.user?.last_name}
              </p>
              <p className="text-center sm:text-xl mt-2">{profile?.user?.otm}</p>
              <p className="text-center sm:text-xl my-2">
                @{profile?.user?.username}
              </p>
            </div>
            <div className="bg-[#C6DCE90D] col-span-2 rounded-xl    h-full p-4">
              <div className="flex gap-4 sm:gap-12 ">
                <div className="flex flex-col">
                  <p className="text-sm sm:text-xl"> Toliq ism:</p>
                  <p className="text-sm sm:text-xl"> Email:</p>
                  <p className="text-sm sm:text-xl"> Username:</p>
                  <p className="text-sm sm:text-xl"> OTM:</p>
                  <p className="text-sm sm:text-xl"> Group:</p>
                  <p className="text-sm sm:text-xl"> Direction:</p>
                  <p className="text-sm sm:text-xl"> Level:</p>
                  <p className="text-sm sm:text-xl"> Rating:</p>
                  <p className="text-sm sm:text-xl"> Role:</p>
                </div>
                <div className="flex flex-col ">
                  <span className="text-sm sm:text-xl">
                    {profile?.user?.first_name} {profile?.user?.last_name}
                  </span>
                  <span className="text-sm sm:text-xl">{profile?.user?.email}</span>
                  <span className="text-sm sm:text-xl">
                    @{profile?.user?.username}
                  </span>
                  <span className="text-sm sm:text-xl">{profile?.user?.otm}</span>
                  <span className="text-sm sm:text-xl">{profile?.user?.group}</span>
                  <span className="text-sm sm:text-xl">
                    {profile?.user?.direction}
                  </span>
                  <span className="text-sm sm:text-xl">{profile?.user?.level}</span>
                  <span className="text-sm sm:text-xl">{profile?.rating}</span>
                  <span className="text-sm sm:text-xl">{profile?.user?.role}</span>
                </div>
              </div>
             <div className="flex gap-1">
               <button onClick={()=>setShow(true)}  className="text-sm sm:text-xl bg-blue-500 mt-20 px-4 py-1 rounded-md inline-block">
                O'zgartirish
              </button>
              <button onClick={()=>setShowPas(true)}  className="text-sm sm:text-xl bg-blue-500 mt-20 px-4 py-1 rounded-md inline-block">
                Parolni o'zgartirish
              </button>
             </div>
            </div>
          </div>
        </div>
      </section>
       {/* <section className=" relative z-20 mb-[680px] sm:mb-0 sm:h-[20vh]">
            </section> */}
<Modal
  open={show}
  onCancel={() => setShow(false)}
  title="Profilni o'zgartirish"
  footer={null}
  width={400}
  centered
  className="bg-[#0F172A] rounded-lg"
>
  <form
    onSubmit={handleSubmitProfile(onSubmit)}
    className="text-white space-y-4 mymodal"
  >
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Ismingiz</label>
        <input
          type="text"
          {...registerProfile("first_name")}
          className="w-full px-3 py-2 rounded-md bg-[#1E293B] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ismingizni kiriting..."
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Familiyangiz</label>
        <input
          type="text"
          {...registerProfile("last_name")}
          className="w-full px-3 py-2 rounded-md bg-[#1E293B] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Familyangizni kiriting..."
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          {...registerProfile("username")}
          className="w-full px-3 py-2 rounded-md bg-[#1E293B] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username kiriting..."
        />
      </div>

      <div>
        <label className="block text-sm mb-1">OTM</label>
        <Controller
          name="otm"
          control={controlProfile}
          render={({ field }) => (
            <Select
              {...field}
              onChange={field.onChange}
              className="w-full"
              placeholder="Universitet yoki Institutingizni tanlang"
              dropdownStyle={{ backgroundColor: "#1E293B", color: "white" }}
            >
              {choice?.universities?.map((otm: string) => (
                <Select.Option key={otm} value={otm}>
                  {otm}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Guruh</label>
        <Controller
          name="group"
          control={controlProfile}
          render={({ field }) => (
            <Select
              {...field}
              onChange={field.onChange}
              className="w-full"
              placeholder="Gruppangizni tanlang"
              dropdownStyle={{ backgroundColor: "#1E293B", color: "white" }}
            >
              {choice?.groups?.map((group: string) => (
                <Select.Option key={group} value={group}>
                  {group}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Kurs</label>
        <Controller
          name="course"
          control={controlProfile}
          render={({ field }) => (
            <Select
              {...field}
              onChange={field.onChange}
              className="w-full"
              placeholder="Kursingizni tanlang"
              dropdownStyle={{ backgroundColor: "#1E293B", color: "white" }}
            >
              {choice?.courses?.map((course: string) => (
                <Select.Option key={course} value={course}>
                  {course}-kurs
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Yo'nalish</label>
        <Controller
          name="direction"
          control={controlProfile}
          render={({ field }) => (
            <Select
              {...field}
              onChange={field.onChange}
              className="w-full"
              placeholder="Yo'nalishingizni tanlang"
              dropdownStyle={{ backgroundColor: "#1E293B", color: "white" }}
            >
              {choice?.directions?.map((direction: string) => (
                <Select.Option key={direction} value={direction}>
                  {direction}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Rol</label>
        <Controller
          name="role"
          control={controlProfile}
          defaultValue="talaba"
          render={({ field }) => (
            <Select
              {...field}
              onChange={field.onChange}
              className="w-full"
              dropdownStyle={{ backgroundColor: "#1E293B", color: "white" }}
            >
              <Select.Option value="talaba">Talaba</Select.Option>
              <Select.Option value="oqituvchi">O‘qituvchi</Select.Option>
            </Select>
          )}
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-200"
    >
      Saqlash
    </button>
  </form>
</Modal>


      <Modal
  open={showpas}
  onCancel={() => setShowPas(false)}
  title="Parolni o'zgartirish"
  footer={null}
  width={400}
  centered
  className="bg-[#0F172A] rounded-lg"
>
  <form
    onSubmit={handleSubmit(onSubmit2)}
    className="space-y-4 text-white"
  >
    <div>
      <label className="block text-sm mb-1">Eski parol</label>
      <input
        type="password"
        {...register("old_password")}
        placeholder="Eski parolni kiriting..."
        className="w-full px-3 py-2 rounded-md bg-[#1E293B] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm mb-1">Yangi parol</label>
      <input
        type="password"
        {...register("new_password")}
        placeholder="Yangi parolni kiriting..."
        className="w-full px-3 py-2 rounded-md bg-[#1E293B] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm mb-1">Parolni tasdiqlash</label>
      <input
        type="password"
        {...register("confirm_password")}
        placeholder="Yangi parolni tasdiqlang..."
        className="w-full px-3 py-2 rounded-md bg-[#1E293B] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-200"
    >
      Saqlash
    </button>
  </form>
</Modal>



    </div>
  );
};

export default Profile;
