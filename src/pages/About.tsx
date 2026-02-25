import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <Helmet>
        <title>About InstaBreak | Instagram Bio Formatting Utility</title>
        <link rel="canonical" href="https://instabreak.netlify.app/about" />
      </Helmet>
      <div className="border-t-4 border-blue-600 pt-12">
        <div className="label-mono mb-4">Section // 01</div>
        <h1 className="text-6xl font-bold text-black mb-12 tracking-tighter uppercase">About</h1>
        
        <div className="space-y-12 text-black/80 leading-relaxed font-medium">
          <p className="text-xl text-black border-l-4 border-blue-600 pl-6">
            InstaBreak is a specialized web utility designed to solve specific text-processing limitations on social media platforms.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 border-y-2 border-black py-12">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase mb-4 text-blue-600">Origin</h3>
              <p className="text-sm text-black/60">
                Developed to address the automatic stripping of whitespace in Instagram's profile parser. The tool provides a reliable method for preserving intended visual structure.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold uppercase mb-4 text-blue-600">Philosophy</h3>
              <p className="text-sm text-black/60">
                We believe in single-purpose tools that perform their function with precision. No tracking, no accounts, no unnecessary complexity.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-xs font-bold uppercase text-blue-600">Core Principles</h3>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              <li className="border-2 border-black p-4 font-mono text-[10px] uppercase tracking-widest bg-white shadow-[4px_4px_0px_0px_rgba(37,99,235,0.1)]">01 // Zero Cost</li>
              <li className="border-2 border-black p-4 font-mono text-[10px] uppercase tracking-widest bg-white shadow-[4px_4px_0px_0px_rgba(37,99,235,0.1)]">02 // Zero Tracking</li>
              <li className="border-2 border-black p-4 font-mono text-[10px] uppercase tracking-widest bg-white shadow-[4px_4px_0px_0px_rgba(37,99,235,0.1)]">03 // High Precision</li>
              <li className="border-2 border-black p-4 font-mono text-[10px] uppercase tracking-widest bg-white shadow-[4px_4px_0px_0px_rgba(37,99,235,0.1)]">04 // Open Access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
