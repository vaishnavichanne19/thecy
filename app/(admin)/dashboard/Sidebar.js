"use client";

import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

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
        <div className="sidebar-ul mt-5">
          <ul>
            <Link href="/dashboard">
              <li className={isActive("/dashboard") ? "active" : ""}>
                Dashboard
              </li>
            </Link>
            <Link href="/dashboard/home">
              <li className={isActive("/dashboard/home") ? "active" : ""}>
                Home
              </li>
            </Link>
            <Link href="/dashboard/about">
              <li className={isActive("/dashboard/about") ? "active" : ""}>
                About
              </li>
            </Link>
            <Link href="/dashboard/service">
              <li className={isActive("/dashboard/service") ? "active" : ""}>
                Service
              </li>
            </Link>
            <Link href="/dashboard/blog">
              <li className={isActive("/dashboard/blog") ? "active" : ""}>
                Blog
              </li>
            </Link>
            <Link href="/dashboard/portfolio">
              <li className={isActive("/dashboard/portfolio") ? "active" : ""}>
                Portfolio
              </li>
            </Link>
            <Link href="/dashboard/contact">
              <li className={isActive("/dashboard/contact") ? "active" : ""}>
                Contact Us
              </li>
            </Link>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
