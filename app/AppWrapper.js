"use client";


import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default function AppWrapper({ children }) {
  return (
   <>
  <ScrollToTop />

  <Navbar />
  {children}
  <Footer />
</>

  );
}
