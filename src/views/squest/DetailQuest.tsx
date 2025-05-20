import Squest from "../../../public/outline/squest.png";

const TopshiriqDetail = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Squest})` }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row bg-white/10 rounded-3xl overflow-hidden shadow-lg">
          
          
          <div className="w-full lg:w-1/2 p-8 md:p-12 text-white">
           
            <div className="absolute top-0 right-0 mt-6 mr-6 bg-[#3D6560] px-6 py-3 rounded-full text-center">
              <p className="text-lg italic">1‑topshiriq</p>
              <p className="text-xs">(+oddiy etik, 18%)</p>
            </div>

            
            <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Kod sehrgarining birinchi qadamlari
            </h1>
            <p className="mt-2 italic text-base sm:text-lg">
              (C# ga kirish: Sintaksis va asosiy tushunchalar)
            </p>

            {/* description */}
            <p className="mt-8 text-sm sm:text-base leading-relaxed">
              asd asd adas das das asd as
            </p>
          </div>

          {/* RIGHT COLUMN: Code + Buttons */}
          <div className="w-full lg:w-1/2 bg-[#0A0C18] p-4 sm:p-8 md:p-12 flex flex-col">
            {/* code editor mock */}
            <div className="flex-1 bg-[#0C0F19] rounded-lg overflow-auto h-48 sm:h-64 md:h-80">
              {/* Your code editor or <pre> goes here */}
            </div>

            {/* buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              <button className="w-full sm:w-auto px-6 py-3 bg-[#3D6560] rounded-2xl text-lg italic hover:bg-[#346257] transition">
                tekshirish
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-[#3D6560] rounded-2xl text-lg italic hover:bg-[#346257] transition">
                yakunlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopshiriqDetail;
