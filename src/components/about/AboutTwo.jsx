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
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/about/photo.jpg  "
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
                    {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                  </div>
                  <div className="text">
                    <p>
                    I’m a Computer Science student at the University of Toronto. I am passionate about problem-solving and building technology to help people. I have gained vast experience in software development through the several software engineering internships I’ve done and the many coding projects I’ve worked on. I have also worked in areas such as data science and human-computer interaction. I am incredibly interested in the fields of computation, math and logic and I love building large systems to leverage their power and transform our lives. Other things I love include adventures in nature, listening to music and all kinds of social/cultural activities!
                    </p>
                  </div>
                  {/* <div className="shane_tm_button">
                    <a href="img/resume/resume.pdf" download>
                      Download CV
                    </a>
                  </div> */}
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
