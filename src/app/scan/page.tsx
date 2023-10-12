'use client'

import React, { useEffect, useState } from 'react';
import Script from 'next/script'

export default function scan() {
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [scanResult, setScanResult] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [subscribed, setSubscribed] = useState(false);
  
    const handleScan = async () => {
      try {
        const response = await fetch(`/api/scan?url=${websiteUrl}`);
        if (response.ok) {
          const data = await response.json();
          setScanResult(data);
          setError(null); // Clear any previous error
        } else {
          setError(
            'The scanner is currently upgrading. Please subscribe to our newsletter to receive notifications when it becomes available.'
          );
        }
      } catch (error) {
        setError('An error occurred while scanning. Please try again later.');
        console.error('Error scanning website:', error);
      }
    };
    return (
        <>
   <div className="home-header-section">
    <header className="header">
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a className="navbar-brand pt-0" href="/">
              <img
                src="images/security-boost.png"
                alt=""
                className="img-fluid diverge-logo"
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color home-margin-top"
                    href="/"
                  >
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="/scan"
                  >
                    Scan
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="/#About"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="/#Service"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="/#Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item navbar-text-color">
                  <a
                    className="nav-link text-decoration-none contact-us-margin navbar-text-color"
                    href="/#Faq"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="btn-talk ml-auto">
                <ul className="m-0 p-0">
                  <li className="list-unstyled d-lg-inline-block">
                    <a className="nav-link contact" href="https://brandboostup.in/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    {/* BANNER-SECTION */}
    <div className="home-banner-section overflow-hidden">
      <div className="banner-container-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-md-0 mb-4 text-md-left text-center">
              <div className="home-banner-text" data-aos="fade-up">
                <h5 className="text-white artificial-text">
                  Cyber Security Solutions for
                </h5>
                <h1 className="text-white">
                  {" "}
                  Organizations with Critical Infrastructure
                </h1>
                <p className="text-white banner-paragraph">
                The scanner is currently under development. Please subscribe to our newsletter to receive notifications when it becomes available. 
                </p>

                {/* Scanner Box */}
                <div className="container">
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="button-addon"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon"
            onClick={handleScan}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      {/* Display error alert with subscribe box */}
      {error && !subscribed && (
        <div className="container">
          <div className="alert alert-danger mt-3" role="alert">
            {error}
            <div className="input-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
                aria-label="Subscribe"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => setSubscribed(true)}
                >
                  Subscribe
                </button>
              </div>
              <button
                type="button"
                className="close"
                onClick={() => setError(null)}
              >
                <span>&times;</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Display scan result */}
      {scanResult && (
        <div className="container">
          <div className="mt-4">
            <h3>Scan Result:</h3>
            <pre>{JSON.stringify(scanResult, null, 2)}</pre>
          </div>
        </div>
      )}
                
                
                {/* banner */}
              </div>
              
              <div className="social-icons" >
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="#">
                      <i className="fa-regular fa-horizontal-rule" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none">
                      <i className="fa-brands fa-facebook-f social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none">
                      <i className="fa-brands fa-twitter social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none">
                      <i className="fa-brands fa-linkedin-in social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none">
                      <i className="fa-brands fa-pinterest-p social-networks" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           {/* banner image  */}
          </div>
          
         
        </div>
      </div>
    </div>
  </div>

 

  <Script src="js/jquery-1.12.1.min.js"></Script>
    <Script src="js/animations.js"></Script>
    <Script src="js/bootstrap.min.js"></Script>
    <Script src="js/jquery-3.6.0.min.js"></Script>
    <Script src="js/popper.min.js"></Script>
    <Script src="js/custom-script.js"></Script>
    <Script src="js/owl.carousel.js"></Script>
    <Script src="js/aos.js"></Script>
    <Script src="js/text-animations.js"></Script>
        </>
    )
}