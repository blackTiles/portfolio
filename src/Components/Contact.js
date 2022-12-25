import React from 'react';

const Contact = () => {
  return (
    <div className="skills-section bg-gray-800 w-[100%] px-[10px] sm:px-[50px] py-[50px] lg:pb-[0px] sm:rounded-2xl shadow-lg">
      <div className="intro">
        <div className="flex justify-start flex-col lg:flex-row items-center gap-[25px]">
          <h1 className="text-white text-[35px] sm:text-[45px] font-bold">Get in Touch</h1>
          <div className="w-[190px] h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl">
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-[15px] mt-[30px] w-full">
        <div className="sm:py-10 mx-auto flex w-full">
          <div className="w-full bg-black2 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
            </div>
            <button className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-6 focus:outline-none hover:opacity-75 rounded text-lg">Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact;




