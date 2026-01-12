

import Image from "next/image";
import Link from "next/link";
import web from "@/public/images/web.webp";
import videoediting from "@/public/images/homevideoediting.webp";
import product from "@/public/images/product.webp";
import graphic from "@/public/images/graphic.webp";
import digitalmarketing from "@/public/images/digital-marketing.webp";

const content = [
  {
    src: web,
    alt: "Website Design & Development",
    title: "Website Design & Development",
    text: "We design and develop professional websites that are fast, mobile-friendly, and optimized for search engines to increase visibility and engagement.",
    readmore: "/web-design-development",
  },
  {
    src: graphic,
    alt: "Graphic Designing",
    title: "Graphic Designing",
    text: "Logos, brand visuals, infographics, social graphics, print assets, motion graphics & animated designs. Using top-tier tools: Photoshop, Illustrator, InDesign, Canva ",
    readmore: "/graphic-designing",
  },
  {
    src: digitalmarketing,
    alt: "Digital Marketing",
    title: "Digital Marketing",
    text: "Targeted campaigns across social media, search (SEO/SEM), email marketing, content strategy & brand amplification Data-driven tactics with transparent reporting and regular performance insights.",
    readmore: "/digital-marketing",
  },
  {
    src: videoediting,
    alt: "Video Editing",
    title: "Video Editing",
    text: "Transform raw footage into polished enagaging videos - social clips, YouTube content, promos, and more Add effects, color-grade, motion graphics & subtitles for every platform.",
    readmore: "/video-editing",
  },
  {
    src: product,
    alt: "Products",
    title: "Products",
    text: "Branded, high-quality prints that stick with customers- T-shirts become moving billboards, calendars get daily visibility, and catalogs make your products memorable.",
    readmore: "/products",
  },
];

const Provide = () => {
  return (
    <div className="container">
      <div className="provide-section">
        <h2 data-aos="fade-down" data-aos-duration={1000}>
          We Provide
        </h2>
      </div>

      <div className="scroll-wrapper">
        {content.map((item, index) => (
          <section
            key={index}
            className={`panel ${index % 2 === 0 ? "row-reverse" : ""}`}
            style={{ zIndex: index + 1 }}
          >
            <div
              className={`scroll-col text ${
                index % 2 === 0 ? "" : "text-right"
              }`}
            >
              <h3 className="scroll-heading">{item.title}</h3>
              <p className="scroll-para">{item.text}</p>
              
           <Link href={item.readmore} prefetch>
  <div className="provide-readmore-btn">
    Read More <span className="sr-only">about {item.title}</span>
  </div>
</Link>


            </div>
            <div className="scroll-col panel-image">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                data-aos="zoom-in" data-aos-duration={1500}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Provide;
