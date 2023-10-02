import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <div  id='about'>
        <h1 className='text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-4/5 sm:w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100'>About.</h1>
    <div className="app-window">
      <div className="app-window-header">
        <div className="app-window-button red"></div>
        <div className="app-window-button yellow"></div>
        <div className="app-window-button green"></div>
      </div>
      <div className="card">
        {<div className="card-body font-trebuchet text-justify ml-3 mr-3" style={{height: "auto", fontSize: "132%", lineHeight: "200%"}}>
  <br />
  <div style={{display: "flex", justifyContent: "center"}}>
    <img src='images/me.png' class='object-contain' style={{width: "20%", height: "auto", borderRadius: "12%"}}></img> {/* Add borderRadius: "50%" */}
  </div>
  <br />
  <p>
  Hello 👋, <br></br>
I'm Joe a Computer Science major with a mathematics minor, I am passionate about using technology to drive innovation and make a positive impact in the world. In my current studies and past internships, I have gained experience in both Frontend Development and Backend Development.
<br></br>
Currently practicing my data structures and algorithms💪
<br/>
Interests/ Hobbies:
<br/>
<TypeAnimation 
    sequence={['Going to the Gym', 1500,'Playing Valorant/ League of legends/ Minecraft and many more!',1500,'Watching Anime/ TV shows/ Movies', 1500, 'Reading Novels and Comic Books',1500, 'Leetcoding', 1500]}
    repeat={Infinity} 
    />

  </p>
</div>
}
      </div>
    </div>
    </div>
  );
}

export default About;
