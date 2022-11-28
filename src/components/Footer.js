import React from 'react';

// Images
import Twitter_Icon from '../images/twitter-icon.png';
import Facebook_Icon from '../images/facebook-icon.png';
import Instagram_Icon from '../images/instagram-icon.png';
import Linkedin_Icon from '../images/linkedin-icon.png';
import Github_Icon from '../images/github-icon.png';

const Footer = () => {
  return (
    <footer>
      <img src={Twitter_Icon} alt="Twitter Icon" className="footer--twitter" />
      <img src={Facebook_Icon} alt="Facebook Icon" className="footer--facebook" />
      <img src={Instagram_Icon} alt="Instagram Icon" className="footer--instagram" />
      <img src={Linkedin_Icon} alt="Linkedin Icon" className="footer--linkedin" />
      <img src={Github_Icon} alt="Github Icon" className="footer--github" />
    </footer>
  );
};

export default Footer;