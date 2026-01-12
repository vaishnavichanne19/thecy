import DMarketing from "@/public/images/digital-mar.webp";
import Analysis from "@/public/images/analysis 1.webp";
import Planning from "@/public/images/planning 1.webp";
import Implementation from "@/public/images/implementation 1.webp";
import Result from "@/public/images/check-mark 1.webp";
import Boost from "@/public/images/Layer_1.webp";
import Seo from "@/public/images/seo.webp";
import Sem from "@/public/images/sem.webp";
import Smm from "@/public/images/smm.webp";
import Seonew from "@/public/images/digital-seo.webp";
import Semnew from "@/public/images/digital-sem.webp";
import Smmnew from "@/public/images/digital-smm.webp";
import framenew from "@/public/images/Group1.png";
import exprience from "@/public/images/user-experience 1.webp";
import tools from "@/public/images/tools 1.webp";
import bussiness from "@/public/images/business-idea 1.webp";
import transparency from "@/public/images/transparency 1.webp";
import Confused from "@/public/images/confused.jpg";
import Image from "next/image";
import WhyCY from "@/public/images/OBJECT.webp";
import DigitalSearch from "@/public/images/digital-search.webp";
import { Quote } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <main>
      <div className="spread">
        <div className="container-fluid digital-marketing-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12  digital-marketing-text-section">
                <div className="digital-marketing-text">
                  <h2>Digital Marketing</h2>
                  <p>
                    Digital solutions that drive real results. <br />
                    SEO, Ads, Social Media - all in one place.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="digital-marketing-img">
                  <Image
                    src={DMarketing}
                    alt="Digital Marketing"
                    className="img-fluid"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container digital-marketing-content spread">
          <h2>What is Digital Marketing?</h2>
          <p data-aos="fade-up" data-aos-duration={1000}>
            Digital marketing is the practice of promoting products, services,
            or brands through digital channels and technologies. It encompasses
            a wide range of strategies and tools aimed at reaching and engaging
            target audiences online. Unlike traditional marketing, which often
            involves one-way communication, digital marketing facilitates
            two-way interactions between businesses and consumers. Hence, we use
            techniques that reach them through websites, Facebook or Twitter
            pages, emails, or other types of internet ads. Additionally, it is a
            spectrum of things that have to work in accordance, and several
            digital marketing tactics have to apply to bring.
          </p>
        </div>

        <div className="container-fluid digital-marketing-process-section">
          <div className="digital-marketing-process-heading">
            <h2>
              Our <br />
              Process
            </h2>
          </div>
          <div className="digital-marketing-process-content">
            <div className="digital-marketing-process-box">
              <div className="digital-marketing-process-img">
                <Image
                  src={Analysis}
                  alt="Analysis"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div className="digital-marketing-process-no1">1</div>
              <strong data-aos="fade-up" data-aos-duration={1000}>
                Analysis
              </strong>
            </div>

            <div className="digital-marketing-process-box2">
              <div className="digital-marketing-process-img">
                <Image
                  src={Planning}
                  alt="Planning"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div className="digital-marketing-process-no2">2</div>
              <strong
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                Planning
              </strong>
            </div>

            <div className="digital-marketing-process-box3">
              <div className="digital-marketing-process-img">
                <Image
                  src={Implementation}
                  alt="Implementation"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div className="digital-marketing-process-no3">3</div>
              <strong
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                Implementation
              </strong>
            </div>

            <div className="digital-marketing-process-box4">
              <div className="digital-marketing-process-img">
                <Image
                  src={Result}
                  alt="Result"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div className="digital-marketing-process-no4">4</div>
              <strong
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                Result
              </strong>
            </div>
          </div>
        </div>

        <div className="container digital-marketing-services-main-section">
          <div className="digital-marketing-services-section">
            <div
              className="digital-marketing-services-img"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <Image
                src={Boost}
                alt="Digital Marketing Services"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <div className="digital-marketing-services-text">
              <h3>
                Ready to boost your <br /> brand's success?
              </h3>
              <a href="tel:+917447327473" className="digital-marketing-callus">Call Us</a>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="digital-marketing-seo-main-section">
            <div>
              <div className="digital-marketing-seo-section">
                <div className="digital-marketing-seo-text1">
                  <h3>seo</h3>
                  <div className="digital-marketing-seo-img">
                    <Image
                      src={Seo}
                      alt="search engines"
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>
                <div className="digital-marketing-seo-text2">
                  <h3>sem</h3>
                  <div className="digital-marketing-seo-img">
                    <Image
                      src={Sem}
                      alt="search engines"
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>
                <div className="digital-marketing-seo-text3">
                  <h3>smm</h3>
                  <div className="digital-marketing-seo-img">
                    <Image
                      src={Smm}
                      alt="search engines"
                      placeholder="blur"
                      blurDataURL=""
                    />
                  </div>
                </div>
              </div>
              <div className="digital-marketing-seo-confused-section">
                <h3>
                  Confused, right? <br /> We got you! Chill.
                </h3>
              </div>
            </div>
            <div>
              <div
                className="digital-marketing-seo-img2"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <Image
                  src={Confused}
                  alt="Confused Person"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row digital-marketing-seo">
            <h2>Search Engine Optimization</h2>
            <div className="col-lg-6 col-md-6 col-sm-12 flex justify-center">
              <div className="digital-marketing-seo-img3">
                <Image
                  src={Seonew}
                  alt="search engines"
                  placeholder="blur"
                  blurDataURL=""
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <p>
                SEO (Search Engine Optimization) marketing is a digital strategy
                focused on improving a website’s visibility and ranking on
                search engine results pages (SERPs) to drive organic (non-paid)
                traffic. It combines various practices such as optimizing
                content, technical enhancements, and building reputable site
                links to make your site more search‑friendly and relevant to
                users and search engines alike.
              </p>
              <p>
                SEO is the art of making your website more visible when people
                search on engines like Google or Bing without paying for ads. So
                if someone types in "best coffee shop in town," effective SEO
                helps your page appear among the first suggestions. This brings
                in more visitors naturally.
              </p>
            </div>
          </div>

          <div>
            <div className="spread1">
              <h3>Key Services Under SEO Marketing</h3>
            </div>

            <div className="key-card">
              <p>
                <small>Keywords Research & Strategy</small>
                <span>
                  Identify the search terms your audience uses, to guide your
                  content and optimization efforts
                </span>
              </p>
              <p>
                <small>On-Page SEO</small>
                <span>
                  Tweaking page content and HTML elements such as headlines,
                  meta tags, and content, so they align with search intent.
                </span>
              </p>
              <p>
                <small>Off-Page SEO</small>
                <span>
                  Building a website's authority through backlinks, social
                  sharing, and brand mentions across the web.
                </span>
              </p>
              <p>
                <small>Technical SEO</small>
                <span>
                  Enhancing backend elements like site speed, mobile
                  responsiveness to ensure smooth indexing by search engines.
                </span>
              </p>
              <p>
                <small>Local SEO</small>
                <span>
                  Tailoring your digital presence to appear in local searches
                  especially vital for businesses targeting nearby customers.
                </span>
              </p>
              <p>
                <small>Content Creation & Optimization</small>
                <span>
                  Develop high quality, keyword-aligned content blogs, articles,
                  videos, infographics that answers user queries and engages
                  readers.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="row digital-marketing-seo">
            <h2>Search Engine Marketing</h2>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <p>
                Search Engine Marketing (SEM) refers to strategies aimed at
                increasing a website’s visibility in search engine results pages
                (SERPs) through paid advertising primarily via platforms like
                Google Ads or Bing Ads. Unlike SEO, which focuses on organic
                reach, SEM delivers immediate visibility and targeted traffic
                through ads placed strategically based on keywords, bids, and
                quality scores.
              </p>
              <p>
                In its traditional sense, SEM encompassed both organic (SEO) and
                paid search efforts, serving as an overarching framework that
                blends the two. However, in modern marketing usage, SEM is most
                commonly used exclusively to denote paid search advertising
                (PPC), with SEO typically positioned as a separate tactic.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 flex justify-center">
              <div className="digital-marketing-seo-img3">
                <Image
                  src={Semnew}
                  alt="search engines"
                  placeholder="blur"
                  blurDataURL=""
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="spread1">
              <h3>Key Services Under SEM</h3>
            </div>

            <div className="key-card">
              <p>
                <small>Pay-Per-Click (PPC) Advertising</small>
                <span>
                  Running targeted ads across search engines like Google and
                  Bing paying only when users click your ads.
                </span>
              </p>
              <p>
                <small>Display Advertising</small>
                <span>
                  Visual ads banners or rich media appearing on websites within
                  ad networks to build brand awareness.
                </span>
              </p>
              <p>
                <small>Shopping & Product Ads</small>
                <span>
                  Showcasing product listings with images, pricing, and details
                  directly in search results (e.g., Google Shopping, Amazon
                  Ads).
                </span>
              </p>
              <p>
                <small>Video Advertising</small>
                <span>
                  Placing video ads on platforms like YouTube—pre-, mid-, or
                  post-roll to engage viewers visually.
                </span>
              </p>
              <p>
                <small>Local Search Ads</small>
                <span>
                  Identify the search terms your audience uses, to guide your
                  content and optimization efforts.
                </span>
              </p>
              <p>
                <small>Remarketing / Retargeting</small>
                <span>
                  Showing ads to users who previously visited your site—nudging
                  them to return and convert.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="row digital-marketing-seo">
            <h2>Social Media Marketing</h2>
            <div className="col-lg-6 col-md-6 col-sm-12 flex justify-center">
              <div className="digital-marketing-seo-img3">
                <Image
                  src={Smmnew}
                  alt="search engines"
                  placeholder="blur"
                  blurDataURL=""
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <p>
                Social Media Marketing (SMM) involves using platforms like
                Facebook, Instagram, LinkedIn, Twitter (X), TikTok, and YouTube
                to promote a brand, engage with audiences, and drive business
                goals through both organic and paid strategies. Services can be
                customized for each platform and tailored to the brand’s voice
                and objectives.
              </p>
              <p>
                SMM is about creating and sharing content—such as posts, images,
                videos, or stories—tailored to your audience to boost
                visibility, encourage interaction, and build trust. Unlike
                traditional advertising, SMM also allows you to engage directly
                with your audience through comments, messages, and live
                sessions, making the experience more personal and interactive.
              </p>
            </div>
          </div>

          <div>
            <div className="spread1">
              <h3>Key Services Under SMM</h3>
            </div>

            <div className="key-card">
              <p>
                <small>Content Creation & Publishing</small>
                <span>
                  Crafting and scheduling posts, images, videos, stories, and
                  infographics tailored to each platform.
                </span>
              </p>
              <p>
                <small>Community & Engagement Management</small>
                <span>
                  Responding to comments, messages, and mentions; monitoring
                  conversations to build relationships and trust.
                </span>
              </p>
              <p>
                <small>Paid Social Advertising</small>
                <span>
                  Running targeted ad campaigns like sponsored posts or video
                  ads with precise demographic, interest, or location targeting.
                </span>
              </p>
              <p>
                <small>Influencer Collaborations</small>
                <span>
                  Partnering with content creators who have their own followings
                  to expand reach and credibility.
                </span>
              </p>
              <p>
                <small>Analytics & Performance Tracking</small>
                <span>
                  Using built-in platform tools to measure engagement, reach,
                  clicks, and conversions and using this data to refine
                  strategy.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid why-cy-section">
          <div className="whycy-box">
            <div className="whycy-content">
              <div className="row whycy-top-section">
                <div className="col-lg-7 col-md-7 col-sm-12 whycy-content-section">
                  <h2>Why C&Y</h2>
                  <p>
                    At C&Y, we make digital marketing easy and effective so you
                    can focus on what you do best running your business. Our
                    team brings together all the skills you need, from creating
                    engaging content and managing ads to tracking what’s
                    working, all in one place. We use the latest tools and
                    insights, without you needing to buy or learn them yourself.
                  </p>
                </div>
                <div
                  className="col-lg-5 col-md-5 col-sm-12 whycy-img"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <Image
                    src={WhyCY}
                    alt="confused person"
                    width={200}
                    height={200}
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
              </div>
              <div className="container">
                <div className="row whycy-points">
                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="row">
                      <div data-aos="fade-right" data-aos-duration={1000}>
                        <div>
                          <Image
                            src={exprience}
                            width={80}
                            height={80}
                            alt="Expertise"
                          />
                        </div>
                        <p className="cy-points">
                          <strong>Expertise : </strong>
                          Our team brings deep experience across SEO, content,
                          ads, and more.
                        </p>
                      </div>
                      <div className="whycy-hr-line" />
                      <div
                        data-aos="fade-right"
                        data-aos-duration={1000}
                        data-aos-delay={200}
                      >
                        <div>
                          <Image
                            src={bussiness}
                            width={80}
                            height={80}
                            alt="Innovative"
                          />
                        </div>
                        <p className="cy-points">
                          <strong>Innovative : </strong>
                          You benefit from fresh perspectives and creative ideas
                          tailored to your industry and audience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12 vertical-line-main">
                    <div className="digital-vertical-line"></div>
                  </div>
                  <div
                    className="col-lg-5 col-md-5 col-sm-12"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="row">
                      <div data-aos="fade-right" data-aos-duration={1000}>
                        <div>
                          <Image
                            src={tools}
                            width={70}
                            height={70}
                            alt="Tools"
                          />
                        </div>
                        <p className="cy-points">
                          <strong>Tools : </strong>
                          We use advanced tools to supercharge your campaigns without requiring you to buy or learn new software.
                        </p>
                      </div>
                      <div className="whycy-hr-line" />
                      <div
                        data-aos="fade-right"
                        data-aos-duration={1000}
                        data-aos-delay={200}
                      >
                        <div>
                          <Image
                            src={transparency}
                            width={70}
                            height={70}
                            alt="Transparent"
                          />
                        </div>
                        <p className="cy-points">
                          <strong>Transparent : </strong>
                          We deliver clear, measurable results and reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container quote-section spread">
          <div className="quote">
            <div
              className="quote-icon"
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              <Quote size={80} />
            </div>
            <h3>
              Good marketing makes <br /> the company look smart. <br /> Great
              marketing makes <br /> the customer feel smart.
            </h3>
          </div>
        </div>

        <div className="container-fluid brand-grow-section spread1">
          <div className="container brand-grow">
            <h2>
              How digital marketing helps <br /> grow your brand online
            </h2>
            <div className="brand-grow-points">
              <ul>
                <li>Helps more people find your brand online.</li>
                <li>Makes your brand look active and updated.</li>
                <li>Builds trust through reviews, posts, and engagement.</li>
                <li>Increases brand awareness and recognition.</li>
                <li>Connects you with customers directly.</li>
                <li>Saves money compared to traditional ads.</li>
                <li>Runs campaigns 24/7, even when you're offline.</li>
                <li>Lets you track results and improve over time.</li>
                <li>Grows your online community and followers.</li>
              </ul>
            </div>
            <div className="brand-grow-image">
              <Image src={framenew} alt="Grow Image" />
              {/* <div className="vector-img" data-aos="fade-up" datat-aos-duration={2000}>
                <Image src={Vector} alt="Vector"/>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row Marketing_Project_section spread1">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="Marketing_Project_img"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <Image src={DigitalSearch} alt="Search" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="Marketing_Project_content">
                <h3>
                  Would you like to start Digital Marketing Project with us?
                </h3>
                <br />
                <a href="tel:+917447327473" className="digital-marketing-callus1">Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DigitalMarketing;
