// import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import A1 from '../assets/images/about_img1.svg';
import A2 from '../assets/images/about_img2.svg';
import A3 from '../assets/images/about_img3.svg';
import A4 from '../assets/images/about_img4.svg';
import A5 from '../assets/images/about_img5.svg';
import A6 from '../assets/images/about_img6.svg';
import S4Img from '../assets/images/about_s4_img.svg';
import S5Img from '../assets/images/about_s5_img.svg';
import { Link } from 'react-router-dom';

const faqData = [
  { question: "How do I place an order for my medication?", answer: "You can place an order through our online portal after logging in." },
  { question: "Do I need a prescription to buy medication?", answer: "Yes, a valid prescription is required for most medications." },
  { question: "How much do medications cost?", answer: "Prices vary based on medication and quantity. Check our catalog for exact pricing." },
  { question: "Can you ship medications to my state?", answer: "Yes, we ship to all U.S. states except where restricted by law." },
  { question: "How long does it take to receive my medication?", answer: "Typically 3–5 business days, depending on your location." },
  { question: "Are your medications the same as those from my local pharmacy?", answer: "Yes, we provide FDA-approved medications from certified suppliers." },
  { question: "Can I transfer my existing prescription from another pharmacy?", answer: "Absolutely, we can handle the transfer process for you." }
];

 
const Aboutus = () => {
  return (
   <>
    <div className="about_section_1">
        <div className="container text-center">
            <div className="about_section_1_text">
                <h2>Hi, we're HavenRx</h2>
                <p>At Health Haven, we proudly partner with patients, independent pharmacies, digital therapeutics companies, and telehealth providers—whether you're an established platform or just starting out. Our experienced team is here to support you at every stage, offering personalized guidance and seamless service. Once we receive your patient’s prescription, we take care of the rest—from medication fulfillment to ongoing patient support—ensuring a smooth, reliable, and compassionate pharmacy experience.”</p>
            </div>
            <div className="row about_images_parent">
                <div className="col-md-4 d-flex flex-column gap-3">
                    <img src={A1} className="photo" alt="Photo 1" />
                    <img src={A4} className="photo" alt="Photo 4" />
                </div>

                <div className="col-md-4 d-flex flex-column gap-3 photo_grid_column_2">        
                    <img src={A2} className="photo" alt="Photo 2" />
                    <img src={A5} className="photo" alt="Photo 5" />
                </div>

                <div className="col-md-4 d-flex flex-column gap-3">
                    <img src={A3} className="photo" alt="Photo 3" />
                    <img src={A6} className="photo" alt="Photo 6" />
                </div>
            </div>
            <Link to={`/aboutus`} className="btn_primary" >Load More</Link>
        </div>
    </div>

    <div className="about_counter_section">
        <div className="container">
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

    <div className="about_section_3">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about_s3_left">
                    <h2>Excellence in Pharmacy and Medical Care</h2>
                    </div>
                </div>
                <div className="col-md-6 about_s3_right">
                    <p>At Health Haven, we proudly partner with patients, independent pharmacies, digital therapeutics companies, and telehealth providers—whether.</p>
                    <Link to="/aboutus" className="btn_primary">Learn More</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="about_section_4">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about_s4_left">
                    <img src={S4Img} alt="" />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="partner_s4_right d-flex justify-content-center">
                    <div className="about_s4_right_inner">
                        <h4>Priority Customer Support</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="about_s4_right_inner">
                        <h4>Innovation and Growth</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="about_s4_right_inner">
                        <h4>Global Community of Wellness</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div className="about_section_5">
        <div className="container">
            <h2>A letter from our founders</h2>
            <div className="about_s5_inner text-start">
            <p>“At Health Haven, we proudly partner with patients,independent pharmacies, digital therapeutics companies, and telehealth providers—whether you're an established platform or just starting out. Our experienced team is here to support you at every stage, offering personalized guidance and seamless service. Once we receive your patient’s prescription, we take care of the rest—from medication fulfillment to ongoing patient support—ensuring a smooth, reliable, and compassionate pharmacy experience.”</p>

            <p><span>Dr. Vijay Sharma</span></p>

            <div className="about_s5_image">
                <img src={S5Img} alt="" />
            </div>
            </div>
        </div>
    </div>

    {/* FAQ Section */}
    <div className="faq_main">
        <div className="container">
            <h2 className="heading_primary">Frequently Asked Question</h2>
            <p>Our experts team works 24/7 to keep you happy.</p>
            
            <div className="container my-5">
                <Accordion defaultActiveKey="0" flush>
                {faqData.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{index + 1}. {item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
            </div>
        </div>
    </div>
  
   </>
  );
};

export default Aboutus;