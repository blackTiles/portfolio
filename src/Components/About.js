import React, {useEffect} from "react";

const About = ({Icons, Iconsai}) => {

  useEffect(()=>{
    document.title = "About | Satyam Raj";
  },[])

  return (
    <div className="skills-section bg-gray-800 w-[100%] px-[10px] sm:px-[50px] py-[50px] sm:rounded-2xl shadow-lg">
      <div className="intro">
        <div className="flex justify-start flex-col lg:flex-row items-center gap-[25px]">
          <h1 className="text-white text-[35px] sm:text-[45px] font-bold">
            About Me
          </h1>
          <div className="w-[190px] h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] mt-[30px] text-[18px]">
        <p className="about-me text-white">
          I am a front-end developer who loves making user interfaces look
          beautiful and easy to use. I specialize in creating responsive and
          adaptive user interfaces, which makes my work unique. I am highly
          driven and passionate about my work and enjoy collaborating with other
          developers and designers.
        </p>
        <h1 className="text-white text-[35px] sm:text-[45px] font-bold">
          What I do!
        </h1>
        <p className="about-me text-white">
          I have experience working with wide range of technologies including
          React.js, JavaScript, tailwind css, HTML/CSS, python and MySQL.
        </p>
        <div className="flex flex-col xl:flex-row gap-[20px] mt-[20px]">
          <div className="flex gap-[20px] w-[100%] xl:w-[50%] border border-gray-600 rounded-xl p-[15px]">
            <div className="icon text-green-500 text-[50px]">
              <Icons.FaCode />
            </div>
            <div className>
              <div className="skill-name text-white text-[30px] leading-9">
                Front-End Development
              </div>
              <div className="skills text-gray-500 text-[20px] pt-[5px]">
                HTML/CSS, JavaScript, React.js, Tailwind CSS
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] w-[100%] xl:w-[50%] border border-gray-600 rounded-xl p-[15px]">
            <div className="icon text-red-500 text-[50px]">
              <Iconsai.AiFillCode />
            </div>
            <div className>
              <div className="skill-name text-white text-[30px] leading-9">
                Backend Development
              </div>
              <div className="skills text-gray-500 text-[20px] pt-[5px]">
                Python, MySQL, Node.js, Firebase
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
