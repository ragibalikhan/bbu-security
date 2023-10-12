'use client'

import React, { useEffect, useState } from 'react';
import Script from 'next/script'

export default function Home() {

    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  
    useEffect(() => {
      // Function to update the copyright year every second
      const updateYearInterval = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
      }, 1000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(updateYearInterval);
    }, []);
  
  return (
    <>
    
  {/* HEADER-SECTION */}
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
                style={{ width: '50px', height: '50px' }}
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
                <li className="nav-item active">
                  <a
                    className="nav-link text-decoration-none navbar-text-color home-margin-top"
                    href="/"
                  >
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="#Service"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none navbar-text-color"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item navbar-text-color">
                  <a
                    className="nav-link text-decoration-none contact-us-margin navbar-text-color"
                    href="#Faq"
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
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusm tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="banner-btn discover-btn-banner">
                  <a href="/scan" className="text-decoration-none">
                    Scan Website Now
                  </a>
                  <a href="" className="text-decoration-none play-button">
                    <i className="fa-solid fa-play" />
                  </a>
                </div>
              </div>
              <div className="social-icons" data-aos="zoom-out-left">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="/scan">
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
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="banner-img-content position-relative"
                data-aos="fade-up"
              >
                <figure
                  className="banner-img mb-0 wow slideInRight"
                  data-wow-duration="2s"
                >
                  <img
                    className="img-fluid banner-img-width"
                    src="images/banner-img.png"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
          {/* CARDS-SECTION */}
          <div className="cards-section overflow-hidden">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-4 text-md-left text-center">
                  <div className="cards-outer outer-card1" data-aos="fade-up">
                    <h6 className="heading-background">virtual events</h6>
                    <p className="card-heading-p vertical-bar-line">
                      Cum sociis natoque penatibus et magnisd is parturient
                      montes nasc.
                    </p>
                    <p className="date-p">August 11, 2021</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-4 text-md-left text-center">
                  <div
                    className="cards-outer outer-padding-left outer-card2"
                    data-aos="fade-up"
                  >
                    <h6 className="heading-background">new report</h6>
                    <p className="card-heading-p vertical-bar-line">
                      Cum sociis natoque penatibus et magnisd is parturient
                      montes nasc.
                    </p>
                    <p className="date-p">August 11, 2021</p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-4 text-md-left text-center"
                  data-aos="fade-up"
                >
                  <div className="outer-padding-left-last outer-card3">
                    <h6 className="heading-background">expert panel</h6>
                    <p className="card-heading-p">
                      Cum sociis natoque penatibus et magnisd is parturient
                      montes nasc.
                    </p>
                    <p className="date-p">August 11, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ICONS_SECTION */}
  <section className="icons-section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center p-0" data-aos="fade-zoom-in">
            Trusted Over 2300+ Companies in the World
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-sm-4 col-6 mb-md-0 mb-4 text-center d-table align-items-center">
          <div
            className="logo-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
          >
            <figure className="mb-0 comapanies-icon-margin icons-mb">
              <img src="images/companies-icon1.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6 mb-md-0 mb-4 text-center d-table align-items-center">
          <div
            className="logo-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
          >
            <figure className="mb-0 comapanies-icon-margin icons-mb">
              <img src="images/companies-icon2.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6 mb-md-0  mb-4 text-center d-table align-items-center">
          <div
            className="logo-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
          >
            <figure className="mb-0 comapanies-icon-margin-hype icons-mb">
              <img src="images/companies-icon3.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6 mb-md-0 mb-4 text-center d-table align-items-center">
          <div
            className="logo-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
          >
            <figure className="mb-0 comapanies-icon-margin-3">
              <img src="images/companies-icon4.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6 mb-md-0 mb-4 text-center d-table align-items-center">
          <div
            className="logo-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
          >
            <figure className="mb-0 comapanies-icon-margin-3">
              <img src="images/companies-icon5.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6 mb-md-0 mb-4 text-center d-table align-items-center">
          <div
            className="logo-box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
          >
            <figure className="mb-0 mt-0 comapanies-icon-margin-3 companies-icon6">
              <img src="images/companies-icon6.png" alt="" />{" "}
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ABOUT-US_SECTION */}
  <section id='About' className="about-us-section-start">
    <div
      className="about-right-icon position-relative"
      data-aos="fade-right"
      data-aos-offset={300}
      data-aos-easing="ease-in-sine"
    >
      <figure className="whyus-icon">
        <img
          src="images/about-us-section-right-icon.png"
          alt=""
          className="img-fluid"
        />
      </figure>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3
            className="text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Why Choose Us
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="about-us-content"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-round-icon1.png" alt="" />
              </figure>
            </div>
            <h4>Security Services</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="about-us-content"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="icons-rounded-box">
              <figure className="mb-0 icon-color">
                <img src="images/about-round-icon2.png" alt="" />
              </figure>
            </div>
            <h4>Data Privacy</h4>
            <p className="security-services-p">
              Lorem ipsum dolor sit ametconsectetuer dipiscing elitaenean
              commodo ligula eget dolor aenean massa.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="about-us-content"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-round-icon3.png" alt="" />
              </figure>
            </div>
            <h4>Industry Certified</h4>
            <p className="security-services-p">
              Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean
              vulputate eleife nd tellusenean leo ligula.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CYBER-SECURITY-SECTION */}
  <section className="cyber-security-section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <div className="cyber-content-img" data-aos="fade-up-left">
            <figure className="mb-0">
              <img
                src="images/cyber-security-left-img.png"
                alt=""
                className="cyber-security-provider-img"
              />
            </figure>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1" />
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="cyber-content" data-aos="fade-up-right">
            <h3>
              Advanced <span className="cyber-text">Cyber Security</span>{" "}
              Provider
            </h3>
            <p className="security-services-p">
              Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo
              doligula eget dolorenean massa.In enim justo, rhoncus ut,
              imperdiet avene natis vitae justo nullam dictum felis eu pede
              mollis pretium Inte ger tincid unt cras dapibus
            </p>
            <p className="security-services-p cyber-p-margin-bottom">
              Vamus elementum semper nisi aenean vulputate eleife nd tellus
              onsec tet ueradip.
            </p>
            <div className="cyber-contact-btn">
              <a href="https://brandboostup.in/contact" className="text-decoration-none">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* boxes-section */}
  <div className="about-us-section-start cyber-boxes-section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/cyber-section-icon1.png" alt="" />
              </figure>
            </div>
            <h3 className="counetr-heading">
              <span className="counter">3325</span>
              <span className="cyber-counter">+</span>
            </h3>
            <h5 className="cyber-boxes-text">Global Projects</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0 icon-color">
                <img src="images/cyber-section-icon2.png" alt="" />
              </figure>
            </div>
            <h3 className="counetr-heading">
              <span className="counter">4579</span>
              <span className="cyber-counter clients-protect">+</span>
            </h3>
            <h5 className="cyber-boxes-text">Clients Protect</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/cyber-section-icon3.png" alt="" />
              </figure>
            </div>
            <h3 className="counetr-heading">
              <span className="counter">100</span>
              <span className="cyber-counter cyber-percent">%</span>
            </h3>
            <h5 className="cyber-boxes-text">Service Guarantee</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/cyber-section-icon4.png" alt="" />
              </figure>
            </div>
            <h3 className="counetr-heading">
              <span className="counter">7845</span>
              <span className="cyber-counter expert-team">+</span>
            </h3>
            <h5 className="cyber-boxes-text">Experts Team</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* CYBER-SECURITY-SOLUTION */}
  <section className="cyber-security-section cyber-security-section2 overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="cyber-content" data-aos="fade-up-left">
            <h3>
              Providing Best <span className="cyber-text">Cyber Security </span>
              Solutions
            </h3>
            <p className="security-services-p">
              Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo
              doligula eget dolorenean massa.In enim justo, rhoncus ut,
              imperdiet avene natis vitae justo nullam dictum felis eu pede
              mollis pretium Inte ger tincid unt cras dapibus
            </p>
            <p className="security-services-p cyber-p-margin-bottom">
              Vamus elementum semper nisi aenean vulputate eleife nd tellus
              onsec tet ueradip.
            </p>
            <div className="cyber-contact-btn">
              <a href="https://brandboostup.in/contact" className="text-decoration-none">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 text-md-right text-center">
          <div className="cyber-content-img-right" data-aos="fade-up-right">
            <figure className="mb-0">
              <img
                src="images/cyber-security-right-img.png"
                alt=""
                className=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ABOUT-US_SECTION2 */}
  <section id='Service' className="about-us-section-start about-us-section-2 overflow-hidden">
    <div className="about-right-icon position-relative">
      <figure className="about2-left-img">
        <img
          src="images/about-section2-left-img.png"
          alt=""
          className="img-fluid"
        />
      </figure>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center offer-section-title" data-aos="flip-up">
            What We Offer
          </h3>
          <p className="text-center" data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="about-us-content about-margin-bottom"
            data-aos="fade-up"
          >
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-section2-icon1.png" alt="" />
              </figure>
            </div>
            <h4>Threat Intelligence</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="about-us-content about-margin-bottom"
            data-aos="fade-up"
          >
            <div className="icons-rounded-box">
              <figure className="mb-0 icon-color">
                <img src="images/about-section2-icon2.png" alt="" />
              </figure>
            </div>
            <h4>Security Assessment</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="about-us-content about-margin-bottom"
            data-aos="fade-up"
          >
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-section2-icon3.png" alt="" />
              </figure>
            </div>
            <h4>Compromise Assessment</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-section2-icon4.png" alt="" />
              </figure>
            </div>
            <h4>Incident Response</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-round-icon1.png" alt="" />
              </figure>
            </div>
            <h4>Security Training</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/about-section2-icon6.png" alt="" />
              </figure>
            </div>
            <h4>CLoud Security</h4>
            <p className="security-services-p">
              Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu.
              In enim justo, rhoncus ut imperdiet.
            </p>
            <a href="#About" className="text-decoration-none ">
              Learn More{" "}
              <span className="forword-arrow">
                <i className="fa fa-angle-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Accordian-Section */}
  <section id='Faq' className="cyber-security-section accordian-section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="faq-content-img" data-aos="fade-right">
            <figure className="mb-0">
              <img src="images/accordian-left-img.png" alt="" className="" />
            </figure>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="cyber-content accordian-text" data-aos="fade-up">
            <h3>General Questions Frequently Asked Questions?</h3>
            <div className="accordian-inner">
              <div id="accordion1">
                <div className="accordion-card">
                  <div className="" id="headingFour">
                    <a
                      href="#"
                      className="btn btn-link text-decoration-none"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <h5 className="faq-btn-text">
                        How Can I Safely Browse The Internet?
                      </h5>
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse show"
                    aria-labelledby="headingFour"
                  >
                    <div className="card-body">
                      <p className="text-left accordian-text-color">
                        Lorem ipsum dolor sit amet consectetuer adipiscing
                        elitenean commo doligula eget dolorenean massaIn enim
                        justo, rhoncus ut, imperdiet avene natis vitae justo
                        nullam dictum felis eu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="cyber-content accordian-text">
            <div className="accordian-inner">
              <div id="accordion2">
                <div className="accordion-card">
                  <div className="" id="headingFive">
                    <a
                      href="#"
                      className="btn btn-link collapsed text-decoration-none"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <h5 className="faq-btn-text">
                        How Does Secuvant&rsquo;s Co-managed Security Model Work?
                      </h5>
                    </a>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                  >
                    <div className="card-body">
                      <p className="text-left accordian-text-color">
                        Lorem ipsum dolor sit amet consectetuer adipiscing
                        elitenean commo doligula eget dolorenean massaIn enim
                        justo, rhoncus ut, imperdiet avene natis vitae justo
                        nullam dictum felis eu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="cyber-content accordian-text">
            <div className="accordian-inner">
              <div id="accordion3">
                <div className="accordion-card">
                  <div className="" id="headingSix">
                    <a
                      href="#"
                      className="btn btn-link collapsed text-decoration-none"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <h5 className="faq-btn-text">
                        What Type Frequency Of Alerts And Notifications Will
                        Receive?
                      </h5>
                    </a>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                  >
                    <div className="card-body">
                      <p className="text-left accordian-text-color">
                        Lorem ipsum dolor sit amet consectetuer adipiscing
                        elitenean commo doligula eget dolorenean massaIn enim
                        justo, rhoncus ut, imperdiet avene natis vitae justo
                        nullam dictum felis eu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="cyber-content accordian-text">
            <div className="accordian-inner">
              <div id="accordion4">
                <div className="accordion-card">
                  <div className="" id="headingSeven">
                    <a
                      href="#"
                      className="btn btn-link collapsed text-decoration-none"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <h5 className="faq-btn-text">
                        How Is Our Data Stored And Protected And For How Long?
                      </h5>
                    </a>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    aria-labelledby="headingSeven"
                  >
                    <div className="card-body">
                      <p className="text-left accordian-text-color">
                        Lorem ipsum dolor sit amet consectetuer adipiscing
                        elitenean commo doligula eget dolorenean massaIn enim
                        justo, rhoncus ut, imperdiet avene natis vitae justo
                        nullam dictum felis eu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*PRICING-PLAN_SECTION */}
  <section id='Pricing' className="about-us-section-start pricing-plan-section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center" data-aos="fade-up">
            Your Pricing Plan
          </h3>
          <p className="text-center" data-aos="fade-up-left">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/pricing-plan-icon1.png" alt="" />
              </figure>
            </div>
            <h4 className="pricing-plan-h4">Beginner</h4>
            <h3 className="pricing-plan-color">
              Free <span className="pricing-free-text">/Month</span>
            </h3>
            <p className="pricing-content">
              30 Days Product Testing Upgrade Anytime Protection 500 Malware
              Removal 24/7 Live Assistance Scan Every 12 Hrs Configure Software
              One-time
            </p>
            <div className="order-now-btn">
              <a href="#Pricing" className="text-decoration-none ">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0 icon-color">
                <img src="images/pricing-plan-icon2.png" alt="" />
              </figure>
            </div>
            <h4 className="pricing-plan-h4">Business</h4>
            <h3 className="pricing-plan-color">
              $39.99<span className="pricing-free-text">/Month</span>
            </h3>
            <p className="pricing-content">
              40 Days Product Testing Upgrade Anytime Protection 1000 Malware
              Removal 24/7 Live Assistance Scan Every 13 Hrs Configure Software
              One-time
            </p>
            <div className="order-now-btn">
              <a href="#Pricing" className="text-decoration-none ">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="about-us-content" data-aos="fade-up">
            <div className="icons-rounded-box">
              <figure className="mb-0">
                <img src="images/pricing-plan-icon3.png" alt="" />
              </figure>
            </div>
            <h4 className="pricing-plan-h4">Exclusive</h4>
            <h3 className="pricing-plan-color">
              $47.85 <span className="pricing-free-text">/Month</span>
            </h3>
            <p className="pricing-content">
              50 Days Product Testing Upgrade Anytime Protection Unlimited
              Malware Removal 24/7 Live Assistance Scan Every 14 Hrs Configure
              Software Life-time
            </p>
            <div className="order-now-btn">
              <a href="#Pricing" className="text-decoration-none ">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* Blogs-Section */}
  <section className="about-us-section-start blogs-section-starts overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center" data-aos="fade-up">
            Latest News &amp; Blog
          </h3>
          <p className="text-center" data-aos="fade-up-left">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="blogs-section">
            <a href="#">
              <div className="images-blog" data-aos="fade-up">
                <figure className="mb-0">
                  <img
                    className="img-fluid"
                    src="images/blog-section-img1.png"
                    alt=""
                  />
                </figure>
              </div>
              <h5 className="blogs-h5">
                Protect Your Workplace From Cyber Attacks
              </h5>
              <p className="blogs-p">
                Nullam dictum felis eu pede mollis pre tium Integer tinciduntras
                dapibusv enean vulputate eleifend tellus.
              </p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="blogs-section">
            <a href="#">
              <div className="images-blog" data-aos="fade-up">
                <figure className="mb-0">
                  <img
                    className="img-fluid"
                    src="images/blog-section-img2.png"
                    alt=""
                  />
                </figure>
              </div>
              <h5 className="blogs-h5">
                The Security Risks Of Changing Package Owners
              </h5>
              <p className="blogs-p">
                Quisque rutruma enean imperdiet etiam ultricies nisi vel augue
                curabitur unisi nam eget dui etiam rhoncus.
              </p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="blogs-section">
            <a href="#">
              <div className="images-blog" data-aos="fade-up">
                <figure className="mb-0">
                  <img
                    className="img-fluid"
                    src="images/blog-section-img3.png"
                    alt=""
                  />
                </figure>
              </div>
              <h5 className="blogs-h5">Avoid Mistakes In Social Media Posts</h5>
              <p className="blogs-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Form-Section */}
  <section className="blogs-section-starts form-section-starts overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="form-section" data-aos="fade-up">
            <h3 className="text-center" data-aos="fade-up">
              Subscribe Our Newsletter
            </h3>
            <p className="text-center form-section-p" data-aos="fade-up-left">
              Lorem ipsum dolor sit amet consectetuer adipiscing elitenean
              commodo ligula eget dolorenean massa.
            </p>
            <div className="input-group mb-3 input-field-form">
              <input
                type="text"
                className="form-control input-form-input"
                placeholder="Enter your email address"
              />
              <div className="input-group-append form-button">
                <button className="btn btn-form-section" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer-Section */}
  <div className="footer-section">
    <div className="about-right-icon">
      <figure className="footer-icon">
        <img src="images/footer-left.png" alt="" className="img-fluid" />
      </figure>
    </div>
    <div className="footer-outer-margin" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="footer-content1" data-aos="flip-left">
              <figure>
                <a href="/">
                  <img
                    src="images/security-boost.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </figure>
              <p className="red-light-footer-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
                eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur
                adipiscing.
              </p>
              <div className="social-icons teams-social-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-decoration-none red-hover">
                      <i className="fa-brands fa-square-facebook  social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none red-hover">
                      <i className="fa-brands fa-square-twitter social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none red-hover">
                      <i className="fa-brands fa-linkedin social-networks" />
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none red-hover">
                      <i className="fa-brands fa-square-pinterest social-networks" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 d-xl-block d-none" />
          <div className="col-xl-2 col-lg-3 col-md-2 col-sm-12 d-lg-block d-none">
            <ul className="list-unstyled services-footer" data-aos="flip-left">
              <li className="list-item footer-margin-left">
                <h5 className="footer-link  footer-services-heading">
                  Services
                </h5>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="/"
                  className="text-decoration-none footer-link-p"
                >
                  Threat Hunter
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#About"
                  className="text-decoration-none footer-link-p"
                >
                  Incident Responder
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#Service"
                  className="text-decoration-none footer-link-p"
                >
                  Secure Managed IT
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#"
                  className="text-decoration-none footer-link-p"
                >
                  Compliance
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#"
                  className="text-decoration-none footer-link-p"
                >
                  Cyber Security
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#Pricing"
                  className="text-decoration-none footer-link-p"
                >
                  Disaster Planning
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 d-md-block d-none">
            <ul className="list-unstyled support-footer" data-aos="flip-left">
              <li className="list-item footer-margin-left">
                <h5 className="footer-link footer-services-heading">Support</h5>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="/"
                  className="text-decoration-none footer-link-p"
                >
                  Support
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="https://brandboostup.in/contact"
                  className="text-decoration-none footer-link-p"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#Service"
                  className="text-decoration-none footer-link-p"
                >
                  Knowledge Base
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#About"
                  className="text-decoration-none footer-link-p"
                >
                  About Us
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#Faq"
                  className="text-decoration-none footer-link-p"
                >
                  FAQ
                </a>
              </li>
              <li>
                <i className="fa-solid fa-caret-right" />
                <a
                  href="#"
                  className="text-decoration-none footer-link-p"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="footer-list">
              <div className="icon-list-box1" data-aos="flip-left">
                <ul className="list-unstyled contact-us-ul">
                  <li className="list-item">
                    <h5 className="footer-link footer-get-heading">
                      Get in Touch
                    </h5>
                  </li>
                  <li className="list-item position-reletive addres-list icon-list1">
                    <div className="number">
                      <a
                        href="mailto:webmaster@example.com"
                        className="text-decoration-none footer-link-p ml-0"
                      >
                        <span className="footer-additional">Email: </span>{" "}
                        security@brandboostup.in
                      </a>
                    </div>
                  </li>
                  <li className="list-item position-reletive addres-list icon-list1">
                    <div className="contact-number">
                      <a
                        href="tel:+919258602423"
                        className="text-decoration-none footer-link-p ml-0"
                      >
                        <span className="footer-additional">Phone:</span> +91-9258602423
                      </a>
                    </div>
                  </li>
                  {/* <li className="list-item position-reletive addres-list icon-list1">
                    <div className="contact-number">
                      <a
                        href="tel:+919258602423"
                        className="text-decoration-none footer-link-p ml-0"
                      >
                        <span className="footer-additional">Fax:</span> +1 ( 987
                        ) 654 321 9 9
                      </a>
                    </div>
                  </li> */}
                  <li className="list-item position-reletive addres-list icon-list1">
                    <div className="contact-address">
                      <a
                        href="#"
                        className="text-decoration-none footer-link-p ml-0"
                      >
                        <span className="footer-additional">Addres: </span> King
                        Street Melbourne, 3000, Australia
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bar text-center">
      <div className="container">
        <div className="row">
          <div className="footer-bar-content w-100 overflow-hidden">
          <p className="text-size-16 mb-0">
            &copy;{currentYear} <a
              href="https://www.brandboostup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none footer-link-p copyrighturl"
            >
              Brand Boost Up
            </a> All Rights Reserved
          </p>
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
