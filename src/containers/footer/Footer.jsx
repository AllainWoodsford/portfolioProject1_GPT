import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
const Footer = () => {

  const currentYear = new Date().getFullYear();
  
  

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-content">
      <h1 className="gradient__text">Do you want to be the at the cutting edge of AI technology?</h1>
      <button type="button">Get Started!</button>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container-company">
          <img src={logo} alt="GPT-3 logo"/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-container-links">
        <div className="gpt3__footer-container-links_content">
    <h4>Links</h4>
    <p>Overons</p>
    <p>Social Media</p>
    <p>Counters</p>
    <p>Contact</p>
</div>
<div className="gpt3__footer-container-links_content">
  <h4>Company</h4>
  <p>Terms & Conditions</p>
  <p>Privacy Policy</p>
  <p>User Policy</p>
  </div>
<div className="gpt3__footer-container-links_content">
  <h4>Get in touch</h4>
  <p>123 fake st, fakeville 2910</p>
  <p>(02) 555 5555</p>
  <p>info@payme.net</p>
  </div>
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>© {currentYear} GPT-3. All rights reserved.</p>
      </div>
    </div>
   
  );
}

export default Footer;