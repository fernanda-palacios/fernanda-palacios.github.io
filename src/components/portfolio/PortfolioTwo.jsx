import React, { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import Modal from "react-modal";
import { projects } from './projectsData';

const PortfolioTwo = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currProject, setCurrProject] = useState(undefined);

  function openProjectViewModal(projectIndex) {
    setCurrProject(projectIndex)
    setIsOpenModal(true)
  }

  function closeProjectViewModal() {
    setIsOpenModal(false)
    setCurrProject(undefined)
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
              <div className="portfolio_filter">
                <Tabs>
                  <div className="portfolio_list">
                    <TabPanel>
                      <ul className="gallery_zoom">
                        {projects.map((project, index) => {
                          return (<li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a> {/* project image popup */}
                                  
                                  {/* project image homepage */}
                                  <img
                                    src="/img/portfolio/13.jpg"
                                    alt={project.category}
                                    onClick={() => openProjectViewModal(index)}
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                              </div>
                            </div>
                          </li>)
                        })}
                      </ul>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeProjectViewModal}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        {currProject !== undefined &&
        (<div className="shane_tm_mobalbox_contact">
          <button className="close-modal" onClick={closeProjectViewModal}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="title">
                <h3>{projects[currProject].title}</h3>
              </div>
              <div className="text">
                <p>
                  {projects[currProject].description}
                </p>
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <p>
                        <a href={projects[currProject].link}>link</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>)}
      </Modal>)
    </div>
  );
};

export default PortfolioTwo;
