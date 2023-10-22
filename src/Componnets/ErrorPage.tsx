import Script from 'next/script'
import logo from '../app/logo.png'
import Image from 'next/image';
import BlogComp from './BlogComp';

export default function ErrorPage (){
  return (
    <>
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
                <li className="nav-item">
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
                <h1 className="text-white artificial-text display-1">
                  404 Error Page!
                </h1>
                <h1 className="text-white">
                  {" "}
                  This Page Can&apos;t be found!
                </h1>
                <div className="btn-talk ml-auto">
                <ul className="m-0 p-0">
                  <li className="list-unstyled d-lg-inline-block">
                    <a className="nav-link contact" href="/">
                      Go Back
                    </a>
                  </li>
                </ul>
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
  <BlogComp/>
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
  );
}
