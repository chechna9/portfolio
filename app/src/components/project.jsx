import React from "react";

const Project = (data) => {
  const _data = data.data;
  return (
    <div className="flex md:flex-row flex-col justify-evenly items-center mt-[20vh] ">
      <img
        src={require("../assets/" + _data.imgLink)}
        alt=""
        className="md:w-[30vw] w-[60vw] max-w-sm mb-3 md:mb-0"
      />
      <div className="bg-sec rounded-3xl text-white text-xl py-8 px-4 shadow-2xl flex flex-col justify-evenly mx-10 md:w-[40%]  ">
        <p className="mb-4">
          <strong>Name : </strong>
          {_data.name}
        </p>
        <p className="mb-4">
          <strong>Description : </strong>
          {_data.description}
        </p>
        <p className="mb-4">
          <strong>Technologies : </strong>
          {_data.technologies}
        </p>
        <div className="flex flex-row">
          <strong>Links : </strong>
          <div className="flex flex-row items-center">
            {
              _data.links == -1 ?  "not available":
            _data.links.map((value, index) => {
              return (
                <a href={value.link} target="blank" key={index}>
                  <img
                    src={require("../assets/" + value.platformIcon)}
                    alt=""
                    className="w-10 ml-3"
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
