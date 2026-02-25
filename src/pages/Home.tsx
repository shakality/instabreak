import React from 'react';
import BioFixer from '../components/BioFixer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram Bio Line Break Fixer",
    "url": "https://instabreak.netlify.app",
    "description": "The best tool to fix Instagram bio line breaks and formatting. Add spaces, center your bio, and create aesthetic profiles.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does Instagram ruin my bio formatting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instagram automatically collapses consecutive spaces and empty lines to save space. Our tool injects invisible zero-width characters that trick the algorithm into keeping your spacing intact."
        }
      },
      {
        "@type": "Question",
        "name": "How do I center my Instagram bio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To center your bio, you need to add specific amounts of spaces before each line. Our tool helps you format these lines and ensures they stay centered when you paste them into the app."
        }
      }
    ]
  };

  return (
    <div className="py-12 px-4">
      <Helmet>
        <title>Instagram Bio Line Break Fixer | Aesthetic IG Bio Utility</title>
        <meta name="description" content="Fix Instagram bio line breaks instantly. Use our free tool to add spaces, center your bio, and create aesthetic Instagram profiles without the formatting mess." />
        <meta name="keywords" content="instagram bio fixer, ig bio line breaks, center instagram bio, aesthetic instagram bio, instagram formatting tool, invisible spaces instagram" />
        <link rel="canonical" href="https://instabreak.netlify.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://instabreak.netlify.app/" />
        <meta property="og:title" content="Instagram Bio Line Break Fixer | Aesthetic IG Bio Utility" />
        <meta property="og:description" content="Fix Instagram bio line breaks instantly. Create aesthetic profiles with perfect spacing." />
        <meta property="og:image" content="https://instabreak.netlify.app/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://instabreak.netlify.app/" />
        <meta property="twitter:title" content="Instagram Bio Line Break Fixer | Aesthetic IG Bio Utility" />
        <meta property="twitter:description" content="Fix Instagram bio line breaks instantly. Create aesthetic profiles with perfect spacing." />
        
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <header className="max-w-3xl mx-auto mb-24 mt-12 relative">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="label-mono mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-600" />
          Utility // Instagram_Formatting
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tighter uppercase leading-[0.9]">
          Bio Line <br /> <span className="text-blue-600">Break Fixer</span>
        </h1>
        <p className="text-black/60 text-lg max-w-xl leading-relaxed font-medium border-l-4 border-blue-600 pl-6">
          A specialized tool for preserving whitespace and line breaks in Instagram profiles. No registration. No tracking.
        </p>
      </header>

      <div className="ad-placeholder border-blue-100 bg-blue-50/20">Advertisement // Placement_01</div>

      <BioFixer />

      <div className="ad-placeholder border-blue-100 bg-blue-50/20">Advertisement // Placement_02</div>

      <article className="max-w-4xl mx-auto mt-32 markdown-body">
        <div className="border-t-4 border-blue-600 pt-12">
          <h2 className="bg-blue-600 text-white px-4 py-1 border-none">Technical Overview</h2>
          <p>
            Instagram's text processing engine automatically strips consecutive whitespace and empty lines from user bios. This is a server-side optimization that often breaks intended visual layouts.
          </p>
          <p>
            This tool utilizes invisible Unicode characters (specifically the zero-width space <code>\u2063</code>) to maintain structural integrity. By injecting these characters at the end of empty lines, the Instagram parser recognizes the line as containing content, thereby preserving the vertical spacing.
          </p>

          <h2>Operational Procedure</h2>
          <ul>
            <li>Input the desired text into the formatting buffer.</li>
            <li>Define vertical spacing using standard line breaks.</li>
            <li>Execute the formatting engine to inject invisible separators.</li>
            <li>Paste the resulting string directly into the Instagram profile editor.</li>
          </ul>

          <h2>Visual Alignment</h2>
          <p>
            Precise horizontal alignment (centering) can be achieved by prepending specific quantities of whitespace. Since the formatting engine preserves all whitespace characters, these manual adjustments remain intact after the string is processed and pasted.
          </p>

          <h2>Documentation & FAQ</h2>
          <div className="space-y-8 mt-12">
            <div className="border border-black p-8">
              <h3 className="font-mono text-xs uppercase font-bold mb-4">01 // Is this tool free?</h3>
              <p className="text-sm text-black/60">Yes. The tool is provided as a public utility. No fees or accounts are required.</p>
            </div>
            <div className="border border-black p-8">
              <h3 className="font-mono text-xs uppercase font-bold mb-4">02 // Security & Safety</h3>
              <p className="text-sm text-black/60">The tool uses standard Unicode characters. It does not interact with your Instagram account directly and is fully compliant with platform terms.</p>
            </div>
            <div className="border border-black p-8">
              <h3 className="font-mono text-xs uppercase font-bold mb-4">03 // Caption Support</h3>
              <p className="text-sm text-black/60">The formatting logic is identical for captions and comments. You may use this tool for any text field that collapses whitespace.</p>
            </div>
          </div>
          <div className="mt-20 border-t border-black/10 pt-12">
            <h2 className="text-lg font-mono font-bold uppercase mb-8">Related Resources</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <a href="/about" className="group">
                <div className="text-[10px] font-mono uppercase text-blue-600 mb-2">Internal_Link // 01</div>
                <div className="font-bold text-sm group-hover:underline">About the Project</div>
              </a>
              <a href="/terms" className="group">
                <div className="text-[10px] font-mono uppercase text-blue-600 mb-2">Internal_Link // 02</div>
                <div className="font-bold text-sm group-hover:underline">Usage Terms</div>
              </a>
              <a href="/contact" className="group">
                <div className="text-[10px] font-mono uppercase text-blue-600 mb-2">Internal_Link // 03</div>
                <div className="font-bold text-sm group-hover:underline">Support & Feedback</div>
              </a>
            </div>
          </div>
        </div>
      </article>

      <div className="ad-placeholder">Advertisement - Above Footer</div>
    </div>
  );
}
