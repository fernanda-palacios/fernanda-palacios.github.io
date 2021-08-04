import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import Modal from "react-modal";
import {projects} from './projectsData';

// import Contact from "../Contact";
// import Social from "../Social";
// import Map from "../Map";


const PortfolioTwo = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }


  return (
    <div className="shane_tm_section" id="projects">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Projects</span>
                    <h3>Projects</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  {/* <TabList>
                    <Tab>All</Tab>
                    <Tab>Design</Tab>
                    <Tab>Branding</Tab>
                    <Tab>Photography</Tab>
                  </TabList> */}
                  {/* End tablist */}
                  <div className="portfolio_list">
                    {/* <SRLWrapper> */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            {/* <Reveal effect="fadeIn"> */}
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  {/* project image popup */}
                                  <a>
                                    {/* project image homepage */}
                                    <img
                                      src="/img/portfolio/13.jpg"
                                      alt="Category 1"
                                      onClick={toggleModalOne}
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 1</h3>
                                  <span>Category 1</span>
                                </div>
                              </div>
                            {/* </Reveal> */}
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/14.jpg">
                                    <img
                                      src="/img/portfolio/14.jpg"
                                      alt="Category 2"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 2</h3>
                                  <span>Category 2</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/15.jpg">
                                    <img
                                      src="/img/portfolio/15.jpg"
                                      alt="Category 3"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 3</h3>
                                  <span>Category 3</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/24.jpg">
                                    <img
                                      src="/img/portfolio/24.jpg"
                                      alt="Category 4"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 4</h3>
                                  <span>Category 4</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/11.jpg">
                                    <img
                                      src="/img/portfolio/11.jpg"
                                      alt="Category 5"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 5</h3>
                                  <span>Category 5</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/16.jpg">
                                    <img
                                      src="/img/portfolio/16.jpg"
                                      alt="Category 6"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 6</h3>
                                  <span>Category 6</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/16.jpg">
                                    <img
                                      src="/img/portfolio/16.jpg"
                                      alt="Category 7"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 7</h3>
                                  <span>Category 7</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}
                    {/* </SRLWrapper> */}
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="shane_tm_mobalbox_contact">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
                <h3>{projects[0].title}</h3>
              </div>
              {/* End title */}

              <div className="text">
                {/* <p>{projectsData.firstName}</p> */}
                    <p>
                      {projects[0].description}
                    </p>
                  </div>
              {/* End description */}


              <div className="wrapper">
                <div className="left">
                  <div className="fields">
                    {/* <Contact /> */}
                  </div>
                </div>
                {/* End left */}
                <div className="right">
                  <div className="map_wrap">
                    {/* <Map /> */}
                  </div>
                </div>
                {/* End right */}
              </div>
              {/* End wrapper */}

              <div className="short_info">
                <ul>                
                  <li>
                    <div className="list_inner">
                      <p>
                        <a href={projects[0].link}>link</a>
                      </p>
                    </div>
                  </li>
                  
                  
                </ul>
              </div>
              {/* End modal conetent */}
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </div>
  );
};

export default PortfolioTwo;
