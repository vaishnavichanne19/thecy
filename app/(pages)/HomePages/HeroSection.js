"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [fetchBannerData, setFetchBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/home/bannersec");
      setFetchBannerData(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container main-spread">
      {fetchBannerData.map((bannerdata, index) => {
        return (
          <div key={index}>
            <div
              className="home-section"
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              <h1>{bannerdata.heading}</h1>
              <div className="home-text">
                <p
                  dangerouslySetInnerHTML={{ __html: bannerdata.description }}
                ></p>
              </div>
            </div>
            <div className="container">
              <div
                className="row home-images"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="home-images1">
                        <Image
                          src={bannerdata.bannerimg1}
                          width={500}
                          height={500}
                          alt="home image1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="home-images2">
                        <Image
                          src={bannerdata.bannerimg2}
                          width={500}
                          height={500}
                          alt="home image2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-6 middle-image">
                  <div className="row align-items-end">
                    <div className="col-lg-6">
                      <div className="home-images3">
                        <Image
                          src={bannerdata.bannerimg3}
                          width={500}
                          height={500}
                          alt="home image3"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="home-images4">
                        <Image
                          src={bannerdata.bannerimg4}
                          width={500}
                          height={500}
                          alt="home image4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="home-images5">
                    <Image
                      src={bannerdata.bannerimg5}
                      width={500}
                      height={500}
                      alt="home image5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="contact-btn">
        <Link href="/contact">
          <button className="button-with-icon">
            <svg
              className="icon"
              id="ReadMore"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="#ffffff"
                strokeWidth="3"
                fill="none"
              />
              <path fill="#ffffff" d="M20 14l12 10-12 10v-6h-8v-8h8v-6z" />
            </svg>

            <span className="text">Contact Us</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
