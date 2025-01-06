import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  // Initialize AOS only once when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Only trigger once when it comes into view
    });

    return () => {
      // Clean up AOS on component unmount (optional, but recommended for better performance)
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <div className="bg-bgDark px-28 custom-padding">
        {/* Router Setup */}
        <Analytics />
        <Router>
          <Navbar />
          {/* Page Container */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
