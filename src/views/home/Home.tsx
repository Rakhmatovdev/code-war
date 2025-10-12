import home from "../../../public/user/home.png";
import like from "../../components/icons/like.svg";
import eyemyo from "../../components/icons/eyeo.svg";
import { useQuery } from "@tanstack/react-query";
import AuthService from "../../service/auth.service";
import { format } from 'date-fns';
import { useState } from "react";


const Home = () => {

  const { data } = useQuery({
      queryKey: ["data"],
      queryFn: () =>AuthService.getContent('home'),
    
  })
 const [page, setPage] = useState(1)
const pageSize = 4
  const { data:comments ,isPending} = useQuery({
      queryKey: ["comments",page],
      queryFn: () =>AuthService.getComments({ page, page_size: pageSize }), 
      enabled: !!data,
  });
  console.log(data);
  console.log(comments);


  return (
    <div>
      <section className="h-[calc(50vw-215px)] ">
        <div className="flex justify-end">
          <div className="w-[500px] mx-4 sm:mx-16">
            <h1 className="text-white text-base sm:text-2xl 2xl:text-4xl font-bold">
              ⚔️ Coders War haqida
            </h1>
            <p className="text-white text-xs sm:text-xl  mt-4 font-roboto">
              Coders War — bu dasturlash olamiga qadam qo‘ygan talabalar uchun
              mo‘ljallangan epik ta’limiy platforma. Bu yerda siz faqat talaba
              emassiz — siz jang maydonidagi qahramonsiz, siz uchun qurol – bu
              bilim, qalqon – bu mantiq, zirh – bu mashaqqat!
            </p>
          </div>
            <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={home}
          loading="lazy"
          alt="start test background"
          className="w-full h-full object-cover"
        />
      </div>
        </div>
      </section>
      <section>
        <div className="mt-96 sm:mt-10 sm:mx-20 mx-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-4 2xl:gap-[47px] gap-10 sm:gap-20 ">
          </div>
          <div className="">
            <p className="text-center text-[#473631] mt-[60px] sm:mt-[100px] 2xl:mt-[141px] text-2xl 2xl:text-3xl font-medium text-white font-roboto">O'qituvchilar fikrlari</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 2xl:gap-[47px] sm:gap-20 gap-4 sm:mt-[53px] mt-10 ">
          {isPending?( <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-20 mt-10">
    {Array(pageSize).fill(0).map((_, i) => (
      <div
        key={i}
        className="border p-6 bg-[#473631] rounded-xl animate-pulse"
      >
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-500" />
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-500 rounded w-1/2" />
            <div className="h-3 bg-gray-500 rounded w-1/3" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-500 rounded" />
          <div className="h-4 bg-gray-500 rounded w-5/6" />
          <div className="h-4 bg-gray-500 rounded w-2/3" />
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-6 h-6 bg-gray-500 rounded" />
          <div className="w-6 h-6 bg-gray-500 rounded" />
        </div>
      </div>
    ))}
  </div>):comments?.results?.map((comment) => (<div key={comment?.id} className="border p-[26px] bg-[#473631] rounded-xl sm:rounded-3xl">
             <div className="flex  gap-4">
                <div className="font-roboto">
              {comment?.user_profile_image? <img src={comment?.user_profile_image} alt={comment?.user_full_name} className="w-14 h-14 rounded-full"/>:<div className="w-14 h-14 rounded-full bg-slate-500 flex justify-center items-center">{comment?.user_full_name[0]}</div>}
                </div>
                <div className="">
                    <p className="line-clamp-1 2xl:text-[21px]">{comment?.user_full_name}</p>
                    {/* <p className="text-[#C2C4FA] cursor-pointer">{comment?.social}</p> */}
                </div>
             </div>
             <p className="line-clamp-3 2xl:mt-2.5 font-roboto">
              {comment?.text}
             </p>
                <p className="text-sm mt-2.5 2xl:mt-4 text-[#C2C4FA]">
              {  format(comment?.created_at, 'h:mm a · MMM dd, yyyy')}
                </p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex gap-2 items-center"><img src={eyemyo} alt="refresh" /> <p>{comment?.views>0?comment?.views:""}</p></div>
                      <div className="flex gap-2 items-center"><img src={like} alt="like" /> <p>{comment?.likes>0?comment.likes:""}</p></div>
                    </div>
            </div>))}  
           
          </div>
       <div className="flex flex-col items-center justify-center sm:gap-4 mt-4 sm:mt-8 sm:flex-row text-black">
  <button
    disabled={page === 1}
    onClick={() => setPage(p => Math.max(p - 1, 1))}
    className="w-full sm:w-auto font-roboto disabled:opacity-50 disabled:cursor-not-allowed border px-4 py-2 rounded-lg bg-[#C2C4FA] hover:bg-[#A8A9D6] transition text-sm"
  >
    Prev
  </button>
  <span className="text-white font-roboto text-sm sm:text-base">
    Page {page}
  </span>
  <button
    disabled={page === Math.ceil((comments?.count || 0) / pageSize)}
    onClick={() =>
      setPage(p =>
        comments && p < Math.ceil(comments.count / pageSize) ? p + 1 : p
      )
    }
    className="w-full sm:w-auto font-roboto  disabled:opacity-50 disabled:cursor-not-allowed border px-4 py-2 rounded-lg bg-[#C2C4FA] hover:bg-[#A8A9D6] transition text-sm"
  >
    Next
  </button>
</div>
          </div>
        </div>
      </section>

  <section>
    <div className="mt-10 sm:mx-20 mx-4 text-[#0F1427] mb-10">
       {data?.map((review,index) => (<div key={review?.id} className={`flex  ${index%2==0?"sm:flex-row":"sm:flex-row-reverse"} items-center justify-between flex-col gap-4 sm:mt-[100px] mt-[60px]`}>
        <div className="">
          <h2 className="text-base sm:text-2xl 2xl:text-4xl text-white font-roboto">{review.title}</h2>
          <p className="sm:text-base text-xs font-medium mt-4 max-w-xl text-white font-roboto">{review?.text}</p>
          {/* <div className="max-w-xs text-xs sm:text-sm">
           {review?.texts.map((text,index) => (<li key={index} className="mt-2.5">{text}</li>))}
          </div> */}
        </div>
        <div className="sm:w-[911px] sm:h-[521px]">
          <img src={review?.image} alt="review" className=" w-full h-full object-cover rounded-xl sm:rounded-3xl " width={911} height={521}/>
        </div>
       </div>))}
    </div>
  </section>
    </div>
  );
};

export default Home;