"use client";

import { useEffect, useState } from "react";
import webpage from "@/public/images/webpage.webp";
import webres from "@/public/images/webres.png";
import web1 from "@/public/images/web1.webp";
import web2 from "@/public/images/web2.webp";
import react from "@/public/images/react.svg";
import ps from "@/public/images/ps.svg";
import pr from "@/public/images/pr.svg";
import nextjs from "@/public/images/nextjs.svg";
import nodejs from "@/public/images/nodejs.svg";
import xd from "@/public/images/xd.svg";
import mongodb from "@/public/images/mongodb.svg";
import js from "@/public/images/js.svg";
import html from "@/public/images/html.svg";
import css from "@/public/images/css.svg";
import hospital from "@/public/images/hospital.webp";
import figma from "@/public/images/figma.svg";
import express from "@/public/images/express.webp";
import education from "@/public/images/education.webp";
import ecommerce from "@/public/images/ecommerce.webp";
import ai from "@/public/images/ai.svg";
import ae from "@/public/images/ae.svg";
import travel from "@/public/images/travel.webp";
import realstate from "@/public/images/realstate.webp";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  Award,
  Brush,
  CircleFadingPlus,
  Cog,
  Globe,
  Headset,
  Laptop,
  MonitorSmartphone,
  Palette,
  Rocket,
  Shield,
  ShieldCheck,
  ShieldCheckIcon,
  Smartphone,
} from "lucide-react";

const words = ["Your Ideas", "Business", "Online Growth"];

const technology = [
  {
    id: 1,
    img: html,
  },
  {
    id: 14,
    img: css,
  },
  {
    id: 2,
    img: js,
  },
  {
    id: 3,
    img: react,
  },
  {
    id: 4,
    img: nodejs,
  },
  {
    id: 5,
    img: express,
  },
  {
    id: 6,
    img: mongodb,
  },
  {
    id: 7,
    img: nextjs,
  },
  {
    id: 8,
    img: ai,
  },
  {
    id: 9,
    img: ps,
  },
  {
    id: 10,
    img: pr,
  },
  {
    id: 11,
    img: xd,
  },
  {
    id: 12,
    img: figma,
  },
  {
    id: 13,
    img: ae,
  },
];

const industries = [
  {
    id: 1,
    img: ecommerce,
    name: "E-Commerce / Online Shopping",
  },
  {
    id: 2,
    img: education,
    name: "Education",
  },
  {
    id: 3,
    img: hospital,
    name: "Healthcare & Medical",
  },
  {
    id: 4,
    img: travel,
    name: "Travel & Tourism",
  },
  {
    id: 5,
    img: realstate,
    name: "Real Estate",
  },
];

const whychoose = [
  {
    icon: <Rocket size={48} />,
    title: "Fast Delivery",
    desc: "We build and deliver websites with optimized speed & on-time.",
  },
  {
    icon: <ShieldCheckIcon size={48} />,
    title: "Secure Websites",
    desc: "Enterprise-level protection with SSL, firewall & security layers.",
  },
  {
    icon: <Award size={48} />,
    title: "SEO Optimized",
    desc: "Rank faster on Google with our SEO-ready structure.",
  },
  {
    icon: <Headset size={48} />,
    title: "24/7 Support",
    desc: "Dedicated support anytime you need us.",
  },
  {
    icon: <Brush size={48} />,
    title: "Modern UI/UX",
    desc: "Clean, beautiful and user-friendly interface designs.",
  },
  {
    icon: <Smartphone size={48} />,
    title: "Fully Responsive",
    desc: "Your site will look perfect on mobile, tablet & desktop.",
  },
];

const steps = [
  {
    id: 1,
    title: "Planning",
    desc: "Project initiation phase",
    color: "#03515f",
  },
  {
    id: 2,
    title: "Designing",
    desc: "Planning and scheduling tasks",
    color: "#007c91",
  },
  {
    id: 3,
    title: "Development",
    desc: "Development and testing",
    color: "#006274",
  },
  {
    id: 4,
    title: "Testing & Launch",
    desc: "Project completion and handoff",
    color: "#2eddfc",
  },
];

const faqs = [
  {
    q: "What does website design and development include?",
    a: "Website design and development includes planning, UI/UX design, coding, content structure, mobile responsiveness, performance optimization, and website launch.",
  },
  {
    q: "Do you provide custom website designs?",
    a: "Yes. We create custom website designs tailored to your brand identity, business goals, and target audience.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We can redesign your current website to improve its look, performance, user experience, and SEO.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. We follow SEO best practices including clean code, fast loading speed, optimized images, and proper heading structure.",
  },
];

