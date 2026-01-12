// import Image from "next/image";
// import event1 from "@/public/portfolio/works.jpg";
// import event2 from "@/public/images/event2.jpeg";
// import event3 from "@/public/images/event3.jpeg";

// const Portfolio = () => {
//   return (
//     <main>
//     <div>
//       <div className="container-fluid portfolio-section">
//         <div className="portfolio-section-img">
//           <Image
//             src={event1}
//             alt="portfolio"

//             placeholder="blur"
//             blurDataURL=""
//             data-aos="zoom-out"
//             data-aos-duration={2000}
//           />
//         </div>
//         <div
//           className="portfolio-section-content"
//           data-aos="fade-down"
//           data-aos-duration={2000}
//         >
//           <h2>our creative work</h2>
//           <p>
//             Whether you're planning a brand refresh, video campaign, or digital
//             marketing push, we're here to bring your idea to life. We're here to
//             help you out!
//           </p>
//         </div>
//       </div>
//       <div className="container spread">
//         <div className="row">
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div
//               className="portfolio-img1"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//             >
//               <Image
//                 src={event2}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div
//               className="portfolio-img1"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//             >
//               <Image
//                 src={event3}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-12 col-md-12 col-sm-12">
//             <div
//               className="portfolio-img3"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//             >
//               <Image
//                 src={event1}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div className="row">
//               <div
//                 className="portfolio-img1"
//                 data-aos="zoom-in"
//                 data-aos-duration={2000}
//               >
//                 <Image
//                   src={event3}
//                   alt="portfolio1"

//                   placeholder="blur"
//                   blurDataURL=""
//                 />
//               </div>
//               <div className="portfolio-detail">
//                 <p>Transforming Visions into Vibrant Realities</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div className="row">
//               <div className="portfolio-detail">
//                 <p>Transforming Visions into Vibrant Realities</p>
//               </div>
//               <div
//                 className="portfolio-img1"
//                 data-aos="zoom-in"
//                 data-aos-duration={2000}
//               >
//                 <Image
//                   src={event2}
//                   alt="portfolio1"

//                   placeholder="blur"
//                   blurDataURL=""
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div
//               className="portfolio-img2"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//             >
//               <Image
//                 src={event1}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-sm-12">
//                 <div
//                   className="portfolio-img1"
//                   data-aos="zoom-in"
//                   data-aos-duration={2000}
//                 >
//                   <Image
//                     src={event3}
//                     alt="portfolio1"

//                     placeholder="blur"
//                     blurDataURL=""
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-12 col-md-12 col-sm-12">
//                 <div
//                   className="portfolio-img1"
//                   data-aos="zoom-in"
//                   data-aos-duration={2000}
//                 >
//                   <Image
//                     src={event2}
//                     alt="portfolio1"

//                     placeholder="blur"
//                     blurDataURL=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-4 col-sm-12">
//             <div
//               className="portfolio-img1"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//               data-aos-delay={200}
//             >
//               <Image
//                 src={event1}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-4 col-sm-12">
//             <div
//               className="portfolio-img1"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//               data-aos-delay={400}
//             >
//               <Image
//                 src={event2}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-4 col-sm-12">
//             <div
//               className="portfolio-img1"
//               data-aos="zoom-in"
//               data-aos-duration={2000}
//               data-aos-delay={600}
//             >
//               <Image
//                 src={event3}
//                 alt="portfolio1"

//                 placeholder="blur"
//                 blurDataURL=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </main>
//   );
// };

// export default Portfolio;

"use client";

import Image from "next/image";
import works from "@/public/portfolio/works.webp";
import saiacademy from "@/public/portfolio/sai-academy.webp";
import saidental from "@/public/portfolio/sai-dental.webp";
import gradeup from "@/public/portfolio/gradeup.webp";
import Aryabhatt from "@/public/portfolio/Aryabhatt logo.svg";
import AryabhattPost1 from "@/public/portfolio/Aryabhatt Post 6.webp";
import AryabhattPost2 from "@/public/portfolio/Aryabhatt Post 8.webp";
import AryabhattPost3 from "@/public/portfolio/Aryabhatt Post 9.webp";
import AryabhattPost4 from "@/public/portfolio/Aryabhatt Post 10.webp";
import Believers from "@/public/portfolio/Believers Logo.svg";
import BelieversPost1 from "@/public/portfolio/Believers 10.webp";
import BelieversPost2 from "@/public/portfolio/Believers 11.webp";
import BelieversPost3 from "@/public/portfolio/Believers 12.webp";
import BelieversPost4 from "@/public/portfolio/Believers 13.webp";
import EH from "@/public/portfolio/EH Logo.svg";
import EHPost1 from "@/public/portfolio/EH 1.webp";
import EHPost2 from "@/public/portfolio/EH 2.webp";
import EHPost3 from "@/public/portfolio/EH 3.webp";
import EHPost4 from "@/public/portfolio/EH 4.webp";

