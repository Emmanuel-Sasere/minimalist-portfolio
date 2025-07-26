"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
 const words = [
  {
    text: "I",
  },
  {
    text: "Sculpt",
  },
  {
    text: "Solutions",
  },
  {
    text: "Into",
    className: "text-purple dark:text-purple",
  },
  {
    text: "Value",
    className: "text-purple dark:text-purple",
  },
];


  return (
    
    <div id="home" className="pb-20 pt-36 relative"> 
            {/* ------------- start of one click deploy buttons ------------- */}
                {/* remove this once youve cloned this repo and deployed it */}
            <div className="absolute top-10 right-0 z-10 flex align-center ">
              <img src="/sasere.png" width={100} height={100} alt="Sasere Brand"/>
              <a className="m-0 p-0 h-0" href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWaqasIshaque1%2Fportfolio-template&project-name=devfolio-waqas&repository-name=devfolio-waqas-ishaque&redirect-url=https%3A%2F%2Fgithub.com%2FWaqasIshaque1%2Fportfolio-template&demo-title=Devfolio%20by%20WAQAS%20ISHAQUE&demo-description=Minimal%20portfolio%20template%20made%20using%20next%2014%20and%20Acceternity%20UI%20using%20tailwind%20css%20for%20styling&demo-url=https%3A%2F%2Fportfolio-template-six-rust.vercel.app&demo-image=https%3A%2F%2Fportfolio-template-six-rust.vercel.app%2Fscr1.png"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
              <a className="scale-75 m-0 p-0" href="https://deploy.workers.cloudflare.com/?url=https://github.com/WaqasIshaque1/portfolio-template"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare"/></a>
            </div>

             {/* ------- end of one click deploy buttons ------------ */}

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
          fill="white"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20-z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center pt-10 pb-10">
          {/* <img
            src="/profile.jpg"
            alt="profile-pic"
            className="rounded-full w-80 h-80 border-2 border-white-100 mb-5"
          /> */}
          <h2 className="uppercase tracking-widest text-3xl text-center text-blue-100 max-w-120">
          Emmanuel Sasere
          </h2>
          <TypewriterEffect
            className="text-center md:text-5xl lg:text-6xl my-5"
            words={words}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-[200]">
            Frontend Engineer | Code Alchemist | Sculpting value from vision.
          </p>

          <a href="mailto:[emmanuelsaseretruth@gmail.com]?subject=Hi%20Sasere%20I%20have%20a%20project%20in%20mind" target="_blank" className="cursor-pointer">
            <MagicButton
              title="Say HI!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
