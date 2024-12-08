import React, { useState } from "react";

const SocialShare = [ 
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/fernanda-palacios-242578138/"
  },
  {
    iconName: "github",
    link: "https://github.com/fernanda-palacios"
  },
  {
    iconName: "email",
    link: "fernanda.palaciosaltamirano@alumni.utoronto.ca"
  }
];
const Social = () => {

  const [showCopiedMessage, setShowCopiedMessage] = useState(false)
  
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            {val.iconName == "email" ?
            <>
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
                style={{cursor: "pointer"}}
                onClick={()=>{
                  navigator.clipboard.writeText(val.link)
                  setShowCopiedMessage(true)
                  setTimeout(() => setShowCopiedMessage(false) , 2500)
                }}
              ></img>
              {showCopiedMessage && (<span style={{paddingLeft: '10px'}}>Copied!</span>)}
            </>
            :
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>}
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
