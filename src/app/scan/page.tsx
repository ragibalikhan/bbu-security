'use client'

import React, { useState } from 'react';
import Script from 'next/script'
import ScanResultComponent from '@/Componnets/ScanResult';
import logo from '../logo.png'
import Image from 'next/image';

export default function Scan() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState<string | null>(null); // Define as string | null
  const [loading, setLoading] = useState(false);
  const apiKey = 'https://bbu-security-api.onrender.com/scan_all_vulnerabilities?url=';

  const handleScan = async () => {
    // Check if the URL starts with "http://" or "https://"
    const urlRegex = /^(https?:\/\/)/;
    if (!urlRegex.test(websiteUrl)) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(apiKey + websiteUrl);
      if (response.ok) {
        const data = await response.json();
        setScanResult(data);
        setError(null);
      } else {
        setError(
          'The scanner is currently upgrading. Please subscribe to our newsletter to receive notifications when it becomes available.'
        );
      }
    } catch (error) {
      setError('An error occurred while scanning. Please try again later.');
      console.error('Error scanning website:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press for scanning
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleScan();
    }
  };
  
    return (
        <>
        {/* <Head>
        <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="images/security-boost1.png"
    />
        </Head> */}
   <div className="home-header-section">
    <header className="header">
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a className="navbar-brand pt-0" href="/">
            <Image
                src={logo}
                width={50}
                height={50}
                priority={true}
                alt="Security-Boost-Up"
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
                    href="/Scan"
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
                  Organizations with Critical Infrastructure
                  
                </h1>
                <p className="text-white banner-paragraph">
                  The scanner Scope is too small. Don&apos;t use it for professional audit&apos;s.
                  <a className="position-absolute top-0 end-0 bg-dark text-light p-2 rounded small" style={{ boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)', textDecoration: 'none', marginLeft: '10px' }}>
                    BETA
                  </a>                
                </p>



{/* Scanner Box */}
<div className="container">
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Website URL"
              aria-label="Website URL"
              aria-describedby="button-addon"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}onKeyPress={handleEnterPress}
            />
            <button
              className="btn btn-outline-secondary"
              style={{marginLeft: '10px'}}
              type="button"
              id="button-addon"
              onClick={handleScan}
            >
              Scan
            </button>
          </div>
        </div>

        {/* Loading bar */}
        {loading && (
          <div className="loading-bar" style={{ width: '100%' }}>
            <div className="my-bar">
              <div className="progress-bar"></div>
            </div>
          </div>
        )}
        {error && !loading && (
          <div className="input-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            aria-label="Subscribe"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          {/* <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setSubscribed(true)}
            >
              Subscribe
            </button>
          </div> */}
          <button
            type="button"
            className="close"
            onClick={() => setError(null)}
          >
            <span>&times;</span>
          </button>
        </div>
            
          
        )}

        {/* Display the error in the scanner box with a red alert */}
      {error && !loading && (
        <div className="container">
          <div className="alert alert-danger mt-2" role="alert">
            {error}
          </div>
        </div>
      )}

        {scanResult && !loading && (
          <div className="container">
            <div className="mt-4">
              <h3>Scan Result:</h3>
              {/* Add ScanResultComponent here to display the results beautifully */}
              <ScanResultComponent data={scanResult} />
            </div>
          </div>
        )}
      
                
                
                {/* banner */}
              </div>
              
              <div className="social-icons" data-aos="zoom-out-left">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="/Scan">
                      <i className="fa-regular fa-horizontal-rule" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919258602423" className="text-decoration-none">
                      <i className="fa-solid fa-phone social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.link/cat61b" className="text-decoration-none">
                      <i className="fa-brands fa-whatsapp social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/boostup-in/" className="text-decoration-none">
                      <i className="fa-brands fa-linkedin-in social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <i className="fa-brands fa-skype social-networks" />
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
