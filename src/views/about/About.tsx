import { useQuery } from "@tanstack/react-query";
import arrow from "../../../public/a_after.svg";
import AboutImg from "../../../public/outline/about.png";
import Adiv1 from "../../components/users/div.png";
import Adiv2 from "../../components/users/div2.png";
import Adiv3 from "../../components/users/div3.png";
import Adiv4 from "../../components/users/div4.png";
import Adiv5 from "../../components/users/div5.png";
import Adiv6 from "../../components/users/div6.png";
import AuthService from "../../config/service/auth.service";
import { FC } from "react";
import { Image } from "antd";

interface ContentData {
  title: string;
  text: string;
  image?: string;
}


interface SectionProps {
  heading: string;
  subheading?: string;
  description: string;
  imageSrc: string;
  bgClass: string;
  textClass: string;
}

const Section: FC<SectionProps> = ({
  heading,
  subheading = "",
  description,
  imageSrc,
  bgClass,
  textClass,
}) => {
  const [descTitle, descBody] = description.split("|||");

  return (
    <section className={`${bgClass} min-h-screen py-10 sm:py-40`}>
      <div className={`mx-4 sm:mx-80 ${textClass}`}>          
        <h2 className="text-center text-xl sm:text-4xl font-medium mb-4">
          {heading}
        </h2>
        {subheading && (
          <p className="text-center text-xs sm:text-base text-[#E5E5E5] mb-10">
            {subheading}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="space-y-4 sm:w-1/2">
            <h3 className={`text-lg sm:text-4xl font-medium ${textClass}`}>{descTitle}</h3>
            <p className={`text-sm sm:text-base ${textClass}`}>{descBody}</p>
            <a href="#" className="flex items-center gap-2 mt-4">
              <span>Learn more</span>
              <Image src={arrow} alt="arrow" width={20} height={20} />
            </a>
          </div>
          <div className="mt-10 sm:mt-0 sm:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt={heading}
              width={422}
              height={366}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const About = () => {
    const { data, isLoading, isError } = useQuery<ContentData[]>({
    queryKey: ["personal"],
    queryFn: () => AuthService.getContent("personal"),
  });
 if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError || !data?.length) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Content unavailable
      </div>
    );
  }

const personal = data[0];
  const [title1, title2] = personal.title.split(/ {3,}/);
  const [text1, text2] = personal.text.split(/ {3,}/);



if(AboutImg === undefined) {
return <div className="w-screen absolute  h-screen  bg-slate-900"/>
}
const sections: SectionProps[] = [
    {
      heading: title1,
      subheading: title2,
      description: `${text1}|||${text2}`,
      imageSrc: personal.image || Adiv1,
      bgClass: "",
      textClass: "text-white",
    },
    {
      heading: "📘 Pedagogik yondashuv",
      description:
        "Coders War platformasi|||Coders War platformasi - o‘yin orqali o‘qitish (game-based learning) va differensial ta’lim yondashuvlariga tayangan holda ishlab chiqilgan. Bu model orqali har bir talaba shaxsiy qobiliyat va tayyorgarlik darajasiga mos topshiriqlarni oladi. Platforma o‘zlashtirish tezligiga qarab moslashadi, talabani bosqichma-bosqich murakkablik sari yetaklaydi. Gamifikatsiya esa bilim olish jarayonini motivatsiyalovchi va zavqli muhitga aylantiradi.",
      imageSrc: Adiv2,
      bgClass: "bg-[#10151B]",
      textClass: "text-white",
    },
    {
      heading: "🎮 O‘yinlashtirish (Gamification)",
      description:
        "Platformada ta’lim jarayoni ballar|||Platformada ta’lim jarayoni ballar - ekipirovka (qurol, qalqon, zirh), darajalar va unvonlar orqali o‘yin shaklida rag‘batlantiriladi. Har bir muvaffaqiyatli bajarilgan topshiriq yoki kvest uchun talaba mukofotlanadi, bu esa bilim olishni zavqli, maqsadli va raqobatli muhitga aylantiradi. Reyting tizimi esa o‘z ustida ishlashga ilhomlantiradi.",
      imageSrc: Adiv3,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      heading: "🧠 Adaptive Learning",
      description:
        "Platforma foydalanuvchining darajasi|||Platforma foydalanuvchining dastlabki bilim darajasini aniqlab, unga moslashtirilgan o‘quv yo‘nalishini taklif etadi. Har bir topshiriq, kvest yoki loyiha foydalanuvchining qobiliyatiga qarab avtomatik tanlanadi. Bu yondashuv o‘rganishni individual, samarali va stresssiz holatga keltiradi.",
      imageSrc: Adiv4,
      bgClass: "bg-[#10151B]",
      textClass: "text-white",
    },
    {
      heading: "🔗 Fanlararo yondashuv",
      description:
        "Coders War platformasi algoritmik fikrlash|||Coders War platformasi algoritmik fikrlash - informatika va matematika fanlarini birlashtirgan integrativ o‘quv muhitini taqdim etadi. Dasturlash topshiriqlari nafaqat kod yozishga, balki mantiqiy tahlil, muammo yechish va matematik modellashtirishga asoslanadi. Bu esa talabaga murakkab masalalarni tizimli hal qilish ko‘nikmasini shakllantiradi.",
      imageSrc: Adiv5,
      bgClass: "bg-white",
      textClass: "text-black",
    },
    {
      heading: "🧪 Tajriba sinovlari asosida",
      description:
        "Coders War platformasi tajriba-sinovlar|||Coders War platformasi pedagogik tajriba-sinovlar asosida loyihalashtirilgan. Platformaning samaradorligi amaliy o‘quv jarayonida testdan o‘tkazilgan, natijalar esa talabalarning motivatsiyasi va bilim o‘zlashtirish darajasida sezilarli ijobiy o‘sishni ko‘rsatgan. Bu platformaning ilmiy asoslangan va ishonchli metodik vosita ekanini tasdiqlaydi.",
      imageSrc: Adiv6,
      bgClass: "bg-[#10151B]",
      textClass: "text-white",
    },
  ];

  return (
    <div className="">
      <section className="h-[calc(100vw+286px)] sm:h-[calc(50vw-346px)]  ">
        <div className="flex justify-end">
          <img
            src={AboutImg}
            loading="lazy"
            alt="About"
            className="-z-10 absolute top-0 w-full h-screen "
          />
        </div>
         <div className="text-white mx-4 sm:mx-80">
          <h2 className="text-center text-xl sm:text-5xl font-medium">{title1}</h2>
          <p className="text-center text-xs sm:text-base mt-2 sm:mt-11 text-[#E5E5E5]">
            {title2}
          </p>
          <div className="sm:mt-28 flex justify-between sm:flex-row flex-col">
            <div className="sm:space-y-4 space-y-2 mt-10 sm:mt-0">
              <h3 className="text-lg sm:text-4xl text-center font-medium">{text1}</h3>
              <p className="text-[#E5E5E5] w-[306px]">{text2}</p>
              <a href="#" className="flex gap-2 items-center mt-4">
                <span>Learn more</span>
                <Image src={arrow} alt="arrow" width={20} height={20} />
              </a>
            </div>
            <div className="">
              <img
                src={personal.image || Adiv1}
                alt="hero algori"
                className="rounded-2xl"
                width={422}
                height={366}
              />
            </div>
          </div>
          </div>
      </section>
      <div className="sm:mt-32 2xl:mt-10">
       {sections?.slice(1).map((sec, idx) => (
        <Section key={idx} {...sec} />
      ))}</div>
    </div>
  );
};

export default About;
