import "./App.css";
import Appointment from "./Components/Appointment";
import Features from "./Components/Features/Features";
import FunFact from "./Components/FunFact/FunFact";
import Header from "./Components/Header";
import Pricing from "./Components/PricingTable/Pricing";
import Schedule from "./Components/Schedule/Schedule";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <div>
        {/* Preloader */}
        <div className="preloader">
          <div className="loader">
            <div className="loader-outter" />
            <div className="loader-inner" />
            <div className="indicator">
              <svg width="16px" height="12px">
                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
              </svg>
            </div>
          </div>
        </div>
        {/* End Preloader */}
        {/* Get Pro Button
        <ul className="pro-features">
          <a className="get-pro" href="#">
            Get Pro
          </a>
          <li className="big-title">Pro Version Available on Themeforest</li>
          <li className="title">Pro Version Features</li>
          <li>2+ premade home pages</li>
          <li>20+ html pages</li>
          <li>Color Plate With 12+ Colors</li>
          <li>Sticky Header / Sticky Filters</li>
          <li>Working Contact Form With Google Map</li>
          <div className="button">
            <a
              href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879"
              target="_blank"
              className="btn"
            >
              Pro Version Demo
            </a>
            <a
              href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910"
              target="_blank"
              className="btn"
            >
              Buy Pro Version
            </a>
          </div>
        </ul> */}
          {/* Header Area */} 
        <Header/>
        {/* End Header Area */}
        {/* Slider Area */}
       <Slider/>
        {/*/ End Slider Area */}
        {/* Start Schedule Area */}
        <Schedule/>
        {/*/End Start schedule Area */}
        {/* Start Feautes */}
        <Features/>
        {/*/ End Feautes */}
        {/* Start Fun-facts */}
        <FunFact/>
        {/*/ End Fun-facts */}
        {/* Start Why choose */}
        <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Offer Different Services To Improve Your Health</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                {/* Start Choose Left */}
                <div className="choose-left">
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra antege vel est lobortis, a commodo magna
                    rhoncus. In quis nisi non emet quam pharetra commodo.{" "}
                  </p>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right" />
                          Maecenas vitae luctus nibh.{" "}
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Duis massa massa.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Aliquam feugiat interdum.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right" />
                          Maecenas vitae luctus nibh.{" "}
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Duis massa massa.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Aliquam feugiat interdum.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Choose Left */}
              </div>
              <div className="col-lg-6 col-12">
                {/* Start Choose Rights */}
                <div className="choose-right">
                  <div className="video-image">
                    {/* Video Animation */}
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    {/*/ End Video Animation */}
                    <a
                      href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
                {/* End Choose Rights */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End Why choose */}
        {/* Start Call to action */}
        <section
          className="call-action overlay"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="content">
                  <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque porttitor dictum turpis nec gravida.
                  </p>
                  <div className="button">
                    <a href="#" className="btn">
                      Contact Now
                    </a>
                    <a href="#" className="btn second">
                      Learn More
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Call to action */}
        {/* Start portfolio */}
        <section className="portfolio section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="owl-carousel portfolio-slider">
                  <div className="single-pf">
                    <img src="img/pf1.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf2.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf3.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf4.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf1.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf2.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf3.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                  <div className="single-pf">
                    <img src="img/pf4.jpg" alt="#" />
                    <a href="portfolio-details.html" className="btn">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End portfolio */}
        {/* Start service */}
        <section className="services section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Offer Different Services To Improve Your Health</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-prescription" />
                  <h4>
                    <a href="service-details.html">General Treatment</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-tooth" />
                  <h4>
                    <a href="service-details.html">Teeth Whitening</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-heart-alt" />
                  <h4>
                    <a href="service-details.html">Heart Surgery</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-listening" />
                  <h4>
                    <a href="service-details.html">Ear Treatment</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-eye-alt" />
                  <h4>
                    <a href="service-details.html">Vision Problems</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
                {/* End Single Service */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-blood" />
                  <h4>
                    <a href="service-details.html">Blood Transfusion</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
                {/* End Single Service */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End service */}
        {/* Pricing Table */}
       <Pricing/>
        {/*/ End Pricing Table */}
        {/* Start Blog Area */}
        <section className="blog section" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Keep up with Our Most Recent Medical News.</h2>
                  <img src="img/section-img.png" alt="#" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                  <div className="news-head">
                    <img src="img/blog1.jpg" alt="#" />
                  </div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">22 Aug, 2020</div>
                      <h2>
                        <a href="blog-single.html">
                          We have annnocuced our new product.
                        </a>
                      </h2>
                      <p className="text">
                        Lorem ipsum dolor a sit ameti, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt sed do incididunt
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Blog */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                  <div className="news-head">
                    <img src="img/blog2.jpg" alt="#" />
                  </div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">15 Jul, 2020</div>
                      <h2>
                        <a href="blog-single.html">
                          Top five way for solving teeth problems.
                        </a>
                      </h2>
                      <p className="text">
                        Lorem ipsum dolor a sit ameti, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt sed do incididunt
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Blog */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                  <div className="news-head">
                    <img src="img/blog3.jpg" alt="#" />
                  </div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">05 Jan, 2020</div>
                      <h2>
                        <a href="blog-single.html">
                          We provide highly business soliutions.
                        </a>
                      </h2>
                      <p className="text">
                        Lorem ipsum dolor a sit ameti, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt sed do incididunt
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Blog */}
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Area */}
        {/* Start clients */}
        <div className="clients overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="owl-carousel clients-slider">
                  <div className="single-clients">
                    <img src="img/client1.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client2.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client3.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client4.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client5.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client1.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client2.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client3.png" alt="#" />
                  </div>
                  <div className="single-clients">
                    <img src="img/client4.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/Ens clients */}
        {/* Start Appointment */}
       <Appointment/>
        {/* End Appointment */}
        {/* Start Newsletter Area */}
        <section className="newsletter section">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6  col-12">
                {/* Start Newsletter Form */}
                <div className="subscribe-text ">
                  <h6>Sign up for newsletter</h6>
                  <p className>
                    Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                    <br /> homero alterum.
                  </p>
                </div>
                {/* End Newsletter Form */}
              </div>
              <div className="col-lg-6  col-12">
                {/* Start Newsletter Form */}
                <div className="subscribe-form ">
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Your email address"
                      className="common-input"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your email address'"
                      required
                      type="email"
                    />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
                {/* End Newsletter Form */}
              </div>
            </div>
          </div>
        </section>
        {/* /End Newsletter Area */}
        {/* Footer Area */}
        <footer id="footer" className="footer ">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>About Us</h2>
                    <p>
                      Lorem ipsum dolor sit am consectetur adipisicing elit do
                      eiusmod tempor incididunt ut labore dolore magna.
                    </p>
                    {/* Social */}
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-pinterest" />
                        </a>
                      </li>
                    </ul>
                    {/* End Social */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h2>Quick Links</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Our Cases
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Other Links
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Consuling
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Finance
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Testimonials
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Open Hours</h2>
                    <p>
                      Lorem ipsum dolor sit ame consectetur adipisicing elit do
                      eiusmod tempor incididunt.
                    </p>
                    <ul className="time-sidual">
                      <li className="day">
                        Monday - Fridayp <span>8.00-20.00</span>
                      </li>
                      <li className="day">
                        Saturday <span>9.00-18.30</span>
                      </li>
                      <li className="day">
                        Monday - Thusday <span>9.00-15.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Newsletter</h2>
                    <p>
                      subscribe to our newsletter to get allour news in your
                      inbox.. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit,
                    </p>
                    <form
                      action="mail/mail.php"
                      method="get"
                      target="_blank"
                      className="newsletter-inner"
                    >
                      <input
                        name="email"
                        placeholder="Email Address"
                        className="common-input"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your email address'"
                        required
                        type="email"
                      />
                      <button className="button">
                        <i className="icofont icofont-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Footer Top */}
          {/* Copyright */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="copyright-content">
                    <p>
                      © Copyright 2018 | All Rights Reserved by{" "}
                      <a href="https://www.wpthemesgrid.com" target="_blank">
                        wpthemesgrid.com
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Copyright */}
        </footer>
        {/*/ End Footer Area */}
      </div>
    </>
  );
}

export default App;
