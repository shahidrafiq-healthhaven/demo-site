import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/p4.png';
import CartImg from '../assets/images/cart.png';
import Partner1 from '../assets/images/partner_1.png';
import Partner2 from '../assets/images/partner_2.webp';
import Partner3 from '../assets/images/partner_3.png';
import Profile from '../assets/images/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

 
const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  return (
   <>
   <div className="cart_section_1">
    <div className="container">
        <div className="row">
            <h2 className='text-start mt-3'>My Cart</h2>
            <div className="col-md-9 cart_product_left mt-4 mb-5">
                {/* <div className="row ">
                    <div className="col-sm-6">
                        <h5 className='text-primary text-start'>CART DETAILS (2 Items)</h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className='text-primary'>QTY</h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className='text-primary'>PRICE</h5>
                    </div>
                </div> */}
                <div className="row cart_product_main mt-2">
                    <div className="col-sm-6 text-start pb-3">
                         <h5 className='text-primary text-start'>CART DETAILS (2 Items)</h5>
                        <div className="cart_product_detail_parent d-flex gap-2 align-items-center">
                            <div className="cart_image_main">
                                <img src={P1} alt="" />
                            </div>
                            <div>
                                <h6>Tadalafil (Cialis)Teva</h6>
                                <div className="d-flex gap-3">
                                    <p>Tablet • 2.5 mg • 30ct</p>
                                    <a href="" className='text-primary'><FontAwesomeIcon icon={faEdit} className="star-icon"/> Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-2">
                        <h5 className='text-primary text-start'>QTY</h5>
                        <div className="cart_product_counter_parent d-flex  align-content-center gap-2 mt-4">
                            <div className="cart_product_counter d-flex align-content-center" >
                                <div className='cart_counter_btn' onClick={handleDecrease}>-</div>
                                <span>{quantity}</span>
                                <div className='cart_counter_btn' onClick={handleIncrease}>+</div>
                            </div>
                            <FontAwesomeIcon icon={faTrash } className="star-icon mt-2"/>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-2">
                        <h5 className='text-primary text-start'>PRICE</h5>
                        <br />
                        <h5 className='text-start'>$67.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-4">
                <h4 className='text-start mb-3'>Summary</h4>
                <div className="d-flex justify-content-between mb-3">
                    <p>Subtotal</p>
                    <p>$161.00</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Shipping</p>
                    <p>$1.00</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Tax</p>
                    <p>TBD</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Order Total:</p>
                    <p>$161.00</p>
                </div>
                <a href="/checkout">
                    <div className="cart_btn_main">
                        <a href="/checkout" className="cart_btn_2">Proceed to Checkout</a>
                        <FontAwesomeIcon icon={faShoppingCart } className="text-white"/>
                        {/* <img src={CartImg} alt="" /> */}
                    </div>
                </a>
            </div>
        </div>
        <div className="row cart_section_2">
            <div className="col-md-9 cart_product_left mt-4 mb-5 text-start">
                <div className="d-flex align-items-center gap-3">
                    <img src={Profile} alt="" />
                    <div className="rx_required_main w-auto">
                        <p>Pharmacist Recommendations</p>
                    </div>
                </div>
                <p className='mt-3'>We recommend taking CoQ-10while onTadalafil (Cialis) and Tadalafil (Cialis).</p>
                <a href="" className='text-primary text-decoration-underline'>Learn more</a>
                <div className="cart_product_detail_parent d-flex gap-2 align-items-center mt-3">
                    <div className="cart_image_main">
                        <img src={P1} alt="" />
                    </div>
                    <div>
                        <h6>CoQ-10</h6>
                        <p >Tablet • 2.5 mg • 30ct</p>
                        <h5 className='mb-2 text-primary'>$27</h5>
                        <a href="/cart" className="cart_btn">Add to Cart</a>
                    </div>

                </div>
            </div>
            <div className="col-md-3 p-4 text-start cart_product_right">
                <h5 className='text-start'>How to buy from Health Haven Rx</h5>
                <h5 className='text-start mt-4'>Step 1</h5>
                <p>Find your meds and place your order online.</p>
                <h5 className='text-start mt-4'>Step 2</h5>
                <p>Have your doctor send your prescription electronically to us in Culver City, CA or by fax at (424) 543-0481. We can also accept transfers from your old pharmacy.</p>
                <h5 className='text-start mt-4'>Step 3</h5>
                <p>Your meds are shipped once we receive your prescription.</p>
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
   </div>
   </>
  );
};

export default Cart;