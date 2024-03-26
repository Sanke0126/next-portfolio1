import { PiStarFourFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";

function Main() {
  return (
    <main className="pl-[470px] pt-[100px] pr-[55px] w-full mt-[90px]">
      <div className="text-[#C7C6D3] w-[15%] gap-[10px] p-[8px] justify-center flex items-center border-[0.5px] border-[#303033] rounded-[20px] text-[13px]">
        <PiStarFourFill />
        <h1>Let's meet!</h1>
      </div>
      <div className="text-[60px] mt-[30px]">
        <span>
          <h1 className="gradient-text">
            I'm Naranbaatar <br /> Learning Fullstack Developer.
          </h1>
        </span>
      </div>
      <div className="flex gap-[50px] text-white text-[16px] mt-[50px] ">
        <span className="cursor-pointer flex items-center gap-[10px] border-[0.5px] border-[#303033] p-[15px] rounded-[20px]">
          <p>My Works</p>
          <HiMiniSquares2X2 />
        </span>
        <span className="flex items-center gap-[10px]">
          <p>Download CV</p>
          <MdOutlineFileDownload />
        </span>
      </div>
    </main>
  );
}

export default Main;
