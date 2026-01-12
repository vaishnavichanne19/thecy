"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import design1 from "@/public/images/design.webp";
import design2 from "@/public/images/design1.webp";
import design3 from "@/public/images/design2.webp";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Design = () => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    // Split text
    splitRef.current = new SplitText(textRef.current, {
      type: "chars",
    });

    // scroll animation
    gsap.from(splitRef.current.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",       // when it enters viewport
        toggleActions: "play none none reset",
      },
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.4,
      ease: "back",
      stagger: 0.05
    });

    return () => {
      splitRef.current && splitRef.current.revert();
    };
  }, []);

  return (
    <div className="container spread">
      <div
        className="design-section"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <h2 className="spread">
          Design is not just what it looks like and feels like. {" "} <br/>
          <span aria-label="Important text" ref={textRef} className="highlited-text" >
            Design is how it works.
          </span>
        </h2>
      </div>

      <div className="design-img spread">
        <div
          className="design-img-right"
          data-aos="fade-down"
          data-aos-duration={1500}
        >
          <Image
            src={design2}
            width={500}
            height={500}
            alt="design1"
            
            placeholder="blur"
            blurDataURL=""
          />
        </div>

        <div className="design-img-center">
          <Image
            src={design1}
            width={500}
            height={500}
            alt="design1"
            
            placeholder="blur"
            blurDataURL=""
          />
        </div>

        <div
          className="design-img-left"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <Image
            src={design3}
            width={500}
            height={500}
            alt="design1"
            
            placeholder="blur"
            blurDataURL=""
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
