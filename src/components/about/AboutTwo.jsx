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
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/about/photo_about.jpg"
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
                    I’m a problem-solver by heart and passionate about harnessing technology for
                     positive global impact. I studied Computer Science at the University of Toronto,
                      which provided me with a solid foundation of the theoretical basis and practical
                       applications of computation and software. I have extensive experience in software
                        engineering and have also worked in 
                        areas such as artificial intelligence and human-computer interaction. 
                        My fascination for logical reasoning, mathematics and creative thinking fuels
                         my enthusiasm for building software to transform our lives. Other things I 
                         love include working out, listening to music and spending time with friends
                          and family! 
                    </p>
                  </div>
                  {/* <div className="shane_tm_button" >                    
                    <a href="img/resume/Fernanda_Palacios_Resume.pdf" download>
                      Resume                      
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
