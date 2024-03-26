import { PiStarFourFill } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
  return (
    <section
      id="About"
      className="pl-[470px] pt-[100px] pr-[55px] w-full mt-[50px]"
    >
      <div className="text-[#C7C6D3] w-[15%] gap-[10px] p-[8px] justify-center flex items-center border-[0.5px] border-[#303033] rounded-[20px] text-[13px]">
        <PiStarFourFill />
        <h1>About Me</h1>
      </div>
      <div className="text-[60px] mt-[10px]">
        <span>
          <h1 className="gradient-text">
            Turning complex problems into simple design
          </h1>
        </span>
      </div>
      <div className="gradient-text flex justify-between mt-[50px] w-[100%]">
        <div className="border-[0.5px] border-[#303033] p-[20px] w-[30%] flex flex-col justify-center items-center rounded-[40px]">
          <p className="text-[60px]">40+</p>
          <p className="text-[16px] text-[#C7C6D3]">Happy clients</p>
        </div>
        <div className="border-[0.5px] border-[#303033] p-[20px] w-[30%] flex flex-col justify-center items-center rounded-[40px]">
          <p className="text-[60px]">2+</p>
          <p className="text-[16px] text-[#C7C6D3]">Years of experience</p>
        </div>
        <div className="border-[0.5px] border-[#303033] p-[20px] w-[30%] flex flex-col justify-center items-center rounded-[40px]">
          <p className="text-[60px]">50+</p>
          <p className="text-[16px] text-[#C7C6D3]">Project done</p>
        </div>
      </div>
      <div className="flex mt-[70px] w-[100%]">
        <div className="w-[70%] text-justify pr-[5%]">
          <p className="text-[20px] text-[#C7C6D3] mb-[20px] leading-normal">
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different. But if I'm not the same, the next
            question is 'Who in the world am I?' Ah, that's the great puzzle!
          </p>
          <p className="text-[20px] text-[#C7C6D3] mb-[20px] leading-snug">
            Be what you would seem to be - or, if you'd like it put more simply
            - never imagine yourself not to be otherwise than what it might
            appear to others that what you were or might have been was not
            otherwise than what you had been would have appeared to them to be
            otherwise.
          </p>
          <a className="bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] flex gap-[10px] p-[13px] items-center w-[200px] rounded-[20px] text-[16px] ">
            <span className="">Download CV</span>
            <MdOutlineFileDownload className="text-black text-[20px]" />
          </a>
        </div>
        <div className="text-[#E9E9F1] w-[30%]">
          <h6 className="text-[18px]">
            <p className="text-[15px] text-[#C7C6D3]">Name</p>
            Naranbaatar
          </h6>
          <h6 className="text-[18px] mt-[20px]">
            <p className="text-[15px] text-[#C7C6D3]">Phone</p>
            +976 90840126
          </h6>
          <h6 className="text-[18px] mt-[20px]">
            <p className="text-[15px] text-[#C7C6D3]">Email</p>
            Naranbaatar@gmail.com
          </h6>
          <h6 className="text-[18px] mt-[20px]  ">
            <p className="text-[15px] text-[#C7C6D3]">Location</p>
            Ulaanbaatar,Mongolia
          </h6>
        </div>
      </div>
    </section>
  );
}

export default About;
