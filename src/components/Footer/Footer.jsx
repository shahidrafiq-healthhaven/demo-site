import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import Logo from '../../assets/images/footer_logo.svg';
import Facebook from '../../assets/images/facebook_icon.png';
import Instagram from '../../assets/images/insta_icon.png';
import Linkedin from '../../assets/images/linkedin_icon.png';
import Tiktok from '../../assets/images/tiktok_icon.png';
import Location from '../../assets/images/location_icon.png';
import Email from '../../assets/images/email_icon.png';
import Phone from '../../assets/images/phone_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="text-white pt-5" style={{  background: "linear-gradient(to right, #001F4D, #4B00C1)", }}
    >
      <div className="container text-center text-md-start">
        <div className="row footer_top">
            <div className="col-md-6">
                <img src={Logo} alt="Health Haven RX" className="footer_logo"/>
            </div>
            <div className="col-md-6 text-end">
                <div className="d-flex justify-content-md-end justify-content-start gap-3 social_main">
                    <a href="#" className="social_icon">
                        <img src={Facebook} alt="Facebook"/>
                    </a>
                    <a href="#" className="social_icon">
                        <img src={Instagram} alt="Instagram"/>
                    </a>
                    <a href="#" className="social_icon">
                        <img src={Linkedin} alt="Linkedin"/>
                    </a>
                    <a href="#" className="social_icon">
                        <img src={Tiktok} alt="Tiktok"/>
                    </a>
                    
                </div>
            </div>

        </div>
        <div className="row footer_main">
          <div className="footer_gradient_div footer_gradient_div_top"></div>
          {/* Logo and Contact Info */}
          <div className="col-md-5 mb-3">
            <h6 className="footer_heading">Contact Us</h6>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center gap-4 contact_detail">
                 <img src={Location} alt="Location"/>
                <span className="footer_text ms-2">5th Street, New York, USA</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-4 contact_detail">
                <img src={Email} alt="Email"/>
                <a href="mailto:example@gmail.com" className="footer_text">example@gmail.com</a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-4 contact_detail">
                <img src={Phone} alt="Phone"/>
                <a href="tel:+1 123 456 789" className="footer_text">+1 123 456 789</a>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-1"></div> */}

          {/* Quick Links */}
          <div className="col-md-2 mb-3">
            <h6 className="footer_heading">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >About Us</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >Our History</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >FAQ</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >Contact Us</Link></li>
              {/* <li><a href="#" className="text-white text-decoration-none footer_text">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none footer_text">Our History</a></li>
              <li><a href="#" className="text-white text-decoration-none footer_text">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none footer_text">Contact Us</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 mb-3">
            <h6 className="footer_heading">Services</h6>
            <ul className="list-unstyled">
                <li><Link to={`/`} className="text-white text-decoration-none footer_text" >About Us</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >Our History</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >FAQ</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >Contact Us</Link></li>
            </ul>
          </div>

          {/* Resource */}
          <div className="col-md-2 mb-3">
            <h6 className="footer_heading">Resource</h6>
            <ul className="list-unstyled">
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >About Us</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >Our History</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >FAQ</Link></li>
              <li><Link to={`/`} className="text-white text-decoration-none footer_text" >Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer_gradient_div footer_gradient_div_bottom"></div>
        </div>

        {/* Bottom Text */}
        <div className="text-center footer_bottom">
          <small>HAVENRX © All rights reserved. 2025</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
