"use client";

import Image from "next/image";
import { useState } from "react";
import service from "@/public/images/service.webp";
import serdigital from "@/public/images/ser-digital.webp";
import sergraphic from "@/public/images/ser-graphic.webp";
import product from "@/public/images/product.webp";
import servideo from "@/public/images/ser-video.webp";
import service1 from "@/public/images/service1.webp";
import service3 from "@/public/images/service3.webp";
import ipad from "@/public/images/ipad 1.webp";
import video from "@/public/images/video-production 1.webp";
import social from "@/public/images/social-media-marketing 1.webp";
import medal from "@/public/images/medal 1.webp";
import youngman from "@/public/images/young-man.webp";
import ae from "@/public/images/ae.svg";
import vlc from "@/public/images/vlc.svg";
import be from "@/public/images/be.svg";
import figma from "@/public/images/figma.svg";
import ps from "@/public/images/ps.svg";
import xd from "@/public/images/xd.svg";
import web from "@/public/images/web.webp";
import Link from "next/link";

const Service = () => {

  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  return (
    <main>
    <div className="main-spread">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-4 col-sm-12 m-auto"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <div className="service-text">
              <h4>Services you're looking for</h4>
              <p>
                Want to look amazing, get noticed, and sell more? We combine
                video, design & marketing to make it happen.
              </p>
            </div>
          </div>

          <div
            className="col-lg-9 col-md-8 col-sm-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className="service-img">
              <Image
                src={service}
                alt="service image"
                
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>

        <div className="row spread">
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className={`service-card ${expanded ? "expanded" : ""}`}>
              <div className="service-card-content">
                <div className="service-card-img">
                  <Image
                    src={sergraphic}
                    alt="service image"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                  <div className="overlay">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpanded(!expanded);
                      }}
                    >
                      {expanded ? "Close" : "Read More"}
                    </a>
                  </div>
                </div>

                <div className="service-card-text">
                  <Link
                    href="/graphic-designing"
                    prefetch
                    className="text-decoration-none cursor-pointer"
                  >
                    <h5>Graphic Designing</h5>
                  </Link>
                  <p>
                    Logos, brand visuals, infographics, social graphics, print
                    assets, motion graphics & animated designs using top-tier
                    tools: Photoshop, Illustrator, InDesign, Canva.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className={`service-card ${expanded1 ? "expanded" : ""}`}>
              <div className="service-card-content">
                <div className="service-card-img">
                  <Image
                    src={serdigital}
                    alt="service image"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                  <div className="overlay">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpanded1(!expanded1);
                      }}
                    >
                      {expanded1 ? "Close" : "Read More"}
                    </a>
                  </div>
                </div>

                <div className="service-card-text">
                  <Link
                    href="/digital-marketing"
                    prefetch
                    className="text-decoration-none cursor-pointer"
                  >
                    <h5>Digital Marketing</h5>
                  </Link>
                  <p>
                    Targeted campaigns across social media, search (SEO/SEM),
                    email marketing, content strategy & brand amplification
                    Data-driven tactics with transparent reporting and regular
                    performance insights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className={`service-card ${expanded2 ? "expanded" : ""}`}>
              <div className="service-card-content">
                <div className="service-card-img">
                  <Image
                    src={servideo}
                    alt="service image"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                  <div className="overlay">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpanded2(!expanded2);
                      }}
                    >
                      {expanded2 ? "Close" : "Read More"}
                    </a>
                  </div>
                </div>

                <div className="service-card-text">
                  <Link
                    href="/video-editing"
                    prefetch
                    className="text-decoration-none cursor-pointer"
                  >
                    <h5>Video Editing</h5>
                  </Link>
                  <p>
                    Transform raw footage into polished enagaging videos -
                    social clips, YouTube content, promos, and more Add effects,
                    color-grade, motion graphics & subtitles for every platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className={`service-card ${expanded3 ? "expanded" : ""}`}>
              <div className="service-card-content">
                <div className="service-card-img">
                  <Image
                    src={product}
                    alt="service image"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                  <div className="overlay">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpanded3(!expanded3);
                      }}
                    >
                      {expanded3 ? "Close" : "Read More"}
                    </a>
                  </div>
                </div>

                <div className="service-card-text">
                  <Link
                    href="/products"
                    prefetch
                    className="text-decoration-none cursor-pointer"
                  >
                    <h5>Products</h5>
                  </Link>
                  <p>
                    Branded, high-quality prints that stick with customers-
                    T-shirts become moving billboards, calendars get daily
                    visibility, and catalogs make your products memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row flex justify-center items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            <div className={`service-card ${expanded4 ? "expanded" : ""}`}>
              <div className="service-card-content">
                <div className="service-card-img">
                  <Image
                    src={web}
                    alt="service image"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                  <div className="overlay">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpanded4(!expanded4);
                      }}
                    >
                      {expanded4 ? "Close" : "Read More"}
                    </a>
                  </div>
                </div>

                <div className="service-card-text">
                  <Link
                    href="/web-design-development"
                    prefetch
                    className="text-decoration-none cursor-pointer"
                  >
                    <h5>Website Design & Development</h5>
                  </Link>
                  <p>
                    We design and develop professional websites that are fast, mobile-friendly, and optimized for search engines to increase visibility and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service-tools">
        <div className="container spread service-tool-main-section">
          <div className="service-tool-left">
            <div
              className="service-tool-text"
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              <h6>We got tour back!</h6>
            </div>
            <div className="service-tool1">
              <Image
                src={ae}
                alt="service image"
                
              />
            </div>
            <div className="service-tool2">
              <Image
                src={vlc}
                alt="service image"
                
  
              />
            </div>
            <div className="service-tool3">
              <Image
                src={xd}
                alt="service image"
              />
            </div>
          </div>
          <div className="service-tool-img">
            <Image
              src={service3}
              alt="service image"
              
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="service-tool-right">
            <div className="service-tool4">
              <Image
                src={figma}
                alt="service image"
                
      
              />
            </div>
            <div className="service-tool5">
              <Image
                src={ps}
                alt="service image"
                
   
              />
            </div>
            <div className="service-tool6">
              <Image
                src={be}
                alt="service image"
                
    
              />
            </div>
            <div
              className="service-tool-text2"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container spread">
        <div className="row service-design-main-section">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="service-design">
              <div className="service-design-main">
                <div
                  className="service-design-section"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={200}
                >
                  <div className="service-design-text">
                    <h6>Designing dreams, one pixel at a time</h6>
                  </div>
                  <div className="service-design-img">
                    <Image
                      src={ipad}
                      width={300}
                      height={300}
                      alt="service image"
                      
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>

                <div
                  className="service-design-section"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={400}
                >
                  <div className="service-design-text">
                    <h6>Edits thet elevate your story</h6>
                  </div>
                  <div className="service-design-img">
                    <Image
                      src={video}
                      width={300}
                      height={300}
                      alt="service image"
                      
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>
                <div
                  className="service-design-section"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={600}
                >
                  <div className="service-design-text">
                    <h6>Transforming clicks into customers.</h6>
                  </div>
                  <div className="service-design-img">
                    <Image
                      src={social}
                      width={300}
                      height={300}
                      alt="service image"
                      
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>
                <div
                  className="service-design-section"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={800}
                >
                  <div className="service-design-text">
                    <h6>Quality you can see, value you can trust.</h6>
                  </div>
                  <div className="service-design-img">
                    <Image
                      src={medal}
                      width={300}
                      height={300}
                      alt="service image"
                      
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>

                <div
                  className="service-design-section"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={1000}
                >
                  <div className="service-design-text">
                    <h6>
                      Where creativity meets strategy and your brand meets
                      success.
                    </h6>
                  </div>
                  <div className="service-design-img">
                    <Image
                      src={youngman}
                      width={300}
                      height={300}
                      alt="service image"
                      
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="service-main-design-img">
              <Image
                src={service1}
                alt="service image"
                
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Service;
