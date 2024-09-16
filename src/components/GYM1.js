import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CgSpinner } from 'react-icons/cg';
import { toast, Toaster } from 'react-hot-toast';
import { auth } from '../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import WhatsAppLinks from './WhatsAppLinks';
import OtpInput from 'otp-input-react'; // Assuming this is a library for OTP input

const gyms = [
  {
    name: 'Strong Muscle Gym',
    address: 'Chikli road, New akash Nagar, Tapasya vidhyalaya, Manewada, plot no- 11',
    phoneNumber: '919975288300',
  }
];

const GYM1 = () => {
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const [selectedGymIndex, setSelectedGymIndex] = useState(null);

  const generateWhatsAppLinks = () => {
    return gyms.map(gym => {
      return `https://api.whatsapp.com/send?phone=${encodeURIComponent(gym.phoneNumber)}`;
    });
  };

  const whatsappLinks = generateWhatsAppLinks();

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          sendOTP(); // Proceed to send OTP after verification
        },
        'expired-callback': () => {},
      }, auth);
    }
  };

  const sendOTP = () => {
    setLoading(true);
    const appVerifier = window.recaptchaVerifier;
    const formatPh = `+${ph}`;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true); // Show OTP input field after OTP is sent
        toast.success('OTP sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error('Failed to send OTP. Please try again later.');
      });
  };

  const openWhatsApp = (index) => {
    if (index !== null && index < gyms.length) {
      const whatsappLink = whatsappLinks[index];
      window.open(whatsappLink, '_blank');
    }
  };

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then((res) => {
        setLoading(false);
        toast.success('OTP verified successfully!');
        openWhatsApp(selectedGymIndex); // Open WhatsApp after OTP verification
      })
      .catch((error) => {
        setLoading(false);
        toast.error('Failed to verify OTP. Please try again.');
      });
  };

  const handleButtonClick = (index) => {
    setSelectedGymIndex(index);
    setPh(gyms[index].phoneNumber); // Set phone number for OTP sending
    onCaptchVerify(); // Trigger Captcha verification and OTP sending
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        <div>
          <h5><strong>Top Gyms in Nagpur</strong></h5>
          {gyms.map((gym, index) => (
            <div key={index} className="beauty">
              <div className="row">
                <div className="col-lg-4">
                  <div className="container">
                    <br />
                    <div id={`carouselExampleSlidesOnly${index}`} className="carousel slide" data-ride="carousel" data-interval="false">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="./images/client/master.png" className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <h5 className="bp mt-1"><b>{gym.name}</b></h5>
                  <p>{gym.address}</p>

                  <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>

                  <div className="container mt-1">
                    {showOTP ? (
                      <>
                        <label
                          htmlFor="otp"
                          className="font-bold text-xl text-white text-center"
                        >
                          Enter your OTP
                        </label>
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          OTPLength={6}
                          otpType="number"
                          disabled={loading}
                          autoFocus
                          className="opt-container"
                        />
                        <div style={{ padding: '2px' }}></div>
                        <button
                          onClick={onOTPVerify}
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading && (
                            <CgSpinner size={20} className="mt-1 animate-spin" />
                          )}
                          <span>{loading ? 'Verifying OTP...' : 'Verify OTP'}</span>
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleButtonClick(index)}
                      >
                        <i className="fa fa-comments" style={{ fontSize: '20px', color: 'red' }}></i>
                        <b> Chat with {gym.name}</b>
                      </button>
                    )}
                  </div>

                  <WhatsAppLinks links={whatsappLinks} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GYM1;
