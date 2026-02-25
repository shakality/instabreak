import React, { useState } from 'react';
import { Copy, Check, Sparkles, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BioFixer() {
  const [bio, setBio] = useState('');
  const [copied, setCopied] = useState(false);

  const formatAndCopy = () => {
    if (!bio.trim()) return;

    // Logic: Inject invisible zero-width spaces (\u2063) at the end of empty lines
    // This prevents Instagram from collapsing empty lines.
    const lines = bio.split('\n');
    const formattedLines = lines.map(line => {
      if (line.trim() === '') {
        return '\u2063'; // Invisible separator
      }
      return line;
    });

    const result = formattedLines.join('\n');
    
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const clearBio = () => setBio('');

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white border-2 border-black p-1 shadow-[8px_8px_0px_0px_rgba(37,99,235,0.1)]">
        <div className="border border-black p-6 md:p-10">
          <div className="flex items-center justify-between mb-8 border-b-2 border-black pb-6">
            <div>
              <span className="label-mono block mb-1">Module // 01</span>
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-black">
                Bio Formatting Engine
              </h2>
            </div>
            <button 
              onClick={clearBio}
              className="font-mono text-[10px] uppercase tracking-widest border-2 border-black px-4 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-all font-bold"
            >
              Reset_Buffer
            </button>
          </div>

          <div className="relative">
            <div className="absolute top-4 left-4 label-mono pointer-events-none opacity-40">Input_Buffer</div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter text..."
              className="w-full h-80 bg-blue-50/10 border-2 border-black p-12 text-[#1A1A1A] placeholder:text-blue-200 focus:outline-none focus:border-blue-600 transition-colors resize-none mb-8 font-mono text-sm leading-relaxed"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={formatAndCopy}
              disabled={!bio.trim()}
              className="flex-1 bg-blue-600 text-white font-mono text-xs uppercase tracking-[0.2em] py-6 px-8 transition-all active:translate-y-1 disabled:opacity-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <Check className="w-4 h-4" />
                    Status // Copied_To_Clipboard
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <Copy className="w-4 h-4" />
                    Command // Execute_Format
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div className="mt-8 flex justify-between items-center border-t-2 border-black pt-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="label-mono text-green-600">System_Online</span>
            </div>
            <span className="label-mono">Enc_Type: UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
