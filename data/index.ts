export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I engineer responsive, future-ready interfaces that balance performance and clarity.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b6.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Comfortable working across time zones with strong communication skills.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[40vh] select-none",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Let's Work Together",
      description: "Are you hiring? Check out my portfolio",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex",
      imgClassName: "",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Strategic Developer & Creative Technologist",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: " Precision Engineering, Strategic Design",
      description: "Ideas. Built. Delivered.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Talenvo",
      des: "Talenvo is a talent-matching platform that connects companies with top professionals, streamlining the hiring process through intelligent candidate discovery, profile showcasing, and job matching.",
      img: "/talenvo.png",
     techTags: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "REST API", "Git"],
      link: "talenvo.co/",
    },
    {
      id: 2,
      title: "Landmark Corporate Realty",
      des: "A modern real estate platform offering verified property listings, booking inspection systems, customer service access, and corporate land acquisition services.",
      img: "/lcr.png",
      techTags: ["React.js", "Tailwind CSS", "API Integration", "Git", "Form Handling"],
      link: "lcrng.com",
    },
    {
      id: 3,
      title: "Workfront Summit",
      des: "A sample project description. Replace this with details about your project, its purpose, and key features.",
      img: "/workfront.png",
      techTags: ["React.js", "Tailwind css", "Git"],
      link: "workfront.talenvo.co/",
    },
    // {
    //   id: 4,
    //   title: "Sample Project 4",
    //   des: "A sample project description. Replace this with details about your project, its purpose, and key features.",
    //   img: "https://placehold.co/600x400",
    //   techTags: ["Tech 1", "Tech 2", "Tech 3"],
    //   link: "#",
    // },
    // {
    //   id: 5,
    //   title: "Sample Project 5",
    //   des: "A sample project description. Replace this with details about your project, its purpose, and key features.",
    //   img: "https://placehold.co/600x400",
    //   techTags: ["Tech 1", "Tech 2", "Tech 3"],
    //   link: "#",
    // },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with this developer was a great experience. Their dedication and skills helped us achieve our goals efficiently.",
      name: "Client Name 1",
      title: "Position at Company",
    },
    {
      quote:
        "I highly recommend this developer for any project. Their expertise and commitment to quality are unmatched.",
      name: "Client Name 2",
      title: "Position at Company",
    },
    {
      quote:
        "This developer brought innovative solutions to our challenges. Their professionalism made the collaboration seamless.",
      name: "Client Name 3",
      title: "Position at Company",
    },
    {
      quote:
        "The results delivered by this developer exceeded our expectations. They are a true asset to any team.",
      name: "Client Name 4",
      title: "Position at Company",
    },
    {
      quote:
        "Collaborating with this developer was a pleasure. Their attention to detail and passion for development are evident.",
      name: "Client Name 5",
      title: "Position at Company",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Company A",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 2,
      name: "Company B",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 3,
      name: "Company C",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 4,
      name: "Company D",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
    {
      id: 5,
      name: "Company E",
      img: "/placeholder-logo.svg",
      nameImg: "/placeholder-name.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer At Talenvo",
      desc: "Developed key user-facing features for Talenvo, a platform that connects talents with job opportunities. Focused on responsive design, seamless user experience, and smooth API integration to support platform functionality.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Technical Lead (Frontend), Landmark Realty",
      desc: "Built the official website and mobile application for Landmark's real estate products using React and React Native. Coordinated backend development, managed API integration, and hosted services on AWS EC2. Delivered a product demo to stakeholders and ensured smooth technical execution across the project lifecycle.",
      className: "md:col-span-2", 
      thumbnail: "/exp4.svg",
    },
    // {
    //   id: 3,
    //   title: "Freelance Work",
    //   desc: "Overview of freelance projects or clients. Include the type of work and technologies used.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 4,
    //   title: "Project Leadership Role",
    //   desc: "Details of leading a project or team. Focus on leadership skills and project outcomes.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: {
        src: "/git.svg",
        alt: "GitHub Icon",
      },
      href: "https://github.com/Emmanuel-Sasere",
    },
    {
      id: 2,
      img: {
        src: "/link.svg",
        alt: "LinkedIn Icon",
      },
      href: "https://www.linkedin.com/in/emmanuelsasere/",
    },
  ];
