"use client";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import { Link } from "react-scroll";
import { useState } from "react";

import Image from "next/image";

function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="flex scroll-smooth">
      <div className="flex pl-[2rem] fixed">
        <section className="w-[350px] bg-[#161616] border-[0.5px] border-[#303033] rounded-[40px] pl-[30px] pr-[30px]">
          <section className="flex items-center pt-[20px] mb-[10px]">
            <div>
              {/* Replace <img> with <Image> */}
              <Image
                className="w-[60px] h-[60px]"
                src="/aaa123.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h6 className="font-bold leading-[100%] text-[#E9E9F1] text-[28px]">
                B.
                <p>Naranbaatar</p>
              </h6>
            </div>
          </section>
          {/* Replace <img> with <Image> */}
          <Image
            className="rounded-[40px] mb-[30px]"
            src="/hoshnogo.jpg"
            width={300}
            height={200}
          />
          <div className="mb-[35px] font-bold">
            <h6 className="text-[16px] text-[#E9E9F1]">
              <p className="text-[#c7c6d3] text-[13px]">Specialization:</p>
              Full-Stack Developer
            </h6>
          </div>
          <div className="mb-[35px] font-bold">
            <h6 className="text-[16px] text-[#E9E9F1]">
              <p className="text-[#c7c6d3] text-[13px]">Based in:</p>
              Mongolia, Ulaanbaatar
            </h6>
          </div>
          <ul className="flex w-full justify-center gap-[12px] text-white text-[20px] mb-[10px]">
            <li className="border-[0.5px] border-[#303033] rounded-[2rem] w-[40px] h-[40px] flex justify-center items-center">
              <FaGithub />
            </li>
            <li className="border-[0.5px] border-[#303033] rounded-[2rem] w-[40px] h-[40px] flex justify-center items-center">
              <FaFacebook />
            </li>
            <li className="border-[0.5px] border-[#303033] rounded-[2rem] w-[40px] h-[40px] flex justify-center items-center">
              <FaInstagram />
            </li>
            <li className="border-[0.5px] border-[#303033] rounded-[2rem] w-[40px] h-[40px] flex justify-center items-center">
              <FaYoutube />
            </li>
            <li className="border-[0.5px] border-[#303033] rounded-[2rem] w-[40px] h-[40px] flex justify-center items-center">
              <FaTwitch />
            </li>
          </ul>
          <div className="flex">
            <h6 className="w-full h-[50px] mb-[30px] flex items-center justify-center font-bold text-black text-[16px] rounded-[15px] bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF]">
              Let&apos;s Work Together!
            </h6>
          </div>
        </section>
      </div>
      <div className="fixed pl-[470px]">
        <ul className="text-[#8B8A91] flex justify-evenly gap-[80px] text-[18px] bg-black bg-opacity-5 rounded-[40px] cursor-pointer">
          <li
            className={`border-[#303033] rounded-[40px] p-[12px] backdrop-blur-[3px] z-[1000px] ${
              activeButton === "Home" ? "border-[0.5px] text-white" : ""
            }`}
          >
            <Link
              onClick={() => handleButtonClick("Home")}
              className="hover:text-white"
              to="Home"
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li
            className={`border-[#303033] rounded-[40px] p-[12px] backdrop-blur-[3px] z-[1000px] ${
              activeButton === "About" ? "border-[0.5px] text-white" : ""
            }`}
          >
            <Link
              onClick={() => handleButtonClick("About")}
              className="hover:text-white"
              to="About"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li
            className={`border-[#303033] rounded-[40px] p-[12px] backdrop-blur-[3px] z-[1000px] ${
              activeButton === "Resume" ? "border-[0.5px] text-white" : ""
            }`}
          >
            <Link
              onClick={() => handleButtonClick("Resume")}
              className="hover:text-white"
              to="Resume"
              smooth={true}
              duration={1000}
            >
              Resume
            </Link>
          </li>
          <li
            className={`border-[#303033] rounded-[40px] p-[12px] backdrop-blur-[3px] z-[1000px] ${
              activeButton === "Contact" ? "border-[0.5px] text-white" : ""
            }`}
          >
            <Link
              onClick={() => handleButtonClick("Contact")}
              className="hover:text-white"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
          <span className=" flex items-center p-[10px] gap-[5px] text-black rounded-[15px] bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF]">
            <a href="#">Let&apos;s Talk</a>
            <TbMessageDots />
          </span>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
