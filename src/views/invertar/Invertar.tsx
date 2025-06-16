import InvetarImg from "../../../public/outline/invertar.png";
import zirh from "../../components/users/z1.png"
import qalqon from "../../components/users/qal1.png"
import uzuk from "../../components/users/k1.png"
import qilich from "../../components/users/q1.png"
import etik from "../../components/users/e1.png"
import dubulga from "../../components/users/dub1.png"
import warrior from "../../components/users/warrior.png"

const Invertar = () => {
  const aslaha1=[
    {id:1,photo:zirh,name:"Zirh",text:"Kalkan",power:"100"},
    {id:2,photo:qalqon,name:"Qalqon",text:"Kalkan",power:"100"},
    {id:3,photo:uzuk,name:"Uzuk",text:"Kalkan",power:"100"},
  ]
  const aslaha2=[
    {id:1,photo:dubulga,name:"Dubulga",text:"Kalkan",power:"100"},
    {id:2,photo:etik,name:"Etik",text:"Kalkan",power:"100"},
    {id:3,photo:qilich,name:"Qilich",text:"Kalkan",power:"100"},
  ]

  const history=[
    {id:1,text:"1 - MAVZU",title:"Kod sehrgarining birinchi qadamlari (C# ga kirish: Sintaksis va asosiy tushunchalar)",ball:"+200 ball",color:"#2A635D"},
    {id:2,text:"2 - MAVZU",title:"Kod sehrgarining birinchi qadamlari (C# ga kirish: Sintaksis va asosiy tushunchalar)",ball:"+0 ball",color:"#73757B"},
    {id:3,text:"3 - DUEL",title:"Umarzoda Shohruh",ball:"-110 ball",color:"#8D432C"},
    {id:4,text:"12 - topshiriq",title:"Birinchi qadamlari (C# ga kirish: Sintaksis va asosiy tushunchalar)",ball:"+ sehirli uzuk",color:"#2A635D"},
  ]
  return (
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
          <div className="h-full flex flex-col justify-between">
         {aslaha1.map((item)=>(<div key={item.id} className="">
          <img src={item.photo} alt={item.text} width={125} height={125}/>
         </div>))}
          </div>
          <div className="">
            <img src={warrior} alt="warrior" width={354} height={531}/>
          </div>
          <div className="h-full flex flex-col justify-between">
          {aslaha2.map((item)=>(<div key={item.id} className="">
          <img src={item.photo} alt={item.text} width={125} height={125}/>
          </div>))}
          </div>
          </div>
        </div>
      </section>
      <div className=" sm:pb-20 pb-5 sm:px-16 px-4 text-white pt-80 sm:pt-64 2xl:pt-10 ">
           <div className="sm:mx-16">
            <p className="text-center sm:py-12 py-3 text-xl font-medium  sm:text-4xl">History</p>
            <div className="space-y-4 sm:space-y-7">
              {history.map((item)=>(<div key={item.id} className="flex rounded-xl sm:rounded-2xl  text-base 2xl:text-lg    items-end  sm:items-center justify-between p-7 border border-[#D9D9D90D] bg-red-500" style={{backgroundColor:item.color}} >
                <div className="flex gap-1 items-center flex-col sm:flex-row">
                  <p className="text-sm sm:text-base ">{item.text} : </p>
                  <p className="text-sm sm:text-base">{item.title}</p>
                </div>
                <p className="text-sm sm:text-base">{item.ball}</p>
              </div>))}
            </div>
           </div>
      </div>
    </div>
  )
}

export default Invertar