import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vie-etudiante" element={<Category category="vie-etudiante" />} />
            <Route path="/sante-mentale" element={<Category category="sante-mentale" />} />
            <Route path="/loisirs" element={<Category category="loisirs" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;