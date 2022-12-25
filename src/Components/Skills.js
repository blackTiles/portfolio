import React from "react";


const Skills = ({data}) => {
   return (
      <div class="skills-section bg-gray-800 w-[100%] px-[10px] sm:px-[50px] py-[50px] sm:rounded-2xl shadow-lg">
         <div class="intro">
            <div class="flex justify-start flex-col lg:flex-row items-center gap-[25px]">
               <h1 class="text-white text-[35px] sm:text-[45px] font-bold">
                  My Skills
               </h1>
               <div class="w-[190px] h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl"></div>
            </div>
         </div>
         <div class="flex flex-col gap-[15px] mt-[50px]">
            {
               data.skillsData.map((skill) => {
                  return (
                     <div class="skill-box w-[100%] bg-black2 h-[30px] sm:h-[40px]" key={skill.id}>
                        <div class={`flex items-center justify-between h-full bg-gradient-to-r from-sky-500 to-indigo-500`} style={{width:skill.percentage}}>
                           <div class="skill-name pl-[20px] h-full text-[16px] sm:text-[20px] font-bold text-white grid place-items-center">
                              {skill.skillname}
                           </div>
                           <div class="skill-percentage text-white text-[12px] sm:text-[20px] -translate-x-[-30px] sm:-translate-x-[-50px]">
                              {skill.percentage}
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Skills;
