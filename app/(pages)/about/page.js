

import Image from "next/image";
import Faq from "../HomePages/Faq";
import aboutblur from "@/public/images/aboutblur.webp";
import about1 from "@/public/images/about3.webp";
import about2 from "@/public/images/about4.webp";
import atom from "@/public/images/atom.webp";
import bulb from "@/public/images/bulb.webp";
import laptop from "@/public/images/laptop.webp";
import feedback from "@/public/images/feedback.webp";
import launch from "@/public/images/launch.webp";
import AboutTabs from "./AboutTabs";


const About = () => {
  return (
    <main>
    <div className="container-fluid main-spread">
      <div className="about-section">
        <div className="about-img1">
          <Image
            src={aboutblur}
            alt="about image"
            placeholder="blur"
            blurDataURL=""
          />
        </div>
        <div
          className="about-text"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          <h1>
            Ready to elevate your brand? <br /> Let's talk
          </h1>
        </div>
        <div className="about-img2">
          <Image
            src={aboutblur}
            alt="about image"
            placeholder="blur"
            blurDataURL=""
          />
        </div>
      </div>

      <div className="container main-spread">
        <div className="row relative">
          <div className="col-lg-6 col-md-6 col-sm-12 about-section2-text">
            <h2>
              What do <br /> We do?
            </h2>
            <p data-aos="fade-right" data-aos-duration={1000}>
             We help startups and small businesses elevate their brand through cohesive visual design, high-quality videos, and targeted digital marketing campaigns. We also design and develop responsive, user-friendly websites that build trust and drive conversions..
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className="about-section2-img1"
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              <Image
                src={about1}
                alt="about image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="flex justify-end">
              <div className="about-section2-img2">
                <Image
                  src={about2}
                  alt="about image"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
          </div>
        </div>

   <AboutTabs/>
      </div>

      <div className="about-section4-main">
        <div className="container about-section4-heading">
          <h2>How We Work?</h2>
          <div className="about-section4">
            <div className="about-section4-details1 mobile-about-section4">
              <div className="about-section4-data">
                <h3>01</h3>
                <div
                  className="about-section4-data-img"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={200}
                >
                  <Image
                    src={bulb}
                    width={500}
                    height={500}
                    alt="about image"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <h4 data-aos="fade-up" data-aos-duration={1000}>
                Discovery & <br /> Research
              </h4>
            </div>

            <div className="vertical-line"></div>

            <div className="about-section4-details2 mobile-about-section4">
              <div className="about-section4-data">
                <h3>02</h3>
                <div
                  className="about-section4-data-img"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={400}
                >
                  <Image
                    src={atom}
                    width={500}
                    height={500}
                    alt="about image"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <h4 data-aos="fade-up" data-aos-duration={1000}>
                Wireframe <br /> & Concept
              </h4>
            </div>

            <div className="vertical-line vertical-line2"></div>

            <div className="about-section4-details3 mobile-about-section4">
              <div className="about-section4-data">
                <h3>03</h3>
                <div
                  className="about-section4-data-img"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={600}
                >
                  <Image
                    src={laptop}
                    width={500}
                    height={500}
                    alt="about image"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <h4 data-aos="fade-up" data-aos-duration={1000}>
                Design & <br /> Create
              </h4>
            </div>

            <div className="vertical-line vertical-line3"></div>

            <div className="about-section4-details4 mobile-about-section4">
              <div className="about-section4-data">
                <h3>04</h3>
                <div
                  className="about-section4-data-img"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={800}
                >
                  <Image
                    src={feedback}
                    width={500}
                    height={500}
                    alt="about image"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <h4 data-aos="fade-up" data-aos-duration={1000}>
                Feedback <br /> & Revise
              </h4>
            </div>

            <div className="vertical-line vertical-line4"></div>

            <div className="about-section4-details5 mobile-about-section4">
              <div className="about-section4-data">
                <h3>05</h3>
                <div
                  className="about-section4-data-img"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={1000}
                >
                  <Image
                    src={launch}
                    width={500}
                    height={500}
                    alt="about image"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <h4 data-aos="fade-up" data-aos-duration={1000}>
                Launch &<br /> Optimize
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container spread">
        <div className="about-section5 spread1">
          <h2>creaive. strategic. impactful</h2>
        </div>
      </div>

      <Faq />

      <div className="spread call-us-section">
        <h2 data-aos="zoom-in" data-aos-duration={1000}>
          Call Us Now - +91 7447327473
        </h2>
      </div>
    </div>
    </main>
  );
};

export default About;
