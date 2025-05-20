import arrow from "../../../public/a_after.svg";
import AboutImg from "../../../public/outline/about.png";
import Adiv1 from "../../components/users/div.png";
import Adiv2 from "../../components/users/div2.png";
import Adiv3 from "../../components/users/div3.png";
import Adiv4 from "../../components/users/div4.png";
import Adiv5 from "../../components/users/div5.png";
import Adiv6 from "../../components/users/div6.png";

const About = () => {
  return (
    <div className="">
      <section className="h-[calc(100vw+286px)] sm:h-[calc(50vw-286px)] ">
        <div className="flex justify-end">
          <img
            src={AboutImg}
            loading="lazy"
            alt="About"
            className="-z-10 absolute top-0 w-full h-screen "
          />
        </div>
        <div className="text-white mx-4 sm:mx-80 ">
          <p className="text-center text-xl sm:text-5xl font-medium">
            Umarzoda Shohruh Azamat o’g’li
          </p>
          <p className="text-center text-xs sm:text-base sm:mt-11 mt-2 text-[#E5E5E5] mx-4">
            Oliy ta’lim muassasalarida “Algoritmik tillar va dasturlash” fanini
            o’qitish metodikasini takomillashtirish.
          </p>
          <div className="sm:mt-28 flex justify-between sm:flex-row flex-col">
            <div className="sm:space-y-4 space-y-2 mt-10 sm:mt-0">
              <p className="text-lg sm:text-4xl text-center font-medium">ALGORI-GAME modeli</p>
              <p className=" text-[#E5E5E5]  w-[306px]">
                ALGORI-GAME — bu dasturlashni gamifikatsiya, adaptive learning
                va project-based learning asosida o‘qitish modelidir.
              </p>
              <a href="#" className="flex sm:text-base text-sm gap-2 items-center cursor-pointer">
                {" "}
                <p>Learn more</p> <img  src={arrow} alt="arrow left" width={20} height={20}/>
              </a>
            </div>
            <div className="">
              <img
                src={Adiv1}
                alt="hero algori"
                className=""
                width={422}
                height={366}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#10151B] h-screen">
        <div className="text-white mx-4 sm:mx-80">
          <p className="text-center sm:text-4xl text-xl pt-10 sm:pt-60 font-medium ">📘 Pedagogik yondashuv</p>
          <div className="sm:mt-28 mt-2 flex sm:flex-row flex-col justify-between">
            <div className="sm:space-y-4 space-y-2">
              <p className="text-lg sm:text-4xl ">Coders War platformasi</p>
              <p className="text-[#E5E5E5] sm:w-[356px]">
                Coders War platformasi - o‘yin orqali o‘qitish (game-based
                learning) va differensial ta’lim yondashuvlariga tayangan holda
                ishlab chiqilgan. Bu model orqali har bir talaba shaxsiy
                qobiliyat va tayyorgarlik darajasiga mos topshiriqlarni oladi.
                Platforma o‘zlashtirish tezligiga qarab moslashadi, talabani
                bosqichma-bosqich murakkablik sari yetaklaydi. Gamifikatsiya esa
                bilim olish jarayonini motivatsiyalovchi va zavqli muhitga
                aylantiradi.
              </p>
              <a href="#" className="flex gap-2 cursor-pointer items-center">
                {" "}
                <p>Learn more</p> <img  width={20} height={20} src={arrow} alt="arrow left" />
              </a>
            </div>
            <div className="">
              <img
                src={Adiv2}
                alt="hero algori 2"
                className=""
                width={422}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-whit h-screen">
        <div className="text-black sm:mx-80 mx-4 py-10 sm:py-40">
          <p className="text-center text-xl font-medium sm:text-4xl ">
            🎮 O‘yinlashtirish (Gamification)
          </p>
          <div className="sm:mt-28 mt-2 flex flex-col sm:flex-row justify-between">
            <div className="sm:space-y-4 space-y-2">
              <p className=" text-lg  sm:text-4xl">Platformada ta’lim jarayoni ballar</p>
              <p className="text-[#0E1B35] text sm:w-[356px]">
                Platformada ta’lim jarayoni ballar - ekipirovka (qurol, qalqon,
                zirh), darajalar va unvonlar orqali o‘yin shaklida
                rag‘batlantiriladi. Har bir muvaffaqiyatli bajarilgan topshiriq
                yoki kvest uchun talaba mukofotlanadi, bu esa bilim olishni
                zavqli, maqsadli va raqobatli muhitga aylantiradi. Reyting
                tizimi esa o‘z ustida ishlashga ilhomlantiradi.
              </p>
              <a href="#" className="flex gap-2 cursor-pointer items-center">
                {" "}
                <p>Learn more</p> <img src={arrow} width={20} height={20} alt="arrow left" />
              </a>
            </div>
            <div className="">
              <img
                src={Adiv3}
                alt="hero algori 3"
                width={422}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#10151B] h-screen">
        <div className="text-white mx-4 sm:mx-80">
          <p className="text-center text-xl sm:text-4xl pt-10 sm:pt-40">🧠 Adaptive Learning</p>
          <div className="sm:mt-28 mt-2 flex justify-between flex-col sm:flex-row">
            <div className="sm:space-y-4 space-y-2 ">
              <p className="text-lg sm:text-4xl"> Platforma foydalanuvchining darajasi</p>
              <p className="text-[#E5E5E5] sm:w-[356px]">
                Platforma foydalanuvchining dastlabki bilim darajasini aniqlab,
                unga moslashtirilgan o‘quv yo‘nalishini taklif etadi. Har bir
                topshiriq, kvest yoki loyiha foydalanuvchining qobiliyatiga
                qarab avtomatik tanlanadi. Bu yondashuv o‘rganishni individual,
                samarali va stresssiz holatga keltiradi.
              </p>
              <a href="#" className="flex gap-2 cursor-pointer">
                {" "}
                <p>Learn more</p> <img src={arrow} alt="arrow left" width={20} height={20} />
              </a>
            </div>
            <div className="">
              <img
                src={Adiv4}
                alt="hero algori 4"
                width={422}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-screen">
        <div className="text-black sm:mx-80 mx-4 pt-10 sm:py-40">
          <p className="text-center text-xl sm:text-4xl font-medium  ">🔗 Fanlararo yondashuv</p>
          <div className="sm:mt-28 mt-2 flex justify-between flex-col sm:flex-row">
            <div className="sm:space-y-4 space-y-2">
              <p className="text-lg sm:text-4xl">
                Coders War platformasi algoritmik fikrlash
              </p>
              <p className="text-[#0E1B35] sm:w-[356px]">
                Coders War platformasi algoritmik fikrlash - informatika va
                matematika fanlarini birlashtirgan integrativ o‘quv muhitini
                taqdim etadi. Dasturlash topshiriqlari nafaqat kod yozishga,
                balki mantiqiy tahlil, muammo yechish va matematik
                modellashtirishga asoslanadi. Bu esa talabaga murakkab
                masalalarni tizimli hal qilish ko‘nikmasini shakllantiradi.
              </p>
              <a href="#" className="flex gap-2 cursor-pointer items-center">
                {" "}
                <p>Learn more</p> <img src={arrow} alt="arrow left" width={20} height={20} />
              </a>
            </div>
            <div className="">
              <img
                src={Adiv5}
                alt="hero algori 5" 
                width={422}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#10151B] h-screen">
        <div className="text-white mx-4 sm:mx-80">
          <p className="text-center font-medium  text-xl pt-10 sm:text-4xl sm:pt-40">
            🧪 Tajriba sinovlari asosida
          </p>
          <div className="sm:mt-28 mt-2 flex-col sm:flex-row flex justify-between">
            <div className="sm:space-y-4 space-y-2">
              <p className="text-lg sm:text-4xl">Coders War platformasi tajriba-sinovlar</p>
              <p className="text-[#E5E5E5] sm:w-[356px]">
                Coders War platformasi pedagogik tajriba-sinovlar asosida
                loyihalashtirilgan. Platformaning samaradorligi amaliy o‘quv
                jarayonida testdan o‘tkazilgan, natijalar esa talabalarning
                motivatsiyasi va bilim o‘zlashtirish darajasida sezilarli ijobiy
                o‘sishni ko‘rsatgan. Bu platformaning ilmiy asoslangan va
                ishonchli metodik vosita ekanini tasdiqlaydi.
              </p>
              <a href="#" className="flex gap-2 cursor-pointer items-center">
                {" "}
                <p>Learn more</p> <img src={arrow} alt="arrow left" width={20} height={20} />
              </a>
            </div>
            <div className="">
              <img
                src={Adiv6}
                alt="hero algori 6"
                width={422}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