const Website = () => {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="container-fluid web-development-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 web-development-heading-section">
              <div className="web-development-heading">
                <h2>
                  Website Design & Development
                  <br /> for{" "}
                  <span key={index} className="highlight">
                    {words[index]}
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="web-development-img">
                <Image
                  src={webpage}
                  alt="Website Design & Development"
                  placeholder="blur"
                  blurDataURL=""
                  fill
                />
              </div>
            </div>
          </div>
          <svg
            className="web-svg-bottom"
            viewBox="0 0 1440 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,200 1280,0 1440,150 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="container spread">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row h-full">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="website-que">
                  <Image
                    src={web1}
                    alt="Website Design & Development"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12  website-que-new">
                <div className="website-que">
                  <Image
                    src={web2}
                    alt="Website Design & Development"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="website-data">
              <h3>Why Every Business Needs a Website in Today’s Digital Era</h3>
              <p>
                In today’s digital world, a website is not just a luxury — it’s
                a necessity for every business that wants to grow, connect with
                customers, and stay ahead of competitors. A professional website
                acts as the foundation of your online presence, helping your
                business reach people beyond physical boundaries and establish
                trust with your audience.
              </p>
              <p>
                Whether you are a small startup, a local shop, or a large
                company, your website is often the first impression customers
                get about your brand. A well-designed, user-friendly, and
                responsive website communicates professionalism and credibility.
                It shows that your business is real, reliable, and ready to
                serve. Without one, potential clients may turn to competitors
                who have an online presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid web-development-service spread1">
        <div className="container web-development-service-container">
          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-col items-center justify-center">
              <div>
                <h3> Our Web Design & Development Services</h3>
                <p>
                  We offer a complete range of web solutions — from UI/UX design
                  to full-stack development — to help your business build a
                  strong online presence and deliver an exceptional user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="web-development-service-box">
                    <div className="web-development-service-box1">
                      <div className="service-no">1</div>
                      <div className="service-icon transition-all">
                        <Palette size={48} />
                      </div>
                    </div>
                    <h4>UI/UX Design</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="web-development-service-box">
                    <div className="web-development-service-box1">
                      <div className="service-no">2</div>
                      <div className="text-yellow-300 text-4xl service-icon transition-all">
                        <Laptop size={48} />
                      </div>
                    </div>
                    <h4>Frontend Development</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="website-service">
            <div className="row website-service-row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="web-development-service-box">
                  <div className="web-development-service-box1">
                    <div className="service-no">3</div>
                    <div className="service-icon transition-all">
                      <Cog size={48} />
                    </div>
                  </div>
                  <h4>Backend Development</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="web-development-service-box">
                  <div className="web-development-service-box1">
                    <div className="service-no">4</div>
                    <div className="service-icon transition-all">
                      <Globe size={48} />
                    </div>
                  </div>
                  <h4>Full Website Development</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="web-development-service-box">
                  <div className="web-development-service-box1">
                    <div className="service-no">5</div>
                    <div className="service-icon transition-all">
                      <MonitorSmartphone size={48} />
                    </div>
                  </div>
                  <h4>Responsive Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container spread">
        <div className="technology-section">
          <div className="technology-section-heading">
            <h3>Technology</h3>
          </div>
          <Marquee
            direction="left"
            speed={100}
            pauseOnHover={true}
            gradient={false}
          >
            {technology.map((d, index) => (
              <div key={index} className="technology-images">
                <Image src={d.img} alt="technology Image" />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="industries-section">
          <Marquee
            direction="right"
            speed={100}
            pauseOnHover={true}
            gradient={false}
          >
            {industries.map((d, index) => (
              <div className="flex flex-col justify-center items-center">
                <div key={index} className="industries-images">
                  <Image src={d.img} alt="Industries Image" />
                </div>
                <p className="text-center m-4">{d.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="industries-section-heading">
            <h3>Industries</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="web-image-section">
          <div className="web-image-content">
            <h2>Ready to launch your dream website?</h2>
            <a href="tel:+917447327473">Let's Talk</a>
          </div>

          <div className="web-image">
            <Image
              src={webres}
              alt="Web Responsive Image"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
      </div>

      <div className="container spread">
        <div className="timeline-section-new">
          <h3 className="timeline-title spread1">
            Our Web Development Process
          </h3>

          <div className="new-timeline-wrapper">
            {steps.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div
                  className="timeline-badge"
                  style={{ backgroundColor: step.color }}
                >
                  {step.id}
                </div>

                <div className="timeline-content">
                  <h4 style={{ color: step.color }}>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container web-why-choose-us">
        <h3 className="web-section-title">Why Choose Us?</h3>

        <div className="row web-choose-grid">
          {whychoose.map((item, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="web-choose-card">
                <div className="choose-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container pricing-section spread">
        <h3 className="web-section-title">Our Pricing Plans</h3>

        <div className="row pricing-grid">
          {[
            {
              name: "Starter",
              price: "₹9,999",
              features: [
                "1 Page Website",
                "Basic Design",
                "Mobile Responsive",
                "5 Revisions",
              ],
              tag: "",
            },
            {
              name: "Business",
              price: "₹19,999",
              features: [
                "5 Pages Website",
                "Premium UI/UX",
                "Dynamic Admin Panel",
                "SEO Ready",
              ],
              tag: "Most Popular",
            },
            {
              name: "Enterprise",
              price: "₹39,999",
              features: [
                "Unlimited Pages",
                "Custom Development",
                "Performance SEO",
                "1 Year Support",
              ],
              tag: "",
            },
          ].map((plan, i) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={i}>
              <div className={`price-card ${plan.tag ? "popular" : ""}`}>
                {plan.tag && <span className="price-tag">{plan.tag}</span>}
                <h4>{plan.name}</h4>
                <h2>{plan.price}</h2>
                <ul>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <button>Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="container web-faq-wrapper spread">
        <h3 className="web-faq-title">Frequently Asked Questions</h3>

        <div className="web-faq-box">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`web-faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="web-faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.q}
                <div className="web-faq-icon">
                  <CircleFadingPlus />
                </div>
              </button>

              <div className="web-faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Website;
