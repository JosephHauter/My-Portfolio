import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto mb-10 max-w-screen-xl" id="contact">
      <h1 className="tablet:m-10 text-2xl font-bold">Contact.</h1>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <a href="https://github.com/JosephHauter" target="_blank" rel="noopener noreferrer" className="text-lg p-2 m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">
            <FaGithub className="mr-2" size={24} /> GitHub
          </a>
        </div>
        <div className="mb-4">
          <a href="https://www.linkedin.com/in/josephhauter/" target="_blank" rel="noopener noreferrer" className="text-lg p-2 m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">
            <FaLinkedin className="mr-2" size={24} /> LinkedIn
          </a>
        </div>
        <div className="mb-4">
          <a href="mailto:HauterJoseph7@gmail.com" className="text-lg p-2 m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">
            <FaEnvelope className="mr-2" size={24} /> Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
