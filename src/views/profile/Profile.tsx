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
      <section className="h-[calc(50vw-285px)] ">
        <div className="flex justify-end">
          <img
            src={InvetarImg}
            loading="lazy"
            alt="Profile"
            className="-z-10 absolute top-0 w-full h-screen"
          />
        </div>
        <div className="bg-[#D9D9D90D] text-white mx-4 sm:mx-16 h-full rounded-2xl">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-4 gap-y-4 sm:gap-y-0 w-full items-center p-4">
            <div className=" bg-[#C6DCE90D] сol-span-1 rounded-xl h-full">
              <div className="flex items-center justify-center mt-4 w-full ">
                <img
                  src={profile?.user?.profile_image || user}
                  
                  alt="user image"
                  className="w-28 h-28 sm:w-40 sm:h-40 rounded-full my-border cursor-pointer"
                />
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
      <Modal
        open={show}
        onCancel={() => setShow(false)}
        title="Profilni o'zgartirish"
        footer={null}
        width={300}
        centered
        className="bg-[#060D0F] "
      >
        <form onSubmit={handleSubmitProfile(onSubmit)} className="text-black">
          <div className="mb-4 space-y-2">
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Ismingizni kiriting..." {...registerProfile("first_name")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Familyangiz kiriting..." {...registerProfile("last_name")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Username kiriting..." {...registerProfile("username")} />
<Controller
  name="otm"
  control={controlProfile}
  render={({ field }) => (
    <Select
      {...field}
      onChange={(value) => field.onChange(value)}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      placeholder="Universitet yoki Institutingizni tanlang"
    >
      {choice?.universities?.map((otm:string) => (
        <Select.Option key={otm} value={otm} className="text-black">
          {otm}
        </Select.Option>
      ))}
    </Select>
  )}
/>
         <Controller
  name="group"
  control={controlProfile}
  render={({ field }) => (
    <Select
      {...field}
      onChange={(value) => field.onChange(value)}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      placeholder="Gruppangizni tanlang"
    >
      {choice?.groups?.map((group:string) => (
        <Select.Option key={group} value={group}>
          {group}
        </Select.Option>
      ))}
    </Select>
  )}
/>

     <Controller
  name="course"
  control={controlProfile}
  render={({ field }) => (
    <Select
      {...field}
      onChange={(value) => field.onChange(value)}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      placeholder="Kursingizni tanlang"
    >
      {choice?.courses?.map((course:string) => (
        <Select.Option key={course} value={course}>
          {course}-kurs
        </Select.Option>
      ))}
    </Select>
  )}
/>
<Controller
  name="direction"
  control={controlProfile}
  render={({ field }) => (
    <Select
      {...field}
      onChange={(value) => field.onChange(value)}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      placeholder="Yo'nalishingizni tanlang"
    >
      {choice?.directions?.map((direction:string) => (
        <Select.Option key={direction} value={direction}>
          {direction}
        </Select.Option>
      ))}
    </Select>
  )}
/>

            
      <Controller
  name="role"
  control={controlProfile}
  defaultValue="talaba"
  render={({ field }) => (
    <Select
      {...field}
      onChange={(value) => field.onChange(value)}
      style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
    >
      <Select.Option value="talaba">Talaba</Select.Option>
      <Select.Option value="oqituvchi">O‘qituvchi</Select.Option>
    </Select>
  )}
/>
              <input
                type="submit"
                value="Saqlash"
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer w-full"
              />
          
          </div>
          </form>
          </Modal>
      <Modal
        open={showpas}
        onCancel={() => setShowPas(false)}
        title="Parolni o'zgartirish"
        footer={null}
        width={300}
        centered
        className="bg-[#060D0F] text-white"
      >
        <form onSubmit={handleSubmit(onSubmit2)} className="text-black">
          <div className="mb-4 space-y-2">
            <input type="password" className="border px-2 py-1 rounded-md w-full" placeholder="Eski parolni kiriting..." {...register("old_password")} />
            <input type="password" className="border px-2 py-1 rounded-md w-full" placeholder="Yangi parolni kiriting..." {...register("new_password")} />
            <input type="password" className="border px-2 py-1 rounded-md w-full" placeholder="Yangi parolni tasdiqlang..." {...register("confirm_password")} />
            <input
              type="submit"
              value="Saqlash"
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer w-full"
            /> 
            </div>
            </form>
            </Modal>


    </div>
  );
};

export default Profile;
