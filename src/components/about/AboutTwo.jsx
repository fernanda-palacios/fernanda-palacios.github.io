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
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/about/photo_color.jpg  "
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
                    I’m a Computer Science graduate from the University of Toronto. 
                    I am passionate about problem-solving and harnessing technology for positive global impact. I have gained vast experience in software development
                     through the several software engineering internships I’ve done and the
                      many coding projects I’ve worked on. I have also worked in areas such 
                      as artificial intelligence, data science and human-computer interaction. My fascination for
                       the fields of computing, logic and mathematics fuels my enthusiasm for building large 
                       systems to transform our lives. Other things I 
                       love include working out, listening to music and spending time with friends and family!
                    </p>
                  </div>
                  <div className="shane_tm_button" >                    
                    <a href="img/resume/Fernanda_Palacios_Resume.pdf" download>
                      Resume                      
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
