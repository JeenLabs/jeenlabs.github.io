import React from "react";

import "./hero.css";

const Hero = () => {
  return (
    <div className="home-container1">
      <div id="Home" className="home-hero-section">
        <div className="home-hero-container">
          <div className="home-hero-quote-container">
            <span className="home-hero-quote-text heroheaderqoute">
              AutomationS &amp; Web design Experts
            </span>
            <div className="home-container2"></div>
          </div>
          <div className="home-hero-content-container">
            <span className="home-hero-content-text">
              <span className="home-text10">Unlocking</span>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="home-text12">
                the possibilities of
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="home-text13">tomorrow</span>
              <span className="home-text14">, </span>
              <br className="home-text15"></br>
              <span className="home-text16">JEENL</span>
              <span className="home-text17">A</span>
              <span className="home-text18">BS</span>
              <span className="home-text19">
                 is a glimpse into the digital future.
              </span>
            </span>
            <img
              alt="image"
              src="/jeenlabs-logo.svg"
              className="home-hero-content-image"
            />
          </div>
          <div className="home-container3">
            <div className="home-container4">
              <button type="button" className="home-button">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  className="home-icon1"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></path>
                    <path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path>
                  </g>
                </svg>
                <span>Explore Our Services</span>
              </button>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="home-icon5"
            >
              <path
                d="M11.998 20.92q-.16 0-.296-.057t-.267-.186l-5.427-5.421q-.14-.14-.15-.344t.13-.35q.146-.166.357-.156q.21.01.357.156l4.798 4.784V12.73q0-.213.144-.356t.357-.144t.356.144t.143.356v6.637l4.823-4.804q.136-.14.339-.14t.353.145q.137.134.137.341t-.14.348l-5.446 5.421q-.132.13-.27.187t-.298.055m.001-10.69q-.213 0-.356-.144T11.5 9.73v-2q0-.213.144-.357t.357-.143t.356.143t.143.357v2.019q0 .205-.144.343t-.357.138m0-5q-.213 0-.356-.144T11.5 4.73v-1q0-.213.144-.356t.357-.144t.356.144t.143.356v1.019q0 .205-.144.343t-.357.138"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
