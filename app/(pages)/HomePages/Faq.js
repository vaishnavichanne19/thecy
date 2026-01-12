"use client";

import faq from "@/public/images/faq.webp";
import { CircleFadingPlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    number: "01",
    question: "What services do you offer?",
    answer:
      "We offer branding, graphic design, video creation, digital marketing, and website design & development services for startups and small businesses.",
  },
  {
   number: "02",
   question: "Who can work with you?",
   answer:
     "We work with startups, small businesses, and growing brands across various industries."
 },
 {
   number: "03",
   question: "Do you provide custom website designs?",
   answer:
     "Yes, all our websites are custom-designed to match your brand identity and business goals."
 },
  {
    number: "04",
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive and works smoothly on all devices.",
  },
  {
    number: "05",
    question: "How long does it take to build a website?",
    answer:
      "The timeline usually depends on the website size and features. A standard business website takes 4–6 weeks, while complex or custom websites may take 7–10 weeks.",
  },
    {
    number: "06",
    question: "Do you offer digital marketing services?",
    answer:
      "Yes, we provide SEO, social media marketing, paid ads, and content marketing to help grow your online presence.",
  },
    {
    number: "07",
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we can redesign and upgrade your current website to improve performance, design, and user experience.",
  },
  {
    number: "08",
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer website maintenance and support plans after project completion.",
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container faq-section spread1">
      <div className="row">
        <div className="about-section6">
          <h2 className="faq-title">
            Frequently <br />
            <span>Asked Questions</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="faq-box">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {item.question}
                    <div className="faq-icon">
                      <CircleFadingPlus />
                    </div>
                  </button>

                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-4 col-md-4 col-sm-12 flex justify-center items-center">
            <div className="faq-img">
              <Image
                src={faq}
                alt="FAQ Visual"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
