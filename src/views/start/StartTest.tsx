import { useState } from "react";
import StartTestImg from "../../../public/authPic.png";
import { characters } from "../../utils/mock";

const StartTest = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  console.log(selectedCharacter);
  
  const question=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
    {id:11},
    {id:12},
    {id:13},
    {id:14},
  ]

  return (
    <div className="">
      <img
        src={StartTestImg}
        loading="lazy"
        alt="start test"
        className="z-[-1] absolute top-0 w-full h-screen"
      />
   <section className="text-white -z-20   ">
        <div className="sm:mx-16 mx-4">
          <p className="text-center sm:mt-40 mt-20 text-xl sm:text-4xl">Personajingizni tanlang</p>
          <div className="flex  justify-between sm:items-center flex-wrap mt-10 gap-4 sm:mx-16 mx-4">
            {characters.map((user) => (
              <div
                key={user.name}
                onClick={() => setSelectedCharacter(user.name)}
                className={`cursor-pointer rounded-xl p-1 transition-all ${
                  selectedCharacter === user.name
                    ? "ring-4 ring-blue-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={user.photo}
                  alt={user.name}
                  width={200}
                  height={300}
                  className="rounded-lg w-[120px] h-[160px] sm:w-[200px] sm:h-[300px]"
                />
              </div>
            ))}
          </div>




          </div>
      </section>
      <section className=" text-white sm:mt-40 bg-[#080805]">
     {question.map((item)=><div className="" key={item.id}>
         <div className="bg-[#C6DCE90D] rounded-3xl mt-28 pt-[54px] mx-4  sm:mx-16 overflow-y-scroll scroll-smooth">
           <p className="text-center text-xl sm:text-4xl">Kod sehrgarining birinchi qadamlari </p>
           <hr className="h-px border-none mt-3 bg-[#849BF5] mx-4 sm:mx-16" />
           <p className="text-center text-xl sm:text-4xl font-light mt-2">(C# ga kirish: Sintaksis va asosiy tushunchalar)</p>
              <div className="flex gap-10 justify-between items-center mx-16 mt-9 mb-10">
                <p></p>
                <textarea name="" id="" className="min-w-[614px] h-[298px] bg-[#0F1427]"></textarea>
              </div>
        </div>
     </div>)}
     <div className="flex mx-4 sm:mx-16 sm:py-20 py-10 items-center justify-end ">
                  <button className="px-[60px] py-5  rounded-3xl text-xs sm:text-2xl bg-[#3D6560]">Yakunlash</button></div>
           
        </section>  
    </div>
  );
};

export default StartTest;
