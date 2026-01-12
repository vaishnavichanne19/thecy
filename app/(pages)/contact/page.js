"use client";

import Image from "next/image";
import contact1 from "@/public/images/contact1.webp";
import contact2 from "@/public/images/contact2.webp";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import emailjs from "emailjs-com";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Faq = dynamic(() => import("../HomePages/Faq"), { ssr: false });

const Contact = () => {
  const validateForm = (data) => {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(data.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    return true;
  };
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    if (!validateForm(formData)) return;

    emailjs
      .send(
        "service_0xibujk",
        "template_lnb390r",
        formData,
        "OcYArGWL3UfUa0gka"
      )
      .then(() => {
        toast.success("Message Sent Successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <main>
      <div className="main-spread">
        <div className="container-fluid contact-page">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 col-sm-12"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="contact-img">
                <Image
                  src={contact1}
                  alt="contact"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 contact-right">
              <div className="contact-content">
                <h3>
                  <span>Get In Touch</span>
                </h3>
                <p>
                  Whether you're planning a brand refresh, video campaign, or
                  digital marketing push, we're here to bring your idea to life.
                  We're here to help you out!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container spread">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="contact-box">
                <PhoneCall size={30} />
                <h4>Call us on</h4>
                <p>+91 7447327473</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="contact-box">
                <Mail size={30} />
                <h4>Email us on</h4>
                <p>customandyou21@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="contact-box">
                <Clock size={30} />
                <h4>office hours</h4>
                <p>Mon-Sat 9AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="row flex justify-center">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="contact-box">
                <MapPin size={30} />
                <h4>Our Address1</h4>
                <p>
                  Near Saraswati Lawn, Nara Road, Nara, Jaripatka, Nagpur - 14
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="contact-box">
                <MapPin size={30} />
                <h4>Our Address2</h4>
                <p>Mohammad Ali Chowk Bhaldarpura Gandhibagh Nagpur - 18</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div
                className="contact-form-img"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <Image src={contact2} alt="contact image2" />
              </div>
              <div className="contact-form-content">
                <p>
                  Fill out the form, we'll be in touch within 24 hours to bring
                  your project to life.
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 col-sm-12 ">
              <div className="contact-form">
                <h4>Message Us</h4>

                <form className="row" onSubmit={sendEmail}>
                  <div className="col-lg-6 contact-name">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-6 contact-name">
                    <label>Phone No.</label>
                    <input
                      type="phone"
                      name="phone"
                      maxLength={10}
                      placeholder="Your Phone No."
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-12 contact-name">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-12 contact-name">
                    <label>Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Your Message"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12 contact-form-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Faq />

        <div className="container">
          <div className="contact-end">
            <h5>
              Let's Bring Your Vision to Life <br /> Drop us a line tell us your
              project idea, and we'll respond within 24 hours.
            </h5>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </main>
  );
};

export default Contact;
