import Image from "next/image";

function Tools() {
  return (
    <section className="pl-[470px] pt-[100px] pr-[55px] w-full mt-[50px]">
      <div>
        <h1 className="text-[30px] text-[#E9E9F1] mb-[50px]">
          My Favorite Tools
        </h1>
      </div>
      <div className="flex gap-[35px]">
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1]">
            {/* Replace <img> with <Image> */}
            <Image src="/icon-figma.svg" alt="Figma" width={150} height={150} />
            <h1 className="flex justify-center">Figma</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1]">
            {/* Replace <img> with <Image> */}
            <Image src="/icon-css.svg" alt="CSS" width={150} height={150} />
            <h1 className="flex justify-center">CSS</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1]">
            {/* Replace <img> with <Image> */}
            <Image src="/icon-html.svg" alt="HTML" width={150} height={150} />
            <h1 className="flex justify-center">HTML</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1]">
            {/* Replace <img> with <Image> */}
            <Image
              src="/javascript-39395.png"
              alt="Javascript"
              width={150}
              height={150}
            />
            <h1 className="flex justify-center">Javascript</h1>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#E9E9F1]">
            {/* Replace <img> with <Image> */}
            <Image
              src="/nodejs-1-logo-png-transparent.png"
              alt="Node.js"
              width={150}
              height={150}
            />
            <h1 className="flex justify-center">Node.Js</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
