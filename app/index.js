"use client";
import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>JeenLabs</title>
          <meta
            name="description"
            content="JeenLabs is your indispensable partner because we specialize in our Products of digital empowerment."
          />
          <meta property="og:title" content="JeenLabs" />
          <meta
            property="og:description"
            content="JeenLabs is your indispensable partner because we specialize in our Products of digital empowerment."
          />
          <meta name="robots" content="noindex" />
        </Head>
        <div id="Home" className="home-hero-section">
          <div className="home-hero-container">
            <div className="home-hero-quote-container">
              <span className="home-hero-quote-text heroheaderqoute">
                Automation &amp; Web designing
              </span>
              <div className="home-container2"></div>
            </div>
            <div className="home-hero-content-container">
              <span className="home-hero-content-text">
                <span>
                  Unlocking
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text11">
                  the possibilities of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text12">tomorrow</span>
                <span className="home-text13">, </span>
                <br className="home-text14"></br>
                <span className="home-text15">JEENL</span>
                <span className="home-text16">A</span>
                <span className="home-text17">BS</span>
                <span className="home-text18">
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
              <button type="button" disabled className="button">
                <span className="home-text19">We are Coming Soon</span>
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path
                    d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                    fill="#F8312F"
                  ></path>
                </svg>
              </button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="home-icon3"
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
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .home-hero-section {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: 10%;
            padding-left: 15%;
            padding-right: 15%;
            flex-direction: column;
            padding-bottom: 10%;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .home-hero-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-hero-quote-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero-quote-text {
            margin-bottom: 0.5rem;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-accent2);
            border-style: solid;
            border-width: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-hero-content-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-hero-content-text {
            fill: var(--dl-color-theme-primary2);
            color: var(--dl-color-theme-primary2);
            font-size: 64px;
            align-self: center;
            margin-top: 5rem;
            font-family: 'Jost';
            margin-bottom: 5rem;
          }
          .home-text11 {
            color: var(--dl-color-theme-secondary1);
          }
          .home-text12 {
            color: var(--dl-color-theme-secondary2);
          }
          .home-text13 {
            color: var(--dl-color-theme-secondary1);
          }
          .home-text14 {
            color: var(--dl-color-theme-secondary1);
            letter-spacing: 15px;
          }
          .home-text15 {
            color: var(--dl-color-theme-secondary1);
            letter-spacing: 15px;
          }
          .home-text16 {
            color: var(--dl-color-theme-primary2);
            letter-spacing: 15px;
          }
          .home-text17 {
            color: var(--dl-color-theme-secondary1);
            letter-spacing: 15px;
          }
          .home-text18 {
            color: var(--dl-color-theme-secondary1);
          }
          .home-hero-content-image {
            width: 500px;
            height: 500px;
            object-fit: cover;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text19 {
            padding: 12px;
            font-family: 'Jost';
          }
          .home-icon3 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ff0000;
            width: 64px;
            height: 64px;
          }
          @media (max-width: 1200px) {
            .home-container1 {
              justify-content: center;
            }
            .home-hero-section {
              justify-content: center;
            }
            .home-hero-content-image {
              width: 300px;
              height: 300px;
            }
          }
          @media (max-width: 991px) {
            .home-hero-quote-container {
              align-self: center;
            }
            .home-hero-content-container {
              margin-top: 2rem;
              margin-bottom: 2rem;
              flex-direction: column-reverse;
            }
            .home-hero-content-text {
              margin-bottom: 2rem;
            }
          }
          @media (max-width: 767px) {
            .home-hero-content-text {
              font-size: 32px;
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-text19 {
              font-size: 24px;
            }
            .home-icon3 {
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
