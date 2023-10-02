import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from './About';
import Projects from './/Projects';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';
import { ThemeProvider } from 'next-themes'
import '../global.css'
import { TypeAnimation } from 'react-type-animation';
import WorkCard from './Work';
import SkillsCard from '../components/Skills'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
    <div className="gradient-circle"></div>
    <div className="gradient-circle-bottom"></div>
    <Routes>
        {/* <Route path="/" element={<App />} /> Replace HomePage with your actual home page component */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        {/* Other routes here */}
      </Routes>
    <div className="container mx-auto mb-10">
      <Header />
      <div class="flex flex-col items-start justify-center min-h-screen mx-auto w-4/5 font-hind">
  <div class="mt-5">
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-4/5 sm:w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">Hello 👋</h1>
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">I'm Joseph Hauter-</h1>
    <TypeAnimation 
    sequence={['Software Engineer',1500,'Developer', 1000, 'Coder',1000, 'Leetcoder',1000, 'Hackathon Participant', 1000,'Handsome😎', 500]}
    repeat={Infinity} 
    className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-4/5 sm:w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100"
    />
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">based in New York City.</h1>
    <div className='flex'>
    <Link to="/resume">
  <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer">Resume</button>
</Link>
    <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/joseph-hauter-2a3240208/")}>LinkedIn</button>
    <button className="text-sm sm:text-base p-1 lg:p-2 m-1 lg:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer" onClick={() => window.open("https://github.com/JosephHauter")}>GitHub</button>
  
  </div>

  </div>
  <br /><br /><br /><br /><br />
  
  <About />

  <br /><br /><br /><br /><br />
  <div class="container mx-auto mb-10 max-w-screen-xl" id="projects">
    <h1 className="tablet:m-10 text-2xl text-bold">Projects.</h1>
  <div className="grid grid-cols-2 gap-10">
  <WorkCard key={"Project 1"}
    img={"images/Monkeypox_Proj.png"}
    name={"Hackathon Project - Virus Tracker"}
    description={"Hackathon Project that won Public Favortie was my first ever hackathon alongside with my teamates. We had a ton of fun and worked all night long and learned so much. Built with Javascript,D3.js, Chat.js,HTML, CSS, Bootstrap."}
    onClick={()=> window.open("https://github.com/JosephHauter/Virus-Tracker")}
    />

  <WorkCard key={"Project 4"} img={"images/Tracker.png"} name={"ToDoList Tracker"} description={"Wanted to learn react.js and what better way than to start with a activity tracker, but with a motivational quote API every time you refresh."} onClick={()=> window.open("https://github.com/JosephHauter/Virus-Tracker")} />
  <WorkCard key={"Project 2"} img={"images/twitterClone.png"} name={"Twitter Clone"} description={"Twitter Clone built with teammate for a bootcamp built with Javascript, next.js, HTML, CSS, mongoDB"} onClick={()=> window.open("https://github.com/JosephHauter/Social-Media-App")} />
  <WorkCard key={"Project 3"} img={"images/alarmc.jpg"} name={"Alarm Clock W/GUI"} description={"Built an Alarm Clock with a GUI using Python and you can add custom alarm sounds. "} onClick={()=> window.open("https://github.com/JosephHauter/AlarmClock-With-GUI")} />
  {/* <WorkCard key={"Project 5"} img={"images/atm app.png"} name={"ATM Banking App"} description={"Built my first ever C++ project making a ATM APP where you can deposit, withdraw, check balance."} onClick={()=> window.open("https://github.com/JosephHauter/Virus-Tracker")} /> */}

</div>
  </div>
  <br /><br /><br /><br /><br />

  <div class="container mx-auto mb-10 max-w-screen-xl" id="skills">
          <h1 className="tablet:m-10 text-2xl text-bold">Skills.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            
              <SkillsCard
                key={"Skills 1"}
                name={"Programming Languages"}
                description={"Python, C++, Javascript, HTML, CSS, PostgreSQL, Java, SCSS, Ruby"}
              />
              <SkillsCard
                key={"Skills 2"}
                name={"FrameWorks/ Libraries"}
                description={"React, NodeJs, TailWind, Bootstrap, Webdriverio, Axios, Cucumber, matplotlib, NumPy, Pandas, ExpressJs, ChartJs, mobproxy, selenium, webdriver"}
              />
              <SkillsCard
                key={"Skills 3"}
                name={"Tools"}
                description={"Docker, Git, MongoDB, VS Code, Atom, Github, Postman, AWS"}
              />
              <SkillsCard
                key={"Skills 4"}
                name={"Vocal languages"}
                description={"English-Native, Spanish-Beginner, French-Beginner, Arabic-Beginner"}
              />
        </div>
        </div>
    
      {/* 
      <Blog />
      <Resume />
      <Contact />
       */}
       <Footer />
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
