import React from "react";
import homeIcon from "../assets/homeIcon.svg";
import projectIcon from "../assets/projectIcon.svg";
import contactIcon from "../assets/contactIcon.svg";
const Navbar = () => {
  const navLinkStyle =
    "hidden md:block hover:scale-125 transition-all duration-300";
  const iconStyle = "w-[35px]";
  return (
    <div className="bg-prim1 absolute w-full">
      <div className="bg-sec md:px-52 py-4 rounded-b-3xl ">
        <ul className="flex flex-row justify-around  font-bold text-white ">
          <li className={navLinkStyle}>
            <a href="#home">Home</a>
          </li>
          <a href="#home" className="md:hidden">
            <img src={homeIcon} className={iconStyle} alt="" />
          </a>
          <li className={navLinkStyle}>
            <a href="#projects">Projects</a>
          </li>
          <a href="#projects" className="md:hidden">
            <img src={projectIcon} className={iconStyle} alt="" />
          </a>
          <li className={navLinkStyle}>
            <a href="#contactUs">Contact us</a>
          </li>
          <a href="#contactUs" className="md:hidden">
            <img src={contactIcon} className={iconStyle} alt="" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
