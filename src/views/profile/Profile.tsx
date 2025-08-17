import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InvetarImg from "../../components/icons/outline/invertar.png";
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import user from "../../components/icons/user.png"
import AuthService from "../../service/auth.service";
import { Modal, Select } from "antd";
import { useEffect, useState, useRef } from "react";
import zirh from "../../../public/user/z1.png"
import qalqon from "../../../public/user/qal1.png"
import uzuk from "../../../public/user/k1.png"
import qilich from "../../../public/user/q1.png"
import etik from "../../../public/user/e1.png"
import dubulga from "../../../public/user/dub1.png"

import warrior from "../../../public/user/warrior.png"

const gearImages: Record<string, string> = {
  sword: qilich,
  spear: qilich,
  magic: qalqon,
  shield: qalqon,
  helmet: dubulga,
  armor: zirh,
  boots: etik,
  ring: uzuk,
}

const GEAR_TYPES = [
  ["sword", "Qilich"],
  ["spear", "Nayza"],
  ["magic", "Sehrli tayoq"],
  ["shield", "Qalqon"],
  ["helmet", "Dubulga"],
  ["armor", "Zirh"],
  ["boots", "Etik"],
  ["ring", "Uzuk"],
]

const QUALITY = [
  ["basic", "Oddiy"],
  ["medium", "O‘rtacha"],
  ["rare", "Qimmatbaho"],
]
type Inputs = {
  username: string;
  first_name: string;
  last_name: string;
  otm: string;
  course:number;
  group: string;
  direction: string;
  role:'talaba' | 'oqituvchi'|string;
  profile_image?: File;
};

type Inputs2 = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};
function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
function generateRandomGears() {
  const selected = getRandomItems(GEAR_TYPES, 6)
  return selected.map(([type, name], idx) => {
    const [, qName] = QUALITY[Math.floor(Math.random() * QUALITY.length)]
    return {
      id: idx + 1,
      type,
      name,
      quality: qName,
      image: gearImages[type] || "",
    }
  })
}

const Profile = () => {
  
  const [show, setShow] = useState(false)
  const [showpas, setShowPas] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => AuthService.getProfile(),
  });

  const {data:choice,refetch}=useQuery({
    queryKey: ["choice"],
    queryFn: () => AuthService.getChoice(),
  })
  console.log("Choice data:", choice);

  const { register:registerProfile, handleSubmit:handleSubmitProfile, reset:resetProfile ,control:controlProfile, setValue: setValueProfile, watch: watchProfile} = useForm<Inputs>({
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
    mutationFn: (data: any) => {
  
      if (data.profile_image) {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
          if (key === 'profile_image' && data[key]) {
            formData.append(key, data[key]);
          } else if (key !== 'profile_image') {
            formData.append(key, data[key]);
          }
        });
        return AuthService.updateProfile(formData);
      } else {
        return AuthService.updateProfile(data);
      }
    },
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

  // Profil rasmini yuklash funksiyasi
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValueProfile('profile_image', file);
      // Fayl tanlangandan keyin darhol modal ochish
      setShow(true);
    }
  };

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
                  className="w-full  rounded-full my-border border-gray-800 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handleImageClick}
                />
                <img src={profile?.user?.level_image_url} alt="Level user" className="w-9 h-9      sm:w-12 sm:h-12 absolute bottom-0 right-0 rounded-full"  />
                
                {/* Yashirin file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
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
                    {profile?.user?.username}
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
         <div>
         <section className="relative ">
        <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={InvetarImg}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="flex z-20 sm:p-12 mt-4 mx-4  sm:mx-16">
        <div className="bg-[#D9D9D90D] mx-auto flex p-3 sm:p-12 sm:gap-14 rounded-xl sm:rounded-3xl">
  {/* Chap tomonda (shield + armor) */}
  <div className="h-full flex flex-col justify-between">
    {profile?.gears
      ?.filter((item: any) => item.gear.type === "shield" || item.gear.type === "armor" || item.gear.type === "ring")
      .map((item: any) => (
        <div key={item.id} className="relative group cursor-pointer flex justify-center">
          <img
            src={item.gear.type === "shield" ? qalqon : item.gear.type === "armor" ? zirh : uzuk}
            alt={item.gear.name}
            width={125}
            height={125}
          />
          {/* Hoverda description */}
          <div className="absolute -top-9  w-full left-1/2 translate-x-1/3 mb-[-10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded-lg">
            {item.gear.name} ({item.gear.quality})
          </div>
        </div>
      ))}
  </div>

  {/* Markazda Warrior */}
  <div className="">
    <img src={profile?.user?.character?.image || warrior} alt="warrior" width={354} height={531} className="w-[354px] h-[521px] object-cover rounded-xl" />
  </div>

  {/* O‘ng tomonda (sword + helmet + boots) */}
  <div className="h-full flex flex-col justify-between">
    {profile?.gears
      ?.filter(
        (item: any) =>
          item.gear.type === "sword" ||
          item.gear.type === "helmet" ||
          item.gear.type === "boots"
      )
      .map((item: any) => (
        <div key={item.id} className="relative group cursor-pointer flex justify-center">
          <img
            src={
              item.gear.type === "sword"
                ? qilich
                : item.gear.type === "helmet"
                ? dubulga
                : etik
            }
            alt={item.gear.name}
            width={125}
            height={125}
          />
          {/* Hoverda description */}
          <div className="absolute  -top-9  w-full left-1/2 translate-x-1/3 mb-[-10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded-lg">
            {item.gear.name} ({item.gear.quality})
          </div>
        </div>
      ))}
  </div>
</div>

        </div>
      </section>
      <div className=" sm:pb-20 pb-5 sm:px-16 px-4 text-white ">
           <div className="sm:mx-16">
            <p className="text-center sm:py-12 py-3 text-xl font-medium  sm:text-4xl">History</p>
          <div className="space-y-4 sm:space-y-7">
  {profile?.topics_progress?.map((item:any )=> (
    <div
      key={item.id}
      className="flex rounded-xl sm:rounded-2xl text-base items-end sm:items-center justify-between p-7 border border-[#D9D9D90D]"
      style={{ backgroundColor: item.is_completed ? "#2A635D" : "#73757B" }}
    >
      <div className="flex gap-1 items-center flex-col sm:flex-row">
        <p className="text-sm sm:text-base ">{item.topic.order} - MAVZU :</p>
        <p className="text-sm sm:text-base">{item.topic.title}</p>
      </div>
      <p className="text-sm sm:text-base">
        {item.is_completed ? "+200 ball" : "+0 ball"}
      </p>
    </div>
  ))}
</div>

           </div>
      </div>
    </div>

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
            {/* Profil rasmini ko'rsatish */}
            {watchProfile('profile_image') && (
              <div className="text-center">
                <p className="text-sm mb-2">Yangi rasm tanlandi:</p>
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src={URL.createObjectURL(watchProfile('profile_image') as File)}
                    alt="Yangi profil rasmi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

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
                    <Select.Option value="oqituvchi">O'qituvchi</Select.Option>
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