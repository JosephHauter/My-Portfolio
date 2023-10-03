import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor";

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])

  return (
    <button className="back-to-top" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
      Back to top
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollButton/>
    <AnimatedCursor
      innerSize={12} // Increase the inner size
      outerSize={12} // Increase the outer size
      color='193, 11, 111'
      outerAlpha={0.1} // Decrease the outer alpha to make it less visible
      innerScale={1} // Increase the inner scale to make it bigger when hovering over a target
      outerScale={3} // Decrease the outer scale to make it smaller when hovering over a target
      trailingSpeed={2}
    />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
