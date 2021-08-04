import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import Modal from "react-modal";
import {projects} from './projectsData';

const PortfolioTwo = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currProject, setCurrProject] = useState(undefined);

  function openProjectViewModal(projectIndex){
    setCurrProject(projectIndex)
    setIsOpen(true)
  }

  function closeProjectViewModal(){
    setIsOpen(false)
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

                        {projects.map((project, index)=>{
                           return (<li>
                            {/* <Reveal effect="fadeIn"> */}
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  {/* project image popup */}
                                  <a>
                                    {/* project image homepage */}
                                    <img
                                      src="/img/portfolio/13.jpg"
                                      alt={project.category}
                                      onClick={()=>openProjectViewModal(index)}
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>{project.title}</h3>
                                  <span>{project.category}</span>
                                </div>
                              </div>
                            {/* </Reveal> */}
                            {/* End single image block */}
  
                          </li>)
                        })}
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
        onRequestClose={closeProjectViewModal}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        
        <div className="shane_tm_mobalbox_contact">
          <button className="close-modal" onClick={closeProjectViewModal}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
                <h3>{currProject !== undefined ? projects[currProject].title: undefined}</h3>
              </div>
              {/* End title */}

              <div className="text">
                    <p>
                      {currProject !== undefined ? projects[currProject].description : undefined}
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
                        <a href={currProject !== undefined ? projects[currProject].link: undefined}>link</a>
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
      // {/* End modal */}
      )
    </div>
  );
};

export default PortfolioTwo;
