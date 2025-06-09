import React, { useState , useEffect, useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import S1Img1 from '../assets/images/s1_img1.png';
import S1Img2 from '../assets/images/s1_img2.png';
import S1Img3 from '../assets/images/s1_img3.png';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/p4.png';
import P1Img from '../assets/images/p1_img.png';
import P2Img from '../assets/images/p2_img.png';
import P3Img from '../assets/images/p3_img.png';
import S3Img1 from '../assets/images/s3_i1.png';
import S3Img2 from '../assets/images/s3_i2.png';
import S3Img3 from '../assets/images/s3_i3.png';
import S3Img4 from '../assets/images/s3_i4.png';
import Cart from '../assets/images/cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid  } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBuilding  } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

 const forms = [
    { label: 'Tablet', value: 'tablet' },
  ];
 const strengths = [
    { label: '2.5mg', value: '2.5mg' },
    { label: '5mg', value: '5mg' },
    { label: '10mg', value: '10mg' },
    { label: '20mg', value: '20mg' },
  ];
 const sizes = [
    { label: '30', value: '30' },
    { label: '60', value: '60' },
    { label: '90', value: '90' },
    { label: 'other', value: 'other' },
  ];
   const allProducts = {
    '2.5mg': [
      {
        name: 'Tadalafil (Cialis)',
        by: 'Ajanta',
        img: P2,
        basePrice: 42,
      },
    ],
    '5mg': [
      {
        name: 'Tadalafil (Cialis)',
        by: 'Teva',
        img: P1,
        basePrice: 55,
      },
    ],
    '10mg': [
      {
        name: 'Tadalafil (Cialis)',
        by: 'Ajanta',
        img: P4,
        basePrice: 52,
      },
    ],
    '20mg': [
      {
        name: 'Tadalafil (Cialis)',
        by: 'Amneal',
        img: P3,
        basePrice: 50,
      },
    ],
  };

const Product = () => {
    const [selectedForm, setSelectedForm] = useState('tablet');
    const [selectedStrength, setSelectedStrength] = useState("2.5mg");
    const [selectedPackageSize, setSelectedPackageSize] = useState();
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef(null);

useEffect(() => {
    setDisplayedProducts(allProducts[selectedStrength] || []);
  }, [selectedStrength]);

  // Calculate price based on package size
  const calculatePrice = (basePrice) => {
    const multiplier = selectedPackageSize === '60' ? 2 : 1;
    return basePrice * multiplier;
  };

  return (
    <>
    <div className="container">
        <div className="row mt-5 mb-5 text-start">
              {displayedProducts.map((product, index) => (
                <div className="col-md-8" key={index}>
                  <div className="product_detail mb-3">
                    <div className="row">
                      <h5 className='product_detail_name pb-3 mb-3'>{product.name} By {product.by}</h5>
                      <div className="col-md-4">
                        <div className="product_image">
                          <img src={product.img} alt={product.name} className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-md-8 product_detail_left">
                        <div className="stars_main">
                          <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                          <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                          <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                          <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                          <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                        </div>
                        <p>1 review</p>
                        <div className="rx_required_main">
                          <p>RX Prescription Required</p>
                        </div>
                        <ul className='mt-2 mb-2'>
                          <li>Used to treat Erectile Dysfunction</li>
                        </ul>
                        <div className="row product_features_main mt-3">
                          <div className="col-6 product_feature d-flex gap-3 mb-3">
                            <div className="product_feature_icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon icon={faCircle } className="star-icon text-primary"/>
                            </div>
                            <div className=''>
                              <h6>Ajanta</h6>
                              <p>Manufactures</p>
                            </div>
                          </div>
                          <div className="col-6 product_feature d-flex gap-3 mb-3">
                            <div className="product_feature_icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon icon={faLocationDot } className="star-icon text-success"/>
                            </div>
                            <div className=''>
                              <h6>India</h6>
                              <p>Based in</p>
                            </div>
                          </div>
                          <div className="col-6 product_feature d-flex gap-3 mb-3">
                            <div className="product_feature_icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon icon={faHeart } className="star-icon text-danger"/>
                            </div>
                            <div className=''>
                              <h6>Erectile Dysfunction</h6>
                              <p>Health Condition</p>
                            </div>
                          </div>
                          <div className="col-6 product_feature d-flex gap-3 mb-3">
                            <div className="product_feature_icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon icon={faBuilding} className="star-icon text-warning"/>
                            </div>
                            <div className=''>
                              <h6>10</h6>
                              <p>Similar Drugs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            <div className="col-md-4 product_detail_right">
              <div className="d-flex justify-content-between">
                <p>Tablet • 2.5 mg • 30ct</p>
                {displayedProducts.map((product, index) => (
                  <div className="text-end" key={index}>
                      <h4>
                      <small>$</small>
                      {calculatePrice(product.basePrice).toFixed(2)}
                      </h4>
                  </div>
                ))}

              </div>
                <label className="form-label">FORM</label>
                <div className="d-flex flex-wrap gap-3 mb-4">
                    {forms.map((form) => (
                        <label
                        key={form.value}
                        className={`btn btn-outline-primary ${
                            selectedForm === form.value ? 'active' : ''
                        }`}
                        >
                        <input
                            type="radio"
                            className="btn-check radio_btn_cart"
                            name="custom-radio"
                            value={form.value}
                            checked={selectedForm === form.value}
                            onChange={(e) => setSelectedForm(e.target.value)}
                            autoComplete="off"
                        />
                        {form.label}
                        </label>
                    ))}
                </div>
                <label className="form-label">STRENGTH</label>
                <div className="d-flex flex-wrap gap-3 mb-4">
                    {strengths.map((option) => (
                        <label
                        key={option.value}
                        className={`btn btn-outline-primary ${
                            selectedStrength === option.value ? 'active' : ''
                        }`}
                        >
                        <input
                            type="radio"
                            className="btn-check radio_btn_cart"
                            name="custom-radio"
                            value={option.value}
                            checked={selectedStrength === option.value}
                            onChange={(e) => setSelectedStrength(e.target.value)}
                            autoComplete="off"
                        />
                        {option.label}
                        </label>
                    ))}
                </div>
                <label className="form-label">PACKAGE SIZE</label>
                <div className="d-flex flex-wrap gap-3 mb-4">
                    {sizes.map((size) => (
                        <label
                        key={size.value}
                        className={`btn btn-outline-primary ${
                            selectedPackageSize === size.value ? 'active' : ''
                        }`}
                        >
                        <input
                            type="radio"
                            className="btn-check radio_btn_cart"
                            name="custom-radio"
                            value={size.value}
                            checked={selectedPackageSize === size.value}
                            onChange={(e) => setSelectedPackageSize(e.target.value)}
                            autoComplete="off"
                        />
                        {size.label}
                        </label>
                    ))}
                </div>
                <a href="/cart">
                  <div className="cart_btn_main">
                      <a href="/cart" className="cart_btn_2">Add to Cart</a>
                      <FontAwesomeIcon icon={faShoppingCart } className="text-white"/>
                      {/* <img src={Cart} alt="" /> */}
                  </div>
                </a>
            </div>
   
        </div>

        <div className="product_question_main">
            <h4 className="product_question">Uses of Tadalafil (Cialis)</h4>
            <p>Tadalafil is the generic form  of the brand-name medication Cialis. Tadalafil is most commonly  used to treat erectile dysfunction (ED), although it can also be used to treat an enlarged prostate.</p>
            <div className="mt-3">
                <div ref={contentRef} className={`content-wrapper ${showMore ? 'open' : ''}`}>
                    <p>
                    Some common side effects can include lightheadedness, dizziness,
                    headache, flushing, and nausea. The 2.5mg and 5mg dose are typically
                    taken daily, but the 10mg and 20mg doses are taken on an as-needed
                    basis, with or without food. Tadalafil can take up to 4 hours to
                    begin working, and the effects can last anywhere between 24 to 72
                    hours. Both tadalafil and sildenafil (the generic form of Viagra) are
                    effective treatments for ED; however, some people prefer tadalafil
                    because of its longer duration of action. Make sure to also inform
                    your doctor and/or pharmacist of all other medications (including
                    over-the-counter drugs and supplements) you are taking in order to
                    prevent drug interactions. You should also speak with your doctor
                    about eating grapefruit or drinking grapefruit juice while taking
                    tadalafil since it is possible the fruit will interfere with the
                    medication. Lastly, inform your doctor if you are on nitrates, as
                    they cannot be taken together with Tadalafil. This paragraph is only
                    an overview, and it is not intended to replace medical counseling;
                    please consult your pharmacist and/or medical provider for more
                    comprehensive information.
                    </p>
                </div>
                 <h5 className="text-primary" role="button" onClick={() => setShowMore((prev) => !prev)}>
                    {showMore ? 'Less about Tadalafil (Cialis)' : 'More about Tadalafil (Cialis)'}
                </h5>
            </div>
         </div>
        <div className="product_question_main">
            <h4 className="product_question">About Ajanta</h4>
            <p>Founded in 1973, Ajanta Pharma distributes about 30 drugs in the U.S. Ajanta serves 30 countries through its range of product offerings. It has 7 manufacturing sites, including ones in India and Mauritius.</p>
            
         </div>
    </div>

      {/* Manufacture Product Section */}
      <div className="manufacture_product_section mt-5 mb-5">
      <div className="container">
        <h4>Other Manufacturers for this Drug</h4>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <div className="manufacture_product_main">
            <div className="product_manu_image mb-3">
              <img src={P1} alt="" />
            </div>
            <h5>Cialis</h5>
            <p>Teva</p>
            <div className="stars_main">
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
            </div>
            <h4><small>$</small>67</h4>
          </div>
          <div className="manufacture_product_main">
            <div className="product_manu_image mb-3">
              <img src={P1} alt="" />
            </div>
            <h5>Cialis</h5>
            <p>Teva</p>
            <div className="stars_main">
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
            </div>
            <h4><small>$</small>67</h4>
          </div>
          <div className="manufacture_product_main">
            <div className="product_manu_image mb-3">
              <img src={P1} alt="" />
            </div>
            <h5>Cialis</h5>
            <p>Teva</p>
            <div className="stars_main">
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
            </div>
            <h4><small>$</small>67</h4>
          </div>
        </div>
      </div>
      </div>

      {/* Product Review */}

      <div className="product_review_parent text-start mb-5">
      <div className="container">
        <h2>Reviews for Tadalafil (Cialis) Ajanta</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center gap-1">
              <div className="stars_main mt-0">
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              </div>
              <p >3 out of 5</p>
            </div>
            <p>1 review</p>
            <div className="row rating_percentage_main mt-3">
              <div className="col-2 d-flex gap-1 align-items-center">
                <p className='me-1'>1</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="percentage_outer">
                  {/* <div className="percentage_inner"></div> */}
                </div>
              </div>
              <div className="col-2">
                <p>0%</p>
              </div>
            </div>
            <div className="row rating_percentage_main">
              <div className="col-2 d-flex gap-1 align-items-center">
                <p>2</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="percentage_outer">
                  {/* <div className="percentage_inner"></div> */}
                </div>
              </div>
              <div className="col-2">
                <p>0%</p>
              </div>
            </div>
            <div className="row rating_percentage_main">
              <div className="col-2 d-flex gap-1 align-items-center">
                <p>3</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="percentage_outer">
                  {/* <div className="percentage_inner"></div> */}
                </div>
              </div>
              <div className="col-2">
                <p>0%</p>
              </div>
            </div>
            <div className="row rating_percentage_main">
              <div className="col-2 d-flex gap-1 align-items-center">
                <p>4</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="percentage_outer">
                  <div className="percentage_inner"></div>
                </div>
              </div>
              <div className="col-2">
                <p>80%</p>
              </div>
            </div>
            <div className="row rating_percentage_main">
              <div className="col-2 d-flex gap-1 align-items-center">
                <p>5</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
              </div>
              <div className="col-8 d-flex align-items-center">
                <div className="percentage_outer">
                  {/* <div className="percentage_inner"></div> */}
                </div>
              </div>
              <div className="col-2">
                <p>0%</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h3>Customer Reviews</h3>
            <div className="d-flex justify-content-between">
              <div className="stars_main mt-3 mb-3">
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              </div>
              <p>July 18, 2021</p>

            </div>
            <p>Mark from East Northport , New York | Verified Purchase</p>
            <div className="row mt-3 review_detail">
              <div className="col-sm-3 mb-3">
                <p>Effectiveness</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              </div>
              <div className="col-sm-3 mb-3">
                <p>Ease of Use</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              </div>
              <div className="col-sm-3 mb-3">
                <p>Satisfaction</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              </div>
              <div className="col-sm-3 mb-3">
                <p>Value for Money</p>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarSolid} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
                <FontAwesomeIcon icon={faStarRegular} className="star-icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    {/* Section 1 */}
    <div className="section_1_main product_work_section">
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

      {/* Section 3 */}
    <div className="section_3_main">
      <div className="container">
        <h3 className="heading_primary">Shop by Conditions</h3>
          <Swiper className="mySwiper inner_swipper_main"  spaceBetween={30}  slidesPerView={6}  
          breakpoints={{
              320: {
              slidesPerView: 2,
              spaceBetween: 10,
              },
              480: {
              slidesPerView: 2,
              spaceBetween: 20,
              },
              640: {
              slidesPerView: 3,
              spaceBetween: 20,
              },
              768: {
              slidesPerView: 4,
              spaceBetween: 20,
              },
              1100: {
              slidesPerView: 6,
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
         <SwiperSlide className="inner_swiper">
          <div className="section_3_card text-start">
            <img src={S3Img3} alt="" />
            <h4 className='title'>Medication Abortion</h4>
          </div>
        </SwiperSlide>
           <SwiperSlide className="inner_swiper">
          <div className="section_3_card text-start">
            <img src={S3Img2} alt="" />
            <h4 className='title'>Depression</h4>
          </div>
        </SwiperSlide>
      
      </Swiper>
      </div>
    </div>

    <div className="questions_parent mt-5">
      <div className="container">
        <h3 className="section_1_heading">Questions</h3>
        <p>We're here to help!</p>
        <div className="quetions_btn_main d-flex flex-wrap justify-content-center gap-3 mt-5">
          <a href="" className="quetions_btn_1">FAQs</a>
          <a href="" className="quetions_btn_2">Contact us</a>
        </div>
      </div>
    </div>

    {/* Partner Section */}
    <div className="partner_section_main">
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
  </>
  );
};

export default Product;