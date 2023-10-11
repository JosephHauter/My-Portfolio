import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
  <div class="container mx-auto mb-10 max-w-screen-xl">
    <div className='flex items-start'>
    <Link to="/resume"><button className="text-sm sm:text-base  py-2  mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">Resume</button></Link>
      <button className="text-sm sm:text-base py-2 mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/josephhauter/")}>LinkedIn</button>
      <button className="text-sm sm:text-base py-2 mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://github.com/JosephHauter")}>GitHub</button>
      <a href="mailto:HauterJoseph7@gmail.com"><button className="text-sm sm:text-base py-2 mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.location.href="#contact"}>Contact</button></a>
    </div>
    <p>Made with ❤ -<span className=' text-[#94a3b8]'>Joseph Hauter</span></p>
  </div>
</footer>

  );
}

export default Footer;
