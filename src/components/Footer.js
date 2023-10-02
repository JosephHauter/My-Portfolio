import React from 'react';

function Footer() {
  return (
    <footer>
  <div class="container mx-auto mb-10 max-w-screen-xl">
    <div className='flex items-start'>
      <button className="text-sm sm:text-base  py-2  mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("#Resume")}>Resume</button>
      <button className="text-sm sm:text-base py-2 mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/joseph-hauter-2a3240208/")}>LinkedIn</button>
      <button className="text-sm sm:text-base py-2 mr-4 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://github.com/JosephHauter")}>GitHub</button>
    </div>
    <p>Made with ❤ -<span className=' text-[#94a3b8]'>Joseph Hauter</span></p>
  </div>
</footer>

  );
}

export default Footer;
