import Image from "next/image";

function Tools() {
  return (
    <section className="sm:pl-[470px] pt-[100px] sm:pr-[55px] w-full mt-[50px]">
      <div>
        <h1 className="text-[20px] text-center sm:text-left sm:text-[30px] text-[#E9E9F1] mb-[50px]">
          My Favorite Tools
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px] sm:flex-nowrap sm:gap-[35px]">
        <div className="border-[0.5px] border-[#303033] w-[130px] h-[130px] sm:w-[200px] sm:h-[180px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1] sm:w-[130px] sm:h-[150px] w-[80px] h-[100px]">
            <Image
              src="/Tools/css3-plain.png"
              alt="Figma"
              width={130}
              height={120}
            />
            <h1 className="flex justify-center mt-[10px] text-[13px] sm:text-[16px]">CSS</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[130px] h-[130px] sm:w-[200px] sm:h-[180px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1] sm:w-[130px] sm:h-[150px] w-[80px] h-[100px]">
            <Image
              src="/Tools/html5-plain.png"
              alt="CSS"
              width={130}
              height={120}
            />
            <h1 className="flex justify-center mt-[10px] text-[13px] sm:text-[16px]">HTML</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[130px] h-[130px] sm:w-[200px] sm:h-[180px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1] sm:w-[130px] sm:h-[150px] w-[80px] h-[100px]">
            <Image
              src="/Tools/javascript-original.png"
              alt="HTML"
              width={130}
              height={120}
            />
            <h1 className="flex justify-center mt-[10px] text-[13px] sm:text-[16px]">Javascript</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[130px] h-[130px] sm:w-[200px] sm:h-[180px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1] sm:w-[130px] sm:h-[150px] w-[80px] h-[100px]">
            <Image
              src="/Tools/nextjs-original.png"
              alt="Javascript"
              width={130}
              height={120}
            />
            <h1 className="flex justify-center mt-[10px] text-[13px] sm:text-[16px]">Next.js</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[130px] h-[130px] sm:w-[200px] sm:h-[180px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1] sm:w-[130px] sm:h-[150px] w-[80px] h-[100px]">
            <Image
              src="/Tools/nodejs-original-wordmark.png"
              alt="Node.js"
              width={130}
              height={120}
            />
            <h1 className="flex justify-center mt-[10px] text-[13px] sm:text-[16px]">Node.js</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
