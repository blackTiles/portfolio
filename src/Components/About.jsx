import React, { useEffect } from "react";

const About = ({ Icons, Iconsai }) => {
  useEffect(() => {
    document.title = "About | Satyam Raj";
  }, []);

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
          I am a full-stack developer specializing in the MERN stack, with a
          strong focus on building scalable and maintainable web applications. I
          enjoy crafting both frontend and backend solutions, ensuring seamless
          user experiences and efficient performance. I am passionate about
          clean code, automation, and collaborative development.
        </p>
        <h1 className="text-white text-[35px] sm:text-[45px] font-bold">
          What I do!
        </h1>
        <p className="about-me text-white">
          I work with a wide range of technologies including MongoDB,
          Express.js, React.js, Node.js, Next.js, Tailwind CSS, and AWS. I also
          have hands-on experience with CI/CD pipelines using Jenkins,
          containerization with Docker, and deploying applications on cloud
          platforms.
        </p>

        <div className="flex flex-col xl:flex-row gap-[20px] mt-[20px]">
          <div className="flex gap-[20px] w-[100%] xl:w-[50%] border border-gray-600 rounded-xl p-[15px]">
            <div className="icon text-green-500 text-[50px]">
              <Icons.FaCode />
            </div>
            <div className>
              <div className="skill-name text-white text-[30px] leading-9">
                Front-End Skills
              </div>
              <div className="skills text-gray-500 text-[20px] pt-[5px]">
                React.js, Next.js, React Native, Tailwind CSS, GSAP
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] w-[100%] xl:w-[50%] border border-gray-600 rounded-xl p-[15px]">
            <div className="icon text-red-500 text-[50px]">
              <Iconsai.AiFillCode />
            </div>
            <div className>
              <div className="skill-name text-white text-[30px] leading-9">
                Backend Skills
              </div>
              <div className="skills text-gray-500 text-[20px] pt-[5px]">
                Express.js, MongoDB, MySQL, Flask
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
