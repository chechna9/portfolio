import React from "react";
import emoji from "./assets/handEmojie.svg";
import myPict from "./assets/myPict.png";
const Home = () => {
  return (
    <div className="bg-prim1 h-screen flex flex-col md:flex-row justify-evenly  items-center">
      <div className=" flex flex-col justify-center ">
        <div className=" flex flex-row justify-center my-7 ">
          <h1 className="text-white font-bold text-3xl">Hi I am Yacine</h1>
          <img src={emoji} alt="" className="w-10" />
        </div>

        <img
          src={myPict}
          alt=""
          className="w-[30%] mx-auto  bg-sec rounded-full  pr-2 pb-2"
        />
      </div>
      <div className=" flex flex-row justify-around text-lg  h-2/5  md:w-[40vw] md:mr-9 min-w-[40vw] max-w-[500px]">
        <div className="flex flex-col justify-start">
          <h1 className="text-white font-bold text-4xl mr-10">{"{"}</h1>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white">
            <span className="text-blue-600">first_name : </span>
            {'"Ahmed Yacine"'} ,
          </p>
          <br />
          <p className="text-white">
            <span className="text-blue-600">last_name : </span>
            {'"Bouchouareb"'} ,
          </p>
          <br />
          <p className="text-white">
            <span className="text-blue-600">skills : </span>
            {"["}
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {'"Mobile Development"'} ,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {'"Web Development"'} ,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {'"UI/UX"'} ,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {'"Loading . . ."'}
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {"]"}
          </p>
        </div>
        <div className="flex flex-col justify-end">
          {" "}
          <h1 className="text-white font-bold text-4xl ml-10">{"}"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
