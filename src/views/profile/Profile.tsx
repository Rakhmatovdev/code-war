import { SubmitHandler, useForm } from "react-hook-form";
import InvetarImg from "../../../public/outline/invertar.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import user from "../../../public/user.png";
import { Modal, Select } from "antd";
import { useState } from "react";
import { Option } from "antd/es/mentions";
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
const Profile = () => {

const [show, setShow] = useState(false)

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => AuthService.getProfile(),
  });

  const { data: updateProfile, mutate } = useMutation({
    mutationKey: ["profile"],
    mutationFn: (data: any) => AuthService.updateProfile(data),
    onSuccess: (data) => {
      console.log("Izoh muvaffaqiyatli qoldirildi:", data);
      reset();
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
    console.log(updateProfile);
    
  };

  console.log(profile);

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
                  src={profile?.profile_image || user}
                  alt="user image"
                  className="w-28 h-28 sm:w-40 sm:h-40 rounded-full my-border cursor-pointer"
                />
              </div>
              <p className="text-center sm:text-xl mt-2">
                {profile?.first_name} {profile?.last_name}
              </p>
              <p className="text-center sm:text-xl mt-2">{profile?.otm}</p>
              <p className="text-center sm:text-xl my-2">
                @{profile?.username}
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
                    {profile?.first_name} {profile?.last_name}
                  </span>
                  <span className="text-sm sm:text-xl">{profile?.email}</span>
                  <span className="text-sm sm:text-xl">
                    @{profile?.username}
                  </span>
                  <span className="text-sm sm:text-xl">{profile?.otm}</span>
                  <span className="text-sm sm:text-xl">{profile?.group}</span>
                  <span className="text-sm sm:text-xl">
                    {profile?.direction}
                  </span>
                  <span className="text-sm sm:text-xl">{profile?.level}</span>
                  <span className="text-sm sm:text-xl">{profile?.rating}</span>
                  <span className="text-sm sm:text-xl">{profile?.role}</span>
                </div>
              </div>
              <button onClick={()=>setShow(true)}  className="text-sm sm:text-xl bg-blue-500 mt-20 px-4 py-1 rounded-md inline-block">
                O'zgartirish
              </button>
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
        className="bg-[#060D0F] text-white"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="text-black">
          <div className="mb-4 space-y-2">
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Ismingizni kiriting..." {...register("first_name")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Familyangiz kiriting..." {...register("last_name")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Username kiriting..." {...register("username")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Universitet yoki Institutingiz..." {...register("otm")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Gruppangizni kiriting..." {...register("group")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Kursingizni kiriting..." {...register("course")} />
            <input type="text" className="border px-2 py-1 rounded-md w-full" placeholder="Tavsif kiriting..." {...register("direction")} />
            
       <Select placeholder="Rolni tanlang..." className="text-black" style={{ width: '100%',border: '1px solid #ccc', borderRadius: '4px' ,}} {...register("role")}>
    <Option value="talaba">Talaba</Option>
    <Option value="oqituvchi">O‘qituvchi</Option>
  </Select>
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
