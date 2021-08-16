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
                            <div className="inner project_hover">
                              <div className="entry shane_tm_portfolio_animation_wrap">

                                <a> {/* project image popup */}

                                  {/* project image homepage */}
                                  {index == 1 ?
                                    <img
                                      src={`/img/portfolio/${index}.svg`}
                                      width="900"
                                      height="900"
                                      style={{ marginBottom: "40px" }}
                                      alt={project.category}
                                      onClick={() => openProjectViewModal(index)}
                                    />
                                    :
                                    <img
                                      src={`/img/portfolio/${index}.png`}
                                      width="900"
                                      height="900"
                                      style={{ marginBottom: "40px" }}
                                      alt={project.category}
                                      onClick={() => openProjectViewModal(index)}
                                    />}
                                </a>
                              </div>
                              <div className="mobile_title" style={{ backgroundColor: '#E8E8E8' }}>
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
                <p style={{ marginTop: '20px' }}>
                  {projects[currProject].description}
                </p>
                <div style={{ marginTop: '20px' }}>
                  {projects[currProject].prog_lang && (
                    <p>
                      <b>Programming Languages: </b>{projects[currProject].prog_lang}
                    </p>
                  )}
                  {projects[currProject].technologies && (
                    <p>
                      <b>Technologies: </b>{projects[currProject].technologies}
                    </p>
                  )}
                  <div>
                    <p><b>Links:</b></p>
                    {projects[currProject].links.map((link) =>
                    (
                      <p><a href={link}>{link}</a></p>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </Modal>
    </div>
  );
};

export default PortfolioTwo;
