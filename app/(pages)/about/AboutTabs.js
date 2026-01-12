"use client";

import { useState } from "react";

export default function AboutTabs() {
  const [active, setActive] = useState("creativity");

  return (
       <div className="row spread xyz">
            <div className="about-section3">
              <h2 data-aos="fade-down" data-aos-duration={1000}>
                Our Beliefs
              </h2>
              <p>
                We believe in creativity with integrity where bold ideas meet
                honest communication, client-first collaboration fuels results,
                and every project is an opportunity to grow together
              </p>
            </div>
  
            <div className="col-lg-6 col-md-6 col-sm-12 xyz">
              <div
                className={`about-section3-point ${
                  active === "creativity" ? "active" : ""
                }`}
                onClick={() => setActive("creativity")}
                onMouseEnter={() => setActive("creativity")}
              >
                <strong>1. Creativity First</strong>
              </div>
  
              <div
                className={`about-section3-point ${
                  active === "collaboration" ? "active" : ""
                }`}
                onClick={() => setActive("collaboration")}
                onMouseEnter={() => setActive("collaboration")}
              >
                <strong>2. Collaboration Always</strong>
              </div>
  
              <div
                className={`about-section3-point ${
                  active === "excellence" ? "active" : ""
                }`}
                onClick={() => setActive("excellence")}
                onMouseEnter={() => setActive("excellence")}
              >
                <strong>3. Excellence & Accountability</strong>
              </div>
  
              <div
                className={`about-section3-point ${
                  active === "innovation" ? "active" : ""
                }`}
                onClick={() => setActive("innovation")}
                onMouseEnter={() => setActive("innovation")}
              >
                <strong>4. Innovation & Learning</strong>
              </div>
  
              <div
                className={`about-section3-point ${
                  active === "integrity" ? "active" : ""
                }`}
                onClick={() => setActive("integrity")}
                onMouseEnter={() => setActive("integrity")}
              >
                <strong>5. Integrity & Transparency</strong>
              </div>
            </div>
  
            <div className="col-lg-6 col-md-6 col-sm-12">
              {active === "creativity" && (
                <div className="about-section3-point-details">
                  <div>
                    <h3>Creativity First</h3>
                    <p>
                      We craft visuals and videos that not only captivate - but
                      convert.
                    </p>
                  </div>
                </div>
              )}
              {active === "collaboration" && (
                <div className="about-section3-point-details">
                  <div>
                    <h3>Collaboration Always</h3>
                    <p>
                      Great results come from listening, teamwork, and shared
                      vision.
                    </p>
                  </div>
                </div>
              )}
  
              {active === "excellence" && (
                <div className="about-section3-point-details">
                  <div>
                    <h3>Excellence & Accountability</h3>
                    <p>
                      We deliver polished work on time because quality isn't
                      optional.
                    </p>
                  </div>
                </div>
              )}
  
              {active === "innovation" && (
                <div className="about-section3-point-details">
                  <div>
                    <h3>Innovation & Learning</h3>
                    <p>
                      We stay curious embracing new tools and trends to keep our
                      clients ahead.
                    </p>
                  </div>
                </div>
              )}
  
              {active === "integrity" && (
                <div className="about-section3-point-details">
                  <div>
                    <h3>Integrity & Transparency</h3>
                    <p>
                      Honest communication and open pricing are non-negotiable.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
  );
}
