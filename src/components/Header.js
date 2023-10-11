import React from 'react';
import { useTheme } from 'next-themes'
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <header>
      <div className="mt-10">
        <div className="flex flex justify-center">
          <Link to="/"><button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">Home</button></Link>
          {location.pathname === '/' && (
            <>
                      <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#about"}>About</button>
              <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#projects"}>Projects</button>
              <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#skills"}>Skills</button>
            </>
          )}
          <Link to="/blog"><button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#blog"}>Blog</button></Link>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://github.com/JosephHauter")}>GitHub</button>

          <Link to="/resume"><button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">Resume</button></Link>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/josephhauter/")}>LinkedIn</button>

          <a href="mailto:HauterJoseph7@gmail.com"><button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#contact"}>Contact</button></a>
          <button className=" rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            style={{
              width: '35px',
              height: '35px',
              marginTop: '10px',
              marginLeft: '8px'
              
            }}
          >
            <img 
              src={theme === "dark" ? "/images/moon.svg" : "/images/sun.svg"} 
              alt="Theme toggle"
              style={{ width: '100%', height: '100%' }} 
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
