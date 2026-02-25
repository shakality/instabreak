import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Terms of Service | InstaBreak</title>
        <link rel="canonical" href="https://instabreak.netlify.app/terms" />
      </Helmet>
      <div className="border-t-4 border-blue-600 pt-12 markdown-body">
        <h1 className="text-6xl font-bold text-black mb-12 tracking-tighter uppercase">Terms</h1>
        <p className="label-mono mb-12">Revision: 2025.02.25</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using InstaBreak, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily use the tools on InstaBreak's website for personal, non-commercial transitory viewing only.</p>
        <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose;</li>
          <li>Attempt to decompile or reverse engineer any software contained on InstaBreak's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>The materials on InstaBreak's website are provided on an 'as is' basis. InstaBreak makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>4. Limitations</h2>
        <p>In no event shall InstaBreak or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on InstaBreak's website.</p>

        <h2>5. Governing Law</h2>
        <p>Any claim relating to InstaBreak's website shall be governed by the laws of the country of operation without regard to its conflict of law provisions.</p>
      </div>
    </div>
  );
}
