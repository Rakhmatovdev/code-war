import { useState } from 'react';
import { useParams } from 'react-router';
import Squest from '../../../public/outline/squest.png';
import AuthService from '../../config/service/auth.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CSharpEmbed from '../mquest/Jdodge';

const SQDetail = () => {
  const { id } = useParams();
  const [code, setCode] = useState("");
  const queryClient = useQueryClient();

  const { data: task, isLoading, error } = useQuery({
    queryKey: ["assignment", id],
    queryFn: () => AuthService.getAssignmentById(id!),
    enabled: !!id,
  });

 const {mutate} = useMutation({
  mutationKey: ["finishAssignment", id],
  mutationFn: ({ id, code }: { id: string; code: string }) =>
    AuthService.postAssignment(id, code),
  onSuccess: () => {
   queryClient.invalidateQueries({
      queryKey: ["assignment", id],
      exact: true,
    });
  },
  onError: (err) => {
    console.error("Yakunlashda xato:", err);
  },
});


  const handleFinish = () => {
    if (!task) return;
   mutate({ id: id!, code })
  };

  if (isLoading) return <div className="text-white p-10">Yuklanmoqda...</div>;
  if (error || !task) return <div className="text-red-500 p-10">Xatolik yuz berdi yoki topshiriq topilmadi</div>;

  return (
    <section className="">
      <img
        src={Squest}
        loading="lazy"
        alt="side quest"
        className="-z-10 absolute top-0 w-full h-screen"
      />
      <div className="relative bg-cover bg-center h-[calc(80vh-80px)] sm:h-[calc(70vh-120px)]">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* LEFT */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 text-white relative">
              <div className="absolute top-1 sm:top-4 -z-10 left-4 sm:left-10 bg-[#3D6560] sm:px-6 px-3 py-1.5 sm:py-1 rounded-2xl sm:rounded-3xl text-center">
                <p className="sm:text-lg italic">{task.id}‑topshiriq</p>
                <p className="text-[10px] sm:text-xs">({task.points} ball)</p>
              </div>
              <h1 className="mt-6 text-xl z-20 sm:text-4xl text-center font-semibold">
                {task.title}
              </h1>
              <p className="mt-2 italic text-base sm:text-lg ">
                {task.plan?.title}
              </p>
              <p className="sm:mt-8 text-base leading-relaxed">
                {task.task_description}
              </p>
              <div className="mt-4 text-sm text-gray-300">
                <p><strong>Namuna:</strong></p>
               <div className="flex flex-row sm:flex-col gap-4"> <p><em>Kirish:</em> <pre>{task.sample_input}</pre></p>
                <p><em>Chiqish:</em> <pre>{task.expected_output}</pre></p></div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-8 flex flex-col">
              <textarea
                className="flex-1 bg-white/10 text-white rounded-lg p-4 font-mono text-sm resize-none focus:outline-none"
                value={code}
                rows={10}
                placeholder='// Bu yerga kod yozing...'
                onChange={(e) => setCode(e.target.value)}
              />
              <div className="mt-8 sm:mt-24 flex flex-row gap-4 justify-end">
                
                <button
                  className="w-full sm:w-auto text-white px-6 py-3 bg-[#3D6560] rounded-2xl text-lg italic hover:bg-[#346257] transition"
                  onClick={handleFinish}
                >
                  Yakunlash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </section>
  );
};

export default SQDetail;
