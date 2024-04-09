import { PiStarFourFill } from "react-icons/pi";
import {
  FaPaperPlane,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaFacebookMessenger,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

function Contact() {
  return (
    <section
      id="Contact"
      className="sm:pl-[470px] pt-[100px] sm:pr-[55px] w-full mt-[40px]"
    >
      <div className="text-[#C7C6D3] w-[35%] sm:w-[15%] gap-[10px] p-[5px] sm:p-[8px] justify-center flex items-center border-[0.5px] border-[#303033] rounded-[20px] text-[13px]">
        <PiStarFourFill />
        <h1>Contact</h1>
      </div>
      <div className="text-[25px] sm:text-[46px] sm:mt-[10px] mt-[20px]">
        <h1 className="gradient-text">
          Let&apos; make something awesome together!
        </h1>
      </div>
      <div className="w-full mt-[40px] flex justify-between gap-[10%]">
        <input
          className="bg-black w-[45%] outline-none border-solid border-b-[1px] border-[#303033] text-[#C7C6D3] sm:placeholder:text-[20px]  placeholder:text-[13px]"
          placeholder="Your Name*"
        ></input>
        <input
          className="bg-black w-[45%] outline-none border-solid border-b-[1px] border-[#303033] text-[#C7C6D3] sm:placeholder:text-[20px]  placeholder:text-[13px]"
          placeholder="Company Name*"
        ></input>
      </div>
      <div className="w-full mt-[40px] flex justify-evenly gap-[10%]">
        <input
          className="bg-black w-[45%] outline-none border-solid border-b-[1px] border-[#303033] text-[#C7C6D3] sm:placeholder:text-[20px]  placeholder:text-[13px]"
          placeholder="Email Address*"
        ></input>
        <input
          className="bg-black w-[45%] outline-none border-solid border-b-[1px] border-[#303033] text-[#C7C6D3] sm:placeholder:text-[20px] placeholder:text-[13px]"
          placeholder="Phone*"
        ></input>
      </div>
      <div className="w-full mt-[60px] ">
        <textarea
          placeholder="A Few Words*"
          className="bg-black w-full h-[80px] sm:h-[100px] outline-none border-solid border-b-[1px] border-[#303033] text-[#C7C6D3] sm:placeholder:text-[20px] resize-none placeholder:text-[13px]"
        ></textarea>
      </div>
      <a className="bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] flex gap-[5px] sm:gap-[10px] p-[6px] sm:p-[13px] items-center w-[140px] sm:w-[200px] rounded-[20px] text-[12px] sm:text-[16px] mt-[20px]">
        <span className="">Send Message</span>
        <FaPaperPlane className="text-black text-[12px] sm:text-[20px]" />
      </a>
      <div className="mt-[80px] text-[20px] sm:text-[30px]">
        <p className="gradient-text">
          Want to know more about me, tell me about your project or just to say
          hello? Drop me a line and I&apos;ll get back as soon as possible.
        </p>
      </div>
      <div className="flex gap-[20px] sm:gap-[50px] mt-[60px]">
        <div className="border-[0.5px] border-[#303033] sm:p-0 p-[10px] w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e] hover:text-[#fff] hover:cursor-pointer hover:scale-[1.1]">
            <Link
              href="https://www.instagram.com/naranbaatarbatdorzh/"
              target="_blank"
            >
              <FaInstagram className="sm:text-[80px] text-[30px]" />
            </Link>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] sm:p-0 p-[10px] w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e] hover:text-[#fff] hover:cursor-pointer hover:scale-[1.1]">
            <Link href="https://mail.google.com/" target="_blank">
              <SiGmail className="sm:text-[80px] text-[30px]" />
            </Link>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] sm:p-0 p-[10px] w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e] hover:text-[#fff] hover:cursor-pointer hover:scale-[1.1]">
            <Link
              href="https://discord.com/users/241813497904758784"
              target="_blank"
            >
              <FaDiscord className="sm:text-[80px] text-[30px]" />
            </Link>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] sm:p-0 p-[10px] w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e] hover:text-[#fff] hover:cursor-pointer hover:scale-[1.1]">
            <Link href="https://web.telegram.org/">
              <FaTelegram className="sm:text-[80px] text-[30px]" />
            </Link>
          </div>
        </div>
        <div className="border-[0.5px] border-[#303033] sm:p-0 p-[10px] w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] rounded-[40px] flex justify-center items-center">
          <div className="text-[#58585e] hover:text-[#fff] hover:cursor-pointer hover:scale-[1.1]">
            <Link
              href="https://www.facebook.com/Naranbaatar.NB"
              target="_blank"
            >
              <FaFacebookMessenger className="sm:text-[80px] text-[30px]  " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
