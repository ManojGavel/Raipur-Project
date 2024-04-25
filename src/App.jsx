import "./App.css";
import Slider from "react-slick";
import portfolioOne from "../src/assets/images/portfolio/1.png";
import portfolioTwo from "../src/assets/images/portfolio/2.png";
import portfolioThree from "../src/assets/images/portfolio/3.png";
import portfolioFour from "../src/assets/images/portfolio/4.png";
import serviceOne from "../src/assets/images/service/1.png";
import serviceTwo from "../src/assets/images/service/2.png";
import serviceThree from "../src/assets/images/service/3.png";
import serviceFour from "../src/assets/images/service/4.png";
import serviceFive from "../src/assets/images/service/5.png";
import processArrow from "../src/assets/images/icons/arrow.png";
import userOne from "../src/assets/images/user/user1.png";
import logo from "../src/assets/images/logo/logo.png";

function App() {
  var portfolioSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var reviewSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <>
      <section className="section heroSection">
        <div className="heroSectionIn">
          <div className="header">
            <div className="headerLeft">
              <div className="headerLogo">
                <img src={logo} />
              </div>
              <div className="headerMenu">
                <ul>
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="headerRight">
              <div className="headerAction">
                <h3>
                  <span>
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                  Book a call with Futurise
                </h3>
              </div>
            </div>
          </div>
          <div className="bannerVideoBox">
            <span>
              <i class="bi bi-play-fill"></i>
            </span>
          </div>
          <div className="bannerText">
            <h2>
              ⚡ Skyrocket Your Startup's Growth with{" "}
              <span>Futurise Solutions</span>
            </h2>
          </div>
          <div className="bannerStats">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="bannerStatsBox">
                  <h1>
                    100 <small>+</small>
                  </h1>
                  <h2>Projects delivered</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="bannerStatsBox">
                  <h1>
                    50 <small>+</small>
                  </h1>
                  <h2>Happy clients</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="bannerStatsBox">
                  <h1>
                    15 <small>+</small>
                  </h1>
                  <h2>Industries served</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bannerStats outside">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
              <div className="bannerStatsBox">
                <h1>
                  100 <small>+</small>
                </h1>
                <h2>Projects delivered</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="bannerStatsBox">
                <h1>
                  50 <small>+</small>
                </h1>
                <h2>Happy clients</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="bannerStatsBox">
                <h1>
                  15 <small>+</small>
                </h1>
                <h2>Industries served</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section introSection">
        <div className="container">
          <p>
            Full-service design & marketing powerhouse to fuel your digital
            success Get a Free Strategy Session
          </p>
        </div>
      </section>

      <section className="section portfolioSection">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="sectionHeading m-0 d-flex align-items-end">
              <h1>Portfolio</h1>
              <h4>Our Greatest Hits</h4>
            </div>
            <button className="btn outlineBtn btn-outline-primary">
              Explore
            </button>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="portfolioSliderArea">
            <Slider {...portfolioSlider}>
              <div className="portfolioSlide">
                <img src={portfolioOne} />
                <h2>Singhal Steel</h2>
              </div>
              <div className="portfolioSlide">
                <img src={portfolioTwo} />
                <h2>SKA Group</h2>
              </div>
              <div className="portfolioSlide">
                <img src={portfolioThree} />
                <h2>LeFabco</h2>
              </div>
              <div className="portfolioSlide">
                <img src={portfolioFour} />
                <h2>Singhal Steel</h2>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="section aboutSection">
        <div className="container">
          <hr />
          <div className="aboutSectionIn">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="aboutText">
                  <h1>About Us</h1>
                  <p>
                    Startups, we hear you. Standing out is tough in the digital
                    jungle. But that's where Futurise Solutions comes in - your
                    growth partner dedicated to crafting a powerful brand
                    presence and driving results through smart design and
                    data-backed marketing tactics.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-end">
                <button className="btn cmnbtn btn-primary ml-auto">
                  See our work
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section className="section serviceSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sectionHeading text-center">
                <h1 className="colorSecondary">Services Overview</h1>
                <p>Turbocharge Your Business with Our Full-Stack Offerings:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="serviceBox">
                <img src={serviceOne} />
                <h4>Web Design & Development:</h4>
                <p>Conversion-crushing websites</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="serviceBox">
                <img src={serviceTwo} />
                <h4>Brand Identity & Corporate ID:</h4>
                <p>A brand that commands attention</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="serviceBox">
                <img src={serviceThree} />
                <h4>Packaging & Editorials:</h4>
                <p>Designs that spark irresistible desire</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="serviceBox">
                <img src={serviceFour} />
                <h4>Social Media Marketing:</h4>
                <p>Connecting with your audience 24/7</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="serviceBox">
                <img src={serviceFive} />
                <h4>Motion Graphics & Videos:</h4>
                <p>Bringing your story to life Explore Our Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      <section className="section processSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sectionHeading text-center">
                <h1>Our Process</h1>
                <p>
                  The Futurise Accelerator: A 3-Step System for Explosive Growth
                </p>
              </div>
            </div>
          </div>
          <div className="row processRow">
            <div className="col processCol">
              <div className="processBox">
                <div className="processBoxIn">
                  <h1>1</h1>
                  <h4>Social Media Marketing: </h4>
                </div>
              </div>
              <div className="processArrow">
                <img src={processArrow} />
              </div>
            </div>
            <div className="col processCol">
              <div className="processBox">
                <div className="processBoxIn">
                  <h1>2</h1>
                  <h4>
                    We <br /> Strategize
                  </h4>
                </div>
              </div>
              <div className="processArrow">
                <img src={processArrow} />
              </div>
            </div>
            <div className="col processCol">
              <div className="processBox">
                <div className="processBoxIn">
                  <h1>3</h1>
                  <h4>
                    We <br /> Execute
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reviewSection">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="sectionHeading mb-0">
              <h1 className="colorWhite">
                Why Choose Us? <br /> Simple Solutions, Big Results.
              </h1>
              <p className="colorWhite">
                We cut through the digital noise to bring you clear, effective
                strategies. No jargon, just results.
              </p>
              <p className="colorWhite">
                Check out how we've helped others and imagine what we can do for
                you.
              </p>
            </div>
            <button className="btn outlineBtn btn-outline-white">
              Explore
            </button>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="reviewSliderArea">
            <Slider {...reviewSlider}>
              <div className="reviewSlide">
                <div className="reviewCard">
                  <div className="reviewCardHeader">
                    <img src={userOne} className="userImg" />
                    <div className="reviewCardTitle">
                      <h2>Rajat Vashisth </h2>
                      <h3>Investment Banker</h3>
                      <div className="rating">
                        <ul>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                        </ul>
                        <p>2 day ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="reviewCardText">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and
                    </p>
                    <p>
                      A scrambled it to make a type specimen book. It has
                      survived not only five centuries,
                    </p>
                    <h3>
                      <a href="#">
                        Read More
                        <span>
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="reviewSlide">
                <div className="reviewCard">
                  <div className="reviewCardHeader">
                    <img src={userOne} className="userImg" />
                    <div className="reviewCardTitle">
                      <h2>Rajat Vashisth </h2>
                      <h3>Investment Banker</h3>
                      <div className="rating">
                        <ul>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                        </ul>
                        <p>2 day ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="reviewCardText">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and
                    </p>
                    <p>
                      A scrambled it to make a type specimen book. It has
                      survived not only five centuries,
                    </p>
                    <h3>
                      <a href="#">
                        Read More
                        <span>
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="reviewSlide">
                <div className="reviewCard">
                  <div className="reviewCardHeader">
                    <img src={userOne} className="userImg" />
                    <div className="reviewCardTitle">
                      <h2>Rajat Vashisth </h2>
                      <h3>Investment Banker</h3>
                      <div className="rating">
                        <ul>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                        </ul>
                        <p>2 day ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="reviewCardText">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and
                    </p>
                    <p>
                      A scrambled it to make a type specimen book. It has
                      survived not only five centuries,
                    </p>
                    <h3>
                      <a href="#">
                        Read More
                        <span>
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="section bookingSection">
        <div className="container">
          <div className="bookingTextBox">
            <div className="d-flex align-items-center justify-content-between">
              <h1>
                Book a <span>FREE Strategy Consultation</span> Call for Your
                Brand Today!
              </h1>
              <button className="btn cmnbtn btn-primary">Book now</button>
            </div>
          </div>
          <hr />
          <div className="bookingTextBox">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Stay tuned for our latest blog</h2>
              <button className="btn outlineBtn btn-outline-primary">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footerIn">
            <div className="footerText">
              <p>
                Click here and let’s start plotting your brand’s world
                domination. Because why aim for the sky when there are
                footprints on the moon? 🌝🚀
              </p>
            </div>
            <div className="footerAction">
              <button className="btn cmnbtn cmnbtnshadow2 btn-primary">
                Let’s get started
              </button>
              <div className="footerSocial">
                <ul>
                  <li>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  Join our community on social media for updates, tips, and a
                  bit of fun.
                </p>
              </div>
            </div>
            <div className="footerBottom">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-5">
                  <div className="footerLink">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-7">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="footerContact">
                        <h3>Enquire</h3>
                        <h4>
                          <a href="mailto:info@futurise.co.in">
                            info@futurise.co.in
                          </a>
                        </h4>
                      </div>
                      <div className="footerContact">
                        <h3>Join the force</h3>
                        <h4>
                          <a href="mailto:careers@futurise.co.in">
                            careers@futurise.co.in
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="footerInfo">
                        <h3>Headquarters</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
