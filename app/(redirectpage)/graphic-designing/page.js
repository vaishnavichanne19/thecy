"use client";

import React, { useEffect, useState } from "react";
import ae from "@/public/images/ae.svg";
import ai from "@/public/images/ai.svg";
import an from "@/public/images/an.svg";
import id from "@/public/images/id.svg";
import pr from "@/public/images/pr.svg";
import lr from "@/public/images/lr.svg";
import canva from "@/public/images/canva.webp";
import figma from "@/public/images/figma.svg";
import ps from "@/public/images/ps.svg";
import st from "@/public/images/st.svg";
import procreate from "@/public/images/procreate.webp";
import graph1 from "@/public/images/graph1.webp";
import graph2 from "@/public/images/graph2.webp";
import graph3 from "@/public/images/graph3.webp";
import graph4 from "@/public/images/graph4.webp";
import graph5 from "@/public/images/graph5.webp";
import graph6 from "@/public/images/graph6.webp";
import graph7 from "@/public/images/graph7.webp";
import graphdes1 from "@/public/images/graphdes1.webp";
import graphdes2 from "@/public/images/graphdes2.webp";
import cardimg1 from "@/public/images/cardimg1.webp";
import img2 from "@/public/images/img2.webp";
import cardimg3 from "@/public/images/cardimg3.webp";
import img4 from "@/public/images/img4.webp";
import layers from "@/public/images/layers.webp";
import port1 from "@/public/images/port1.webp";
import port2 from "@/public/images/port2.webp";
import port3 from "@/public/images/port3.webp";
import port4 from "@/public/images/port4.webp";
import port5 from "@/public/images/port5.webp";
import port6 from "@/public/images/port6.webp";
import port7 from "@/public/images/port7.webp";
import port8 from "@/public/images/port8.webp";
import port9 from "@/public/images/port9.webp";
import port10 from "@/public/images/port10.webp";
import slide1 from "@/public/images/slide1.webp";
import slide2 from "@/public/images/slide2.webp";
import slide3 from "@/public/images/slide3.webp";
import slide4 from "@/public/images/slide4.webp";
import slide5 from "@/public/images/slide5.webp";
import slide6 from "@/public/images/slide6.webp";
import slider1 from "@/public/images/slider1.webp";
import slider2 from "@/public/images/slider2.webp";
import slider3 from "@/public/images/slider3.webp";
import slider4 from "@/public/images/slider4.webp";
import slider5 from "@/public/images/slider5.webp";
import slider6 from "@/public/images/slider6.webp";
import slider7 from "@/public/images/slider7.webp";
import slider8 from "@/public/images/slider8.webp";
import slider9 from "@/public/images/slider9.webp";
import social1 from "@/public/images/social1.webp";
import social2 from "@/public/images/social2.webp";
import social3 from "@/public/images/social3.webp";
import social4 from "@/public/images/social4.webp";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const design = [
  {
    id: 1,
    img: slide1,
  },
  {
    id: 2,
    img: slide2,
  },
  {
    id: 3,
    img: slide3,
  },
  {
    id: 4,
    img: slide4,
  },
  {
    id: 5,
    img: slide5,
  },
  {
    id: 6,
    img: slide6,
  },
];

const tool = [
  {
    id: 1,
    img: ae,
  },
  {
    id: 2,
    img: ai,
  },
  {
    id: 3,
    img: an,
  },
  {
    id: 4,
    img: id,
  },
  {
    id: 5,
    img: pr,
  },
  {
    id: 6,
    img: lr,
  },
  {
    id: 7,
    img: canva,
  },
  {
    id: 8,
    img: figma,
  },
  {
    id: 9,
    img: ps,
  },
  {
    id: 10,
    img: st,
  },
  {
    id: 11,
    img: procreate,
  },
];

const social = [social1, social2, social3, social4];

const printing = [
  {
    id: 1,
    img: slider2,
  },
  {
    id: 2,
    img: slider1,
  },
  {
    id: 3,
    img: slider3,
  },
  {
    id: 4,
    img: slider6,
  },
  {
    id: 5,
    img: slider5,
  },
  {
    id: 6,
    img: slider4,
  },
  {
    id: 7,
    img: slider9,
  },
  {
    id: 8,
    img: slider8,
  },
  {
    id: 9,
    img: slider7,
  },
];

