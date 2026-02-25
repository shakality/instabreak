import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Privacy Policy | InstaBreak</title>
        <link rel="canonical" href="https://instabreak.netlify.app/privacy" />
      </Helmet>
      <div className="border-t-4 border-blue-600 pt-12 markdown-body">
        <h1 className="text-6xl font-bold text-black mb-12 tracking-tighter uppercase">Privacy</h1>
        <p className="label-mono mb-12">Revision: 2025.02.25</p>
        
        <p>At InstaBreak, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by InstaBreak and how we use it.</p>

        <h2>Log Files</h2>
        <p>InstaBreak follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h2>Cookies and Web Beacons</h2>
        <p>Like any other website, InstaBreak uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h2>Google DoubleClick DART Cookie</h2>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-emerald-400">https://policies.google.com/technologies/ads</a></p>

        <h2>Our Advertising Partners</h2>
        <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>
        <ul>
          <li>Google AdSense</li>
        </ul>

        <h2>Third Party Privacy Policies</h2>
        <p>InstaBreak's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

        <h2>Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </div>
  );
}
