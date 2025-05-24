import InvetarImg from "../../../public/outline/invertar.png";

const Profile = () => {


  return (
    <div>
         <section className="h-[calc(50vw-285px)] ">
        <div className="flex justify-end">
          <img
            src={InvetarImg}
            loading="lazy"
            alt="Profile"
            className="-z-10 absolute top-0 w-full h-screen"
          />
         
        </div>
        <div className="flex sm:p-12 mt-4 mx-4  sm:mx-16">
          {/* <div className="bg-[#D9D9D90D] mx-auto flex p-3 sm:p-12 sm:gap-14 rounded-xl sm:rounded-3xl">
        
          </div> */}
        </div>
      </section>
      {/* <div className="bg-[#101723] sm:pb-20 pb-5 sm:px-16 px-4 text-white pt-80 sm:pt-64 2xl:pt-10 ">
           
      </div> */}
    </div>
  )
}

export default Profile