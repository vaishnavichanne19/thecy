
import graph1 from "@/public/images/graphic.jpg";
import event3 from "@/public/images/event3.jpeg";
import quality from "@/public/images/quality 1.webp";
import diary from "@/public/images/diary-writing 1.webp";
import premium from "@/public/images/premium 1.webp";
import Frame from "@/public/images/product-img.webp";
import trust from "@/public/images/trust 1.webp";
import trend from "@/public/images/trend 1.webp";
import creative from "@/public/images/creative 1.webp";
import pro1 from "@/public/images/pro1.webp";
import pro2 from "@/public/images/pro2.webp";
import tshirt from "@/public/images/tshirt.webp";
import tshirt1 from "@/public/images/tshirt1.webp";
import visitingcard from "@/public/images/visiting-card.webp";
import Icard from "@/public/images/icard.webp";
import Icardbelt from "@/public/images/icard-belt.webp";
import processdesign1 from "@/public/images/process-design1.webp";
import processdesign2 from "@/public/images/process-design2.webp";
import Brochure from "@/public/images/brochure.svg";
import Pamphlet from "@/public/images/pamphlet.svg";
import catalog from "@/public/images/catalog.svg";
import Diary from "@/public/images/diary.webp";
import WritingPad from "@/public/images/writing-pad.webp";
import File from "@/public/images/file.webp";
import Banner from "@/public/images/banner.webp";
import Billbook from "@/public/images/billbook.webp";
import Letterhead from "@/public/images/letterhead.webp";
import Bags from "@/public/images/bags.webp";
import Cap from "@/public/images/cap.webp";
import Badges from "@/public/images/badges.webp";
import Stickers from "@/public/images/stickers.webp";
import keychain from "@/public/images/keychain.webp";
import calendar from "@/public/images/calendar.webp";
import Lanyards from "@/public/images/icard-belt.webp";
import mug from "@/public/images/mug.webp";
import product from "@/public/images/product.webp";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import tshirt5 from "@/public/images/slider5.webp";
import tshirt2 from "@/public/images/slider2.webp";
import slider7 from "@/public/images/card.webp";
import slider8 from "@/public/images/mug.webp";

