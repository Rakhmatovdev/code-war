import home from "../../../public/home.png";
import refresh from "../../../public/svg/refresh.svg";
import like from "../../../public/svg/like.svg";
import { mockComments } from "../../utils/mock";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../config/service/auth.service";
import { format } from 'date-fns';


const Home = () => {

  const { data } = useQuery({
      queryKey: ["data"],
      queryFn: () =>AuthService.getContent('home'),
    
  })
  const { data:comment } = useQuery({
      queryKey: ["comments"],
      queryFn: () =>AuthService.getComments({page:1, page_size: 4}),
  });
  console.log(data);
  console.log(comment);
  

  return (
    <div>
      <section className="h-[calc(50vw-215px)] ">
        <div className="flex justify-end">
          <div className="w-[500px] mx-4 sm:mx-16">
            <h1 className="text-white text-base sm:text-2xl 2xl:text-4xl font-bold">
              ⚔️ Coders War haqida
            </h1>
            <p className="text-white text-xs sm:text-xl  mt-4">
              Coders War — bu dasturlash olamiga qadam qo‘ygan talabalar uchun
              mo‘ljallangan epik ta’limiy platforma. Bu yerda siz faqat talaba
              emassiz — siz jang maydonidagi qahramonsiz, siz uchun qurol – bu
              bilim, qalqon – bu mantiq, zirh – bu mashaqqat!
            </p>
          </div>
          <img
            src={home}
            loading="lazy"
            alt="home"
            className="-z-10 absolute top-0 w-full h-[500px] sm:h-screen "
          />
          {/* <div className="absolute bottom-80  sm:bottom-10  flex justify-center items-center  w-full gap-2">
           
            <div className="h-4 w-4 bg-[#C37D41]"/>
            <div className="h-4 w-4 bg-[#e6ceb8]"/></div> */}
     
        </div>
      </section>
      <section>
        <div className="mt-96 sm:mt-10 sm:mx-20 mx-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-4 2xl:gap-[47px] gap-10 sm:gap-20 ">
            {mockComments.map((comment) => (<div key={comment?.id} className="border p-[26px] bg-[#473631] rounded-xl sm:rounded-3xl">
             <div className="flex gap-4">
                <div className="">
                    <img src={comment.image} alt={comment?.name} className="w-14 h-14 rounded-full"/>
                </div>
                <div className="">
                    <p className="line-clamp-1 2xl:text-[21px]">{comment?.name}</p>
                    <p className="text-[#C2C4FA] cursor-pointer">{comment?.social}</p>
                </div>
             </div>
             <p className="line-clamp-3 2xl:mt-2.5">
              {comment?.text}
             </p>
                <p className="text-sm mt-2.5 2xl:mt-4 text-[#C2C4FA]">
                  {comment?.createdAt}
                </p>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2 items-center"><img src={refresh} alt="refresh" /> <p>{comment?.refresh>0?comment?.refresh:""}</p></div>
                      <div className="flex gap-2 items-center"><img src={like} alt="like" /> <p>{comment?.likes>0?comment.likes:""}</p></div>
                    </div>
            </div>))}
          </div>
          <div className="">
            <p className="text-center text-[#473631] mt-[60px] sm:mt-[100px] 2xl:mt-[141px] text-2xl 2xl:text-3xl font-medium">O’qituvchilar fikrlari</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 2xl:gap-[47px] sm:gap-20 gap-10 sm:mt-[53px] mt-10 ">
            {comment?.results?.map((comment) => (<div key={comment?.id} className="border p-[26px] bg-[#473631] rounded-xl sm:rounded-3xl">
             <div className="flex gap-4">
                <div className="">
                   {comment.user_profile_image? <img src={comment.user_profile_image} alt={comment?.user_full_name} className="w-14 h-14 rounded-full"/>:<div className="w-14 h-14 rounded-full bg-slate-500 flex justify-center items-center">{comment?.user_full_name[0]}</div>}
                </div>
                <div className="">
                    <p className="line-clamp-1 2xl:text-[21px]">{comment?.user_full_name}</p>
                    {/* <p className="text-[#C2C4FA] cursor-pointer">{comment?.social}</p> */}
                </div>
             </div>
             <p className="line-clamp-3 2xl:mt-2.5">
              {comment?.text}
             </p>
                <p className="text-sm mt-2.5 2xl:mt-4 text-[#C2C4FA]">
              {  format(comment.created_at, 'h:mm a · MMM dd, yyyy')}
                </p>
                    <div className="flex items-center gap-4 mt-2">
                      {/* <div className="flex gap-2 items-center"><img src={refresh} alt="refresh" /> <p>{comment?.refresh>0?comment?.refresh:""}</p></div> */}
                      {/* <div className="flex gap-2 items-center"><img src={like} alt="like" /> <p>{comment?.likes>0?comment.likes:""}</p></div> */}
                    </div>
            </div>))}
          </div>
          </div>
        </div>
      </section>

  <section>
    <div className="mt-10 sm:mx-20 mx-4 text-[#0F1427]">
       {data?.map((review,index) => (<div key={review?.id} className={`flex  ${index%2==0?"sm:flex-row":"sm:flex-row-reverse"} items-center justify-between flex-col gap-4 sm:mt-[100px] mt-[60px]`}>
        <div className="">
          <h2 className="text-base sm:text-2xl 2xl:text-4xl">{review.title}</h2>
          <p className="sm:text-base text-xs font-medium mt-4 max-w-xl">{review?.text}</p>
          {/* <div className="max-w-xs text-xs sm:text-sm">
           {review?.texts.map((text,index) => (<li key={index} className="mt-2.5">{text}</li>))}
          </div> */}
        </div>
        <div className="">
          <img src={review?.image} alt="review" className="sm:w-[911px] sm:h-[521px]  object-cover rounded-xl sm:rounded-3xl " width={911} height={521}/>
        </div>
       </div>))}
    </div>
  </section>
    </div>
  );
};

export default Home;
