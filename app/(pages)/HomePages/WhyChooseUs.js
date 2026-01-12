"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import available from "@/public/images/available.webp";
import trust from "@/public/images/trust.webp";
import creativity from "@/public/images/creativity.webp";
import fast from "@/public/images/fast.webp";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const horizontalRef = useRef(null);

  useEffect(() => {
    const horizontalSection = horizontalRef.current;

    gsap.to(horizontalSection, {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: horizontalSection,
        start: "center center",
        end: "+=2000px",
        pin: "#horizontal-scoll",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="horizontal-scoll">
      <h2 data-aos="fade-down" data-aos-duration={1000}>
        Why Choose Us?
      </h2>
      <div className="horizontal-scoll-wrapper">
        <div ref={horizontalRef} className="horizontal">
          <div>
            <div className="choose-card">
              <div className="flex gap-4 items-start">
                <div>
                  <Image
                    src={available}
                    alt="Available 24/7"
                    width={40}
                    height={40}
                  />
                </div>
                <h3>Available 24/7</h3>
              </div>
              <p>Quickly communicate value across your graphic design.</p>
            </div>
            <div className="dotted-border"></div>
            <div className="choose-card">
              <div className="flex gap-4 items-start">
                <div>
                  <Image
                    src={trust}
                    alt="Available 24/7"
                    width={40}
                    height={40}
                  />
                </div>
                <h3>Built on Trust</h3>
              </div>
              <p>
                With real case studies, testimonials, and expertise frnt and
                center, you can feel confident in our partnership.
              </p>
            </div>
            <div className="dotted-border"></div>
            <div className="choose-card">
              <div className="flex gap-4 items-start">
                <div>
                  <Image
                    src={fast}
                    alt="Available 24/7"
                    width={40}
                    height={40}
                  />
                </div>
                <h3>Fast, Friendly, Flexible</h3>
              </div>
              <p>
                Quick delivery and flexible timelines np long contracts, just
                results when you need them.
              </p>
            </div>
            <div className="dotted-border"></div>
            <div className="choose-card">
              <div className="flex gap-4 items-start">
                <div>
                  <Image
                    src={creativity}
                    alt="Available 24/7"
                    width={40}
                    height={40}
                  />
                </div>
                <h3>Creativity</h3>
              </div>
              <p>
                Designs that capture attention. Videos that tell you story.
                Marketing that moves the needle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