const Products = () => {
  return (
    <main>
    <div className="main-spread">
      <div className="container  product-section">
        <div className="product-images">
          <div className="product-image product-image1">
            <Image
              src={tshirt2}
              alt="products"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="product-image product-image2">
            <Image
              src={product}
              alt="products"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="product-image product-image3">
            <Image
              src={tshirt5}
              alt="products"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div
          className="product-section-detail"
          data-aos="fade-down"
          data-aos-duration={1000}
        >
          <h2>
            Welcome to our <br /> Product Section
          </h2>
          <p>
            Every product is crafted to <br /> connect, impress, and inspire.
          </p>
        </div>
      </div>

      <div className="container-fluid spread">
        <div className="all-products">
          <div className="product-detail">
            <h4>T-shirts</h4>
            <div className="all-product-image">
              <Image
                src={tshirt2}
                alt="T-shirt"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>ID Cards</h4>
            <div className="all-product-image">
              <Image
                src={Icard}
                alt="Icard"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Bags</h4>
            <div className="all-product-image">
              <Image
                src={Bags}
                alt="Bags"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Badges</h4>
            <div className="all-product-image">
              <Image
                src={Badges}
                alt="Badges"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Caps</h4>
            <div className="all-product-image">
              <Image
                src={Cap}
                alt="Cap"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Diary</h4>
            <div className="all-product-image">
              <Image
                src={Diary}
                alt="Diary"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>

             <div className="product-detail">
            <h4>Lanyards</h4>
            <div className="all-product-image">
              <Image
                src={Lanyards}
                alt="Lanyards"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Pamphlet</h4>
            <div className="all-product-image">
              <Image src={Pamphlet} alt="Pamphlet" />
            </div>
          </div>
          <div className="product-detail">
            <h4>Keychains</h4>
            <div className="all-product-image">
              <Image
                src={keychain}
                alt="Keychains"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Calendars</h4>
            <div className="all-product-image">
              <Image
                src={calendar}
                alt="Calendar"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Mugs</h4>
            <div className="all-product-image">
              <Image
                src={mug}
                alt="Mug"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Stickers</h4>
            <div className="all-product-image">
              <Image
                src={Stickers}
                alt="Stickers"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Writing Pad</h4>
            <div className="all-product-image">
              <Image
                src={WritingPad}
                alt="Writing Pad"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Visiting Card</h4>
            <div className="all-product-image">
              <Image
                src={visitingcard}
                alt="Visiting Card"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>
              Catalogu/ <br /> Brochure
            </h4>
            <div className="all-product-image">
              <Image src={Brochure} alt="Brochure" />
            </div>
          </div>
          <div className="product-detail">
            <h4>Dr. File</h4>
            <div className="all-product-image">
              <Image
                src={File}
                alt="File"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Banner</h4>
            <div className="all-product-image">
              <Image
                src={Banner}
                alt="Banner"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Bill Book</h4>
            <div className="all-product-image">
              <Image
                src={Billbook}
                alt="Bill Book"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="product-detail">
            <h4>Letterhead</h4>
            <div className="all-product-image">
              <Image
                src={Letterhead}
                alt="Letterhead"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid brochure-product-section spread1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 brochure-product-content-section">
              <div className="brochure-product-content">
                <h3 data-aos="fade-right" data-aos-duration={1000}>
                  From t-shirts to brochures we turn ideas into impactful
                  merchandise
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="brochure-product-image"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <Image
                  src={Frame}
                  alt="Product"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container spread Customize-section">
        <div className="Customize-data">
          <h3 data-aos="fade-down" data-aos-duration={1000}>
            Customize Your Merch Today <br /> With Customization and You
          </h3>
          <div className="Customize-data-anchore">
            <a href="tel:+917447327473">Call Us</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="why-cy-product-main-section">
          <div className="why-cy-product">
            <h3 style={{ marginBottom: "30px" }}>Why C&Y?</h3>
            <p>
              At C&Y, we make products that your brand will be proud of! From stylish designs to top-notch quality, we put heart into everything we create. Whether it’s a single custom piece or a large order, we make sure it’s delivered with creativity and care.
            </p>
          </div>
        </div>
        <div>
          <div className="row" data-aos="fade-up" data-aos-duration={1000}>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="why-cy-product-section">
                <div className="why-cy-product-img">
                  <Image
                    src={quality}
                    width={60}
                    height={60}
                    alt="Quality First"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
                <h4>Quality First</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="why-cy-product-section">
                <div className="why-cy-product-img">
                  <Image
                    src={diary}
                    width={60}
                    height={60}
                    alt="Quality First"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
                <h4>Customization Made Easy</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="why-cy-product-section">
                <div className="why-cy-product-img">
                  <Image
                    src={premium}
                    width={60}
                    height={60}
                    alt="Quality First"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
                <h4>Premium Materials</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="why-cy-product-section">
                <div className="why-cy-product-img">
                  <Image
                    src={trust}
                    width={60}
                    height={60}
                    alt="Quality First"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
                <h4>Trustworthy</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="why-cy-product-section">
                <div className="why-cy-product-img">
                  <Image
                    src={trend}
                    width={60}
                    height={60}
                    alt="Quality First"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
                <h4>Latest Trends</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="why-cy-product-section">
                <div className="why-cy-product-img">
                  <Image
                    src={creative}
                    width={60}
                    height={60}
                    alt="Quality First"
                    placeholder="blur"
                    blurDataURL=""
                  />
                </div>
                <h4>Creative Designs</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container spread">
        <h2 className="mb-5 text-center">Our Process</h2>
        <div className="our-process-section">
          <div className="our-process-data">
            <div className="our-process-heading">
              <h5>Design</h5>
            </div>
            <div className="our-process-para">
              <p>Our team creates designs or adapts yours to perfectly match your brand identity.</p>
            </div>
          </div>
          <div className="zigzag-container">
            <Image src={processdesign1} alt="design" />
          </div>
          <div className="product-design-dots"></div>
          <div className="our-process-data2">
            <div className="our-process-data">
              <div className="our-process-heading">
                <h5>Print</h5>
              </div>
              <div className="our-process-para">
                <p>High-quality materials and professional printing ensure durable, premium merchandise.</p>
              </div>
            </div>
          </div>
          <div className="zigzag-container1">
            <Image src={processdesign2} alt="design" />
          </div>
          <div className="product-design-dots1"></div>
          <div className="our-process-data">
            <div className="our-process-heading">
              <h5>Deliver</h5>
            </div>
            <div className="our-process-para">
              <p>On-time, safe, and reliable delivery right at your doorstep.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center">Fresh designs. Everyday Comfort</h2>
        <div className="spread1">
          <div>
            <Image
              src={tshirt1}
              alt="T-shirt1"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <h2>T-shirt</h2>
            <Image
              src={tshirt}
              alt="T-shirt"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div className="flex gap-20 flex-wrap items-center justify-center">
          <Image
            src={visitingcard}
            alt="visiting card"
            placeholder="blur"
            blurDataURL=""
          />
          <h2>Visiting Images</h2>
        </div>
        <div className="spread1">
          <div>
            <Image
              src={Icardbelt}
              alt="I card belt"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="visiting-card-section">
            <h2>Lanyards & ID-cards</h2>
            <Image src={Icard} alt="I card" placeholder="blur" blurDataURL="" />
          </div>
        </div>
        <div className="flex gap-30 flex-wrap justify-center items-center">
          <div className="brochure-img">
            <Image src={Brochure} alt="Brochure" />
          </div>
          <div className="brochure-img">
            <Image src={Pamphlet} alt="Pamphlet" />
          </div>
        </div>
        <div className="flex items-center justify-center m-5">
          <h2>
            Brochure, Pamphlet <br /> & Catalogues
          </h2>
        </div>
        <div className="brochure-img">
          <Image src={catalog} alt="catalog" />
        </div>

        <div className="spread">
          <div className="flex gap-0 flex-wrap justify-center items-end">
            <div>
              <Image
                src={Diary}
                alt="Diary"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            <h2>Diary & Writing Pad</h2>
          </div>
          <div className="writing-pad flex flex-wrap justify-end">
            <Image
              src={WritingPad}
              alt="Writing Pad"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div className="flex gap-20 flex-wrap justify-center items-center">
          <div>
            <Image
              src={File}
              alt="File"
              height={300}
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <h2>Dr. File</h2>
        </div>

        <div className="spread1 flex gap-20 flex-wrap justify-center items-center">
          <h2>Banners</h2>
          <div>
            <Image
              src={Banner}
              alt="Banner"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center items-center">
          <div>
            <Image
              src={Billbook}
              height={300}
              alt="Billbook"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div>
            <Image
              src={Letterhead}
              height={300}
              alt="Letterhead"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center m-5">
          <h2>Bill Book & Letterhead</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <Image src={Bags} alt="Bags" placeholder="blur" blurDataURL="" />
        </div>
        <div>
          <div className="flex gap-20 flex-wrap justify-center items-start">
            <Image src={Cap} alt="Cap" placeholder="blur" blurDataURL="" />
            <h2>Bags & Caps</h2>
          </div>
        </div>

        <div className="spread1 flex gap-12 flex-wrap justify-center items-center">
          <h2>Badges</h2>
          <div>
            <Image
              src={Badges}
              alt="Badges"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>

        <div className="flex  flex-wrap justify-end items-center">
          <Image
            src={keychain}
            alt="keychain"
            placeholder="blur"
            blurDataURL=""
          />
        </div>
        <div className="sticker-section flex gap-10 flex-wrap justify-center items-center">
          <div>
            <Image
              src={Stickers}
              height={400}
              alt="Stickers"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <h2>Keychain & Stickers</h2>
        </div>

        <div className="flex gap-10 flex-wrap justify-center items-center">
          <h2>Calendar & Mug</h2>
          <div>
            <Image
              src={calendar}
              alt="calendar"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div>
          <Image src={mug} alt="mug" placeholder="blur" blurDataURL="" />
        </div>
      </div>

      <div className="container spread">
        <div className="contact-grid">
          <div
            className="product-contact"
            style={{ backgroundColor: "#fbc4c4", border: "none" }}
          ></div>
          <div className="product-contact">
            <div className="product-contact-detail">
              <Mail />
              <a href="mailto:customandyou21@gmail.com">customandyou21@gmail.com</a>
            </div>
          </div>
          <div
            className="product-contact"
            style={{ backgroundColor: "#d7c4fb", border: "none" }}
          ></div>
          <div className="product-contact">
            <div className="product-contact-detail">
              <PhoneCall />
              <a href="tel:+917447327473">+91 7447327473</a>
            </div>
          </div>
          <div
            className="product-contact"
            style={{ backgroundColor: "#fbc4dc", border: "none" }}
          ></div>
          <div className="product-contact">
            <div className="product-contact-detail">
              <MapPin />
              <a>Near Saraswati Lawn, Nara Road, Nara, Jaripatka, Nagpur - 14 || <br/> Mohammad ali chowk bhaldarpura gandhibagh Nagpur - 18</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid spread through-section">
        <div className="container ">
          <div
            className="through-content"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <h2 style={{ color: "#ffe500", marginBottom: "30px" }}>
              Final Thoughts
            </h2>
            <p>
              <span style={{ color: "#ffe500" }}>Expertise: </span>Fast initial learning curve: According to Noble Desktop, beginners can pick up baseline Sketch skills in just a few days. Mastery of advanced features may take several weeks to a few months.
Noble Desktop
            </p>{" "}
            <p>
             Intuitive interface: Designers who've switched from Photoshop often highlight how quickly they adapted. One user noted reaching in Sketch—within three hours—what took them three years in Photoshop—and feeling familiar with all tools after just a week.
Medium
            </p>{" "}
            <p>
              {" "}
              Simple and efficient workflow: Sketch was built for UI/UX design, resulting in a straightforward interface and simplified design tools. Publications like Creative Market emphasize how quickly users get
            </p>
          </div>
        </div>
      </div>

      <div className="container spread">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6 col-8">
            <div
              className="prod-img"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <Image
                src={pro1}
                alt="Product Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-4">
            <div className="prod-box"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-4">
            <div className="prod-box"></div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-6 col-8">
            <div
              className="prod-img"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <Image
                src={pro2}
                alt="Product Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container products-quote">
        <h1>
          You define us through our designs. <br />
          Imagine how our designs could define you.
        </h1>
      </div>

      <div className="container spread">
        <div className="products-all-images-grid">
          <div className="products-all-image products-all-image1">
            <Image
              src={tshirt2}
              alt="Product"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="products-all-image products-all-image2">
            <Image
              src={tshirt5}
              alt="Product"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="products-all-image products-all-image3">
            <Image
              src={slider7}
              alt="Product"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="products-all-image products-all-image4">
            <Image
              src={Banner}
              alt="Product"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
        <div className="products-all-images-grid2">
          <div className="products-all-image products-all-image5">
            <Image
              src={slider8}
              alt="Product"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div className="products-all-data">
            <h3>Start With US Today</h3>
            <div className="Customize-data-anchore">
              <a href="tel:+917447327473">Call Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Products;
