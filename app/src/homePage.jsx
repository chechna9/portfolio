import React, { useEffect } from "react";

import { useState } from "react";
import emoji from "./assets/handEmojie.svg";
import myPict from "./assets/myPict.png";

const Home = () => {
  const counter = () => new Promise((resolve) => setTimeout(resolve, 50));
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [mob, setMob] = useState("");
  let [web, setWeb] = useState("");
  let [des, setDes] = useState("");
  let [loading, setLoading] = useState("");
  const fillIt = async () => {
    let _fname = "Ahmed Yacine";
    let _lname = "Bouchouareb";
    let _mob = "Mobile Development";
    let _web = "Web Development";
    let _des = "UI/UX";
    let _loading = "Loading . . .";

    // //simultanouse fill
    //  for (let i = 0; i < Math.max(_fname.length,_lname.length,_mob.length,_web.length,_des.length,_loading.length,); i++) {
    //   if (i<_fname.length){
    //      fname += _fname[i];
    //    setFname(fname);
    //   }

    //   if (i<_lname.length){
    //     lname += _lname[i];
    //   setLname(lname);
    //   }

    //   if (i<_mob.length){
    //     mob += _mob[i];
    //   setMob(mob);
    //   }

    //   if (i<_web.length){
    //    web += _web[i];
    //   setWeb(web);
    //   }

    //   if (i<_des.length){
    //   des += _des[i];
    //   setDes(des);
    //   }

    //   if (i<_loading.length){
    //    loading += _loading[i];
    //   setLoading(loading);
    //   }

    //   await counter();
    // }
    //incremental fill
    for (let i = 0; i < _fname.length; i++) {
      fname += _fname[i];
      setFname(fname);
      await counter();
    }
    for (let i = 0; i < _lname.length; i++) {
      lname += _lname[i];
      setLname(lname);
      await counter();
    }
    for (let i = 0; i < _mob.length; i++) {
      mob += _mob[i];
      setMob(mob);
      await counter();
    }
    for (let i = 0; i < _web.length; i++) {
      web += _web[i];
      setWeb(web);
      await counter();
    }
    for (let i = 0; i < _des.length; i++) {
      des += _des[i];
      setDes(des);
      await counter();
    }
    for (let i = 0; i < _loading.length; i++) {
      loading += _loading[i];
      setLoading(loading);
      await counter();
    }
  };
  useEffect(() => {
    fillIt();
  }, []);
  return (
    <div className="bg-prim1 h-screen flex flex-col md:flex-row justify-evenly  items-center overflow-scroll" id="home">
      <div className=" flex flex-col justify-center ">
        <div className=" flex flex-row justify-center my-7 ">
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            Hi I am Yacine
          </h1>
          <img src={emoji} alt="" className="ml-2 w-10 animate-waving" />
        </div>

        <img
          src={myPict}
          alt=""
          className="w-[40%]   mx-auto  bg-sec rounded-full  p-1 "
          // className="w-[30%] md:w-[40%] min-w-[100px] mx-auto  bg-sec rounded-full  pr-2 pb-2 md:pr-4  "
        />
      </div>
      <div className=" md:scale-[1.1] flex flex-row justify-around text-lg  h-2/5  md:w-[40vw] md:mr-9 min-w-[40vw] max-w-[500px]">
        <div className="flex flex-col justify-start">
          <h1 className="text-white font-bold text-4xl mr-10 animate-slowed_bounce">
            {"{"}
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white">
            <span className="text-blue-500">first_name : </span>
            {`"${fname}"`} ,
          </p>
          <br />
          <p className="text-white">
            <span className="text-blue-500">last_name : </span>
            {`"${lname}"`} ,
          </p>
          <br />
          <p className="text-white">
            <span className="text-blue-500">skills : </span>
            {"["}
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {`"${mob}"`} ,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {`"${web}"`} ,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {`"${des}"`} ,
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {`"${loading}"`}
            <br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {"]"}
          </p>
        </div>
        <div className="flex flex-col justify-start rotate-180">
          <h1 className="text-white font-bold text-4xl ml-10 animate-slowed_bounce ">
            {"{"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
