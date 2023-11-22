import React, { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import Modal from "react-modal";
import { projects } from './ProjectsDataSWE';

const PortfolioTwoSWE = () => {
  const projectsCompressedStyling = {1: true, 2: true} //city of toronto, iotpm

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
    <div className="shane_tm_section" id="SWEprojects">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    {/* <span>Software Engineering Projects</span> */}
                    <h3>Software Engineering Projects</h3>
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
                                  {
                                    <img
                                      src={`/img/portfolioSWE/${index}.png`}
                                      width="900"
                                      height="900"
                                      style={{ marginBottom: "40px" }}
                                      onClick={() => openProjectViewModal(index)}
                                    />}
                                </a>
                              </div>
                              <div className="mobile_title" style={{ backgroundColor: '#E8E8E8' }}>
                                <h3 style={{ marginRight: '5px' }}>{project.title}</h3>
                                <span style={{ color: "#71797E" }}>{project.category}</span>
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
      {/* individual project page */}
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

                {/* normal version bullet points */}
                {!(currProject in projectsCompressedStyling) &&
                  (<div>
                    {projects[currProject].prog_lang && (
                      <p style={{ marginTop: '20px' }}>
                        <b style={{ color: 'black' }}>Programming Languages: </b>{projects[currProject].prog_lang}
                      </p>
                    )}
                    {projects[currProject].technologies && (
                      <p style={{ marginTop: '20px' }}>
                        <b style={{ color: 'black' }}>Technologies: </b>{projects[currProject].technologies}
                      </p>
                    )}
                    {projects[currProject].links && (
                    <div style={{ display: "flex", marginTop: '20px' }}>
                      <p style={{ paddingRight: "8px" }}>
                        <b style={{ color: 'black' }}>Link(s):</b></p>
                      <ul style={{ display: "flex" }}>
                        {projects[currProject].links.map((link, index) =>

                        (
                          <li style={{ listStyle: "none", paddingRight: '8px' }}>
                            <a
                              target="_blank" rel="noopener noreferrer"
                              style={{ color: "#6A8FD0",  whiteSpace: "nowrap" }} href={link.href}>{`${link.name}${index == projects[currProject].links.length - 1 ? "" : ","}`}</a>
                          </li>
                        ))}
                      </ul>

                    </div>)}
                    {projects[currProject].onRequest && (
                      <p style={{ marginTop: '20px' }}>
                        <b style={{ color: 'black' }}>Source Code: </b>available on request
                      </p>
                    )}
                    
                  </div>)}


                {/* compressed version, different margins bullet points */}
                {(currProject in projectsCompressedStyling) &&
                  (
                    <div style={{ marginTop: "10px" }}>
                      {projects[currProject].prog_lang && (
                        <p style={{ marginTop: '1px' }}>
                          <b style={{ color: 'black' }}>Programming Languages: </b>{projects[currProject].prog_lang}
                        </p>
                      )}
                      {projects[currProject].technologies && (
                        <p style={{ marginTop: '1px' }}>
                          <b style={{ color: 'black' }}>Technologies: </b>{projects[currProject].technologies}
                        </p>
                      )}

                      {projects[currProject].links && (                      
                      <div style={{ display: "flex", marginTop: '1px', paddingBottom:'20px'}}>
                        <p style={{ paddingRight: "8px" }}>
                          <b style={{ color: 'black' }}>Link(s):</b></p>
                        <ul style={{ display: "flex" }}>
                          {projects[currProject].links.map((link, index) =>

                          (
                            <li style={{ listStyle: "none", marginTop: '0px', paddingRight: '8px' }}>
                              <a
                                target="_blank" rel="noopener noreferrer"
                                style={{ color: "#6A8FD0", whiteSpace: "nowrap"}} href={link.href}>{`${link.name}${index == projects[currProject].links.length - 1 ? "" : ","}`}</a>
                            </li>
                          ))}
                        </ul>
                      </div>)}
                    </div>)}
              </div>
            </div>
          </div>)}
      </Modal>
    </div>
  );
};

export default PortfolioTwoSWE;
