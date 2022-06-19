import React from "react";
import Project from "./components/project";

const Projects = () => {
  const projects = [
    {
      name: "Chantech",
      description:
        "mobile  application used for managing sites , can handle workers , equipments and tasks ...",
      imgLink: "chantech.png",
      links: [
        {
          platformIcon: "github.svg",
          link: "test",
        },
        {
          platformIcon: "github.svg",
          link: "test2",
        },
      ],
      technologies: "Flutter , NodeJs , MYSQL",
    },
  ];
  return (
    <div className="bg-prim2 h-screen">
      {/* <Project imgLink={"chantech.png"} /> */}
      <Project data={projects[0]} />
    </div>
  );
};

export default Projects;