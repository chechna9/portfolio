import React from "react";
import Project from "./components/project";

const Projects = () => {
  const projects = [
    {
      name: "Chantech",
      description:
        "Mobile  application used for managing sites , can handle workers , equipments and tasks ...",
      imgLink: "chantech.png",
      links: [
        {
          platformIcon: "github.svg",
          link: "https://github.com/chechna9/Chantech-flutterApp",
        },
      ],
      technologies: "Flutter , NodeJs , MYSQL",
    },
    
    {
      name: "Space Pionners",
      description:
        "Mobile quiz application about space and planets, with multiple features such as: documentation, profile management, badge system, ranking...",
      imgLink: "spacePioneers.png",
      links: -1,
      technologies: "Flutter , Supabase",
    },
    {
      name: "Enigma Simulator",
      description:
        "Desktop application that simulates the Enigma encryption machine that was used during World War II.",
      imgLink: "enigma.png",
      links: [{
        platformIcon: "github.svg",
            link: "https://github.com/chechna9/EnigmaMachine_Flutter_Desktop_app",
      },],
      technologies: "Flutter",
    },
    {
        name: "BrEYEn",
        description:
          "Mobile application built during Devfest21 Algiers hackathon, it allows blind people to perform daily tasks thanks to the camera of a smart glasses, which detects objects and describes them to the user.",
          imgLink: "devfest21.png",
          links: [
          {
            platformIcon: "github.svg",
            link: "https://github.com/chechna9/Devfest-Hackathon2021",
          },
        ],
        technologies: "Flutter , googleMlkit",
      },
    {
        name: "SmartFridge",
        description:
          "Mobile app coupled with a smart fridge build during iwd22 Algiers hackathon, with features such as : Ability to automatically order missing ingredients for a recipe,Offering a family area to add a shopping list and ,statistics by calorie consumption...",
          imgLink: "iwd22.png",
        links: [
          {
            platformIcon: "github.svg",
            link: "https://github.com/chechna9/IWD2022-hackathon",
          },
        ],
        technologies: "Flutter",
      },
    {
        name: "WTM Algiers Website",
        description:
          "I was part of the team that worked on this website",
          imgLink: "wtmWebsite.png",
        links: [
          {
            platformIcon: "internetIcon.svg",
            link: "https://www.wtmalgiers.org/",
          },
        ],
        technologies: "NextJs , TailwindCss",
      },
    {
        name: "IWD22  Website",
        description:
          "I was part of the team that worked on this website",
          imgLink: "iwdWebsite.png",
        links: [
          {
            platformIcon: "internetIcon.svg",
            link: "https://iwd22.wtmalgiers.org/",
          },
        ],
        technologies: "NextJs , TailwindCss",
      },
  ];
  return (
    <div className="bg-prim2  py-10" id="projects">
        <h1 className="text-white font-bold mb-8 text-2xl text-center">And those are the projects that i worked and paricipated in : </h1>
        {
            projects.map((index,value)=>{
                
                return <div key={index}><Project data={projects[value]}/></div> ;
            })
        }
      
    </div>
  );
};

export default Projects;
