import { PiStarFourFill } from "react-icons/pi";
import { FaPaperPlane, FaInstagram, FaDiscord, FaTelegram, FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section
      id="Contact"
      className="pl-[470px] pt-[100px] pr-[55px] w-full mt-[40px]"
    >
      <div className="text-[#C7C6D3] w-[15%] gap-[10px] p-[8px] justify-center flex items-center border-[0.5px] border-[#303033] rounded-[20px] text-[13px]">
        <PiStarFourFill />
        <h1>Contact</h1>
      </div>
      <div className="text-[46px] mt-[10px]">
        <h1 className="gradient-text">
          Let&apos; make something awesome together!
        </h1>
      </div>
      <div className="w-full mt-[40px] flex justify-between gap-[10%]">
        <input
          className="bg-black w-[45%] border-b-[1px] border-[#303033] text-[#C7C6D3] placeholder:text-[20px]"
          placeholder="Your Name*"
        ></input>
        <input
          className="bg-black w-[45%] border-b-[1px] border-[#303033] text-[#C7C6D3] placeholder:text-[20px]"
          placeholder="Company Name"
        ></input>
      </div>
      <div className="w-full mt-[40px] flex justify-evenly gap-[10%]">
        <input
          className="bg-black w-[45%] border-b-[1px] border-[#303033] text-[#C7C6D3] placeholder:text-[20px]"
          placeholder="Email Address*"
        ></input>
        <input
          className="bg-black w-[45%] border-b-[1px] border-[#303033] text-[#C7C6D3] placeholder:text-[20px]"
          placeholder="Phone"
        ></input>
      </div>
      <div className="w-full mt-[60px] ">
        <textarea
          placeholder="A Few Words*"
          className="bg-black border-b-[1px] w-full h-[100px] border-[#303033] text-[#C7C6D3] placeholder:text-[20px]"
        ></textarea>
      </div>
      <a className="bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] flex gap-[10px] p-[13px] items-center w-[200px] rounded-[20px] text-[16px] mt-[20px]">
        <span className="">Send Message</span>
        <FaPaperPlane className="text-black text-[20px]" />
      </a>
      <div className="mt-[80px] text-[30px]">
        <p className="gradient-text">
          Want to know more about me, tell me about your project or just to say
          hello? Drop me a line and I&apos;ll get back as soon as possible.
        </p>
      </div>
      <div className="flex gap-[50px] mt-[60px]">
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e]">
            <FaInstagram className="text-[80px]" />
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e]">
            <SiGmail className="text-[80px]" />
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e]">
            <FaDiscord className="text-[80px]" />
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e]">
            <FaTelegram className="text-[80px]" />
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] w-[150px] h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e]">
            <FaFacebookMessenger className="text-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
