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

const BlogPage = () => {
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
          <h2>
            How We Help Startups & Small Businesses Build a Strong Digital
            Presence
          </h2>
          <small>Published on: Dec 15, 2025</small>
        </div>
        <div className="blog-readmore-img">
          <Image
            src={blogdetail1}
            alt="blog readmore"
            placeholder="blur"
            blurDataURL=""
            data-aos="zoom-in"
            data-aos-duration={1000}
          />
        </div>
        <p>
          In today’s digital world, having a business is not enough—you need a
          strong online presence. Startups and small businesses often struggle
          with branding, website quality, and digital visibility.
          <br />
          At THECY, we help businesses grow by building a complete digital
          foundation that includes branding, website design & development, and
          result-driven digital marketing.
        </p>
        <div className="blog-readmore-points">
          <ul className="blog-readmore-points-ul">
            <li className="mb-5">
              Understanding Your Business:
              <p>
                Every successful project starts with understanding the client.
                We analyze:
              </p>
              <div className="blog-readmore-point-ul">
                <ul>
                  <li>Business goals</li>
                  <li>Target audience</li>
                  <li>Competitive landscape</li>
                  <li>Brand tone and vision</li>
                </ul>
              </div>
              <p className="mt-3">
                This allows us to create strategies that align perfectly with
                your business needs.
              </p>
            </li>

            <li className="mb-5">
              Brand Identity That Builds Trust:
              <p>Branding is more than just a logo. We create:</p>
              <div className="blog-readmore-point-ul">
              <ul>
                <li>Consistent visual identity</li>
                <li>Brand colors and typography</li>
                <li>Design systems that reflect professionalism</li>
              </ul>
              </div>
              <p className="mt-3">
                A strong brand identity helps customers recognize and trust your
                business.
              </p>
            </li>

            <li className="mb-5">
              Custom Website Design & Development:
              <p>
                Your website is your digital storefront. We design and develop:
              </p>
              <div className="blog-readmore-point-ul">
              <ul>
                <li>Fast, Responsive, mobile-friendly and secure websites</li>
                <li>User-focused navigation</li>
                <li>Optimized for speed and performance</li>
                <li>Built with SEO best practices</li>
              </ul>
              </div>
              <p className="mt-3">
                A well-designed website serves as the digital storefront for
                your business.
              </p>
            </li>

            <li className="mb-5">
              Digital Marketing for Growth:
              <p>We implement smart digital marketing strategies including:</p>
              
              <div className="blog-readmore-point-ul">
                <ul>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social media marketing</li>
                <li>Paid advertising campaigns</li>
                <li>Content marketing</li>
              </ul>
              </div>
              <p className="mt-3">Every campaign is performance-focused and data-driven.</p>
            </li>
          </ul>
        </div>

        <div className="blog-readmore-section">
          <h4 className="mt-4">Conclusion</h4>
          <p>
            Building a strong digital presence is essential for startups and
            small businesses to succeed in today’s market. THECY provides
            end-to-end solutions that cover branding, website design &amp;
            development, and digital marketing to help your business grow and
            thrive online.
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
            {["All Blogs",
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

export default BlogPage;
