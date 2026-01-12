"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import blog1 from "@/public/images/blog1.webp";
import blog2 from "@/public/images/blog2.webp";
import blog3 from "@/public/images/blog3.webp";
import user from "@/public/images/user.jpg";
import blogdetail1 from "@/public/images/blog-detail1.webp";
import blogdetail2 from "@/public/images/blog-detail2.webp";
import blogdetail3 from "@/public/images/blog-detail3.webp";
import blogdetail4 from "@/public/images/blog-detail4.webp";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronsLeft, ChevronsRight, User } from "lucide-react";

const Blog = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogData = [
    {
      img: blog1,
    },
    {
      img: blog2,
    },
    {
      img: blog3,
    },
  ];

  return (
    <main>
      <div className="main-spread">
        <div className="container-fluid blog-page">
          <h2 data-aos="fade-down" data-aos-duration={1000}>
            Strategic tips for <br /> visual storytellers
          </h2>

          <div
            className="blog-img spread"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <Slider {...settings}>
              {blogData.map((item, index) => (
                <div key={index} className="blog-slide">
                  <Image src={item.img} alt={`Blog ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="container blog-latest">
          <h3>Latest Blogs</h3>

          <div className="row spread1">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div
                className="blog-box"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="blog-user">
                  <div className="blog-user-img">
                    <Image
                      src={user}
                      alt="user"
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                  <div className="text-2xl">
                    <strong>By Admin</strong>
                    <br />
                    <small>Dec 15, 2025</small>
                  </div>
                </div>
                <h4>
                  How We Help Startups & Small Businesses Build a Strong Digital
                  Presence
                </h4>
                <p>
                  In today’s digital world, having a business is not enough—you
                  need a strong online presence. Startups and small businesses
                  often struggle with branding, website quality, and digital
                  visibility.
                </p>
                <div className="readmore-btn">
                  <Link href="/blog/blogpage" className="text-2xl">
                    Read More <ArrowRight />{" "}
                    <span className="sr-only">about Blog Page</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div
                className="blog-box"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <div className="blog-user">
                  <div className="blog-user-img">
                    <Image
                      src={user}
                      alt="user"
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                  <div className="text-2xl">
                    <strong>By Admin</strong>
                    <br />
                    <small>Dec 18, 2025</small>
                  </div>
                </div>
                <h4>
                  Why Professional Website Design Is Important for Your Business
                </h4>
                <p>
                  Your website is often the first interaction customers have
                  with your brand. A poorly designed website can push visitors
                  away within seconds.
                </p>
                <div className="readmore-btn">
                  <Link href="/blog/blogpage1" className="text-2xl">
                    Read More <ArrowRight />{" "}
                    <span className="sr-only">about Blog Page</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div
                className="blog-box"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="400"
              >
                <div className="blog-user">
                  <div className="blog-user-img">
                    <Image
                      src={user}
                      alt="user"
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                  <div className="text-2xl">
                    <strong>By Admin</strong>
                    <br />
                    <small>Dec 25, 2025</small>
                  </div>
                </div>
                <h4>
                  How Digital Marketing Helps Small Businesses Grow Faster
                </h4>
                <p>
                  Digital marketing allows small businesses to compete with
                  larger brands using targeted and affordable strategies.
                </p>
                <div className="readmore-btn">
                  <Link href="/blog/blogpage2" className="text-2xl">
                    Read More <ArrowRight />{" "}
                    <span className="sr-only">about Blog Page</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container spread1">
          <div className="blog-category">
            {[
              "All Blogs",
              "Technology",
              "Website Design & Development",
              "Digital Marketing",
              "Video Editing",
            ].map((cat) => (
              <button
                aria-label="Category"
                key={cat}
                className={`category-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
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
                <div className="readmore-btn-link">
                <Link
                  href={item.link}
                  className="text-2xl flex items-center gap-2"
                >
                  Read More <ArrowRight />{" "}
                  <span className="sr-only">about Blog Page</span>
                </Link>
                </div>
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
              aria-label="Preview"
              className="page-btn"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <ChevronsLeft />
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              aria-label="Next"
              className="page-btn"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
