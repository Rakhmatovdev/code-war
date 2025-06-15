import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import AuthService from "../../config/service/auth.service";
import Mquest from "../../../public/outline/mquest.png";
import { convertToEmbedURL } from "../../config/hooks/useEmber";
import { Clipboard, Check } from "lucide-react";
import { useState } from "react";
import JDoodleEmbed from "./Jdodge";

const Plan = () => {
  const { pid,id: openId } = useParams<{ pid: string,id:string }>();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedId(id);

        setTimeout(() => {
          setCopiedId(null);
        }, 2000);
      })
      .catch((err) => {
        console.error("Clipboardga yozishda xato:", err);
      });
  };
   const { data: topics } = useQuery({
      queryKey: ['topic', openId],
      queryFn: () => AuthService.getTopicsById(openId),
      enabled: !!openId,
    });
  

  const { data: plan } = useQuery({
    queryKey: ["plans", pid],
    queryFn: () => AuthService.getPlans(pid?? ""),
    enabled: !!pid,
  });

  const {mutate} = useMutation({
    mutationKey: ["finishTasc"],
    mutationFn: ( id:string) =>
      AuthService.postTopics(id),
    onSuccess: () => {
    navigate(`/mquest`)
    },
    onError: (err) => {
      console.error("Yakunlashda xato:", err);
    },
  });

 
 
  const embedURL = convertToEmbedURL(
    plan?.topic_video_url ?? "https://www.youtube.com/watch?v=VIDEO_ID"
  );

    const lastTopicId = topics?.plans[topics?.plans?.length - 1]?.id ;
  const showButton = plan?.id ===  lastTopicId;

const submitPlan=()=>{
mutate(openId??"")
}


  return (
    <div className="text-white ">
      <section className=" sm:h-[calc(100vh-320px)]">
        <div className="flex">
          <div className="sm:mx-16 mx-4 rounded-xl sm:rounded-3xl  sm:pl-44 w-full bg-[#D9D9D90D] overflow-y-scroll scroll-none h-[calc(100vh-200px)]">
            <div className="bg-[#C6DCE90D] mt-14 sm:mt-[100px] mx-2 sm:mx-14 rounded-xl sm:rounded-3xl asm:h-[520px] pb-4 relative">
              <div className="absolute sm:-top-10 -top-6 right-2 sm:right-10 py-2 px-4 sm:py-[14px] sm:px-[75px] bg-[#3D6560] inline-block rounded-xl sm:rounded-3xl">
                <p className="text-xs sm:text-xl ">
                  {plan?.title}
                </p>
              </div>
              <div className="sm:mx-16 mx-2 overflow-hidden">
                <p className=" sm:pt-14 pt-6 text-base sm:text-xl font-semibold">
                 {plan?.text
    ?.split(/\r?\n/)
    .map((line:string, i:number, arr:[]) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ))}
                </p>
                <hr className="border-none h-px bg-[#849BF5] my-3" />
                <iframe
                  width="100%"
                  height="315"
                  src={embedURL || "https://www.youtube.com/embed/VIDEO_ID"}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  className="h-[360px] sm:h-[460px] "
                ></iframe>
                <div className="mt-10 ">
                  {plan?.code_examples.map((code: any) => (
                    <div
                      key={code.id}
                      className="mt-4 border w-full p-4 rounded-lg border-[#1f2937] shadow-md"
                    >
                      {/* <p className="mt-2">{code?.code}</p> */}
                      <h4 className="mt-4 font-semibold">Kod namunalari:</h4>

                      {plan.code_examples?.map((example: any) => (
                        <div
                          key={example.id}
                          className="relative bg-[#1f2937] p-4 mt-2 rounded-md shadow"
                        >
                          {/* Nusxa olish tugmasi */}
                          <button
                            onClick={() =>
                              handleCopy(example?.id, example.code)
                            }
                            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700 transition-colors"
                          >
                            {copiedId === example.id ? (
                              <Check className="w-5 h-5 text-green-400" />
                            ) : (
                              <Clipboard className="w-5 h-5 text-gray-400 hover:text-white" />
                            )}
                          </button>

                          <pre className="overflow-x-auto">
                            <code className="text-sm text-gray-100 whitespace-pre-wrap">
                              {example.code}
                            </code>
                          </pre>

                          {copiedId === example.id && (
                            <span className="absolute top-2 right-10 text-xs bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                              Copied!
                            </span>
                          )}
                        </div>
                      ))}
                      <h3 className="text-lg font-bold mt-4">
                        {" "}
                        Result: {code?.result}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <JDoodleEmbed />
           {showButton  && <div className="flex sm:mx-16 mx-2 my-6 sm:my-20 items-center justify-end">
              <button className="sm:px-[60px] sm:py-5 px-4 py-2 rounded-xl sm:rounded-3xl text-xs sm:text-2xl bg-[#3D6560]" onClick={submitPlan}>
                Yakunlash
              </button>
            </div>}
          </div>
          <img
            src={Mquest}
            loading="lazy"
            alt="main quest"
            className="-z-10 absolute top-0 w-full h-screen"
          />
        </div>
      </section>
      <section className="bg-[#060D0F] sm:h-[15vh]"></section>
      <div className="p-10 bg-black"></div>
    </div>
  );
};

export default Plan;
