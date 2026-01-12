

import Image from "next/image";
import Home1 from "@/public/images/home1.webp";
import Home2 from "@/public/images/home2.webp";
import Home3 from "@/public/images/home3.webp";
import Home4 from "@/public/images/home4.webp";
import socialmedia from "@/public/images/socialmedia.webp";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="container main-spread">
      <div
        className="home-section"
        data-aos="fade-down"
        data-aos-duration={1000}
      >
        <h1>
          where creativity meets strategy: <br />
          design, video, and digital marketing
        </h1>
        <div className="home-text">
          <p>
            Want to look amazing, get noticed, and sell more? we combine video,
            design & marketing to make it happen.
          </p>
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
                    src={Home1}
                    width={500}
                    height={500}
                    alt="home image1"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="home-images2">
                  <Image
                    src={Home3}
                    width={500}
                    height={500}
                    alt="home image2"
                    
                    placeholder="blur"
                    blurDataURL=""
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
                    src={socialmedia}
                    width={500}
                    height={500}
                    alt="home image3"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home-images4">
                  <Image
                    src={Home2}
                    width={500}
                    height={500}
                    alt="home image4"
                    
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home-images5">
              <Image
                src={Home4}
                width={500}
                height={500}
                alt="home image5"
                
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>

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