const GraphicDesigning = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prev) => (prev === social.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    arrows: false,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <main>
      <div className="container-fluid graphic-designing">
        <div className="graphic-designing-section">
          <h2 style={{ color: "#ffe500", textAlign: "center" }}>
            Graphic Designing
          </h2>

          <div
            className="svg-curve"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <svg
              className="top-curve"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L1440,0 L1440,50 C1080,90 360,90 0,50 Z"
                fill="#141414"
              />
            </svg>
            <div className="graphic-designing-images">
              <div className="graphic-designing-image">
                <Image
                  src={graph1}
                  alt="graphic image"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div className="graphic-designing-image">
                <Image
                  src={graph2}
                  alt="graphic image"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div className="graphic-designing-image">
                <Image
                  src={graph3}
                  alt="graphic image"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
            <svg
              className="bottom-curve"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M0,0 L1440,0 L1440,50 C1080,90 360,90 0,50 Z"
                fill="#141414"
              />
            </svg>
          </div>
          <div className="graphic-designing-para">
            <h4>
              "Design is the art of planning and making things look better."
            </h4>
          </div>
        </div>

        <div className="spread1 layer-image">
          <Image src={layers} alt="layer" />
        </div>

        <div className="container spread">
          <div
            className="graphic-designing-para2"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <h2 style={{ color: "#fff", marginBottom: "50px" }}>
              Why Choose <span style={{ color: "#ffe500" }}>Us</span>?
            </h2>
            <ul>
              <li>
                {" "}
                <span className="graphic-designing-list">
                  Designs That Speak, Brands That Connect.
                </span>
                <p className="text-white">
                  We don’t just design, we craft visual identities that tell
                  your story.
                </p>
              </li>

              <li>
                {" "}
                <span className="graphic-designing-list">
                  Tailored Creativity, No Templates.
                </span>
                <p className="text-white">
                  Every design is uniquely made to fit your vision, goals, and
                  audience.
                </p>
              </li>

              <li>
                {" "}
                <span className="graphic-designing-list">
                  From Vision to Visuals.
                </span>
                <p className="text-white">
                  We translate big ideas into bold, beautiful, and functional
                  designs.
                </p>
              </li>

              <li>
                {" "}
                <span className="graphic-designing-list">
                  Collaborative Process, Clear Results.
                </span>
                <p className="text-white">
                  We work with you, not just for you. Your input shapes the
                  final outcome.
                </p>
              </li>

              <li>
                {" "}
                <span className="graphic-designing-list">
                  Designs That Work — Not Just Look Good.
                </span>
                <p className="text-white">
                  We create with purpose, ensuring every design meets business
                  goals.
                </p>
              </li>

              <li>
                {" "}
                <span className="graphic-designing-list">
                  Attention to Detail. Obsession with Quality.
                </span>
                <p className="text-white">
                  Because your brand deserves nothing less than excellence.
                </p>
              </li>

              <li>
                {" "}
                <span className="graphic-designing-list">
                  Creative Souls with Business Brains.
                </span>
                <p className="text-white">
                  We blend artistry with strategy to make design that performs.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-fluid">
          <div className="switch-container">
            <div
              className={`row section section1 ${
                showFirst ? "active" : "inactive"
              }`}
            >
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 section-heading">
                <h1 style={{ color: "#fff" }}>
                  Imagining <br /> boldly.
                </h1>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="section-img">
                  <Image
                    src={graph4}
                    alt="Imagining boldly"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
            </div>
            <div
              className={`row section section2 ${
                showFirst ? "inactive" : "active"
              }`}
            >
              <div className="col-lg-6 col-md-6 col-sm-12 section-heading">
                <h1 style={{ color: "#fff" }}>
                  Designing <br /> louder.
                </h1>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="section-img">
                  <Image
                    src={graph5}
                    alt="Designing louder"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="branding-section-main">
            <div className="branding-section">
              <h2 style={{ color: "#ffe500", textTransform: "capitalize" }}>
                Branding & Identity Design
              </h2>
              <p style={{ margin: "50px 0" }}>
                Because your brand deserves more than just a pretty logo. We
                don’t just make things look good - we build identities that feel
                right. From scroll-stopping logos to bold color palettes, we
                craft every visual detail to match your vibe and make your
                audience say, “I need this.”
              </p>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              <SwiperSlide>
                <div className="branding-slider branding-slider1">
                  <h4>Logo Design</h4>
                  <div className="branding-img">
                    <Image src={cardimg3} alt="Logo Design" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="branding-slider branding-slider2">
                  <h4>
                    Bussiness Card & <br /> Stationary
                  </h4>
                  <div className="branding-img">
                    <Image src={img4} alt="Bussiness Card" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="branding-slider branding-slider3">
                  <h4>
                    Packaging & <br /> Label Design
                  </h4>
                  <div className="branding-img">
                    <Image src={img2} alt="Packaging" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="branding-slider branding-slider4">
                  <h4>
                    Pharmplate & <br /> Banner
                  </h4>
                  <div className="branding-img">
                    <Image src={cardimg1} alt="Pharmplate" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="container spread1 flex flex-col gap-3 justify-center items-center">
          <div>
            <Image
              src={graphdes2}
              alt="Car Design"
              placeholder="blur"
              blurDataURL=""
              data-aos="fade-right"
              data-aos-duration={1000}
            />
          </div>
          <div>
            <Image
              src={graphdes1}
              alt="Design"
              placeholder="blur"
              blurDataURL=""
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={400}
            />
          </div>
        </div>

        <div className="container spread1">
          <div className="branding-section-main">
            <div className="branding-section">
              <h2 style={{ color: "#ffe500", textTransform: "capitalize" }}>
                UI & UX Design
              </h2>
              <p style={{ margin: "50px 0" }}>
                We make pixels behave and users fall in love. We craft
                interfaces that look sharp and feel like better intuitive
                layouts, joyful clicks, and zero confusion. Whether it’s an app,
                a website, or a dreamy dashboard, we design with both brains and
                vibes.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid ui-section">
          <div className="ui-img-section">
            <div className="ui-img">
              <Image
                src={graph6}
                alt="laptop image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="ui-slider">
            <Slider {...settings1}>
              {design.map((d, index) => (
                <div key={index} className="ui-images">
                  <Image src={d.img} alt="Ui images" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="ui-point">
            <ul>
              <li>Website UI Design</li>
              <li>Mobile Application UI Design</li>
              <li>Dashboard & SaaS Design</li>
              <li>Wireframing & Prototyping</li>
            </ul>
          </div>
        </div>

        <div className="container spread">
          <div className="tool-section">
            <h2
              style={{
                color: "#ffe500",
                textAlign: "center",
                marginBottom: "30px",
                textTransform: "capitalize",
              }}
            >
              Tool We Use
            </h2>
            <Marquee
              direction="left"
              speed={100}
              pauseOnHover={true}
              gradient={false}
            >
              {tool.map((d, index) => (
                <div key={index} className="tool-images">
                  <Image src={d.img} alt="Tool Image" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="container spread">
          <div className="branding-section-main">
            <div className="branding-section">
              <h2 style={{ color: "#ffe500", textTransform: "capitalize" }}>
                Social Media
              </h2>
              <p style={{ margin: "50px 0" }}>
                where creativity meets innovation! We specialize in transforming
                ideas into visually captivating designs that resonate. From
                brand identities to compelling social media visuals, we're here
                to bring your vision to life. Let's embark on this creative
                journey together!
              </p>
            </div>
          </div>

          <div className="social-media-section">
            <div className="social-media">
              <div className="social-media-img">
                <Image src={social[currentIndex]} alt="Social Media Image" />
              </div>
            </div>
          </div>
          <div className="social-media-list">
            <ul>
              <li>All Media Posts / Videos</li>
              <li>Infographics</li>
              <li>Stories Design</li>
              <li>YouTube Thumbnail, Channel Art</li>
              <li>Motion Reel Design</li> <br />
              <li>Reel Design</li>
            </ul>
          </div>
        </div>

        <div className="container-fluid spread1 elevate-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 elevate-heading">
                <div>
                  <h1>"Elevate your brand with our creative touch."</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <Image
                    src={graph7}
                    alt="Brand"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="branding-section-main">
            <div className="branding-section">
              <h2 style={{ color: "#ffe500", textTransform: "capitalize" }}>
                Printing Services
              </h2>
              <p style={{ margin: "50px 0" }}>
                Transform your designs into tangible masterpieces with our
                printing solutions. From business cards and brochures to banners
                and packaging, we ensure every print reflects your brand's
                essence with clarity and precision. Leveraging state-of-the-art
                printing technology, we deliver vibrant colors and crisp details
                that make a lasting impression.
              </p>
            </div>
          </div>

          <div className="printing-slider-container">
            <Slider {...settings2}>
              {printing.map((p, index) => (
                <div key={index} className="printing-img">
                  <Image src={p.img} alt="Printing Image" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="printing-point">
            <div>
              <ul>
                <li>Banner</li>
                <li>Visiting Card</li>
                <li>T-shirt Design</li>
                <li>Stickers (all type)</li>
                <li>Pamphlet</li>
                <li>Cardboard Design</li>
                <li>Identity Card</li>
                <li>Catalogue</li>
                <li>Calendar</li>
                <li>Catalogue</li>
                <li>Mugs</li>
                <li>Badge</li>
                <li>Diary</li>
                <li>DR File</li>
                <li>Keychain</li>
                <li>Bill Book</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="portfolio-grid">
            <div className="portfolio-image portfolio-image1">
              <Image
                src={port2}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image2">
              <Image
                src={port10}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image3">
              <Image
                src={port4}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image4">
              <Image
                src={port1}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image5">
              <Image
                src={port5}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image6">
              <Image
                src={port7}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image7">
              <Image
                src={port8}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image8">
              <Image
                src={port6}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image9">
              <Image
                src={port9}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="portfolio-image portfolio-image10">
              <Image
                src={port3}
                alt="PortFolio Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GraphicDesigning;
