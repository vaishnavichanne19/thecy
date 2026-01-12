"use client";

import { useState } from "react";
import blogdetail1 from "@/public/images/blog-detail1.webp";
import blogdetail2 from "@/public/images/blog-detail2.webp";
import blogdetail3 from "@/public/images/blog-detail3.webp";
import blogdetail4 from "@/public/images/blog-detail4.webp";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  Heart,
  Send,
  SquareArrowOutUpRight,
} from "lucide-react";

const BlogPage3 = () => {
   const blogs = [
     {
       id: 1,
       category: "Technology",
       date: "Dec 15, 2025",
       title:
         "How We Help Startups & Small Businesses Build a Strong Digital Presence",
       desc: "In today’s digital world, having a business is not enough—you need a strong online presence. Startups and small businesses often struggle with branding, website quality, and digital visibility.",
       img: blogdetail1,
       link: "/blog/blogpage",
     },
     {
       id: 2,
       category: "Website Design & Development",
       date: "Dec 18, 2025",
       title: "Why Professional Website Design Is Important for Your Business",
       desc: "Your website is often the first interaction customers have with your brand. A poorly designed website can push visitors away within seconds.",
       img: blogdetail2,
       link: "/blog/blogpage1",
     },
     {
       id: 3,
       category: "Digital Marketing",
       date: "Dec 25, 2025",
       title: "How Digital Marketing Helps Small Businesses Grow Faster",
       desc: "Digital marketing allows small businesses to compete with larger brands using targeted and affordable strategies.",
       img: blogdetail3,
       link: "/blog/blogpage2",
     },
     {
       id: 4,
       category: "Video Editing",
       date: "Dec 29, 2025",
       title: "The Power of Visuals & Video Content in Branding",
       desc: "Visual content plays a major role in how people remember brands. Strong visuals and videos create emotional connections.",
       img: blogdetail4,
       link: "/blog/blogpage3",
     },
   ];

  // ✅ States
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // ✅ Filtered blogs
  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  // ✅ Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // ✅ Handle filter
  const handleFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main>
      <div className="container main-spread">
        <div className="blog-readmore">
          <h2>The Power of Visuals & Video Content in Branding</h2>
          <small>Published on: Dec 29, 2025</small>
        </div>
        <div className="blog-readmore-img">
          <Image
            src={blogdetail4}
            alt="blog readmore"
            placeholder="blur"
            blurDataURL=""
            data-aos="zoom-in"
            data-aos-duration={1000}
          />
        </div>
        <p>
          Visual content plays a major role in how people remember brands.
          Strong visuals and videos create emotional connections. In this blog,
          we explore the importance of visuals and video content in branding and
          how they help businesses stand out.
        </p>
        <div className="blog-readmore-points">
          <ul className="blog-readmore-points-ul">
            <li className="mb-5">
              Visual Identity:
              <p>
                A consistent visual identity is crucial for brand recognition.
                This includes logos, color schemes, typography, and imagery.
                Strong visuals help:
              </p>
              <div className="blog-readmore-point-ul">
                <ul>
                  <li>Create a memorable brand image</li>
                  <li>Build trust with the audience</li>
                  <li>Differentiate from competitors</li>
                  <li>Improve customer trust</li>
                </ul>
              </div>
            </li>

            <li className="mb-5">
              Video Content Impact:
              <p>
                Videos are one of the most engaging forms of content. They
                capture attention quickly and convey messages effectively.
                Brands using video content can:
              </p>
              <div className="blog-readmore-point-ul">
                <ul>
                  <li>Increase engagement rates</li>
                  <li>Boost conversion rates</li>
                  <li>Enhance storytelling capabilities</li>
                  <li>Reach a wider audience</li>
                </ul>
              </div>
            </li>

            <li className="mb-5">
              Social Media Advantage:
              <p>
                Social media platforms prioritize visual content. Brands that
                share high-quality images and videos tend to perform better in
                terms of reach and engagement. This helps in:
              </p>
              <div className="blog-readmore-point-ul">
                <ul>
                  <li>Boost brand awareness</li>
                  <li>Reach a wider audience</li>
                  <li>Audience interaction </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="blog-readmore-section">
          <h4 className="mt-4">Conclusion</h4>
          <p>
            In today's digital age, visuals and video content are essential for
            effective branding. They help create emotional connections, improve
            brand recognition, and drive engagement. Investing in high-quality
            visual content is a smart strategy for any business looking to
            strengthen its brand presence.
          </p>
        </div>

        {/* <div className="blog-comments">
          <span>
            {" "}
            <Heart />
            <SquareArrowOutUpRight />
            <Eye /> 105
          </span>
          <div className="blog-comment-input">
            <input type="text" placeholder="Leave a comment..." />
            <Send />
          </div>
        </div> */}

        <div className="container spread1">
          <div className="blog-category">
            {[  "All Blogs",
              "Technology",
              "Website Design & Development",
              "Digital Marketing",
              "Video Editing",].map(
              (cat) => (
                <button
                  key={cat}
                  className={`category-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => handleFilter(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* ===== Blog Cards ===== */}
          {currentBlogs.map((item, index) => (
            <div
              key={item.id}
              className="blog-featured"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 200}
            >
              <div className="blog-featured-text">
                <h4>{item.title}</h4>
                 <div className="mt-2 mb-4">
                  <span> By Admin</span>
                  <span>{item.date}</span>
                </div>
                <p>{item.desc}</p>
                <Link
                  href={item.link}
                  className="text-2xl flex items-center gap-2"
                >
                  Read More <ArrowRight />
                </Link>
              </div>
              <div className="blog-featured-img">
                <Image
                  src={item.img}
                  alt={item.title}
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
          ))}

          {/* ===== Pagination ===== */}
          <div className="pagination text-3xl">
            <button
              className="page-btn"
              onClick={handlePrev}
              disabled={currentPage === 1}
              aria-label="previous"
            >
              <ChevronsLeft />
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="page-btn"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              aria-label="next"
            >
              <ChevronsRight />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage3;