import Gouri from "@/public/portfolio/Gouri Logo.svg";
import GouriPost1 from "@/public/portfolio/Gouri 1.webp";
import GouriPost2 from "@/public/portfolio/Gouri 2.webp";
import GouriPost3 from "@/public/portfolio/Gouri 3.webp";
import GouriPost4 from "@/public/portfolio/Gouri 4.webp";

import Gravity from "@/public/portfolio/Gravity Logo.svg";
import GravityPost1 from "@/public/portfolio/Gravity 1.webp";
import GravityPost2 from "@/public/portfolio/Gravity 2.webp";
import GravityPost3 from "@/public/portfolio/Gravity 3.webp";
import GravityPost4 from "@/public/portfolio/Gravity 4.webp";

import Hopes from "@/public/portfolio/Hopes Logo.svg";
import HopesPost1 from "@/public/portfolio/Hopes 1.webp";
import HopesPost2 from "@/public/portfolio/Hopes 2.webp";
import HopesPost3 from "@/public/portfolio/Hopes 3.webp";
import HopesPost4 from "@/public/portfolio/Hopes 4.webp";

import Jagdale from "@/public/portfolio/Jagdale Logo.svg";
import JagdalePost1 from "@/public/portfolio/Jagdale 1.webp";
import JagdalePost2 from "@/public/portfolio/Jagdale 2.webp";
import JagdalePost3 from "@/public/portfolio/Jagdale 3.webp";
import JagdalePost4 from "@/public/portfolio/Jagdale 4.webp";

import Motwani from "@/public/portfolio/Motwani Logo.svg";
import MotwaniPost1 from "@/public/portfolio/Motwani 1.webp";
import MotwaniPost2 from "@/public/portfolio/Motwani 2.webp";
import MotwaniPost3 from "@/public/portfolio/Motwani 3.webp";
import MotwaniPost4 from "@/public/portfolio/Motwani 4.webp";

import Nayyar from "@/public/portfolio/Nayyar Logo.svg";
import NayyarPost1 from "@/public/portfolio/Nayyar 1.webp";
import NayyarPost2 from "@/public/portfolio/Nayyar 2.webp";
import NayyarPost3 from "@/public/portfolio/Nayyar 3.webp";
import NayyarPost4 from "@/public/portfolio/Nayyar 4.webp";

import Prayas from "@/public/portfolio/Prayas Logo.svg";
import PrayasPost1 from "@/public/portfolio/Prayas 1.webp";
import PrayasPost2 from "@/public/portfolio/Prayas 2.webp";
import PrayasPost3 from "@/public/portfolio/Prayas 3.webp";
import PrayasPost4 from "@/public/portfolio/Prayas 4.webp";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Globe, UserRound, X } from "lucide-react";
import Link from "next/link";

const images1 = [
  AryabhattPost1,
  AryabhattPost2,
  AryabhattPost3,
  AryabhattPost4,
];

const images2 = [
  BelieversPost1,
  BelieversPost2,
  BelieversPost3,
  BelieversPost4,
];

