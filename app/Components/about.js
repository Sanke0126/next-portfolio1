import { PiStarFourFill } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
  return (
    <section
      id="About"
      className="sm:pl-[470px] sm:pt-[100px] pl-[1rem] pt-[30px] pr-[0.5rem] sm:pr-[55px] w-full mt-[50px]"
    >
      <div className="text-[#C7C6D3] w-[35%] sm:w-[15%] gap-[10px] p-[5px] sm:p-[8px] justify-center flex items-center border-[0.5px] border-[#303033] rounded-[20px] text-[10px] sm:text-[13px]">
        <PiStarFourFill />
        <h1>About Me</h1>
      </div>
      <div className="text-[30px] sm:text-[60px] mt-[30px] sm:mt-[10px]">
        <span>
          <h1 className="gradient-text">
            Turning complex problems into simple design
          </h1>
        </span>
      </div>
      <div className="gradient-text sm:flex flex flex-col items-center sm:flex-row gap-[20px] sm:gap-[30px] justify-between mt-[50px] w-[100%]">
        <div className="border-[0.5px] border-[#303033] p-[20px] w-[80%] sm:w-[30%] flex flex-col justify-center items-center  rounded-[40px]">
          <p className="text-[40px] sm:text-[60px]">4</p>
          <p className="text-[12px] sm:text-[16px] text-[#C7C6D3]">
            Language Learned
          </p>
        </div>
        <div className="border-[0.5px] border-[#303033] p-[20px] w-[80%] sm:w-[30%] flex flex-col justify-center items-center rounded-[40px]">
          <p className="text-[40px] sm:text-[60px]">8+</p>
          <p className="text-[12px] sm:text-[16px] text-[#C7C6D3]">
            Months of experience
          </p>
        </div>
        <div className="border-[0.5px] border-[#303033] p-[20px] w-[80%] sm:w-[30%] flex flex-col justify-center items-center rounded-[40px]">
          <p className="text-[40px] sm:text-[60px]">8</p>
          <p className="text-[12px] sm:text-[16px] text-[#C7C6D3]">
            Project done
          </p>
        </div>
      </div>
      <div className="sm:flex flex-col sm:flex-row mt-[50px] sm:mt-[70px] w-[100%]">
        <div className="w-[100%] sm:w-[70%] text-justify sm:pr-[5%]">
          <p className="sm:text-[20px] text-[15px] text-[#C7C6D3] mb-[20px] leading-normal">
            I wonder if I&apos;ve been changed in the night? Let me think. Was I
            the same when I got up this morning? I almost think I can remember
            feeling a little different. But if I&apos;m not the same, the next
            question is &apos;Who in the world am I?&apos; Ah, that&apos;s the
            great puzzle!
          </p>
          <p className="sm:text-[20px] text-[15px] text-[#C7C6D3] mb-[20px] leading-snug">
            Be what you would seem to be - or, if you&apos;d like it put more
            simply - never imagine yourself not to be otherwise than what it
            might appear to others that what you were or might have been was not
            otherwise than what you had been would have appeared to them to be
            otherwise.
          </p>
          <a className="bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] flex gap-[5px] sm:gap-[10px] p-[8px] sm:p-[13px] items-center sm:w-[200px] w-[150px] rounded-[20px] text-[12px] sm:text-[16px] ">
            <span className="">Download CV</span>
            <MdOutlineFileDownload className="text-black text-[20px]" />
          </a>
        </div>
        <div className="text-[#E9E9F1] w-full sm:w-[30%] mt-[20px]">
          <h6 className="text-[15px] sm:text-[18px]">
            <p className="text-[12px] sm:text-[15px] text-[#C7C6D3]">Name</p>
            Naranbaatar
          </h6>
          <h6 className="text-[15px] sm:text-[18px] mt-[10px] sm:mt-[20px]">
            <p className="text-[12px] sm:text-[15px] text-[#C7C6D3]">Phone</p>
            +976 90840126
          </h6>
          <h6 className="text-[15px] sm:text-[18px] mt-[10px] sm:mt-[20px]">
            <p className="text-[12px] sm:text-[15px] text-[#C7C6D3]">Email</p>
            Naranbaatar@gmail.com
          </h6>
          <h6 className="text-[15px] sm:text-[18px] mt-[10px] sm:mt-[20px]  ">
            <p className="text-[12px] sm:text-[15px] text-[#C7C6D3]">
              Location
            </p>
            Ulaanbaatar,Mongolia
          </h6>
        </div>
      </div>
    </section>
  );
}

export default About;
