"use client";

import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [home, setHome] = useState(false);

  const isActive = (path) => pathname === path;

  const handleLogout = () => {
    document.cookie = "adminToken=; path=/; max-age=0";
    window.location.href = "/admin";
  };
  return (
    <main>
      <div className="sidebar">
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={150}
            className="bg-white m-4 p-2"
          />
        </div>
        <div className="sidebar-ul relative mt-5">
          <ul>
            <Link href="/dashboard">
              <li className={isActive("/dashboard") ? "active" : "active-li"}>
                Dashboard
              </li>
            </Link>
            <li
              className={home ? "active" : "active-li"}
              onClick={() => setHome(!home)}
            >
              Home
              <div className="sidebar-ul-ul">
                <ul className={home ? "open" : "open-li"}>
                  <Link href="/dashboard/home/banner">
                    <li
                      className={
                        isActive("/dashboard/home/banner") ? "open-active" : ""
                      }
                    >
                      Banner
                    </li>
                  </Link>
                  <li>Why Choose Us</li>
                  <li>Design</li>
                  <li>We Provide</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </li>
            <Link href="/dashboard/about">
              <li
                className={
                  isActive("/dashboard/about") ? "active" : "active-li"
                }
              >
                About
              </li>
            </Link>
            <Link href="/dashboard/service">
              <li
                className={
                  isActive("/dashboard/service") ? "active" : "active-li"
                }
              >
                Service
              </li>
            </Link>
            <Link href="/dashboard/blog">
              <li
                className={isActive("/dashboard/blog") ? "active" : "active-li"}
              >
                Blog
              </li>
            </Link>
            <Link href="/dashboard/portfolio">
              <li
                className={
                  isActive("/dashboard/portfolio") ? "active" : "active-li"
                }
              >
                Portfolio
              </li>
            </Link>
            <Link href="/dashboard/contact">
              <li
                className={
                  isActive("/dashboard/contact") ? "active" : "active-li"
                }
              >
                Contact Us
              </li>
            </Link>
            <li onClick={handleLogout} className="active-li">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
