import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <div className="py-24 px-6 max-w-2xl mx-auto">
      <Helmet>
        <title>Contact Us | InstaBreak Support</title>
        <link rel="canonical" href="https://instabreak.netlify.app/contact" />
      </Helmet>
      <div className="border-t-4 border-blue-600 pt-12">
        <div className="label-mono mb-4">Section // 02</div>
        <h1 className="text-6xl font-bold text-black mb-12 tracking-tighter uppercase">Contact</h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-2">
            <label className="label-mono">User_Identity</label>
            <input
              type="text"
              required
              className="input-technical"
              placeholder="NAME"
            />
          </div>
          <div className="space-y-2">
            <label className="label-mono">Electronic_Mail</label>
            <input
              type="email"
              required
              className="input-technical"
              placeholder="EMAIL@ADDRESS.COM"
            />
          </div>
          <div className="space-y-2">
            <label className="label-mono">Message_Payload</label>
            <textarea
              required
              rows={5}
              className="input-technical resize-none"
              placeholder="MESSAGE CONTENT..."
            />
          </div>
          <button
            type="submit"
            className="btn-brutal w-full flex items-center justify-center gap-3"
          >
            <Send className="w-4 h-4" />
            Transmit // Send_Message
          </button>
        </form>
      </div>
    </div>
  );
}
