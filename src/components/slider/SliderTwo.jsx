import React from "react";
import Social from "../SocialTwo";

const Slider = () => {
  return (
    <div className="slider-two">
      <div className="shane_tm_hero" id="home" data-style="three">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/photo.png"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>Fernanda</span> 
                <div>Palacios</div><span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                {/* Ui & Ux Designer */}
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <Social />
            {/* updates coming soon bannner */}
            {/* <div style={{background: 'black', textAlign: 'center',  borderRadius: '5px'}}>
            <h4 style={{marginTop: '50px', color: 'white'}}>Updates coming soon!</h4>
            </div> */}
          </div>
          {/* End content */}

          {/* <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div> */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
