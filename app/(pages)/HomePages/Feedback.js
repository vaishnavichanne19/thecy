"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import user from "@/public/images/user.webp";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    name: "John Doe",
    image: user,
    feedback:
      "They turned our vision into visuals that tell our story—bold, professional, and right on brand.",
  },
  {
    name: "Jane Smith",
    image: user,
    feedback:
      "Creative, reliable, and innovative. They really understood what we wanted.",
  },
  {
    name: "Robert Lee",
    image: user,
    feedback:
      "The designs were top-notch, exceeded our expectations completely.",
  },
  {
    name: "Emily Davis",
    image: user,
    feedback: "Very professional team. Smooth process from start to finish.",
  },
  {
    name: "Michael Scott",
    image: user,
    feedback: "They delivered exactly what we needed for our brand identity.",
  },
];

const Feedback = () => {
  return (
    <div className="container-fluid">
      <div className="provide-section">
        <h2 data-aos="fade-down" data-aos-duration={500}>
          Our Favorite Feedback
        </h2>
      </div>

      <div className="feedback-card">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              effect: "slide",
            },
            768: {
              slidesPerView: 3,
              effect: "coverflow",
            },
            1024: {
              slidesPerView: 3,
              effect: "coverflow",
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="feedback-swiper-slide">
              <div className="slide-image">
                <Image
                  src={slide.image}
                  alt={slide.name}
                  width={500}
                  height={500}
                />
              </div>
              <p className="slide-feedback">"{slide.feedback}"</p>
              <p className="slide-title">- {slide.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="get-started-section spread">
        <h2 data-aos="fade-down" data-aos-duration={500}>
          Let's start a new project together
        </h2>
<Link href="/contact">
        <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
