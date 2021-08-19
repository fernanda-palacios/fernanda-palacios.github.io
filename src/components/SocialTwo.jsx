import React from "react";

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
    link: "mailto:fernanda.palaciosaltamirano@mail.utoronto.ca"
  }
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
