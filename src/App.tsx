import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <footer className="border-t-2 border-black py-24 mt-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="max-w-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-600 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono font-bold text-sm tracking-tighter uppercase text-black">InstaBreak</span>
                  </div>
                  <p className="text-black/40 text-xs font-mono uppercase tracking-widest leading-relaxed">
                    A specialized utility for Instagram profile optimization. Built for <span className="text-blue-600 font-bold">precision</span>.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                  {['Privacy', 'Terms', 'About', 'Contact'].map((item) => (
                    <Link 
                      key={item}
                      to={`/${item.toLowerCase().replace(' ', '-')}`} 
                      className="font-mono text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-24 pt-8 border-t border-black/10">
                <p className="text-black/20 text-[10px] font-mono uppercase tracking-widest">
                  &copy; InstaBreak. <span className="text-blue-600/40">Independent Utility.</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}
