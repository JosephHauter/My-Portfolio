import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import SecretPage from './pages/SecretPage'; // Import SecretPage
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { ThemeProvider } from 'next-themes';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <ParticlesBackground />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret" element={<SecretPage />} /> {/* Add route for SecretPage */}
        </Routes>
        <Footer />
      </Router>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
