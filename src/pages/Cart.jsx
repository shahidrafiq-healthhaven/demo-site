import React, { useState, useEffect, useMemo  } from 'react';
import { Accordion } from 'react-bootstrap';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/p4.png';
import P1Img from '../assets/images/p1_img.png';
import P2Img from '../assets/images/p2_img.png';
import P3Img from '../assets/images/p3_img.png';
import Profile from '../assets/images/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Vortex } from 'react-loader-spinner';
import { useParams , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../stores/cartSlice';
import { changeStrength } from '../stores/cartSlice';
import { removeCartItem } from '../stores/cartSlice';
import Swal from 'sweetalert2'
 
const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // const [drugForm, setDrugForm] = useState();
    // const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    // const [mgValue, setMgValue] = useState();
    const dispatch = useDispatch();
    const carts = useSelector(store => store.cart.items);
    const [totalAmount, setTotalAmount]= useState(0);
    const [totalCartItem, setTotalCartItem] = useState(0)
    const [editingProductId, setEditingProductId] = useState(null);

    // const handleIncrease = () => setQuantity(quantity + 1);
    // const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const subtotal = useMemo(() => quantity * productPrice, [quantity, productPrice]);
    const shipping = 1.00;
    const total = useMemo(() => subtotal + shipping, [subtotal]);

    useEffect(()=>{
        totalItems();
        totalCartItems();
        setLoading(false);
    }, [carts])

    const handleMinusQuantity = (product_id, quantity) => {
        if(quantity > 1){
            dispatch(changeQuantity({
                product_id,
                quantity: quantity - 1
            }));
            
        }
    }
    const handlePlusQuantity = (product_id, quantity) => {
        dispatch(changeQuantity({
            product_id,
            quantity: quantity + 1
        }));
    }
    const deleteItem = (product_id, selected_strengths) => {
        Swal.fire({
            title: 'Remove Item',
            text: 'Are you sure you would like to remove this item from your shopping cart?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeCartItem({
                    product_id,
                    selected_strengths
                }));
            }
        });
    }
    const totalItems = () => {
        let total ;
        total = carts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        console.log("total :", total);
        setTotalAmount(total);
    }
    const totalCartItems = () => {
        let total ;
        total = carts.length;
        setTotalCartItem(total)
        console.log("totalCartItems",total);
    }
    const setSelectedStrength = (product_id , strength) => {
        dispatch(changeStrength({
            product_id,
            strength: strength
        }));
    }
 return !loading ?(
   <>
   <div className="cart_section_1">
    <div className="container">
        <div className="row">
            <h2 className='text-start mt-3'>My Cart</h2>
            <div className="col-md-9 cart_product_left mt-4 mb-5">
                <div className="row ">
                    <div className="col-sm-6">
                        <h5 className='text-primary text-start'>CART DETAILS ({totalCartItem} Items)</h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className='text-primary text-start'>QTY</h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className='text-primary text-start'>PRICE</h5>
                    </div>
                </div>
                 {  carts.length === 0 ? (
                <div className="text-center py-5">
                    <h5>You have no items in your shopping cart.</h5>
                    <a href="/" className='text-primary'>Back to Home</a>
                </div>
                ) : ( carts.map((item, index)=>(
                <div className="row cart_product_main mt-2" key={index}>
                    <div className="col-sm-6 text-start pb-3">
                        <div className="cart_product_detail_parent d-flex gap-2 align-items-center">
                            <div className="cart_image_main">
                                <img src={P1} alt="" />
                            </div>
                            <div>
                                <h6>{item.name}</h6>
                                <div className="d-flex gap-3">
                                    <p>{item.form} • {item.selected_strengths}</p>
                                    <a href="#" className="text-primary" onClick={() => setEditingProductId(item.product_id)}>
                                    <FontAwesomeIcon icon={faEdit} className="star-icon" /> Edit
                                    </a>
                                </div>
                            </div>
                    
                        </div>
                    </div>

                    <div className="col-sm-3 mb-2">
                        <div className="cart_product_counter_parent d-flex align-content-center gap-2 mt-2">
                            <div className="cart_product_counter d-flex align-content-center">
                            <div className="cart_counter_btn" onClick={() =>handleMinusQuantity(item.product_id, item.quantity)}>-</div>
                            <span>{item.quantity}</span>
                            <div className="cart_counter_btn" onClick={() =>handlePlusQuantity(item.product_id, item.quantity)}>+</div>
                            </div>
                            <FontAwesomeIcon icon={faTrash} className="star-icon mt-2 cursor-pointer" onClick={()=>deleteItem(item.product_id, item.selected_strengths)} />
                        </div>
                    </div>

                    <div className="col-sm-3 mb-2">
                        <br />
                        <h5 className="text-start">${Number(item.price).toFixed(2)}</h5>
                    </div>
                    {editingProductId === item.product_id && (
                    <div className="col-sm-3 mb-2">
                        <h5 className="form-label text-start">STRENGTH</h5>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            {Array.isArray(item.strengths) && item.strengths.length > 0  && item.strengths.map((option) => (
                                <label
                                key={option.strength}
                                className={`btn btn-outline-primary ${
                                    item.selected_strengths == option.strength ? 'active' : ''
                                }`}
                                >
                                <input
                                    type="radio"
                                    className="btn-check radio_btn_cart"
                                    name="custom-radio"
                                    value={option.strength}
                                    checked={item.selected_strengths == option.strength}
                                    onChange={(e) => setSelectedStrength(item.product_id, e.target.value)}
                                    autoComplete="off"
                                />
                                {option.strength}
                                </label>
                            ))}
                        </div>
                    </div>
                    )}
                </div>
                 )))}
            </div>
            <div className="col-md-3 p-4">
                <h4 className='text-start mb-3'>Summary</h4>
                <div className="d-flex justify-content-between mb-3">
                    <p>Subtotal</p>
                    <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Tax</p>
                    <p>TBD</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Order Total:</p>
                    <p>${(totalAmount + shipping).toFixed(2)}</p>
                </div>
                <a href="/checkout"  onClick={() => {
                    localStorage.setItem('cartSummary', JSON.stringify({
                        subtotal: totalAmount.toFixed(2),
                        shipping: shipping.toFixed(2),
                        total: (totalAmount + shipping).toFixed(2),
                    }));
                    }}>
                    <div className="cart_btn_main">
                        <div className="cart_btn_2">Proceed to Checkout</div>
                        <FontAwesomeIcon icon={faShoppingCart } className="text-white"/>
                        {/* <img src={CartImg} alt="" /> */}
                    </div>
                </a>
            </div>
        </div>
        <div className="row cart_section_2">
            <div className="col-md-9 cart_product_left mt-4 mb-5 text-start">
                {/* <div className="d-flex align-items-center gap-3">
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

                </div> */}
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
    </div>
   </div>
   </>
   ) : 
     (
     <div  className='d-flex justify-content-center align-items-center' style={{height : "100vh"}}>
         <Vortex
         visible={true}
         height="100"
         width="100"
         ariaLabel="vortex-loading"
         wrapperStyle={{}}
         wrapperClass="vortex-wrapper"
         colors={['#005CE6', '#001C47', 'rgba(194, 3, 236, 1)', '#005CE6', '#001C47', 'rgba(194, 3, 236, 1)']}
         />
     </div>
         
   )
};

export default Cart;