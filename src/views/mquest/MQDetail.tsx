import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import AuthService from "../../config/service/auth.service";
import Mquest from "../../../public/outline/mquest.png";
import { convertToEmbedURL } from "../../config/hooks/useEmber";

const MQDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: topic, isLoading, error } = useQuery({
    queryKey: ["topic", id],
    queryFn: () => AuthService.getTopicsById(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xatolik yuz berdi</div>;
const embedURL = convertToEmbedURL(topic?.video_url?? "https://www.youtube.com/watch?v=VIDEO_ID");
  return (
    <div className="text-white">
      <section className="sm:h-[calc(100vh-300px)]">
        <div className="flex">
          <div className="sm:mx-16 mx-4 rounded-xl sm:rounded-3xl w-full bg-[#D9D9D90D] overflow-y-scroll h-[calc(100vh-200px)]">
            <div className="bg-[#C6DCE90D] mt-14 sm:mt-[100px] mx-2 sm:mx-14 rounded-xl sm:rounded-3xl asm:h-[520px] pb-4 relative">
              <div className="absolute sm:-top-10 -top-6 right-2 sm:right-10 py-2 px-4 sm:py-[14px] sm:px-[75px] bg-[#3D6560] inline-block rounded-xl sm:rounded-3xl">
                <p className="text-xs sm:text-xl text-center">{topic?.title}</p>
              </div>
              <div className="sm:mx-16 mx-2 overflow-hidden">
                <p className="text-center sm:pt-14 pt-6 text-base sm:text-2xl font-semibold">
                  {topic?.title}
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
                <div className="mt-10 sm:w-[600px]">
                  {topic?.plans.map((plan) => (
                    <div key={plan.id} className="mt-4">
                      <h3 className="text-lg font-bold">{plan.title}</h3>
                      <p className="mt-2">{plan.text}</p>

                      <h4 className="mt-4 font-semibold">Kod namunalari:</h4>
                      {plan.code_examples?.map((example) => (
                        <pre key={example.id} className="bg-gray-800 p-2 mt-2 rounded">
                          <code>{example.code}</code>
                        </pre>
                      ))}

                      <h4 className="mt-4 font-semibold">Vazifalar:</h4>
                      {plan.assignments?.map((assignment:{id:number | string,task_description:string,expected_output:string}) => (
                        <div key={assignment.id} className="mt-2">
                          <p>{assignment.task_description}</p>
                          <p className="text-sm text-gray-400">
                            Kutilgan natija: {assignment.expected_output}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex sm:mx-16 mx-2 my-6 sm:my-20 items-center justify-end">
              <button className="sm:px-[60px] sm:py-5 px-4 py-2 rounded-xl sm:rounded-3xl text-xs sm:text-2xl bg-[#3D6560]">
                Yakunlash
              </button>
            </div>
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
    </div>
  );
};

export default MQDetail;
