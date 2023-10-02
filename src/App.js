import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { ThemeProvider } from 'next-themes'
import './global.css'

function App() {
  return (
    <ThemeProvider>
    <div className="gradient-circle"></div>
    <div className="gradient-circle-bottom"></div>
    <div className="container mx-auto mb-10">
      <Header />
      <div class="flex flex-col items-start justify-center min-h-screen mx-auto w-4/5 font-hind">
  <div class="mt-5">
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-4/5 sm:w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">Hello 👋</h1>
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">I'm Joseph Hauter-</h1>
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">Software Engineer</h1>
    <h1 class="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl p-1 sm:p-2 w-full lg:w-4/5 transform translate-x-0 translate-y-0 opacity-100">based in New York City.</h1>
  </div>
</div>
      {/* <Home />
      <About />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
      <Footer /> */}
      
    </div>
    </ThemeProvider>
  );
}

export default App;
