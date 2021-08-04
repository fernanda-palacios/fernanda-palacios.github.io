import React from "react";
import Reveal from "react-reveal/Reveal";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div className="image">
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <Reveal effect="fadeInLeft">
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/about/2.jpg"
                          })`,
                      }}
                    ></div>
                  </Reveal>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <Reveal effect="fadeInLeft">
                  <div className="shane_tm_title">
                    <span>About Me</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                  </div>
                  <div className="text">
                    <p>
                      It is a long established fact that a reader will be distracted by the 
                      readable content of a page when looking at its layout. The point of 
                      using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                       as opposed to using 'Content here, content here', making it look like readable English.
                       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
                    </p>
                  </div>
                  <div className="shane_tm_button">
                    <a href="img/resume/resume.pdf" download>
                      Download CV
                    </a>
                  </div>
                </Reveal>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
