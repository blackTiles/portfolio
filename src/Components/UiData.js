const data = {
  navBarData: [
    {
      id: 1,
      icon: "Iconsmd.MdAccountCircle",
      title: "About",
    },
    {
      id: 2,
      icon: "Icons.FaTools",
      title: "Skills",
    },
    {
      id: 3,
      icon: "Icons.FaProjectDiagram",
      title: "projects",
    },
    {
      id: 4,
      icon: "Icons.FaBlogger",
      title: "Blogs",
    },
    {
      id: 5,
      icon: "Iconsmd.MdPermContactCalendar",
      title: "Contact",
    },
  ],
  skillsData: [
    { id: 1, skillname: "HTML", percentage: "80%" },
    { id: 2, skillname: "CSS", percentage: "75%" },
    { id: 3, skillname: "Tailwind CSS", percentage: "80%" },
    { id: 4, skillname: "GSAP", percentage: "80%" },
    { id: 5, skillname: "JavaScript", percentage: "70%" },
    { id: 6, skillname: "React", percentage: "60%" },
    { id: 7, skillname: "Next.js", percentage: "60%" },
    { id: 8, skillname: "Node.js", percentage: "65%" },
    { id: 9, skillname: "Express.js", percentage: "65%" },
    { id: 10, skillname: "Python", percentage: "70%" },
    { id: 11, skillname: "Flask", percentage: "75%" },
    { id: 12, skillname: "C/C++", percentage: "65%" },

    // Cloud & DevOps Skills
    { id: 13, skillname: "AWS EC2", percentage: "70%" },
    { id: 14, skillname: "AWS S3", percentage: "70%" },
    { id: 15, skillname: "AWS Lambda", percentage: "65%" },
    { id: 16, skillname: "Jenkins CI/CD", percentage: "70%" },
    { id: 17, skillname: "Docker", percentage: "65%" },
    { id: 18, skillname: "GCP", percentage: "60%" },
    { id: 18, skillname: "Nginx", percentage: "60%" },
  ],
  projectNav: [
    {
      id: 1,
      navTitle: "All",
    },
    {
      id: 2,
      navTitle: "Full Stack",
    },
    {
      id: 3,
      navTitle: "Front end",
    },
    {
      id: 3,
      navTitle: "Mobile App",
    }
  ],
  projects: [
    {
      id: 1,
      category: "Full Stack",
      image: "/resource/campus-connect.png",
      projectHeading: "Campus Connect",
      projectDescription:
        "Campus Connect is a social media platform designed exclusively for college students, allowing access only through a verified college email ID. It helps students connect with their peers by enabling features like image posting, real-time chat, gift sending, and notes sharing.",
      liveLink: "https://campusconnect.fun",
      githubLink: "https://github.com/blackTiles/campus-connect",
    },
    {
      id: 1,
      category: "Full Stack",
      image: "/resource/skills-bridge.png",
      projectHeading: "Skills Bridge",
      projectDescription:
        "SkillsBridge is a scalable full-stack web application designed to connect students with experienced mentors in real time.",
      liveLink: "https://skills-bridgex.netlify.app",
      githubLink: "https://github.com/blackTiles/skills-bridge",
    },
    {
      id: 1,
      category: "Mobile App",
      image: "/resource/smartech.png",
      projectHeading: "User and Event Tracking App",
      projectDescription:
        "The app is built on react native which tracks user events using Netcore CE SDK.",
      liveLink: "https://github.com/blackTiles/Smartech-App",
      githubLink: "https://github.com/blackTiles/Smartech-App",
    },
    {
      id: 1,
      category: "Front end",
      image: "/resource/shopify1.png",
      projectHeading: "Shopify Homepage",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/Tailwind-Shopify-Clone/",
      githubLink: "https://github.com/blackTiles/Tailwind-Shopify-Clone",
    },
    {
      id: 2,
      category: "Front end",
      image: "/resource/rode.png",
      projectHeading: "RODE Homepage",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/Tailwind-RODE-Clone",
      githubLink: "https://github.com/blackTiles/Tailwind-RODE-Clone",
    },
    {
      id: 3,
      category: "Front end",
      image: "/resource/paytm.png",
      projectHeading: "Paytm Homepage",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/paytm-clone/",
      githubLink: "https://github.com/blackTiles/paytm-clone",
    },
    {
      id: 4,
      category: "Front end",
      image: "/resource/visual.png",
      projectHeading: "Portfolio Page",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/LIVE-CLASS-PROJECT-15/",
      githubLink: "https://github.com/blackTiles/Tailwind-RODE-Clone",
    },
    {
      id: 5,
      category: "Front end",
      image: "/resource/saas.png",
      projectHeading: "SaaS Homepage",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/LIVE-CLASS-PROJECT-13/",
      githubLink: "https://github.com/blackTiles/LIVE-CLASS-PROJECT-13",
    },
    {
      id: 6,
      category: "Front end",
      image: "/resource/service.png",
      projectHeading: "Business Landing Page",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/LIVE-CLASS-PROJECT-12/",
      githubLink: "https://github.com/blackTiles/LIVE-CLASS-PROJECT-12",
    },
    {
      id: 7,
      category: "Front end",
      image: "/resource/hosting.png",
      projectHeading: "Hosting Service Page",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/LIVE-CLASS-PROJECT-11/",
      githubLink: "https://github.com/blackTiles/LIVE-CLASS-PROJECT-11",
    },
    {
      id: 8,
      category: "Front end",
      image: "/resource/web.png",
      projectHeading: "Web Landing Page",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id.",
      liveLink: "https://blacktiles.github.io/LIVE-CLASS-PROJECT-09/",
      githubLink: "https://github.com/blackTiles/LIVE-CLASS-PROJECT-09",
    },
  ],
  blogs: [
    {
      id: 1,
      image: "/resource/blogs/vscode.png",
      blogHeading: "VS Code Shortcuts",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
      descriptionLink: "",
    },
    {
      id: 2,
      image: "/resource/blogs/git.png",
      blogHeading: "Git & Github",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
      descriptionLink: "",
    },
    {
      id: 3,
      image: "/resource/blogs/flexbox.png",
      blogHeading: "CSS Flexbox",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
      descriptionLink: "",
    },
    {
      id: 4,
      image: "/resource/blogs/array.png",
      blogHeading: "Arrays in JavaScript",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut minima deserunt hic ducimus nam quas doloremque asperiores assumenda officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur eveniet quis! Voluptatem, quibusdam sapiente molestias quos neque, deserunt architecto necessitatibus commodi nostrum maxime, exercitationem vitae eligendi maiores aliquid magni!",
      descriptionLink: "",
    },
  ],
};

// console.log(data.navBarData[0].icon);
export default data;
