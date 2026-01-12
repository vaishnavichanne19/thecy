// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";
// import logo from "@/public/images/logo.svg";
// import { ChevronUp, Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";

// const Footer = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollToTop = document.getElementById("scrollToTop");
//       if (window.scrollY > 250) {
//         scrollToTop.style.display = "block";
//       } else {
//         scrollToTop.style.display = "none";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="footer">
//       <div className="container-fluid footer-section">
//         <div className="container">
//           <div className="row footer-about">
//             <div className="footer-logo">
//               <Image src={logo} width={500} height={500} alt="footer logo" />
//             </div>
//             <p>
//               "Our mission is simple: to craft designs that not only look good
//               but communicate powerfully. We blend craetivity with purpose -
//               every design decison we make is backend by user Insight and brand
//               goals."
//             </p>
//           </div>
//           <div className="row footer-main">
//             <div className="col-lg-2 col-md-6 col-sm-6 col-6 footer-links">
//               <ul>
//                 <li>
//                   <Link href="/">Home </Link>
//                 </li>

//                 <li>
//                   <Link href="/about">About Us</Link>
//                 </li>

//                 <li>
//                   {" "}
//                   <Link href="/services">Services</Link>
//                 </li>

//                 <li>
//                   {" "}
//                   <Link href="/PagePackage">Packages</Link>
//                 </li>

//                 <li>
//                   {" "}
//                   <Link href="/blog">Blog</Link>
//                 </li>

//                 <li>
//                   {" "}
//                   <Link href="/portfolio">Portfolio</Link>
//                 </li>

//                 <li>
//                   {" "}
//                   <Link href="/contact">Contact Us</Link>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-lg-3 col-md-6 col-sm-6 col-6 footer-links">
//               <ul>
//                 <li>
//                   <Link href="/">Support</Link>
//                 </li>{" "}
//                 <li>
//                   <Link href="/">FAQs</Link>
//                 </li>
//                 <li>
//                   <Link href="/">Terms and Policy</Link>
//                 </li>{" "}
//               </ul>
//             </div>

//             <div className="col-lg-4 col-md-6 footer-contact-detail">
//               <div className="footer-contact-details">
//                 <a
//                   href="tel:+919876543210"
//                   rel="noopener noreferrer"
//                   className="text-decoration-none flex gap-3 "
//                 >
//                   <span>
//                    <PhoneCall  />
//                   </span>{" "}
//                   +91 9876543210
//                 </a>
//               </div>
//               <div className="footer-contact-details">
//                 <a
//                   href="mailto:customandyou21@gmail.com"
//                   rel="noopener noreferrer"
//                   className="text-decoration-none flex gap-3 "
//                 >
//                   <span>
//                    <Mail />
//                   </span>{" "}
//                   customandyou21@gmail.com
//                 </a>
//               </div>
//               <div className="footer-contact-details flex gap-3">
//                 <span>
//                  <MapPin />
//                 </span>{" "}
//                 Mohammad ali chowk bhaldarpura gandhibagh Nagpur - 440018
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6 footer-social">
//               <div>Follow Us On:</div>
//               <div className="social-icons">
//                 <Facebook size={30} />
//                 <Instagram size={30} />
//                 <Linkedin size={30} />
//               <Twitter size={30} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid copy-right-section">
//         <p>Copyright © 2025 Customization & You. All Rights Reserved.</p>
//       </div>

//       <div id="scrollToTop" title="Scroll To Top" onClick={scrollToTop}>
//         <div className="scroll-to-top">
//           <ChevronUp />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "@/public/images/logo.svg";
import {
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import WhatsAppButton from "./(pages)/HomePages/WhatsAppButton";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTop = document.getElementById("scrollToTop");
      if (window.scrollY > 250) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="container-fluid footer-section">
        <div className="container">
          <div className="row footer-about">
            <div className="footer-logo">
              <Image src={logo} width={500} height={500} alt="footer logo" />
            </div>
            <p>
              "Our mission is simple: to craft designs that not only look good
              but communicate powerfully. We blend craetivity with purpose -
              every design decison we make is backend by user Insight and brand
              goals."
            </p>
          </div>
          <div className="flex justify-center flex-wrap">
            <div className="footer-main flex justify-center gap-20">
              <div className="footer-links">
                <ul>
                  <li>
                    <Link href="/">Home </Link>
                  </li>

                  <li>
                    <Link href="/about">About Us</Link>
                  </li>

                  <li>
                    {" "}
                    <Link href="/services">Services</Link>
                  </li>

                  <li>
                    {" "}
                    <Link href="/PagePackage">Packages</Link>
                  </li>

                  <li>
                    {" "}
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li>
                    {" "}
                    <Link href="/portfolio">Portfolio</Link>
                  </li>

                  <li>
                    {" "}
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-vertical-line"></div>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-contact-detail flex flex-wrap gap-4 lg:justify-center md:justify-start lg:mt-0 md:mt-8 mt-4">
            <div className="footer-contact-details">
              <a
                href="tel:+917447327473"
                rel="noopener noreferrer"
                className="text-decoration-none flex gap-3 "
              >
                <span>
                  <PhoneCall />
                </span>{" "}
                +91 7447327473
              </a>
            </div>
            <div className="footer-contact-details">
              <a
                href="mailto:customandyou21@gmail.com"
                rel="noopener noreferrer"
                className="text-decoration-none flex gap-3 "
              >
                <span>
                  <Mail />
                </span>{" "}
                customandyou21@gmail.com
              </a>
            </div>
            <div className="footer-contact-details flex gap-3">
              <span>
                <MapPin />
              </span>{" "}
              Near Saraswati Lawn, Nara Road, Nara, Jaripatka, Nagpur - 14
            </div>
            <div className="footer-contact-details flex gap-3">
              <span>
                <MapPin />
              </span>{" "}
              Mohammad ali chowk bhaldarpura gandhibagh Nagpur - 18
            </div>
          </div>

          <div className="footer-social flex  justify-center items-center gap-4 my-5">
            <div className="footer-horizontal-line"></div>
            <div className="footer-followus flex flex-col justify-center items-center">
              <h1>Follow Us On:</h1>
              <div className="social-icons footer-social-icon">
                <Facebook />
                <Instagram />
                <Linkedin />
                <Twitter />
              </div>
            </div>
            <div className="footer-horizontal-line"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid copy-right-section">
        <p>Copyright © 2025 Customization & You. All Rights Reserved.</p>
      </div>

      <div id="scrollToTop" title="Scroll To Top" onClick={scrollToTop}>
        <div className="scroll-to-top">
          <ChevronUp />
        </div>
      </div>
      <WhatsAppButton/>
    </div>
  );
};

export default Footer;
