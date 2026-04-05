"use client";

import React, { useState, useEffect } from 'react';
import ContactIcons from './ContactIcons';
import Link from 'next/link';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const [isResumePage, setIsResumePage] = useState(false);

  useEffect(() => {
    // Check if window is available to avoid SSR errors
    if (typeof window !== 'undefined') {
      setIsResumePage(window.location.pathname.includes('/resume'));
    }
  }, []);

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <img className='cv_img' src="https://dydskofcuywsywygxbqs.supabase.co/storage/v1/object/public/portfolio/shashank.png" alt="" />
        </Link>
        <header>
          <h2>Shashank Jasoria</h2>
          <p>
            <a href="mailto:shashankjasoria22@gmail.com">shashankjasoria22@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
         Hi, I&apos;m Shashank a Software Developer adept at creating scalable systems, seamlessly integrating frontend interfaces with backend services, APIs, and databases.I&apos;m deeply committed to accessibility and inclusivity and believe that technology has the power to connect and empower people. 
        </p>
        {/* <ul className="actions">
          <li>
       
              <Link href="#about" className="button">
                About Me
              </Link>
          </li>
        </ul> */}
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Shashank Jasoria <Link href="/">shashankjasoria.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;





































// "use client"

// import React from 'react';;

// import ContactIcons from './ContactIcons';
// import Link from 'next/link';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// const SideBar = () => (
//   <section id="sidebar">
//     <section id="intro">
//       <Link href="/" className="logo">
//         <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
//       </Link>
//       <header>
//         <h2>Michael D&apos;Angelo</h2>
//         <p>
//           <a href="mailto:michael@mldangelo.com">michael@mldangelo.com</a>
//         </p>
//       </header>
//     </section>

//     <section className="blurb">
//       <h2>About</h2>
//       <p>
//         Hi, I&apos;m Michael. I am a{' '}
//         <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC
//         alumnus, and the co-founder and CTO of{' '}
//         <a href="https://promptfoo.dev">Promptfoo</a>. Previously, I
//         was VP of Engineering at <a href="https://usesmileid.com">SmileID</a>,
//         co-founder and CTO of <a href="https://arthena.com">Arthena</a>, and
//         co-founded <a href="https://matroid.com">Matroid</a>.
//       </p>
//       <ul className="actions">
//         <li>
//           {!window.location.pathname.includes('/resume') ? (
//             <Link href="/resume" className="button">
//               Learn More
//             </Link>
//           ) : (
//             <Link href="/about" className="button">
//               About Me
//             </Link>
//           )}
//         </li>
//       </ul>
//     </section>

//     <section id="footer">
//       <ContactIcons />
//       <p className="copyright">
//         &copy; Michael D&apos;Angelo <Link href="/">mldangelo.com</Link>.
//       </p>
//     </section>
//   </section>
// );

// export default SideBar;
