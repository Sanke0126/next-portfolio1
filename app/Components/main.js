import { PiStarFourFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";

function Main() {
  return (
    <main className="pl-[10px] pl-[1rem] sm:pl-[470px] sm:pt-[100px] pt-[20px] sm:pr-[55px] w-full mt-[90px]">
      <div className="text-[#C7C6D3] text-[10px] sm:text-[13px] w-[35%] p-[5px] sm:w-[15%] gap-[10px] sm:p-[8px] justify-center flex items-center border-[0.5px] border-[#303033] rounded-[20px] text-[13px]">
        <PiStarFourFill />
        <h1>Let&apos;s meet!</h1>
      </div>
      <div className="text-[30px] sm:text-[60px] mt-[30px]">
        <span>
          <h1 className="gradient-text">
            I&apos;m Naranbaatar <br /> Learning Fullstack Developer.
          </h1>
        </span>
      </div>
      <div className="flex sm:w-full gap-[20px] text-white text-[10px] sm:text-[16px] mt-[50px] ">
        <span className="cursor-pointer flex items-center gap-[5px] sm:gap-[10px] border-[0.5px] border-[#303033] p-[10px] sm:p-[15px] rounded-[20px]">
          <p>My Works</p>
          <HiMiniSquares2X2 />
        </span>
        <span className="cursor-pointer flex items-center gap-[5px] sm:gap-[10px] border-[0.5px] border-[#303033] p-[10px] sm:p-[15px] rounded-[20px]">
          <p>Download CV</p>
          <MdOutlineFileDownload />
        </span>
      </div>
    </main>
  );
}

export default Main;
