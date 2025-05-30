import React, { useEffect } from "react";

const Skills = ({ data }) => {
  useEffect(() => {
    document.title = "Skills | Satyam Raj";
  }, []);

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-[50px]">
        {data.skillsData.map((skill) => {
          return (
            <div
              key={skill.id}
              className="bg-black2 text-white text-center py-3 rounded-md text-[16px] sm:text-[20px] font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              {skill.skillname}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
