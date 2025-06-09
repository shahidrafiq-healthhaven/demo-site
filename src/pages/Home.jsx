import React, { useState } from 'react'
import BannerLeftImage from '../assets/images/banner_left_img.png';
import BannerRightImage from '../assets/images/banner_right_img.png';
import SearchIcon from '../assets/images/search_icon.png';
import S1Img1 from '../assets/images/s1_img1.png';
import S1Img2 from '../assets/images/s1_img2.png';
import S1Img3 from '../assets/images/s1_img3.png';
import S2Img from '../assets/images/s2_img.png';
import S3Img1 from '../assets/images/s3_i1.png';
import S3Img2 from '../assets/images/s3_i2.png';
import S3Img3 from '../assets/images/s3_i3.png';
import S3Img4 from '../assets/images/s3_i4.png';
import S4Img from '../assets/images/s4_img.png';
import P1Img from '../assets/images/p1_img.png';
import P2Img from '../assets/images/p2_img.png';
import P3Img from '../assets/images/p3_img.png';
import S6Img from '../assets/images/s6_img.png';
import Profile from '../assets/images/profile.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const popularSearches = ['Cialis', 'Wellbutrin', 'Synthroid', 'Lipitor', 'Viagra', 'Lexapro'];
const allProducts  = [
  { name: 'Pramipexole (Mirapex ER)', price: '$90.00' },
  { name: 'Divalproex Extended Release (Depakote Er)', price: '$10.30', subtext: '3 choices' },
  { name: 'Galantamine Extended-Release (Razadyne Er)', price: '$30.00' },
  { name: 'Trospium Chloride ER', price: '$147.00' },
  { name: 'Fluvoxamine Maleate Er (Luvox Cr)', price: '$190.05' },
  { name: 'Dapagliflozin/Metformin ER (Xigduo XR)', price: '$470.00' },
];
const faqData = [
  { question: "How do I place an order for my medication?", answer: "You can place an order through our online portal after logging in." },
  { question: "Do I need a prescription to buy medication?", answer: "Yes, a valid prescription is required for most medications." },
  { question: "How much do medications cost?", answer: "Prices vary based on medication and quantity. Check our catalog for exact pricing." },
  { question: "Can you ship medications to my state?", answer: "Yes, we ship to all U.S. states except where restricted by law." },
  { question: "How long does it take to receive my medication?", answer: "Typically 3–5 business days, depending on your location." },
  { question: "Are your medications the same as those from my local pharmacy?", answer: "Yes, we provide FDA-approved medications from certified suppliers." },
  { question: "Can I transfer my existing prescription from another pharmacy?", answer: "Absolutely, we can handle the transfer process for you." }
];

