import React,{useState} from 'react'
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component

const whatsappContacts = [
  { id: 1, phone: "919112233520", text1: "SP Jute Craft Enterprises" },
  // { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 2, phone: "918999769379", text2: "Refresh Mukhawas & Namkeen" },
  // Add more contacts as needed
];


const whatsappContacts2 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 3, phone: "9177083715871", text3: "Renuka's Cakes Home Baker" },
  // Add more contacts as needed
];




function Store() {
  const [showOTPModal, setShowOTPModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // To store the selected contact information

  const handleContactButtonClick = (contact) => {
    setSelectedContact(contact); // Store the selected contact
    setShowOTPModal(true); // Show the OTP modal
  };

  const handleOtpVerified = () => {
    setShowContactForm(true); // Show contact form after OTP verification
    setShowOTPModal(false); // Close OTP modal after verification
  };

  const handleCloseModal = () => {
    setShowOTPModal(false); // Close both OTP and Contact modals
    setShowContactForm(false);
    setSelectedContact(null); // Clear the selected contact
  };
  return (
    <div className="container">
    <div className="container-fluid p-10">
 
        {/* Banner */}
        <div className="banner20">
            {/* Adjust banner content here */}
        </div>
        <hr />
        {/* Top Store */}
        <h5><strong>Nagpur's Top Store</strong></h5>
        {/* Store Content */}
        {/* Store 1 */}
        <div className="beauty">
            <div className="row">
                <div className="col-lg-4">
                    <div className="container">
                        {/* Carousel */}
                        <div id="carouselExampleSlidesOnly1" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                {/* Adjust carousel items here */}
                            </div>
                            {/* Carousel Controls */}
                            <a className="carousel-control-prev" href="#carouselExampleSlidesOnly1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only text-danger">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleSlidesOnly1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only text-danger">Next</span>
                            </a>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    {/* Store details */}
                    <h5 className="bp mt-1"><b>SP Jute Craft Enterprises</b></h5>
                    <p className="bp1">3rd Floor Ghole Building ,Beside Trillium Mall,Medical Square Nagpur -440003</p>
                    <p className="bp2" style={{ color: 'grey' }}>Jute shopping bags | Jute designer bags | Eco friendly Jute conference bags | Jute promotional bags | Jute Laptop Bags | Jute Corporate Bags</p>
                    {/* Ratings */}
                    <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
                    <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
                    <i className="fa fa-star-half-full" style={{ fontSize: '26px', color: '#FFC300' }}></i>
                 

                    {whatsappContacts.map((contact) => (
                <div key={contact.id1} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text1}</b>
                    </button>
                  </div>
                </div>
              ))}
             
                </div>
            </div>
        </div>
        {/* Repeat the above structure for other stores */}
        <hr />
      
      </div>
       {/* Modal for OTP and Contact1 */}
       {showOTPModal && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">OTP Verification</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <Otp3
                    onClose={handleCloseModal}
                    onOtpVerified={handleOtpVerified}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {showContactForm && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Contact Form</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <Contact1
                    contact={selectedContact}
                    onClose={handleCloseModal}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
    
);
}
export default Store
