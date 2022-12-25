import React, { useState } from 'react'
import data from './UiData.js'
import * as Icons from "react-icons/fa"
import { NavLink, useLocation } from 'react-router-dom';

const Projects = () => {

   let location = useLocation();
   const [projectData, setProjectData] = useState(data.projects);

   function changeProjectData(d){
      const projectArray = []
      if(d === "All"){
         setProjectData(data.projects)
         console.log(data.projects);
      }
      else{
         data.projects.filter((proj)=>{
            if(proj.category === d){
               projectArray.push(proj);
            }
         })
         setProjectData(projectArray);
      }
   
   }

   return (
      <div className="projects-section bg-gray-800 w-[100%] px-[10px] sm:px-[50px] py-[50px] lg:pb-[0px] sm:rounded-2xl shadow-lg">
         <div className="intro">
            <div className="flex justify-start flex-col lg:flex-row items-center gap-[25px]">
               <h1 className="text-white text-[35px] sm:text-[45px] font-bold">My Projects</h1>
               <div className="w-[190px] h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl">
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-[15px] mt-[30px]">
            <div className="projects-navbar flex justify-center items-center gap-[8px] text-white lg:text-[20px] mb-[30px]">
               {
                  data.projectNav.map((nav) => {
                     return (
                        <NavLink to={`/projects/${nav.navTitle.split(" ").join("")}`} onClick={()=>changeProjectData(nav.navTitle)} className={`project-nav bg-transparent px-[8px] py-[3px] rounded-md ${(location.pathname === "/projects" && nav.navTitle ==="All")? "active":""}`} key={nav.id}>
                           {nav.navTitle}
                        </NavLink>)
                  })
               }
            </div>
            <div className="projects flex justify-center items-center flex-wrap gap-[20px] lg:pb-[50px] lg:h-[600px] lg:overflow-x-hidden lg:overflow-y-scroll">
               {
                  projectData.map((project) => {
                     return (
                        <div className="project flex flex-col justify-between w-[320px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-md" key={project.id}>
                           <div className>
                              <div className="project-pic">
                                 <img className="w-[100%] h-[220px] object-cover rounded-t-lg" src={project.image} alt={project.projectHeading} />
                              </div>
                              <div className="project-head text-[25px] text-white my-[12px] px-[20px]">
                                 {project.projectHeading}
                              </div>
                              <div className="project-desc px-[20px] text-white/75 h-[100px] overflow-x-hidden overflow-y-scroll">
                                 {project.projectDescription}
                              </div>
                           </div>
                           <div className="project-links flex justify-between items-center mt-[20px] text-gray-900 gap-[2px]">
                              <a href={project.liveLink} target="_blank" className="preview text-center w-[50%] text-[30px] bg-white/75 py-[5px] rounded-bl-lg  flex justify-center items-center"><Icons.FaEye /></a>
                              <a href={project.githubLink} target="_blank" className="github-link text-center w-[50%] text-[30px] bg-white/50 py-[5px] rounded-br-lg flex justify-center items-center"><Icons.FaGithub /></a>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>

   )
}

export default Projects;