function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="main_banner">
        <div className="banner_images">
          <img src={BannerLeftImage} alt="BannerLeftImage"  className='BannerLeftImage'/>
          <img src={BannerRightImage} alt="BannerRightImage" className='BannerRightImage'/>
        </div>
          <h1 className="heading_primary">Affordable Prescriptions, Delivered with Care</h1>
          <a href="/" className="banner_btn btn_primary">Get Started</a>
          <div className="search_main">
            <p className='seacrt_text_top'>Start your search here</p>
            <div className="seacrh_input_main">
              {/*<div className="input-group ">
                <button className="search_bar_button" type="submit"><a href=""> <img src={SearchIcon} alt="SearchIcon" /></a>
                </button>
                 <input type="text" className="form-control" aria-label="Text input with dropdown button"placeholder="Search your medication (like Atorvastatin, Sildenafil, etc.)"   onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}/>
                  {isFocused && (
                    <div className="dropdown-box position-absolute bg-white shadow rounded p-3 w-100" >
                      <p className="text-muted small mb-2">POPULAR SEARCHES</p>
                      <div className="d-flex flex-wrap gap-2">
                        {popularSearches.map((item, index) => (
                          <Link
                            key={index}
                            to={`Cialis`}
                            className="btn btn-link p-0 text-primary text-decoration-none"
                          >
                            {item}
                          </Link>
                        ))}

                      </div>
                    </div>
                  )} */}
                   <div className="position-relative w-100" >
                     <div className="input-group ">
                    <button className="search_bar_button" type="submit"><a href=""> <img src={SearchIcon} alt="SearchIcon" /></a>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search your medication (like Atorvastatin, Sildenafil, etc.)"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </div>

                    {isFocused && (
                      <div className="position-absolute bg-white shadow rounded p-3 w-100" style={{ zIndex: 1000 }}>
                        {searchTerm === '' ? (
                          <>
                            <p className="text-muted small mb-2">POPULAR SEARCHES</p>
                            <div className="d-flex flex-wrap gap-2">
                              {popularSearches.map((item, index) => (
                                <Link
                                  key={index}
                                  to={`/cialis`}
                                  className="btn btn-link p-0 text-primary text-decoration-none"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-muted small mb-2">RESULTS</p>
                            {filteredProducts.length > 0 ? (
                              filteredProducts.map((item, index) => (
                                <Link
                                  key={index}
                                  to={`/cialis`}
                                  className="d-flex justify-content-between text-decoration-none text-dark px-2 py-1 rounded hover-bg-light"
                                >
                                  <span>{item.name}</span>
                                  <span className="text-primary">{item.price}</span>
                                </Link>
                              ))
                            ) : (
                              <p className="text-muted small mb-0">No matches found.</p>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
              {/* </div> */}
              <p className='seacrh_text_bottom'>POPULAR SEARCHES</p>
              <div className="search_bottom_btn_main">
                <a href="/cialis" className='Search_bottom_btn'>Cialis</a>
                <a href="/cialis" className='Search_bottom_btn'>Wellbutrin</a>
                <a href="/cialis" className='Search_bottom_btn'>Synthroid</a>
                <a href="/cialis" className='Search_bottom_btn'>Lipitor</a>
                <a href="/cialis" className='Search_bottom_btn'>Viagra</a>
                <a href="/cialis" className='Search_bottom_btn'>Lexapro</a>
              </div>
            </div>
          </div>
      </div>

      {/* Section 1 */}
      <div className="section_1_main">
        <div className="container">
          <h3 className="section_1_heading">How it Works</h3>
          <div className="row">
            <div className="col-sm-4 text-center section_1_card">
              <img src={S1Img1} alt="S1Img1" />
              <h5 className="section_1_title">Find you medication</h5>
              <p>We carry most FDA approved medications</p>
            </div>
            <div className="col-sm-4 text-center section_1_card">
              <img src={S1Img2} alt="S1Img2" />
              <h5 className="section_1_title">Share your Prescription</h5>
              <p>Transfer from an existing pharmacy or have your provider send your prescription directly to our licensed pharmacy</p>
            </div>
            <div className="col-sm-4 text-center section_1_card">
              <img src={S1Img3} alt="S1Img3" />
              <h5 className="section_1_title">Our team ships your medication directly to you!</h5>
              <p>Free shipping on most medications</p>
            </div>
          </div>
        </div>
      </div>
   
      {/* Section 2 */}
      <div className="section_2_main">
        <div className="container">
          <h3 className="heading_primary">Shop by Medication</h3>
          <div className="row">
            <div className="col-sm-3 text-center section_2_card">
              <div className="section_2_image_main">
                <img src={S2Img} alt="S2Img" />
                <div className="image_pos">
                  <p>Starting at</p>
                  <h6>$3<span>.00*</span></h6>
                </div>
              </div>
              <h5 className="section_2_title">Meformin HCL</h5>
              <p>Generic Glucophage</p>
            </div>
            <div className="col-sm-3 text-center section_2_card">
              <div className="section_2_image_main">
                <img src={S2Img} alt="S2Img" />
                <div className="image_pos">
                  <p>Starting at</p>
                  <h6>$3<span>.00*</span></h6>
                </div>
              </div>
              <h5 className="section_2_title">Atorvastatin</h5>
              <p>Generic Lipitor</p>
            </div>
            <div className="col-sm-3 text-center section_2_card">
              <div className="section_2_image_main">
                <img src={S2Img} alt="S2Img" />
                <div className="image_pos">
                  <p>Starting at</p>
                  <h6>$3<span>.00*</span></h6>
                </div>
              </div>
              <h5 className="section_2_title">Tradalafil</h5>
              <p>Generic Cialis</p>
            </div>
            <div className="col-sm-3 text-center section_2_card">
              <div className="section_2_image_main">
                <img src={S2Img} alt="S2Img" />
                <div className="image_pos">
                  <p>Starting at</p>
                  <h6>$3<span>.00*</span></h6>
                </div>
              </div>
              <h5 className="section_2_title">Atorvastatin</h5>
              <p>Generic Lipitor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section_3_main">
        <div className="container">
          <h3 className="heading_primary">Shop by Conditions</h3>
           <Swiper className="mySwiper inner_swipper_main"  spaceBetween={30}  slidesPerView={4}  
            breakpoints={{
                320: {
                slidesPerView: 1,
                spaceBetween: 10,
                },
                480: {
                slidesPerView: 1.3,
                spaceBetween: 20,
                },
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                1100: {
                slidesPerView: 4,
                spaceBetween: 20,
                }
            }} >

          <SwiperSlide className="inner_swiper">
            <div className="section_3_card text-start">
              <img src={S3Img1} alt="" />
              <h4 className='title'>Anxiety</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="inner_swiper">
            <div className="section_3_card text-start">
              <img src={S3Img2} alt="" />
              <h4 className='title'>Depression</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="inner_swiper">
            <div className="section_3_card text-start">
              <img src={S3Img3} alt="" />
              <h4 className='title'>Medication Abortion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="inner_swiper">
            <div className="section_3_card text-start">
              <img src={S3Img4} alt="" />
              <h4 className='title'>Hypothyroidism</h4>
            </div>
          </SwiperSlide>
       
        </Swiper>
        </div>
      </div>
      
      {/* Section 4 */}
      <div className="section_4_main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 section_4_left">
              <img src={S4Img} alt="" />
            </div>
            <div className="col-md-6 section_4_right text-start">
              <h4>PARTNERS </h4>
              <h3>Your trusted partner in pharmacy fulfillment.</h3>
              <p>At Health Haven, we proudly partner with patients, independent pharmacies, digital therapeutics companies, and telehealth providers—whether you're an established platform or just starting out. Our experienced team is here to support you at every stage, offering personalized guidance and seamless service. Once we receive your patient’s prescription, we take care of the rest—from medication fulfillment to ongoing patient support—ensuring a smooth, reliable, and compassionate pharmacy experience.”</p>
            </div>
          </div>
        </div>
      </div>

       {/*Partners Section */}
      <div className="partners_main">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="partner_card text-start">
                <img src={P1Img} alt="" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="partner_card text-start">
                <img src={P2Img} alt=""  className='partner_imag_2'/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="partner_card text-start">
                <img src={P3Img} alt="" />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Section 6 */}
      <div className="section_6_main">
        <div className="container">
          <div className="row">
            <div className="col-md-9 section_6_left text-start">
              <h1>Fed up with drug prices? Yeah, us too. </h1>
            </div>
            <div className="col-md-3 section_6_right">
              <img src={S6Img} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="review_main">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 text-start">
              <h1 className='heading_primary'>Our Patients love us We are sure you will too</h1>
              <p>Our experts team works 24/7 to keep you happy.</p>
            </div>
            <div className="col-md-4 review_right">
              <a href="/" className="btn_primary">View All</a>
            </div>
          </div>
          <Swiper className="mySwiper inner_swipper_main mt-4"  spaceBetween={20}  slidesPerView={4}  
            breakpoints={{
                320: {
                slidesPerView: 1,
                spaceBetween: 10,
                },
                480: {
                slidesPerView: 1,
                spaceBetween: 20,
                },
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1100: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                1200: {
                slidesPerView: 4,
                spaceBetween: 20,
                }
            }} >

            <SwiperSlide className="inner_swiper">
              <div className="review_card text-start">
                <div className="profile_content">
                  <div className="profile_detail">
                    <img src={Profile} alt="" />
                    <div className="profile_content_main">
                      <h5 className="profile_title">Willow Burnett</h5>
                      <p>Indian</p>
                    </div>
                  </div>
                  <div className="stars_main">
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                  </div>
                  <p className="review_description">
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="inner_swiper">
              <div className="review_card text-start">
                <div className="profile_content">
                  <div className="profile_detail">
                    <img src={Profile} alt="" />
                    <div className="profile_content_main">
                      <h5 className="profile_title">Willow Burnett</h5>
                      <p>Indian</p>
                    </div>
                  </div>
                  <div className="stars_main">
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                  </div>
                  <p className="review_description">
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="inner_swiper">
              <div className="review_card text-start">
                <div className="profile_content">
                  <div className="profile_detail">
                    <img src={Profile} alt="" />
                    <div className="profile_content_main">
                      <h5 className="profile_title">Willow Burnett</h5>
                      <p>Indian</p>
                    </div>
                  </div>
                  <div className="stars_main">
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                  </div>
                  <p className="review_description">
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="inner_swiper">
              <div className="review_card text-start">
                <div className="profile_content">
                  <div className="profile_detail">
                    <img src={Profile} alt="" />
                    <div className="profile_content_main">
                      <h5 className="profile_title">Willow Burnett</h5>
                      <p>Indian</p>
                    </div>
                  </div>
                  <div className="stars_main">
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                    <FontAwesomeIcon icon={faStar} className="star-icon"/>
                  </div>
                  <p className="review_description">
                    “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text”
                  </p>
                </div>
              </div>
            </SwiperSlide>
        
          </Swiper>
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


    </div>
  )
}

export default Home