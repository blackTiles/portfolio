const data = {
   navBarData: [
      {
         id: 1,
         icon: "Iconsmd.MdAccountCircle",
         title: "About"
      },
      {
         id: 2,
         icon: "Icons.FaTools",
         title: "Skills"
      },
      {
         id: 3,
         icon: "Icons.FaProjectDiagram",
         title: "projects"
      },
      {
         id: 4,
         icon: "Icons.FaBlogger",
         title: "Blogs"
      },
      {
         id: 5,
         icon: "Iconsmd.MdPermContactCalendar",
         title: "Contact"
      }
   ],
   skillsData:[
      {
         id: 1,
         skillname : "HTML",
         percentage : "80%"
      },
      {
         id: 2,
         skillname : "CSS",
         percentage : "75%"
      },
      {
         id: 3,
         skillname : "Tailwind CSS",
         percentage : "80%"
      },
      {
         id: 4,
         skillname : "JavaScript",
         percentage : "70%"
      },
      {
         id: 5,
         skillname : "React",
         percentage : "60%"
      },
      {
         id: 6,
         skillname : "Node.js",
         percentage : "65%"
      },
      {
         id: 7,
         skillname : "Python",
         percentage : "70%"
      },
      {
         id: 8,
         skillname : "Flask",
         percentage : "75%"
      },
      {
         id: 9,
         skillname : "C/C++",
         percentage : "65%"
      }
   ],
   projectNav :[
      {
         id:1,
         navTitle: "All"
      },
      {
         id:2,
         navTitle: "Front end"
      },
      {
         id:3,
         navTitle: "Backend"
      },
      {
         id:4,
         navTitle: "Full Stack"
      }
   ],
   projects:[
      {
         id:1,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/shopify1.png",
         projectHeading : "Shopify Homepage",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/Tailwind-Shopify-Clone/",
         githubLink : "https://github.com/blackTiles/Tailwind-Shopify-Clone"
      },
      {
         id:2,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/rode.png",
         projectHeading : "RODE Homepage",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/Tailwind-RODE-Clone",
         githubLink : "https://github.com/blackTiles/Tailwind-RODE-Clone"
      },
      {
         id:3,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/paytm.png",
         projectHeading : "Paytm Homepage",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/paytm-clone/",
         githubLink : "https://github.com/blackTiles/paytm-clone"
      },
      {
         id:4,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/visual.png",
         projectHeading : "Portfolio Page",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/LIVE-CLASS-PROJECT-15/",
         githubLink : "https://github.com/blackTiles/Tailwind-RODE-Clone"
      },
      {
         id:5,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/saas.png",
         projectHeading : "SaaS Homepage",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/LIVE-CLASS-PROJECT-13/",
         githubLink : "https://github.com/blackTiles/LIVE-CLASS-PROJECT-13"
      },
      {
         id:6,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/service.png",
         projectHeading : "Business Landing Page",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/LIVE-CLASS-PROJECT-12/",
         githubLink : "https://github.com/blackTiles/LIVE-CLASS-PROJECT-12"
      },
      {
         id:7,
         category:"Front end",
         image : process.env.PUBLIC_URL + "/resource/hosting.png",
         projectHeading : "Hosting Service Page",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/LIVE-CLASS-PROJECT-11/",
         githubLink : "https://github.com/blackTiles/LIVE-CLASS-PROJECT-11"
      },
      {
         id:8, 
         category:"Front end",        
         image : process.env.PUBLIC_URL + "/resource/web.png",
         projectHeading : "Web Landing Page",
         projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
         liveLink : "https://blacktiles.github.io/LIVE-CLASS-PROJECT-09/",
         githubLink : "https://github.com/blackTiles/LIVE-CLASS-PROJECT-09"
      },
   ],
   blogs:[
      {
         id:1,
         image:process.env.PUBLIC_URL + "/resource/blogs/vscode.png",
         blogHeading:"VS Code Shortcuts",
         blogDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
         descriptionLink:"",
      },
      {
         id:2,
         image:process.env.PUBLIC_URL + "/resource/blogs/git.png",
         blogHeading:"Git & Github",
         blogDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
         descriptionLink:"",
      },
      {
         id:3,
         image:process.env.PUBLIC_URL + "/resource/blogs/flexbox.png",
         blogHeading:"CSS Flexbox",
         blogDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
         descriptionLink:"",
      },
      {
         id:4,
         image:process.env.PUBLIC_URL + "/resource/blogs/array.png",
         blogHeading:"Arrays in JavaScript",
         blogDescription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
         descriptionLink:"",
      },
   ]
}


// console.log(data.navBarData[0].icon);
export default data;
