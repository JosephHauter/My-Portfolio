import React from 'react';
import './App.css';

import Blog from './pages/Blog';
import Resume from './pages/Resume';
import { ThemeProvider } from 'next-themes'
import './global.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