const images3 = [EHPost1, EHPost2, EHPost3, EHPost4];
const images4 = [GouriPost1, GouriPost2, GouriPost3, GouriPost4];
const images5 = [GravityPost1, GravityPost2, GravityPost3, GravityPost4];
const images6 = [HopesPost1, HopesPost2, HopesPost3, HopesPost4];
const images7 = [JagdalePost1, JagdalePost2, JagdalePost3, JagdalePost4];
const images8 = [MotwaniPost1, MotwaniPost2, MotwaniPost3, MotwaniPost4];
const images9 = [NayyarPost1, NayyarPost2, NayyarPost3, NayyarPost4];
const images10 = [PrayasPost1, PrayasPost2, PrayasPost3, PrayasPost4];
const portfolioData = [
  {
    id: 1,
    title: "The Biggest Coaching Institute in North Nagpur",
    image: saiacademy,
    client: "Sai Academy Institute",
    category: "Website Design & Development",
    link: "https://saiacademy01.com/",
  },
  {
    id: 2,
    title: "Where Your Smile Comes First",
    image: saidental,
    client: "Sai Dental Clinic",
    category: "Website Design & Development",
    link: "https://saidentalclinic.org/",
  },
  {
    id: 3,
    title: "Admission Open Session 2024-25",
    image: Aryabhatt,
    client: "Aryabhatt Academy",
    category: "Digital Marketing",
    images: images1,
  },
  {
    id: 4,
    title: "Admission Open For <br/> 10<sup>th</sup> Class ",
    image: Believers,
    client: "Believers Academy",
    category: "Digital Marketing",
    images: images2,
  },
  {
    id: 5,
    title: "GradeUp - Online Test Papers & Exam Practice",
    image: gradeup,
    client: "GradeUp Institute",
    category: "Website Design & Development",
    link: "https://gradeup01.in/",
  },
  {
    id: 6,
    title: "After 10<sup>th</sup> What is next?",
    image: EH,
    client: "Education Hub Academy",
    category: "Digital Marketing",
    images: images3,
  },
  {
    id: 7,
    title: "Admission Open 2025 for 9<sup>th</sup",
    image: Gouri,
    client: "Gouri Academy",
    category: "Digital Marketing",
    images: images4,
  },
  {
    id: 8,
    title:
      "Admission Open 2025-2026 11<sup>th</sup> - 12<sup>th</sup> with NEET Preparation",
    image: Gravity,
    client: "Gravity Academy",
    category: "Digital Marketing",
    images: images5,
  },
  {
    id: 9,
    title:
      "Why 11<sup>th</sup> & 12<sup>th</sup> Science Matters More Than You Think!!",
    image: Hopes,
    client: "Hopes Academy",
    category: "Digital Marketing",
    images: images6,
  },
  {
    id: 10,
    title: "Admission Open 2025-2026 VIII, IX & X",
    image: Jagdale,
    client: "Jagdale Coaching Classes",
    category: "Digital Marketing",
    images: images7,
  },
  {
    id: 11,
    title: "Free Demo Classes",
    image: Motwani,
    client: "Motwani Sir's Academy",
    category: "Digital Marketing",
    images: images8,
  },
  {
    id: 12,
    title: "Exclusive Batches For IX & X Very Affordable Fees",
    image: Nayyar,
    client: "Nayyar Academy",
    category: "Digital Marketing",
    images: images9,
  },
  {
    id: 13,
    title:
      "Coueses Offered 8<sup>th</sup>, 9<sup>th</sup>, 10<sup>th</sup>, 11<sup>th</sup> & 12<sup>th</sup> Science ",
    image: Prayas,
    client: "Prayas Science Academy",
    category: "Digital Marketing",
    images: images10,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState("All Project");
  const [popupImages, setPopupImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const filteredProjects =
    selectedProject === "All Project"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedProject);

  return (
    <main>
      <div>
        <div className="container-fluid portfolio-section">
          <div className="portfolio-section-img mb-5">
            <Image
              src={works}
              alt="portfolio"
              placeholder="blur"
              blurDataURL=""
              data-aos="zoom-out"
              data-aos-duration={2000}
            />
          </div>
          <div
            className="portfolio-section-content"
            data-aos="fade-down"
            data-aos-duration={2000}
          >
            <h2>our creative work</h2>
            <p>
              Whether you're planning a brand refresh, video campaign, or
              digital marketing push, we're here to bring your idea to life.
              We're here to help you out!
            </p>
          </div>
        </div>
        <div className="container spread">
          <div className="portfolio-project">
            {[
              "All Project",
              "Website Design & Development",
              "Digital Marketing",
              "Video Editing",
              "Products",
            ].map((cat) => (
              <button
                aria-label="Project"
                key={cat}
                className={`portfolio-btn mb-4 ${
                  selectedProject === cat ? "active" : ""
                }`}
                onClick={() => setSelectedProject(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="row spread1">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-4 col-sm-12 mt-5 mb-3"
              >
                <div className="portfolio-card">
                  <div className="card__content">
                    <div className="card__image">
                      <Image src={item.image} alt={item.client} />
                    </div>

                    <div className="card__text">
                      <h4
                        className="card__title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></h4>
                    </div>

                    <hr />

                    <div className="card__footer">
                      <div>
                        <div className="card__data flex gap-2 items-center mb-3">
                          <UserRound /> {item.client}
                        </div>
                        <div className="card__data flex gap-2 items-center">
                          <Globe /> {item.category}
                        </div>
                      </div>

                      <div className="card__button">
                        {item.link ? (
                          <Link href={item.link} target="_blank">
                            <svg height="25" width="25" viewBox="0 0 24 24">
                              <path
                                d="M5 12H19M13 6L19 12L13 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        ) : (
                          <span
                            onClick={() => {
                              setPopupImages(item.images);
                              setCurrentIndex(0);
                              setShowPopup(true);
                            }}
                          >
                            <svg height="25" width="25" viewBox="0 0 24 24">
                              <path
                                d="M5 12H19M13 6L19 12L13 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showPopup && (
            <div className="portfolio-popup-overlay">
              <div className="portfolio-popup-content">
                <button
                  className="portfolio-close-btn"
                  onClick={() => setShowPopup(false)}
                >
                  <X />
                </button>

                <div className="portfolio-slider">
                  <button
                    className="portfolio-nav-btn"
                    onClick={() =>
                      setCurrentIndex(
                        currentIndex === 0
                          ? images1.length - 1
                          : currentIndex - 1
                      )
                    }
                  >
                    <ChevronLeft />
                  </button>
                  <div className="portfolio-popup-image">
                    <Image
                      src={popupImages[currentIndex]}
                      alt={`Aryabhatt Post ${currentIndex + 1}`}
                    />
                  </div>
                  <button
                    className="portfolio-nav-btn"
                    onClick={() =>
                      setCurrentIndex(
                        currentIndex === popupImages.length - 1
                          ? 0
                          : currentIndex + 1
                      )
                    }
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
