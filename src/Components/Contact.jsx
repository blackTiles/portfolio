import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [status, setStatus] = useState("");

  const statusMessage = (
    <>
      <div className={`success-message  z-40 fixed top-0 left-[50%] translate-y-[0%] translate-x-[-50%] bg-gray-800 text-center w-[250px] ${status === 'SUCCESS'?"text-green-500":"text-red-500"}`}>
        <h4 className="px-[20px] py-[18px]">{status === 'SUCCESS'?'Message sent successfully':'Error occured !'}</h4>
        <div className={`w-[100%] h-[3px] close-animation ${status === 'SUCCESS'?"bg-green-500":"bg-red-500"}`}></div>
      </div>
    </>
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7gyv3vj",
        "template_pm4gh0a",
        form.current,
        "IZr2IZd9kZ_I4DnMl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
          form.current.reset();
        },
        (error) => {
          setStatus("ERROR");
          form.current.reset();
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    document.title = "Contact | Satyam Raj";
    if (status) {
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  }, [status]);

  return (
    <div className="skills-section bg-gray-800 w-[100%] px-[10px] sm:px-[50px] py-[50px] lg:pb-[0px] sm:rounded-2xl shadow-lg">
      <div className="intro">
        <div className="flex justify-start flex-col lg:flex-row items-center gap-[25px]">
          <h1 className="text-white text-[35px] sm:text-[45px] font-bold">
            Get in Touch
          </h1>
          <div className="w-[190px] h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl"></div>
        </div>
      </div>
      {status ? statusMessage : ""}
      <form
        className="flex flex-col gap-[15px] mt-[30px] w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="sm:py-10 mx-auto flex w-full">
          <div className="w-full bg-black2 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="user_name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="user_email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-6 focus:outline-none hover:opacity-75 rounded text-lg"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
