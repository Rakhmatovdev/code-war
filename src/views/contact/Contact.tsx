import ContactImg from "../../../public/outline/contact.png";
const Contact = () => {
  return (
    <div>
         <section className="h-[calc(50vw-216px)] ">
              <div className="flex justify-center">
                <div className="sm:w-[774px] mx-2 sm:mx-16">
             <textarea cols={4}  className="bg-[#D9D9D96E] text-white w-[340px] sm:w-[774px] p-4 rounded-xl h-[360px] sm:rounded-3xl   sm:h-[341px]"/>  
            <div className="flex justify-end  w-full mt-14">
            <button className="sm:px-14 sm:py-5 px-4 py-2 bg-white sm:text-lg rounded-xl sm:rounded-3xl ">
             Izoh qoldirish
                </button>   
            </div>
                </div>
                <img
                  src={ContactImg}
                  alt="contact"
                  loading="lazy"
                  className="-z-10 absolute top-0 w-full h-screen "
                />
                <div className="absolute bottom-10   flex justify-center items-center  w-full gap-2">
                  </div>
              </div>
            </section>
    </div>
  )
}

export default Contact