import React from "react";
import * as Icons from 'react-icons/fa';
import * as Iconsmd from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="navbar-desktop w-[100%] h-fit sm:w-fit fixed bottom-0 sm:top-[30px] lg:static flex justify-between sm:gap-[15px] bg-gray-100 lg:bg-gray-800 sm:px-[80px] lg:px-[40px] sm:py-[10px] lg:py-[30px] sm:rounded-2xl shadow-inner sm:drop-shadow-2xl lg:shadow-none shadow-cyan-500/50">
        <Link to="/" className="nav-box text-black1 lg:bg-black2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center gap-[0px] lg:gap-[5px] sm:bg-black1 sm:text-white sm:rounded-xl w-[100%] hover:text-white sm:w-[60px] h-[60px] xl:w-[90px] xl:h-[90px]">
          <div className="nav-icon text-[15px] lg:text-[20px]">
            <Iconsmd.MdAccountCircle />
          </div>
          <div className="nav-link text-[12px] xl:text-[16px]">About</div>
        </Link>
        <Link to="/skills" className="nav-box text-black1 lg:bg-black2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center gap-[0px] lg:gap-[5px] sm:bg-black1 sm:text-white sm:rounded-xl w-[100%] hover:text-white sm:w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] ">
          <div className="nav-icon text-[15px] lg:text-[20px]">
            <Icons.FaTools />
          </div>
          <div className="nav-link text-[12px] xl:text-[16px]">Skills</div>
        </Link>
        <Link to="/projects" className="nav-box text-black1 lg:bg-black2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center gap-[0px] lg:gap-[5px] sm:bg-black1 sm:text-white sm:rounded-xl w-[100%] hover:text-white sm:w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] ">
          <div className="nav-icon text-[15px] lg:text-[20px]">
            <Icons.FaProjectDiagram />
          </div>
          <div className="nav-link text-[12px] xl:text-[16px]">Projects</div>
        </Link>
        <Link to="/blogs" className="nav-box text-black1 lg:bg-black2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center gap-[0px] lg:gap-[5px] sm:bg-black1 sm:text-white sm:rounded-xl w-[100%] hover:text-white sm:w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] ">
          <div className="nav-icon text-[15px] lg:text-[20px]">
            <Icons.FaBlogger />
          </div>
          <div className="nav-link text-[12px] xl:text-[16px]">Blogs</div>
        </Link>
        <Link to="/contact" className="nav-box text-black1 lg:bg-black2 cursor-pointer hover:bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center gap-[0px] lg:gap-[5px] sm:bg-black1 sm:text-white sm:rounded-xl w-[100%] hover:text-white sm:w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] ">
          <div className="nav-icon text-[15px] lg:text-[20px]">
            <Iconsmd.MdPermContactCalendar />
          </div>
          <div className="nav-link text-[12px] xl:text-[16px]">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
