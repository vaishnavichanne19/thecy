import Image from "next/image";
import video from "@/public/images/videoe.jpeg";
import conceptualize from "@/public/images/conceptualize.jpg";
import plan from "@/public/images/plan.jpg";
import why from "@/public/images/editing-why.webp";
import VideoEditing1 from "@/public/images/videoediting.jpg";
import VideoEditing2 from "@/public/images/video-editing2.webp";
import VideoEditing3 from "@/public/images/video-editing3.webp";
import VideoEditing4 from "@/public/images/video-editing4.webp";
import VideoEnd from "@/public/images/video-end.webp";
import pr from "@/public/images/pr.svg";
import fcp from "@/public/images/fcp.svg";
import DaVinci from "@/public/images/DaVinci.svg";
import ae from "@/public/images/ae.svg";
import { X } from "lucide-react";

const VideoEditing = () => {
  return (
    <main>
      <div className="container-fluid video-editing-spread">
        <div className="spread-img">
          <Image
            src={video}
            alt="Video Editing"
            placeholder="blur"
            blurDataURL=""
          />
        </div>
        <div className="spread-content">
          <h1 data-aos="fade-down" data-aos-duration={1000}>
            Video Editing
          </h1>
          <p data-aos="fade-up" data-aos-duration={1000}>
            Transform raw footage into polished engaging videos - social clips,
            YouTube content, promos, and more Add effects, color-grade, motion
            graphics & subtitles for every platform.
          </p>
        </div>
      </div>
      <div className="container spread">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="video-editing-images">
              <div
                className="video-editing-images1"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <Image
                  src={conceptualize}
                  alt="Video Editing"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              <div
                className="video-editing-images2"
                data-aos="zoom-in"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <Image
                  src={plan}
                  alt="Video Editing"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mobile-video-editing-point">
            <div className="video-editing-content">
              <div className="video-editing-point">
                <span>01</span>
              </div>
              <div className="video-editing-data">
                <h2>Conceptualize</h2>
                <p>
                  We begin by understanding your <br /> vision and objectives
                  for the video.
                </p>
              </div>
            </div>
            <div className="video-editing-content">
              <div className="video-editing-point">
                <span>02</span>
              </div>
              <div className="video-editing-data">
                <h2>Plan</h2>
                <p>
                  We organize the content <br /> and structure to align with
                  your goals.
                </p>
              </div>
            </div>
            <div className="video-editing-content">
              <div className="video-editing-point">
                <span>03</span>
              </div>
              <div className="video-editing-data">
                <h2>Edit</h2>
                <p>
                  We refine the footage, enhancing
                  <br /> visuals and audio for clarity and <br /> impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container spread">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="video-creativity">
              <h3 data-aos="zoom-in" data-aos-duration={1000}>
                Where <span>creativity</span> meets the best
                <br />
                technology in <span>video editing</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="video-editing-card">
              <div className="video-editing-logo">Technology</div>

              <div className="video-editing-box video-editing-box1">
                <span className="video-editing-icon">
                  <Image src={pr} alt="pr" className="svg" />
                </span>
              </div>

              <div className="video-editing-box video-editing-box2">
                {" "}
                <span className="video-editing-icon">
                  <Image src={fcp} alt="fcp" className="svg" />
                </span>
              </div>

              <div className="video-editing-box video-editing-box3">
                <span className="video-editing-icon">
                  <Image src={ae} alt="ae" className="svg" />
                </span>
              </div>

              <div className="video-editing-box video-editing-box4">
                <span className="video-editing-icon">
                  <Image src={DaVinci} alt="DaVinci" className="svg" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container spread">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="video-editing-contact">
              <h3 style={{ textTransform: "capitalize" }}>Call us now</h3>
              <h4>
                <a href="tel:+917447327473">+91 7447327473</a>
              </h4>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="video-editing-contact-box">
              <div className="video-editing-contact-icon">
                <X />
              </div>
              <div className="video-editing-contact-data">
                <h4>Have a Project in Mind?</h4>
                <button>YES</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid video-editing-why-cy">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div
                className="spread"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <h3 style={{ color: "#ffe500", marginBottom: "40px" }}>
                  Why C&Y
                </h3>
                <div>
                  <p className="mb-4">
                    <span style={{ color: "#ffe500" }}>Expertise : </span>
                    {""} Skilled editors with years of industry experience.
                  </p>
                  <p className="mb-4">
                    <span style={{ color: "#ffe500" }}>Creativity : </span>
                    {""} Fresh, engaging, and unique storytelling in every
                    project.
                  </p>
                  <p className="mb-4">
                    <span style={{ color: "#ffe500" }}>Quality : </span>
                    {""} Crisp visuals, clear audio, and professional finishing.
                  </p>
                  <p className="mb-4">
                    <span style={{ color: "#ffe500" }}>Speed : </span>
                    {""} Fast turnaround without compromising quality.
                  </p>
                  <p className="mb-4">
                    <span style={{ color: "#ffe500" }}>Latest Tools : </span>
                    {""} We work with industry-leading software like Adobe
                    Premiere Pro and After Effects.
                  </p>
                  <p className="mb-4">
                    <span style={{ color: "#ffe500" }}>Results-Driven : </span>
                    {""} Videos designed to engage and convert your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div
                className="editing-why-img"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                <Image
                  src={why}
                  alt="Why C&Y"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container spread">
        <div className="turning-main-section">
          <div className="turning-section">
            <h3 className="mb-5" data-aos="fade-down" data-aos-duration={1000}>
              Turning Seconds into Stories.
            </h3>
            <div
              className="turning-section-img"
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <Image
                src={VideoEditing2}
                alt="Video Editing Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container spread">
        <div className="Empowering-section">
          <div
            className="Empowering-img"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <Image
              src={VideoEditing1}
              alt="Video Editing Image"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
          <div>
            <h2
              style={{ color: "#ffe500", textTransform: "capitalize" }}
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              Empowering <br /> Your Brand <br /> Through Video
            </h2>
          </div>
        </div>
        <div className="Empowering-section2">
          <div className="Empowering-img1">
            <Image
              src={VideoEditing4}
              alt="Video Editing Image"
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
      </div>

      <div className="container-fluid video-editing-point-section">
        <div className="container video-editing-point-container">
          <div>
            <div className="flex justify-center items-center">
              <div className="video-editing-point-img">
                <Image
                  src={VideoEditing3}
                  alt="Video Editing Image"
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
            </div>
            <div className="video-editing-point-div spread">
              <div className="video-editing-points">
                <p>
                  <span style={{ color: "#ffe500" }}>Boosts Engagement : </span>{" "}
                  Professionally edited videos grab attention and keep viewers
                  hooked longer.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>Build Credibility : </span>{" "}
                  High-quality edits make your brand appear trustworthy and
                  professional.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>
                    Increase Engagement :{" "}
                  </span>{" "}
                  Creative storytelling keeps viewers watching and interacting.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>
                    Enhances Brand Recall :{" "}
                  </span>{" "}
                  Creative visuals make your brand more memorable.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>
                    Optimizes for Platforms :{" "}
                  </span>{" "}
                  Videos tailored for YouTube, Instagram, LinkedIn, and more.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>
                    Saves Time & Effort :{" "}
                  </span>{" "}
                  We handle the editing so you can focus on your business.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>Multi-Purpose Use : </span>{" "}
                  One video can power your ads, website, and social media
                  campaigns.
                </p>
                <p>
                  <span style={{ color: "#ffe500" }}>Keeps You Ahead : </span>{" "}
                  Stay relevant with trending formats and creative styles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="video-editing-last-main-section">
          <div className="video-editing-last-section">
            <h3>Edit Smarter, Grow Faster With Us.</h3>
            <div className="Customize-data-anchore">
              <a href="tel:+917447327473">Call Us</a>
            </div>
            <div className="video-editing-last-section-img">
              <Image
                src={VideoEnd}
                alt="Video Editing Image"
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideoEditing;
