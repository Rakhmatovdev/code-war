import { Link } from "react-router";
import helpImg from "../../../public/outline/help.png";
import { aslaxar1, aslaxar2, characters, ratings } from "../../utils/mock";
const Help = () => {
  return (
    <div>
      <section className="sm:h-[calc(50vw-215px)] h-[calc(100vh-210px)]  ">
        <div className="flex justify-end">
          <img
            src={helpImg}
            alt="help"
            loading="lazy"
            className="-z-10 absolute top-0 w-full h-screen "
          />
        </div>
        <div className="sm:mx-16 mx-4 py-10 sm:py-16 mt-24 sm:mt-[300px] h-screen bg-[#D9D9D914] rounded-t-xl sm:rounded-t-3xl text-white ">
          <div className="mx-4 sm:mx-16">
            <p className="text-center text-xl sm:text-5xl">Darajalar</p>
            <hr className="border-none h-px bg-white mt-4 opacity-75" />
            <div className="mt-3  space-y-2">
              {ratings.map((item) => (
                <div key={item.id} className="flex sm:gap-4 gap-2 items-center">
                  <div className="">
                    <img
                      src={item.photo}
                      className="rounded-xl w-[40px] h-[40px] sm:w-[100px] sm:h-[98px]  sm:rounded-2xl "
                      width={100}
                      height={98}
                      alt={item.title}
                    />
                  </div>
                  <div className="text-xs sm:text-3xl">
                    {item.title}: {item.rank}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#100A05]  ">
        <div className=" sm:mt-52 mt-10 ">
          <div className="sm:mx-16 mx-4  bg-[#D9D9D914] 2xl:pt-[320px] sm:pt-[600px] pb-40 text-white">
            <div className="sm:mx-16 mx-4">
              <hr className="border-none h-px bg-white sm:mt-4 opacity-75" />
              <div className="flex  justify-between  ">
                <div className="flex-col flex sm:space-y-6 space-y-4 sm:mt-12 mt-3">
                  {aslaxar1.map((item) => (
                    <div key={item.id} className="flex sm:gap-4 gap-2  items-center">
                      <div className="">
                        <img src={item.photo} alt={item.name} width={100} height={100}/>
                      </div>
                      <div className="">
                        <p className="sm:text-3xl text-base font-medium">{item.name}</p>
                        <p className="sm:w-[200px] text-[8px] sm:text-xs mt-1">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-col flex sm:space-y-6 space-y-4 sm:mt-12 mt-3">
                  {aslaxar2.map((item) => (
                    <div key={item.id} className="flex sm:gap-4 gap-2  items-center">
                      <div className="">
                        <img src={item.photo} alt={item.name} width={100} height={100} />
                      </div>
                      <div className="">
                        <p className="sm:text-3xl text-base font-medium">{item.name}</p>
                        <p className="sm:w-[200px] text-[8px] sm:text-xs mt-1">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-none h-px bg-white mt-16 sm:mt-[159px] opacity-75" />

              <div className="sm:mt-[100px] mt-10 space-y-4 sm:space-y-12">
                {characters.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex justify-between  items-center ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    } ${index == 0 ? "sm:ml-40" : ""}`}
                  >
                    <div className="">
                      <img
                        src={item.photo}
                        width={200}
                        height={300}
                        alt={item.name}
                      />
                    </div>
                    <div className=" text-center">
                      <p className="sm:text-lg text-sm">{item.name}</p>
                      <p className="sm:w-[434px] mt-2 text-xs sm:text-base">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-none h-px bg-white mt-10 sm:mt-[159px] opacity-75" />
              <div className="mx-4 space-y-4 mt-10 sm:mt-12">
                <div className="">
        <p className="text-base sm:text-xl">🛡️ CODERS WAR — Duel Qonuniyatlari</p>
        <p className="sm:text-lg">1. Duelga chaqirish shartlari:</p>
        <li className="myli">Duel uchun talabalar darajasi o‘zaro juda keskin farq qilmasligi kerak.</li>
        <li className="my-li">Ruxsat beriladigan farq:</li>
        <div className="mx-4">
          <li className="myli">Masalan, faqat qo‘shni darajalarda duel qilish mumkin.</li>
          <li className="myli">Rekrut faqat Rekrut yoki Straj darajadagi raqibga,</li>
          <li className="myli">Ritsar faqat Straj, Ritsar yoki Geroi darajadagi raqibga,</li>
          <li className="myli">Titan faqat Bojestvo, Titan darajalarga duel e'lon qilishi mumkin.</li>
        </div>
        <p className="myli">✅ Shunday qilib, katta darajaviy adolatsizlik oldi olinadi.</p>
                </div>

                <div className="">
                  <p className="sm:text-lg">2. Duelda ball o‘zgarishi:</p>
                  <div className="mx-4">
                    <p className="myli">Yutgan - O‘zining umumiy ballining 1% ni qo‘lga kiritadi.</p>
                    <p className="myli">Yutqazgan -  O‘zining umumiy ballining 1% ni yo‘qotadi.</p>
                  </div>
                  <li className="myli">Misol: Agar talabada 1000 ball bo‘lsa:</li>
                  <p className="mx-4">
                    <li className="myli">Yutganida ➔ 10 ball oladi (1%).</li>
                    <li className="myli">Yutqazganda ➔ 10 ball yo'qotadi (1%).</li>
                  </p>
                </div>

                <div className="">
                  <p className="sm:text-lg">3. Qurollar ta'siri (epikirovkalar ta'siri):</p>
                  <p className="myli">Duel natijasidagi 1% ball ustiga yoki kamaytirishga epikirovkalar ta’sir qiladi:</p>
                  <p className="myli">Oddiy qilich - Yutganda oladigan ballga +10% qo‘shiladi</p>
                  <p className="myli">Yog‘och qalqon  - Yutqazganda yo‘qotiladigan ball -5% kamayadi</p>
                  <p className="myli">Po‘lat qilich  - Yutganda oladigan ballga +15% qo‘shiladi</p>
                  <p className="myli">Temir qalqon - -Yutqazganda yo‘qotiladigan ball -10% kamayadi</p>
                  <p className="myli">Afsonaviy qilich - Yutganda oladigan ballga +20% qo‘shiladi</p>
                  <p className="myli">Qahramon qalqoni - Yutqazganda yo‘qotiladigan ball -15% kamayadi</p>
                  <p className="myli">✅ Qurol va qalqon kombinatsiyasi bir vaqtda ishlaydi.</p>
                </div>
                <div className="space-y-2 ">
                  <div className="1">
                  <p className="sm:text-lg">4. Duel natijasini hisoblash formulasi:</p>
                  <p className="myli">Yutgan talaba uchun: Yakuniy Ball = (Umumiy ball * 1%) + (Qurol ta'siri)</p>
                  <p className="myli">Yutqazgan talaba uchun: Yakuniy Ball = (Umumiy ball * 1%) - (Qalqon ta'siri)</p>
                  </div>
                  <div className="2 ">
                  <p className="myli">Agar ikkala talaba ham qurollarga ega bo‘lsa, ularning effektlari quyidagicha ishlaydi:</p>
                  <div className="">
                    <li className="myli">Yutgan talabaning qilich ta'siri oladigan ballni oshiradi.</li>
                    <li className="myli">Yutqazgan talabaning qalqon ta'siri yo'qotiladigan ballni kamaytiradi.</li>
                  </div>
                  </div>
                  <div className="3">
                  <p className="myli">🧮 Misol:</p>
                  <div className="">
                    <li className="myli">Talaba A: 1000 ball, Oddiy qilich (yutadi).</li>
                    <li className="myli">Talaba B: 1200 ball, Yog‘och qalqon (yutqazadi).</li>
                  </div>
                  </div>
                  <div className="4">
                  <p className="myli">Hisoblash:</p>
                  <div className="">
                    <li className="myli">A 1% ball: 1000 × 1% = 10 ball</li>
                    <li className="myli">A qilich bonusi: 10 ball × 10% = 1 ball</li>
                    <li className="myli">A umumiy oladigan ball = 10 + 1 = 11 ball</li>
                    <li className="myli">B 1% ball: 1200 × 1% = 12 ball</li>
                    <li className="myli">B qalqon bonusi: 12 ball × 5% = 0.6 ball</li>
                    <li className="myli">B umumiy yo'qotadigan ball = 12 - 0.6 = 11.4 ball</li>
                  </div>
                  </div>
                  <div className="5">
                  <p className="myli">✅ Natija:</p>
                  <div className="">
                    <li className="myli">Talaba A +11 ball oladi,</li>
                    <li className="myli">Talaba B -11.4 ball yo'qotadi.</li>
                  </div>
                  </div>
                  <div className="6">
                  <p className="myli">🔥 Duel Mexanizmi Umumiy Ko‘rinishi:</p>
                 <ol>1. Talabalar duelga chaqiriladi (darajalar yaqin bo'lishi shart).</ol>
                  <ol>2. Duel natijasida yutgan va yutqazgan aniqlanadi.</ol>
                  <ol>3. Yutgan 1% + qilich bonusini oladi.</ol>
                  <ol>4. Yutqazgan 1% - qalqon bonusini yo'qotadi.</ol>
                  <ol>5. Ball yangilanadi va darajalar tekshiriladi.</ol>
                  <ol>6. Dueldan keyin mukofotlar va statistika yangilanadi.</ol>
                 
                  </div>
                </div>
              </div>
              <hr className="border-none h-px bg-white mt-10 sm:mt-[80px] opacity-75" />
              <div className="mx-4 space-y-4 mt-10 sm:mt-12">
                  <div className="">
                    <p className="sm:text-xl font-medium">🛡️ CODERS WAR — Epikirovka Qonuniyati</p>
                  </div>
                  <div className="mt-4">
                    <p className="m:stext-lg">1. Epikirovka avtomatik almashtirish qonuni:</p>
                    <div className="">
                      <li className="myli">Agar talabaning epikirovkasida past darajadagi qurol (masalan, Oddiy qilich) bo‘lsa </li>
                      <div className="mx-4">
                        <p className="myli">va u duelda yuqori darajadagi qurol (masalan, Po‘lat qilich) yutib olsa:</p>
                        <li className="myli">Yangi yutib olingan qurol eski qurol o‘rniga avtomatik ravishda almashtiriladi.</li>
                        <li className="myli">Talabaga maxsus xabar yuboriladi:</li>
                        <li className="myli">🎉 Tabriklaymiz! Siz Po‘lat qilichni yutib oldingiz! Oddiy qilich avtomatik Po‘lat </li>
                        <p className="mx-4">qilich bilan almashtirildi.</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="myli">✅ Talaba eski pastroq qurolni ushlab turolmaydi, doim kuchlirog‘ini egallaydi.</p>
                  </div>
                  <div className="">
                    <p className="sm:text-lg">2. Personaj turiga qarab epikirovka cheklovlari:</p>
                    <p className="myli">🎯 Jangchi, Ritsar, Lady Knight uchun: Ruxsat etilgan epikirovkalarQilichlar (Oddiy,</p>
                    <p className="myli">Po‘lat, Afsonaviy qilich)Qalqonlar (Yog‘och, Temir, Qahramon qalqoni) Zirh (Kamzul,</p>
                    <p className="myli">Bronya)Dubulg‘aEtik (Oddiy yoki Qirol sapogi)Uzuklar</p>
                    <p className="myli">❗ Nayza yoki Sehrli tayoq ishlatishlari taqiqlangan!</p>
                  </div>
                  <div className="">
                    <p className="myli">🎯 Sarguzashtchi (Ranger) uchun: Ruxsat etilgan epikirovkalar Nayzalar (Yengil, Og‘ir,</p>
                    <p className="myli">Imperial) Qalqonlar Zirh Dubulg‘a Etik Uzuklar</p>
                    <p className="myli">❗ Qilich va Sehrli tayoq ishlatishlari taqiqlangan!</p>
                  </div>
                  <div className="">
                    <p className="myli">🎯 Sehrgar Ayol (Sorceress) uchun:</p>
                    <p className="myli">Ruxsat etilgan epikirovkalarSehrli tayoqlar (Oddiy, Qirol </p>
                    <p className="myli">tayoqchasi)QalqonlarZirhDubulg‘aEtikUzuklar</p>
                    <p className="myli">❗ Qilich va Nayza ishlatishlari taqiqlangan!</p>
                  </div>
                  <div className="">
                    <p className="myli">🧠 Epikirovka ushlab turish qoidalari:</p>
                    <li className="myli">Agar talaba o‘z turiga mos kelmaydigan epikirovkani yutsa:</li>
                    <div className="mx-4">
                      <li className="myli">Bu inventoryda saqlanmaydi.</li>
                      <li className="myli">Xabar yuboriladi:</li>
                      <li className="myli">⚔️ Siz Sehrli tayoqni yutdingiz, lekin Jangchi turida bu qurolni ishlata olmaysiz. </li>
                      <p className="mx-4">Epikirovka saqlanmagan.</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="myli">✅ Shunday qilib, o‘yin realizmi saqlanadi va har bir personaj faqat o‘z turiga mos </p>
                    <p className="myli">epikirovkalarni ishlatadi.</p>
                  </div>
                  <div className="">
                    <p className="myli">🧮 Misollar:</p>
                    <p className="myli">HolatNatijaJangchi Oddiy qilich bilan yuradi, Po‘lat qilich yutadiOddiy qilich o‘rniga </p>
                    <p className="myli">Po‘lat qilich avtomatik almashtiriladiLady Knight Sehrli tayoq yutadiSehrli tayoqni ishlata </p>
                    <p className="myli">olmaydi, mukofot saqlanmaydiSarguzashtchi Og‘ir nayza yutadiNayzani qabul qiladi va</p>
                    <p className="myli">foydalanadiSehrgar ayol Afsonaviy qilich yutadiQilichdan foydalana olmaydi, mukofot </p>
                    <p className="myli">bekor qilinadi</p>
                  </div>
                  <div className="">
                    <p className="myli">🔥 CODERS WAR Epikirovka Qonuni Tizimiy Ko‘rinish:</p>
                    <p className="myli">1. Duel yakunida epikirovka yutib olinganmi?</p>
                    <p className="myli">2. Talaba personaji qaysi turga tegishli?</p>
                    <p className="myli">3. Yangi epikirovka shu turga mosmi? </p>
                    <p className="myli">- Ha ➔ Inventarga qo‘shiladi. </p>
                    <p className="myli">- Yo‘q ➔ Inventarga qo‘shilmaydi, bildirishnoma yuboriladi.</p>
                    <p className="myli">4. Agar yangi epikirovka darajasi yuqori bo‘lsa: </p>
                    <p className="myli">- Eski epikirovkani avtomatik almashtiradi. - Bildirishnoma yuboriladi.</p>
                  </div>
                  <Link to={'/'} className="fixed sm:top-10 top-6 right-2 sm:right-10 py-2 px-4  sm:py-[14px] sm:px-[75px] bg-[#3D6560] inline-block rounded-xl sm:rounded-3xl">
                          <p className="text-xs sm:text-xl text-center">GO HOME</p>
                          <p className="text-xs sm:text-base"></p>
                         </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
