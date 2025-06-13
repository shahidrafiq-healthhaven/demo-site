import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from '../../assets/images/logo.svg';
import User from '../../assets/images/profile.png';
import Cart from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark px-3">
        <div className="container">
          <div className="mobile_cart_icon">
            <a href="">
              <img src={Cart} alt="cart"  className="cart_icon"/>
            </a>
          </div>

          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={Logo}
              alt="Health Haven RX"
              className="me-2"
            />
            
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/aboutus`} className="nav-link" >About Us</Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link" >For Providers</Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link" >For Partners</Link>
                {/* <Link to={`/partners`} className="nav-link" >For Partners</Link> */}
              </li>
              <li className="nav-item">
                <Link to={`/contactus`} className="nav-link" >Contact Us</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center justify-content-center gap-4 desktop_cart_icon">
                <img src={User} alt="user"  className="user_icon"/>
                <img src={Cart} alt="cart"  className="cart_icon"/>
              {/* <FaUser className="text-white me-3" style={{ cursor: "pointer" }} />
              <FaShoppingCart className="text-white" style={{ cursor: "pointer" }} /> */}
            </div>
          </div>

        </div>
      </nav>
      <div className="header_bottom">
        <p>Save over 80% on your prescriptions</p>
      </div>
    </>
    
  );
};

export default Header;
