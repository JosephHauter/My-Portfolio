import React from 'react';
import { useTheme } from 'next-themes'

function Header() {
  
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <div className="mt-10">
        <div className="flex">
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#home"}>Home</button>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#about"}>About</button>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#projects"}>Projects</button>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#blog"}>Blog</button>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#resume"}>Resume</button>
          <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#contact"}>Contact</button>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            style={{
              width: '30px',
              height: '30px',
              marginTop: '10px'
              
            }}
          >
            <img 
              src={theme === "dark" ? "/images/moon.svg" : "/images/sun.svg"} 
              alt="Theme toggle"
              style={{ width: '100%', height: '100%' }} // Make the image fill the button
            />
          </button>
        </div>
        </div>

    </header>
  );
}

export default Header;
