// import { useState } from 'react'
import Contact1 from '../assets/images/contact_i1.svg';
import Contact2 from '../assets/images/contact_i2.svg';
import Contact3 from '../assets/images/contact_i3.svg';
import { Link } from 'react-router-dom';

function Contactus() {

  return (
      <>
      <div className="contact_section_1 text-start">
        <div className="container">
          <h2>Send your Inquiry to HavenRx</h2>
          <p>No more insurance means no more pre-authorizations, coverage changes, quantity limits, manufacturer restrictions, rising co-pays, or formularies. The first pharmacy built for physicians.</p>
        </div>
      </div>

      <div className="contact_section_2">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="contact_social_card text-start">
                <div className="contact_social_card_top contact_social_card_1 d-flex justify-content-center align-items-center gap-2">
                  <img src={Contact1} alt="" />
                  <h5>Electronically</h5>
                </div>
                <h6>Electronically</h6>
                <p>"HavenRx Health" in Culver City, CA</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="contact_social_card text-start">
                <div className="contact_social_card_top contact_social_card_2 d-flex justify-content-center align-items-center gap-2">
                  <img src={Contact2} alt="" />
                  <h5>Fax</h5>
                </div>
                <h6>Fax</h6>
                <p>310 588 1236</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="contact_social_card text-start">
                <div className="contact_social_card_top contact_social_card_3 d-flex justify-content-center align-items-center gap-2">
                  <img src={Contact3} alt="" />
                  <h5>Phone</h5>
                </div>
                <h6>Phone</h6>
                <p>123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form_parent text-start">
        <div className="container">
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
                Make An Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contactus
