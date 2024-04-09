"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { TbAccessPoint } from "react-icons/tb";
import { TbMessageDots } from "react-icons/tb";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { useRef } from "react";
import Image from "next/image";

function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="flex scroll-smooth">
      <div className="flex pl-[1rem] pt-[1rem] fixed sm:pl-[1rem]">
        {/* Menu Icon for Mobile */}
        <div
          className="text-white sm:hidden text-[28px] z-[100]"
          onClick={toggleMenu}
        >
          <IoMenu className={menuOpen ? "open" : ""} />
        </div>

        {/* Links in Mobile View */}
        {menuOpen && (
          <div
            ref={menuRef}
            id="menu"
            className="fixed overflow-y-hidden bg-[#161616] top-0 right-0 bottom-[67%] left-0 bg-black z-50"
          >
            <div className="absolute top-[70px] left-[30px] right-[10px] z-[1000] w-full">
              <ul className="text-[#8B8A91] text-[12px] flex flex-col gap-[20px] text-[18px] w-full cursor-pointer">
                <li>
                  <Link
                    onClick={() => handleButtonClick("Home")}
                    className={`hover:text-white ${
                      activeButton === "Home" ? "text-white" : ""
                    }`}
                    to="Home"
                    smooth={true}
                    duration={1000}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonClick("About")}
                    className={`hover:text-white ${
                      activeButton === "About" ? "text-white" : ""
                    }`}
                    to="About"
                    smooth={true}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonClick("Resume")}
                    className={`hover:text-white ${
                      activeButton === "Resume" ? "text-white" : ""
                    }`}
                    to="Resume"
                    smooth={true}
                    duration={1000}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonClick("Contact")}
                    className={`hover:text-white ${
                      activeButton === "Contact" ? "text-white" : ""
                    }`}
                    to="Contact"
                    smooth={true}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Links in Desktop View */}
        <div className="fixed sm:pl-[450px]">
          <div className="absolute top-[320px] right-[450px] w-full h-full flex items-center justify-center bg-black bg-opacity-5 z-50">
            <div className="w-[350px] bg-[#161616] border-[0.5px] border-[#303033] rounded-[40px] pl-[30px] pr-[30px]">
              {/* Sidebar Content */}
              <section className="flex items-center pt-[20px] mb-[10px]">
                <div>
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
            </div>
          </div>
          <div className="hidden sm:block">
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
              <span className="flex items-center p-[10px] gap-[5px] text-black rounded-[15px] bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF]">
                <a href="#">Let&apos;s Talk</a>
                <TbMessageDots />
              </span>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
