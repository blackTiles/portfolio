import React, {useEffect} from "react";


const Blogs = ({data}) => {
  
  useEffect(()=>{
    document.title = "Blogs | Satyam Raj";
  },[])

  return (
    <div class="blogs-section bg-gray-800 w-[100%] px-[10px] sm:px-[50px] py-[50px] lg:pb-[0px] sm:rounded-2xl shadow-lg">
      <div class="intro">
        <div class="flex justify-start flex-col lg:flex-row items-center gap-[25px]">
          <h1 class="text-white text-[35px] sm:text-[45px] font-bold">Blogs</h1>
          <div class="w-[190px] h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl"></div>
        </div>
      </div>
      <div class="flex flex-col gap-[15px] mt-[30px]">
        <div class="projects flex justify-center items-center flex-wrap gap-[20px] lg:pb-[50px] lg:h-[600px] lg:overflow-x-hidden lg:overflow-y-scroll">
          {
            data.blogs.map((blog) => {
              return (
                <div
                  class="project flex flex-col justify-between w-[320px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-md">
                  <div class="">
                    <div class="project-pic">
                      <img class="w-[100%] h-[220px] object-cover rounded-t-lg"
                        src={blog.image} alt="" />
                    </div>
                    <div class="project-head text-[25px] text-white my-[12px] px-[20px]">
                      {blog.blogHeading}
                    </div>
                    <div class="project-desc px-[20px] text-white/75 h-[100px] overflow-hidden">
                      {blog.blogDescription}
                    </div>
                  </div>
                  <div class="project-links flex justify-between items-center mt-[20px] text-gray-900 gap-[2px]">
                    <a href={blog.descriptionLink} target="_blank" rel="noopener noreferrer"
                      class="preview text-center text-sky-800 text-[16px] w-[100%] text-[25px] bg-white/75 py-[5px] rounded-bl-lg rounded-br-lg">Read
                              {`More >>`}</a>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default Blogs;
