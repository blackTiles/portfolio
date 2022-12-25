import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import * as Icons from "react-icons/fa";
import * as Iconsmd from "react-icons/md";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {

  const subElements = (
    <>
      <div className="details-box bg-black2 w-[340px] py-[20px] px-[30px] rounded-2xl block">
        <div className="phone flex items-center gap-[10px] border-b-[1px] border-b-gray-600 py-[10px]">
          <div className="icon text-fuchsia-500 w-[45px] h-[45px] bg-black1 rounded-lg grid place-items-center">
            <Icons.FaPhoneAlt />
          </div>
          <div>
            <div className="label text-gray-500 text-[15px]">Phone</div>
            <div className="text-white">+91 73198 65341</div>
          </div>
        </div>
        <div className="email flex items-center gap-[10px] border-b-[1px] border-b-gray-600 py-[10px]">
          <div className="icon text-cyan-400 w-[45px] h-[45px] bg-black1 rounded-lg grid place-items-center">
            <Iconsmd.MdEmail />
          </div>
          <div>
            <div className="label text-gray-500 text-[15px]">Email</div>
            <div className="text-white">satyamraj4766@gmail.com</div>
          </div>
        </div>
        <div className="location flex items-center gap-[10px] border-b-[1px] border-b-gray-600 py-[10px]">
          <div className="icon text-pink-300 w-[45px] h-[45px] bg-black1 rounded-lg grid place-items-center">
            <Iconsmd.MdLocationOn />
          </div>
          <div>
            <div className="label text-gray-500 text-[15px]">Location</div>
            <div className="text-white">Bengaluru, India</div>
          </div>
        </div>
        <div className="birthday flex items-center gap-[10px] py-[10px]">
          <div className="icon text-cyan-200 w-[45px] h-[45px] bg-black1 rounded-lg grid place-items-center">
            <Icons.FaRegCalendarAlt />
          </div>
          <div>
            <div className="label text-gray-500 text-[15px]">Birthday</div>
            <div className="text-white">Sep 2, 2004</div>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-75 text-[20px] w-[210px] rounded-full text-white h-[55px] flex justify-center items-center gap-[10px]">
        <span>
          <Icons.FaDownload />
        </span>
        <span>Download CV</span>
      </button>
    </>
  );

 
  let location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("/");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  
  useEffect(() => {
    setCurrentUrl(location.pathname);

    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, [location.pathname]);


 
  return (
    <div className="sm:px-[50px] xl:p-[0px] w-[100%] mx-auto transition duration-150 ease-in-out mb-[100px]">
      <main className="max-w-[1280px] flex flex-col lg:flex-row justify-between items-center sm:gap-[40px] items-center mx-auto mt-[50px]">
        <div className={`profile-section relative w-[100%] sm:w-[400px] sm:h-[730px] bg-gray-800 mt-[200px] lg:p-[20px] flex flex-col items-center gap-[30px] rounded-t-3xl sm:rounded-3xl sm:shadow-lg ${(currentUrl !== "/" && windowSize <= 640)?"h-[250px]":"730px"}`}>
          <div className="profile-image w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] -translate-y-[100px] lg:-translate-y-[150px] rounded-3xl">
            <img
              className="w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] rounded-3xl object-cover"
              src={process.env.PUBLIC_URL + "/resource/me.jpg"}
              alt="mypic"
            />
          </div>
          <div className="-translate-y-[100px] lg:-translate-y-[150px] flex flex flex-col items-center gap-[15px]">
            <div className="name text-white text-[35px] font-bold">
              Satyam Raj
            </div>
            <div className="profession text-grey bg-black2 px-[20px] py-[8px] rounded-lg">
              Front-End Developer
            </div>
            <div className="web-links flex gap-[10px] w-full justify-center">
              <a
                href="#abc"
                className="cursor-pointer w-[45px] h-[45px] grid place-items-center hover:opacity-75 text-sky-600 bg-black2 rounded-lg text-[20px]"
              >
                <Icons.FaLinkedinIn />
              </a>
              <a
                href="#abc"
                className="cursor-pointer w-[45px] h-[45px] grid place-items-center hover:opacity-75 text-gray-200 bg-black2 rounded-lg text-[20px]"
              >
                <Icons.FaGithub />
              </a>
              <a
                href="#abc"
                className="cursor-pointer w-[45px] h-[45px] grid place-items-center hover:opacity-75 text-fuchsia-500 bg-black2 rounded-lg text-[20px]"
              >
                <Icons.FaInstagram />
              </a>
            </div>
            {
              (currentUrl !== "/" && windowSize <= 640)? "":subElements
            }
          </div>
        </div>
        <div className="right-section w-[100%] flex flex-col lg:gap-[40px] flex-1">
          <Navbar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Main;
