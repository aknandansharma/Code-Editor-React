import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";




export default function Header() {

   const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="logodiv">
      <img
        src="https://png.pngitem.com/pimgs/s/520-5208614_curso-programacin-front-end-completo-transparent-html-css.png"
        alt="logo"
      />
      <h2 className="logo-text">Code Editor</h2>
      <p className="logo-text-name">By aknandan kumar sharma</p>

      <div class="social-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aknandan-kumar-b36778258/"
          className="linkdin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/aknandansharma"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/AknandanKumar"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/aknandansharma/"
          className="insta social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}
