import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/AboutTwo";
import PortfolioSWE from "../../components/portfolio/PortfolioTwoSWE";
import PortfolioAI from "../../components/portfolio/PortfolioTwoAI";
import PortfolioOther from "../../components/portfolio/PortfolioTwoOther";
import Skills from "../../components/skills/SkillsTwo";
import Video from "../../components/video/VideoTwo";
import Brand from "../../components/Brand";
import Testimonial from "../../components/testimonial/TestimonialTwo";
import News from "../../components/news/NewsTwo";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";
import Reveal from "react-reveal/Reveal";

const HomeTwo = () => {
  return (
    <div className="home-two">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <PortfolioSWE />
      {/* End PortfolioSWE Section */}

      <PortfolioAI />
      {/* End PortfolioAI Section */}
      
      <PortfolioOther/>
      {/* End PortfolioAI Section */}

      {/* <Skills /> */}
      {/* End Skills Section */}

      {/* <Video /> */}
      {/* End Video Section */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div> */}
      {/* End shane_tm_partners */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <Reveal effect="fadeInRight">
                <div className="left">
                  <div className="shane_tm_title">
                    <span>Testimonials</span>
                    <h3>What clients say about my portfolio template</h3>
                  </div>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className="right">
                  <Testimonial />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div> */}
      {/* End  shane_tm_testimonials*/}

      {/* <News /> */}
      {/* End Blog Section */}

      {/* <CallToAction /> */}
      {/* End CallToAction */}

      {/* <Footer /> */}
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;
