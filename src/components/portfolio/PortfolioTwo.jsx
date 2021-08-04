import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";

const PortfolioTwo = () => {
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
                    <SRLWrapper>
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  {/* project image popup */}
                                  <a href="/img/news/1.jpg">
                                    {/* project image homepage */}
                                    <img
                                      src="/img/portfolio/13.jpg"
                                      alt="Category 1"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>Project Name 1</h3>
                                  <span>Category 1</span>
                                </div>
                              </div>
                            </Reveal>
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


                  {/* Begin other tabs  */}
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/logo/dark.jpg">
                                  <img
                                    src="/img/logo/dark.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/14.jpg">
                                  <img
                                    src="/img/portfolio/14.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>
                    
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/24.jpg">
                                  <img
                                    src="/img/portfolio/24.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Fruit</h3>
                                <span>Design</span>
                              </div> 
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/15.jpg">
                                  <img
                                    src="/img/portfolio/15.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Good Present</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/11.jpg">
                                  <img
                                    src="/img/portfolio/11.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/16.jpg">
                                  <img
                                    src="/img/portfolio/16.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>somehting</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>
                    {/* End other tabs  */}
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
