// import { useState } from 'react'
import P1Img from '../assets/images/p1_img.png';
import P2Img from '../assets/images/p2_img.png';
import P3Img from '../assets/images/p3_img.png';
import { Link } from 'react-router-dom';

function Partners() {

  return (
      <>
        <div className="partner_section_1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="partner_s1_left text-start">
                            <small>We take care of the pharmacy</small>
                            <h2>Haven-siness</h2>
                            <p>Improve your patient experience and bottom line with an innovative tech-driven pharmacy partner built on the foundations of reliable fulfillment, fair pricing, and terrible bee puns.</p>
                            <Link to="/aboutus" className="btn_primary">Let's Contact Us</Link>
                                {/*Partners Section */}
                            <div className="partners_main">
                                <div className="container">
                                    <div className="row">
                                    <div className="col-sm-4 mb-3">
                                        <div className="partner_card text-start">
                                        <img src={P1Img} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-3 mb-3">
                                        <div className="partner_card text-start">
                                        <img src={P2Img} alt=""  className='partner_imag_2'/>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="partner_card text-start">
                                        <img src={P3Img} alt="" />
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="partner_s1_right">
                            <img src="" alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="partner_section_2">
            <div className="container text-center">
                <h3>Capabilities for your team</h3>
                <div className="d-flex flex-wrap justify-content-center gap-5">
                    <div className="partner_s2_circule">
                        <img src="" alt="" /> 
                        <h4>Comprehensive</h4>
                        <p>No more insurance means no more pre-authorizations, coverage changes, quantity limits</p>
                    </div>
                    <div className="partner_s2_circule">
                        <img src="" alt="" /> 
                        <h4>Technology-driven</h4>
                        <p>No more insurance means no more pre-authorizations, coverage changes, quantity limits</p>
                    </div>
                    <div className="partner_s2_circule">
                        <img src="" alt="" /> 
                        <h4>Transparent</h4>
                        <p>No more insurance means no more pre-authorizations, coverage changes, quantity limits</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="about_counter_section">
            <div className="container">
                <h3>We Serve</h3>
                <div className="row">
                    <div className="col-sm-3 text-center">
                    <h1>127+</h1>
                    <p>Professional Staff</p>
                    </div>
                    <div className="col-sm-3 text-center">
                    <h1>633+</h1>
                    <p>Kind of Medicine</p>
                    </div>
                    <div className="col-sm-3 text-center">
                    <h1>70+</h1>
                    <p>Doctor Specialist</p>
                    </div>
                    <div className="col-sm-3 text-center">
                    <h1>260+</h1>
                    <p>Active Member</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact_form_parent partner_contact_form">
            <div className="container">
                <h3>Contact Team</h3>
                <form>
                    <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Your Name*</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Your Email*</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    </div>

                    <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Your Phone*</label>
                        <input type="text" className="form-control" placeholder="Enter your phone" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Services Type*</label>
                        <select className="form-select">
                        <option>Choose Services</option>
                        {/* More options here */}
                        </select>
                    </div>
                    </div>

                    <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Date*</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Available Time*</label>
                        <select className="form-select">
                        <option>Select Time</option>
                        {/* More options here */}
                        </select>
                    </div>
                    </div>

                    <div className="mb-5">
                    <label className="form-label">Message*</label>
                    <textarea className="form-control" placeholder="Enter message" rows="6"></textarea>
                    </div>

                    <div className="text-center">
                    <button type="submit" className="btn_primary">
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Partners
