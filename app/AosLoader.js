"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosLoader() {
  useEffect(() => {
    (async () => {
      const AOS = (await import("aos")).default;
      AOS.init();
    })();
  }, []);

  return null;
}
