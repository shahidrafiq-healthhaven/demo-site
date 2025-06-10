import React, { useState  } from 'react';
import { Accordion } from 'react-bootstrap';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/p4.png';
import Partner1 from '../assets/images/partner_1.png';
import Partner2 from '../assets/images/partner_2.webp';
import Partner3 from '../assets/images/partner_3.png';
import P1Img from '../assets/images/p1_img.png';
import P2Img from '../assets/images/p2_img.png';
import P3Img from '../assets/images/p3_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard   } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
 
const Checkout = () => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("usps");
  const [addSignature, setAddSignature] = useState(false);
  const [formData, setFormData] = useState({
    recipient: 'Me',
    gender: '',
    pet: '',
    firstName: '',

  });
  const steps = ['Patient Info', 'Health Info', 'Prescription Info', 'Shipping', 'Payment'];
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: ""
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  // const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
   <>
   <div className="container">
      <div className="row">
        {/* Step Navigation */}
        <div className="col-12 mb-4">
          <div className="nav nav-tabs justify-content-betweent pb-5">
            {steps.map((label, index) => (
              <button
                key={index}
                className={`nav-link ${step === index + 1 ? 'active fw-bold' : 'text-muted'}`}
                onClick={() => setStep(index + 1)}
              >
                <span>{index + 1}</span>  {label}
              </button>
            ))}
          </div>
        </div>

        {/* Form (Left Side) */}
        <div className="col-md-7 text-start checkout_form_left">
          <div className="">
            <h4 className="mb-3">1. Patient Information <small>(Step 1of 5)</small></h4>
            <div className="border-bottom pb-2 mb-3">
              {step === 1 && (
                <>
                  <p>Who are the medications for?</p>
                  <div className="my-3" role="group">
                    {['Me', 'Add New'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        style={{ width: '200px' }}
                        className={`text-start btn btn-outline-secondary me-2 mb-2 py-2 ${
                          formData.recipient === option ? 'active' : ''
                        }`}
                        onClick={() => handleChange('recipient', option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {(formData.recipient === 'Me' || formData.recipient === 'Add New') && (
                    <>
                      {(formData.recipient === 'Add New') && (
                      <div className="row">
                        <p>Are they for a pet?</p>
                        <div className="my-3" role="group">
                          {['Yes', 'No'].map((option) => (
                            <button
                              key={option}
                              type="button"
                              style={{ width: '200px' }}
                              className={`text-start btn btn-outline-secondary me-2 py-2 ${
                                formData.pet === option ? 'active' : ''
                              }`}
                              onClick={() => handleChange('pet', option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      )}
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <p>First Name</p>
                          <input type="text" placeholder='Legal first name' className='w-100 my-2 p-2 bg-white text-black' value={formData.firstName || ''}  onChange={(e) => handleChange('firstName', e.target.value)} />
                        </div>
                        <div className="col-sm-6">
                          <p>Last Name</p>
                          <input type="text" placeholder='Legal last name' className='w-100 my-2 p-2 bg-white text-black' value={formData.lastName || ''} onChange={(e) => handleChange('lastName', e.target.value)}/>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <p>Date of Birth</p>
                        <div className="col-sm-4">
                          <select id="month" className="form-select my-2">
                            <option value="">Month</option>
                            {[
                              'January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December'
                            ].map((month, index) => (
                              <option key={index} value={index + 1}>
                                {month}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-4">
                          <select
                            className="form-select my-2"
                            value={formData.day || ''}
                            onChange={(e) => handleChange('day', e.target.value)}
                          >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-4">
                          <select
                            className="form-select my-2"
                            value={formData.year || ''}
                            onChange={(e) => handleChange('year', e.target.value)}
                          >
                            <option value="">Year</option>
                            {Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (_, i) => 1950 + i)
                              .reverse()
                              .map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <p>Gender</p>
                        <div className="my-3" role="group">
                          {['Male', 'Female', 'Non-binary'].map((option) => (
                            <button
                              key={option}
                              type="button"
                              style={{ width: '200px' }}
                              className={`text-start btn btn-outline-secondary me-2 mb-2 py-2 ${
                                formData.gender === option ? 'active' : ''
                              }`}
                              onClick={() => handleChange('gender', option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <p>Your Mobile Number</p>
                          {/* <input type="tel" placeholder='(152) 435-6126' className='my-2 p-2 bg-white text-black' value={formData.mobile || ''} onChange={(e) => handleChange('mobile', e.target.value)} /> */}
                          <PhoneInput
                          defaultCountry="US"
                          className='my-2 p-2 bg-white text-black'
                          placeholder="(451) 455-5555"
                          value={formData.mobile || ''}
                          onChange={(value) => handleChange('mobile', value)}/>
                        </div>
                      </div>
                      <div className="form-check mt-2 mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="exampleCheckbox"
                          checked={formData.accepted || false}
                          onChange={(e) => handleChange('accepted', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheckbox">
                          Yes, please send me SMS updates about my order and account to my mobile number
                        </label>
                      </div>
                    </>
                  )}
                  <div className='text-end'>
                    <button className="btn btn-primary" onClick={nextStep}>
                      Next - Health Info
                    </button>
                  </div>
                </>
              )}
            </div>

            <h4 className="mb-3">2. Health Information  <small>(Step 2 of 5)</small></h4>
            <div className="border-bottom pb-2 mb-3">
              {step === 2 && (
                <>
                  <p>Please list any drug allergies experience.</p>
                  <div className="form-check mt-2 mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="exampleCheckbox"
                      checked={formData.allergies || false}
                      onChange={(e) => handleChange('allergies', e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheckbox">
                      No known drug allergies
                    </label>
                  </div>
                  {!formData.allergies && (
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="allergyDetails"
                        rows="3"
                        placeholder="Please press return key after each input"
                        value={formData.allergyDetails || ''}
                        onChange={(e) => handleChange('allergyDetails', e.target.value)}
                      />
                    </div>
                  )}
                  <p>Please list your health conditions.</p>
                  <div className="form-check mt-2 mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="exampleCheckbox"
                      checked={formData.health_condition || false}
                      onChange={(e) => handleChange('health_condition', e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheckbox">
                      No known health conditions
                    </label>
                  </div>
                  {!formData.health_condition && (
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="healthConditionDetails"
                        rows="3"
                        placeholder="Please press return key after each input"
                        value={formData.healthConditionDetails || ''}
                        onChange={(e) => handleChange('healthConditionDetails', e.target.value)}
                      />
                    </div>
                  )}
                  <p>What medications do you currently take?</p>
                  <div className="form-check mt-2 mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="exampleCheckbox"
                      checked={formData.medication || false}
                      onChange={(e) => handleChange('medication', e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheckbox">
                      Not taking other medications
                    </label>
                  </div>
                  {!formData.medication && (
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="medicationDetails"
                        rows="3"
                        placeholder="Please press return key after each input"
                        value={formData.medicationDetails || ''}
                        onChange={(e) => handleChange('medicationDetails', e.target.value)}
                      />
                    </div>
                  )}
                  <small>By continuing, I verify that the above information is correct and complete.</small>
                    <div className="form-check mt-2 mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="exampleCheckbox"
                        checked={formData.accepted || false}
                        onChange={(e) => handleChange('accepted', e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="exampleCheckbox">
                        I agree to Health Haven Rx <a href="">Privacy Policy</a>  and <a href="">Terms & Conditions</a>.
                      </label>
                    </div>
                  <div className="d-flex justify-content-end">
                    {/* <button className="btn btn-secondary" onClick={prevStep}>
                      Back
                    </button> */}
                    <button className="btn btn-primary" onClick={nextStep}>
                      Next - Rx Info
                    </button>
                  </div>
                </>
              )}
            </div>

            <h4 className="mb-3">3. Prescription Information  <small>(Step 3 of 5)</small></h4>
            <div className="border-bottom pb-2 mb-3">
              {step === 3 && (
                <>
                  <p>Tadalafil (Cialis)Ajanta</p>
                  <small>Tablet•2.5 mg•30 ct</small>
                  <p>How would you like us to get your prescriptions?</p>
                    {/* Option 1: Doctor will send Rx */}
                    <div className="form-check border rounded p-3 mb-3 bg-light">
                      <div className="d-flex gap-3">
                        <input
                          className="form-check-input ms-1"
                          type="radio"
                          name="rxOption"
                          id="doctorOption"
                          value="doctor"
                          checked={selectedOption === 'doctor'}
                          onChange={() => setSelectedOption('doctor')}
                        />
                        <label className="form-check-label" htmlFor="doctorOption">
                          My doctor will send in my Rx electronically to Honeybee Health in Culver City, CA or via fax to (310) 559-5933
                        </label>
                      </div>

                      {/* Conditionally shown input fields */}
                      {selectedOption === 'doctor' && (
                        <div className="mt-3">
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="doctorName" className="form-label">Your Doctor's Name</label>
                              <input type="text" className="form-control bg-white text-black" id="doctorName" placeholder="Your doctor's full name" />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="doctorNumber" className="form-label">Your Doctor's Number</label>
                              <input type="tel" className="form-control bg-white text-black" id="doctorNumber" placeholder="(___) ___-____" />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="doctorFax" className="form-label">Your Doctor's Fax Number <span className="text-muted">(optional)</span></label>
                              <input type="tel" className="form-control bg-white text-black" id="doctorFax" placeholder="(___) ___-____" />
                            </div>
                          </div>
                          <button className="btn btn-primary" type="button">Save</button>
                        </div>
                      )}
                    </div>
                    {/* Option 2: Transfer from my old pharmacy */}
                    <div className="form-check border rounded p-3 mb-3 bg-light">
                      <div className="d-flex gap-3">
                        <input
                          className="form-check-input ms-1"
                          type="radio"
                          name="rxOption"
                          id="pharmacyOption"
                          value="pharmacy"
                          checked={selectedOption === 'pharmacy'}
                          onChange={() => setSelectedOption('pharmacy')}
                        />
                        <label className="form-check-label" htmlFor="pharmacyOption">
                        Transfer from my old pharmacy
                        </label>
                      </div>

                      {/* Conditionally shown input fields */}
                      {selectedOption === 'pharmacy' && (
                        <div className="mt-3">
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="pharmacyName" className="form-label">Your Old Pharmacy</label>
                              <input type="text" className="form-control bg-white text-black" id="pharmacyName" placeholder="Pharmacy name" />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="pharmacyNumber" className="form-label">Pharmacy Phone Number</label>
                              <input type="tel" className="form-control bg-white text-black" id="pharmacyNumber" placeholder="(___) ___-____" />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="pharmacyFax" className="form-label">Pharmacy Fax Number <span className="text-muted">(optional)</span></label>
                              <input type="tel" className="form-control bg-white text-black" id="pharmacyFax" placeholder="(___) ___-____" />
                            </div>
                          </div>
                          <button className="btn btn-primary" type="button">Save</button>
                        </div>
                      )}
                    </div>
                    {/* Option 3: Transfer from my old pharmacy */}
                    <div className="form-check border rounded p-3 mb-3 bg-light">
                      <div className="d-flex gap-3">
                        <input
                          className="form-check-input ms-1"
                          type="radio"
                          name="rxOption"
                          id="patientOption"
                          value="patient"
                          checked={selectedOption === 'patient'}
                          onChange={() => setSelectedOption('patient')}
                        />
                        <label className="form-check-label" htmlFor="patientOption">
                        I am already a Health Haven patient and you have my Rx on file
                        </label>
                      </div>

                      {/* Conditionally shown input fields */}
                      {selectedOption === 'patient' && (
                        <div className="mt-3">
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="patientName" className="form-label bg-white text-black">Your Doctor's Name</label>
                              <input type="text" className="form-control" id="patientName" placeholder="Your Doctor's full name" />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="patientNumber" className="form-label bg-white text-black">Your Doctor's Number</label>
                              <input type="tel" className="form-control" id="patientNumber" placeholder="(___) ___-____" />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label htmlFor="patientFax" className="form-label bg-white text-black">Your Doctor's Fax Number <span className="text-muted">(optional)</span></label>
                              <input type="tel" className="form-control" id="patientFax" placeholder="(___) ___-____" />
                            </div>
                          </div>
                          <button className="btn btn-primary" type="button">Save</button>
                        </div>
                      )}
                    </div>
                  <div className="d-flex justify-content-end">
                    {/* <button className="btn btn-secondary" onClick={prevStep}>
                      Back
                    </button> */}
                    <button className="btn btn-primary" onClick={nextStep}>
                      Next - Shipping Info
                    </button>
                  </div>
                </>
              )}
            </div>

            <h4 className="mb-3">4. Shipping Information  <small>(Step 4 of 5)</small></h4>
            <div className="border-bottom pb-2 mb-3">
              {step === 4 && (
                <>
                <p className="text-danger mb-2">Orders typically require 3-5 days of processing time before being shipped. Shipping estimates do not include processing time.</p>
                <h5>Shipping Method</h5>

                  {/* USPS Option */}
                  <div
                    className={`border rounded p-3 mb-3 ${selectedMethod === "usps" ? "border-primary" : ""}`}
                    onClick={() => setSelectedMethod("usps")}
                    style={{ cursor: "pointer",  width: '70%' }}
                  >
                    <div className="form-check d-flex justify-content-between align-items-start">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingMethod"
                          checked={selectedMethod === "usps"}
                          onChange={() => setSelectedMethod("usps")}
                        />
                        <label className="form-check-label ms-2">
                          <strong>USPS Standard</strong><br />
                          <span className="text-primary">7–10 Business Days</span>
                        </label>
                      </div>
                      <div className="fw-bold">$5.00</div>
                    </div>

                    {/* Signature Option (only for USPS) */}
                    {selectedMethod === "usps" && (
                      <div className="form-check mt-3 ms-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={addSignature}
                          onChange={() => setAddSignature(!addSignature)}
                          id="signatureOption"
                        />
                        <div className="d-flex justify-content-between">
                          <div>
                            <label className="form-check-label" htmlFor="signatureOption">
                              Add Signature Confirmation
                            </label>
                            <div className="text-muted small">What is this?</div>
                          </div>
                          <div className="fw-bold mt-1">$7.00</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* FedEx Priority */}
                  <div
                    className={`border rounded p-3 mb-3 ${selectedMethod === "priority" ? "border-primary" : ""}`}
                    onClick={() => setSelectedMethod("priority")}
                    style={{ cursor: "pointer", width: '70%' }}
                  >
                    <div className="form-check d-flex justify-content-between align-items-start">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingMethod"
                          checked={selectedMethod === "priority"}
                          onChange={() => setSelectedMethod("priority")}
                        />
                        <label className="form-check-label ms-2">
                          <strong>FedEx Priority</strong><br />
                          <span className="text-primary">2–3 Business Days</span>
                        </label>
                      </div>
                      <div className="fw-bold">$15.00</div>

                    </div>
                      {/* Signature Option (only for priority) */}
                      {selectedMethod === "priority" && (
                        <div className="form-check mt-3 ms-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={addSignature}
                            onChange={() => setSelectedMethod(!addSignature)}
                            id="methodOption"
                          />
                          <div className="d-flex justify-content-between">
                            <div>
                              <label className="form-check-label" htmlFor="signatureOption">
                                Add Signature Confirmation
                              </label>
                              <div className="text-muted small">What is this?</div>
                            </div>
                            <div className="fw-bold mt-1">$7.00</div>
                          </div>
                        </div>
                      )}
                  </div>

                  {/* FedEx Express */}
                  <div
                    className={`border rounded p-3 mb-4 ${selectedMethod === "express" ? "border-primary" : ""}`}
                    onClick={() => setSelectedMethod("express")}
                    style={{ cursor: "pointer", width: '70%' }}
                  >
                    <div className="form-check d-flex justify-content-between align-items-start">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingMethod"
                          checked={selectedMethod === "express"}
                          onChange={() => setSelectedMethod("express")}
                        />
                        <label className="form-check-label ms-2">
                          <strong>FedEx Express</strong><br />
                          <span className="text-primary">1–2 Business Days</span>
                        </label>
                      </div>
                      <div className="fw-bold">$35.00</div>
                    </div>
                      {/* Signature Option (only for express) */}
                      {selectedMethod === "express" && (
                        <div className="form-check mt-3 ms-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={addSignature}
                            onChange={() => setSelectedMethod(!addSignature)}
                            id="methodOption"
                          />
                          <div className="d-flex justify-content-between">
                            <div>
                              <label className="form-check-label" htmlFor="signatureOption">
                                Add Signature Confirmation
                              </label>
                              <div className="text-muted small">What is this?</div>
                            </div>
                            <div className="fw-bold mt-1">$7.00</div>
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Shipping Address */}
                  <h5>Shipping Address</h5>
                  <div className="border rounded p-3 mb-3 bg-light">
                    <div className="text-uppercase text-muted small mb-2">Shipping Address</div>
                    <div>{formData.firstName} {formData.lastName}<br />
                      11 South State Street<br />
                      {formData.mobile}
                    </div>
                  </div>

                  {/* Address Selector */}
                  <select className="form-select mb-3">
                    <option>Select or add another address</option>
                    {/* Add options dynamically if needed */}
                  </select>
      
                  <div className="d-flex justify-content-end">
                    {/* <button className="btn btn-secondary" onClick={prevStep}>
                      Back
                    </button> */}
                    <button className="btn btn-primary" onClick={nextStep}>
                      Next - Payment
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
            <h4 className="mb-3">5. Payment Information  <small>(Step 5 of 5)</small></h4>
            <div className="border-bottom pb-2 mb-3">
              {step === 5 && (
                <>
                  {/* Billing Address */}
                  <h5>Billing Address</h5>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="sameAsShipping"
                      checked={sameAsShipping}
                      onChange={() => setSameAsShipping(!sameAsShipping)}
                    />
                    <label className="form-check-label" htmlFor="sameAsShipping">
                      Same as shipping address
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <select className="form-select mb-4" >
                        <option>Select or add another address</option>
                        <option>Address 1</option>
                        <option>Address 2</option>
                      </select>
                    </div>
                  </div>

                  {/* Credit Card Section */}
                  <h5>Credit Card Information</h5>
                  <small>We accept all major credit cards.</small>
                  <div className="mb-3">
                    <img
                      src="https://img.icons8.com/color/48/000000/discover.png"
                      alt="Discover"
                      height="24"
                      className="me-2"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/amex.png"
                      alt="AMEX"
                      height="24"
                      className="me-2"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="Visa"
                      height="24"
                      className="me-2"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                      alt="MasterCard"
                      height="24"
                    />
                  </div>

                  {/* Card Number */}
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faCreditCard  } className="star-icon"/>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 1234 1234 1234"
                      value={cardInfo.number}
                      onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                    />
                    <span className="input-group-text bg-dark text-white">
                      <a href="">
                        <i className="bi bi-credit-card-fill me-1"></i> link &nbsp; <strong>9672</strong>
                      </a>
                    </span>
                  </div>

                  {/* Expiry & CVC */}
                  <div className="d-flex gap-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM / YY"
                      value={cardInfo.expiry}
                      onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CVC"
                      value={cardInfo.cvc}
                      onChange={(e) => setCardInfo({ ...cardInfo, cvc: e.target.value })}
                    />
                  </div>

                  {/* Security Message */}
                  <div className="mb-3 text-muted small">
                    🔒 100% secure payment.
                  </div>

                  {/* Stripe Badge */}
                  <button className="btn btn-outline-primary btn-sm mb-4">
                    Powered by Stripe
                  </button>

                  {/* Place Order Button */}
                  <div className="d-flex justify-content-end mb-4">
                    <button className="btn btn-primary py-2" style={{ width: '400px' }} >
                      Place Your Order
                    </button>
                  </div>
                </>
              )}
            </div>
        </div>

        {/* Cart Summary (Right Side) */}
        <div className="col-md-5 text-start">
          <div className="border rounded p-3">
            <h5 className='border-bottom pb-3'>My Cart</h5>
            <div className="d-flex justify-content-between py-2 text-primary">
              <div>
                <strong>CART DETAILS (1 Item)</strong>
              </div>
              <span>PRICE</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <div className="d-flex gap-3">
                <div className="cart_image_main">
                    <img src={P1} alt="" />
                </div>
                <div>
                  <strong>Tadalafil (Cialis)</strong>
                  <br />
                  <small className="text-muted">Tablet • 2.5 mg • 30ct</small>
                  <div className="cart_product_counter_parent mt-4 d-flex align-content-center gap-2">
                    <p>QTY:</p>
                    <div className="cart_product_counter d-flex align-content-center" >
                        <div className='cart_counter_btn' onClick={handleDecrease}>-</div>
                        <span>{quantity}</span>
                        <div className='cart_counter_btn' onClick={handleIncrease}>+</div>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <Link to={`/cart`} >
                      <div className="d-flex align-content-center mt-3 gap-2" >
                        <FontAwesomeIcon icon={faTrash } className="star-icon mt-1"/>
                        <small>Remove</small>
                      </div>
                    </Link>
                    <Link to={`/cart`} >
                      <div className="d-flex align-content-center mt-3 gap-2" >
                        <FontAwesomeIcon icon={faEdit} className="star-icon mt-1"/>
                        <small>Edit</small>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <span>$27.00</span>
            </div>
            <div className="pt-3">
              <div className="d-flex justify-content-between  mb-1">
                <p>Subtotal</p>
                <p>$27.00</p>
              </div>
              <div className="d-flex justify-content-between  mb-1">
                <p>Shipping</p>
                <p>$5.00</p>
              </div>
              <div className="d-flex justify-content-between  mb-1">
                <p>Estimated Tax</p>
                <p>TBD</p>
              </div>
              <div className="d-flex justify-content-between mt-3 mb-1">
                <p className='text-primary'>ORDER TOTAL</p>
                <p className='text-primary'>$32.00</p>
              </div>
            </div>
            <div className="d-flex  align-content-center offer_code_input">
              <input type="text" className="form-control" placeholder="Offer code" />
              <button className="btn py-0">Apply</button>
            </div>
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
    </div>
   </>
  );
};

export default Checkout;