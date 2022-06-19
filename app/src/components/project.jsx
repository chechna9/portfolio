import React from "react";

const Project = (data) => {
  const _data = data.data;
  return (
    <div className="flex md:flex-row flex-col justify-evenly items-center max-h-screen overflow-scroll">
      <img
        src={require("../assets/" + _data.imgLink)}
        alt=""
        className="md:w-[30%] w-[60%] -translate-x-8 md:translate-x-0"
      />
      <div className="bg-sec rounded-3xl text-white py-8 px-4 shadow-2xl flex flex-col justify-evenly mx-10 md:w-[40%]  ">
        <p className="mb-2">
          <strong>Name : </strong>
          {_data.name}
        </p>
        <p className="mb-2">
          <strong>Description : </strong>
          {_data.description}
        </p>
        <p className="mb-2">
          <strong>Technologies : </strong>
          {_data.technologies}
        </p>
        <div className="flex flex-row">
          <strong>Links : </strong>
          <div className="flex flex-row items-center">
            {_data.links.map((value, index) => {
              return (
                <a href={value.link} target="blank" key={index}>
                  <img
                    src={require("../assets/" + value.platformIcon)}
                    alt=""
                    className="w-7 ml-3"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
