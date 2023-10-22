import Script from 'next/script'
export default function BlogComp ( ) {
    return (
        <>
{/* Blogs-Section */}
<section className="about-us-section-start blogs-section-starts overflow-hidden">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <h3 className="text-center" data-aos="fade-up">
        Latest News &amp; Blog
      </h3>
      <p className="text-center" data-aos="fade-up-left">
      Stay Informed with Our Latest News & Blog Updates
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
            Cyber Attacks
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
            Security Risks
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
            Avoid Mistakes!
          </p>
        </a>
      </div>
    </div>
  </div>
</div>
</section>
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