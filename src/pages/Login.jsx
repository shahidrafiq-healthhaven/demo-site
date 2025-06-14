import React, { useRef, useState } from "react";
import P1Img from '../assets/images/p1_img.png';
import P2Img from '../assets/images/p2_img.png';
import P3Img from '../assets/images/p3_img.png';
import LoginImg from '../assets/images/login_image.jpg';
import '../App.css'

const Login = () => {
  const inputRefs = useRef([]);
  const [codes, setCodes] = useState(new Array(6).fill(""));
  const [showVerifySection, setShowVerifySection] = useState(false);


  const handleChange = (value, index) => {
    if (/^[0-9a-zA-Z]?$/.test(value)) {
      const updatedCodes = [...codes];
      updatedCodes[index] = value;
      setCodes(updatedCodes);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = codes.join("");
    console.log("Verification Code:", verificationCode);
    // You can now send this code to your API or use it as needed
  };

  return (
    <>
    {!showVerifySection && (
      <div className="signin_section">
        <div className="container">
          <div className="row signin_section_main">
            <div className="col-md-6 signin_left">
              <h2>Sign In</h2>
              <p className="signin_text">
                Enter your email below and we will send a one-time code for password-free sign. <span title="Password-free sign in"></span>
              </p>
              <label htmlFor="email">Email Address</label>
              <br/>
              <input type="email" id="email" placeholder="Your email address" />

              <p className="terms_text">
                By selecting Next, I agree to Health Haven Rx{" "}
                <a href="#">Terms & Conditions</a>
              </p>

              <button type="button" className="btn_primary w-100" onClick={() => setShowVerifySection(true)}>Next</button>
            </div>

            <div className="col-md-6 signin_right">
              <img src={LoginImg} alt="" className="w-100"/>
              {/* <div className="overlay-text">
                <h2>Welcome</h2>
                <p>Sign in and experience a better pharmacy today!</p>
              </div> */}
            </div>

          </div>

        </div>
      </div>
    )}

    {showVerifySection && (
      <div className="verify_email_section">
        <div className="container">
          <div className="verify_email_section_main">
            <h2 >Verify email address</h2>
            <p>We’ve sent a 6-character code to deo@gmail.com. Click <a href="#">here</a>  to resend the code.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="code-input">Verification Code</label>
              <div className="code-input-container">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={code}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="code-input-box"
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={codes.includes("")}
                className="btn_primary w-100 mt-4 mb-5"
              >
                Submit
              </button>
            </form>
            <div className="text-center">
              <a href="" className="text-primary">Back to Sign In Page</a>
            </div>
          </div>
        </div>
      </div>
      )}
      
        {/*Partners Section */}
        <div className="partners_main login_partners_main">
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

export default Login;
