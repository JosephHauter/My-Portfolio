import React from 'react';
import About from './About';
import { ThemeProvider } from 'next-themes'
import '../global.css'
import { TypeAnimation } from 'react-type-animation';
import WorkCard from './Work';
import Skills from './Skills';
import { Link } from 'react-router-dom';
import Projects from './Projects';

const HomePage = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="flex flex-col items-start justify-center min-h-screen mx-auto w-4/5 font-hind">
        <div className="mt-5">
          <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-4/5 sm:w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">Hello 👋</h1>
          <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">I'm Joseph Hauter-</h1>
          <TypeAnimation 
            sequence={['Software Engineer',1500,'Developer', 1000, 'Coder',1000, 'Leetcoder',1000, 'Hackathon Participant', 1000,'Handsome😎', 500]}
            repeat={Infinity} 
            className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-4/5 sm:w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100"
          />
          <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">based in New York City.</h1>
          <div className='flex'>
            <Link to="/resume">
              <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">Resume</button>
            </Link>
            <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/josephhauter/")}>LinkedIn</button>
            <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://github.com/JosephHauter")}>GitHub</button>
            <a href="mailto:HauterJoseph7@gmail.com">
              <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#contact"}>Contact</button>
            </a>
          </div>
        </div>
        <br /><br /><br /><br /><br />
        <About />
        <br /><br /><br /><br /><br />
        <Skills />
        <br /><br /><br /><br /><br />
        <Projects /> 
        <br /><br /><br /><br /><br />
      </div>
    </div>
  );
}

export default HomePage;
