"use client";

import { Facebook, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/newlogo.svg";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <ScrollToTop />
      <div className="nav-container">
        <div className="new-navbar">
          <Link href="/">
            <div className="logo">
              <Image src={logo} alt="logo"  />
            </div>
          </Link>
          <div className="navitems">
            <ul>
              <li className={isActive("/") ? "active" : ""}>
                <Link href="/">Home</Link>
              </li>

              <li className={isActive("/about") ? "active" : ""}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={isActive("/services") ? "active" : ""}>
                <Link href="/services">Services</Link>
              </li>
              {/* <li className={isActive("/PagePackage") ? "active" : ""}>
                <Link href="/PagePackage">Packages</Link>
              </li> */}
              <li className={isActive("/blog") ? "active" : ""}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={isActive("/portfolio") ? "active" : ""}>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className={isActive("/contact") ? "active" : ""}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="d-lg-none toggle-bar  new-toggle-bar">
            <button onClick={ToggleMenu} aria-label="Close">
              
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

     <div className={`mobile-navitems new-mobile-navitems ${isOpen ? "open" : "closed"}`}>
          <div className="mobile-header">
            <Link href="/">
              <div className="mobile-logo" onClick={() => setIsOpen(false)}>
                <Image
                  src={logo}
                  alt="Mobile Logo"
                  width={120}
                  height={120}
                  
                />
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="mobile-close-btn new-mobile-close-btn"
              aria-label="Close"
            >
              <X size={28} />
            </button>
          </div>

          <div className="new-mobileitems">
            <ul>
              <li
                className={isActive("/") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className={isActive("/about") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={isActive("/services") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/services">Services</Link>
              </li>
              {/* <li
                className={isActive("/PagePackage") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/PagePackage">Packages</Link>
              </li> */}
              <li
                className={isActive("/blog") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                className={isActive("/portfolio") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li
                className={isActive("/contact") ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center new-social-icon">
            <p>Follow Us:</p>
            <div className="social-icons text-white">
               <Facebook  />
                <Instagram  />
                <Linkedin  />
                <Twitter  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
