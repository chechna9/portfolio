/* eslint-disable no-unused-vars */
import React from "react";
import emailIcon from "./assets/emailIcon.svg";
import fb from "./assets/facebook.svg";
import github from "./assets/github.svg";
import insta from "./assets/insta.svg";
import linkedIn from "./assets/linkedIn.svg";
const ContactMe = () => {
  return (
    <div className="bg-prim1 px-4 py-8" id="contactMe">
      <h1 className="text-white font-bold text-2xl ">Contact me</h1>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-row  items-center">
          <img src={emailIcon} alt="" className="w-7 mr-2" />
          <p className="text-white text-sm">ja_bouchouareb@esi.dz</p>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-2 gap-5  justify-evenly">
          <a href="https://www.linkedin.com/in/ahmedyacinebouchouareb/" target="blank">
            <img src={linkedIn} alt="" className="w-7 md:mr-2" />
          </a>
          <a href="https://github.com/chechna9" target="blank">
            <img src={github} alt="" className="w-7 md:mr-2" />
          </a>
          <a href="https://www.facebook.com/freeyacine" target="blank">
            <img src={fb} alt="" className="w-7 md:mr-2" />
          </a>
          <a href="https://www.instagram.com/ahmed_yacine_bouchouareb/" target="blank">
            <img src={insta} alt="" className="w-7 md:mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
