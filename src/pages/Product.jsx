import React, { useState , useEffect, useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import S1Img1 from '../assets/images/s1_img1.png';
import S1Img2 from '../assets/images/s1_img2.png';
import S1Img3 from '../assets/images/s1_img3.png';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/p4.png';
import News1 from '../assets/images/new_1.webp';
import News2 from '../assets/images/new_2.webp';
import News3 from '../assets/images/new_3.webp';
import News4 from '../assets/images/new_4.webp';
import News5 from '../assets/images/new_5.webp';
import Partner1 from '../assets/images/partner_1.png';
import Partner2 from '../assets/images/partner_2.webp';
import Partner3 from '../assets/images/partner_3.png';
import { Link } from 'react-router-dom';

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
        by: 'Amneal',
        img: P1,
        basePrice: 40,
      },
      {
        name: 'Tadalafil (Cialis)',
        by: 'Ajanta',
        img: P2,
        basePrice: 42,
      },
      {
        name: 'Tadalafil (Cialis)',
        by: 'Teva',
        img: P3,
        basePrice: 45,
      },
    ],
    '5mg': [
      {
        name: 'Tadalafil (Cialis)',
        by: 'Amneal',
        img: P2,
        basePrice: 50,
      },
      {
        name: 'Tadalafil (Cialis)',
        by: 'Ajanta',
        img: P4,
        basePrice: 52,
      },
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
        by: 'Amneal',
        img: P3,
        basePrice: 50,
      },
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
const faqData = [
  { question: "How Long Does Cialis Last?", answer: "Cialis can last anywhere between 48 to 72 hours." },
  { question: "Is Viagra or Cialis better?", answer: "Many patients prefer Viagra over Cialis because of its faster onset of action, but both are very effective in treating ED" },
  { question: "What is Cialis used to treat?", answer: "Tadalafil, generic name for Cialis is most commonly used to treat Erectile Dysfunction or ED.  Cialis can also be used to treat enlarged prostate. For more information click here." },
  { question: "Can Cialis 20 mg be cut in half??", answer: "Cialis can be cut in half or even in quarters." },
  { question: "Can I take Cialis every day?", answer: "5 mg Cialis is taken daily, but 10 mg and 20 mg are taken on as needed basis." },
  { question: "What are the side effects of Cialis?", answer: "Some common side effects of Cialis include lightheadedness, dizziness, headache, flushing, and nausea" },
  { question: "How does Cialis differ from Viagra?", answer: "Cialis and Viagra are both very effective in treatment of ED, but some prefer Cialis due to its longer duration of action." }
];
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
    <div className="container">
        <div className="row mt-5 text-start">
            <div className="col-md-3 product_left">
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
            </div>
             {displayedProducts.map((product, index) => (
                <div className="col-md-3" key={index}>
                <div className="product_card mb-3">
                    <div className="product_image mb-2">
                        <Link
                            key={index}
                            to={`/product-detail`}
                        >
                            <img src={product.img} alt={product.name} className="img-fluid" />
                        </Link>
                    </div>
                    <h5>{product.name}</h5>
                    <p className="text-muted">By {product.by}</p>
                    <div className="row flex-wrap product_card_bottom mt-3 align-items-center">
                    <div className="col-xl-6">
                        <h4>
                        <small>$</small>
                        {calculatePrice(product.basePrice).toFixed(2)}
                        </h4>
                    </div>
                    <div className="col-xl-6 text-end">
                        <a href="/cart" className="cart_btn">Add to Cart</a>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            {/* <div className="col-sm-3">
                <div className="product_card">
                    <div className="product_image">
                        <img src={P1} alt="" />
                    </div>
                    <h4>Tadalafil(Cialis)</h4>
                    <p>By Amneal</p>
                    <div className="row product_card_bottom">
                        <div className="col-6">
                            <h2><small>$</small>51.00</h2>
                        </div>
                        <div className="col-6">
                            <a href="/" className="cart_btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
     
        <div className="product_question_main">
            <h4 className="product_question">How do we decide on “pharmacist pick”?</h4>
            <p>Our "pharmacist pick" is a combination of a few different factors. First, we take into account what is most requested and well-reviewed by patients. Our pharmacists also consider how long a manufacturer has been making a given drug, and the general reputation of the manufacturer.</p>
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


        {/* FAQ Section */}
        <div className="faq_main product_faqs">
            <div className="container">
                <h2 className="heading_primary">Tadalafil (Cialis) FAQs</h2>
                <p>IMPORTANT: The FAQ answers below do NOT contain all the information about this particular drug. These answers are not substitutes for a medication guide, pharmacist consultation or the advice of your health care professional. For the official medication guide or further questions please call our pharmacists at 1-833-466-3979.</p>
                
                <div className="container my-5">
                    <Accordion defaultActiveKey="0" flush>
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header> {item.question}</Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                    </Accordion>
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

        {/* News Section */}
         <div className="news_section mt-5">
            <div className="container">
                <h3 className='section_1_heading'>In the News</h3>
                <p>"It's one of those businesses that seems 'too good to be true' an online pharmacy that purports to save patients thousands of dollar on their prescription medications. But what's buzzing behind this concrete establishment in Culver City is the real deal." - Good Day LA</p>
                <div className="row news_images_main justify-content-center g-5 mt-4 mb-4">
                    <div className="col-sm-2 news_image">
                        <img src={News1} alt="" />
                    </div>
                    <div className="col-sm-2 news_image">
                        <img src={News2} alt="" />
                    </div>
                    <div className="col-sm-2 news_image">
                        <img src={News3} alt="" />
                    </div>
                    <div className="col-sm-2 news_image">
                        <img src={News4} alt="" />
                    </div>
                    <div className="col-sm-2 news_image">
                        <img src={News5} alt="" />
                    </div>
                </div>
            </div>
         </div>

           {/* Partner Section */}
         <div className="partner_section mt-5">
            <div className="container">
                <div className="row partner_section_main justify-content-center">
                    <div className="col-sm-3 partner_image">
                        <img src={Partner3} alt="" />
                    </div>
                    <div className="col-sm-3 partner_image">
                        <img src={Partner1} alt="" />
                    </div>
                    <div className="col-sm-3 partner_image">
                        <img src={Partner2} alt="" />
                    </div>
                </div>
            </div>
         </div>

    </div>
  );
};

export default Product;