import React, { useState } from "react";
import "../App.css";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

// Sample contacts
const whatsappContacts = [
  { id: 1, phone: "918600540777", text: "Viraj Auto Services" },
];

const whatsappContacts1 = [
  { id: 2, phone: "91794134119", text2: "V.S.CAR CARE " },
];

function BikeServices() {
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactButtonClick = (contact) => {
    setSelectedContact(contact);
    setShowOTPModal(true);
  };

  const handleOtpVerified = () => {
    setShowContactForm(true);
    setShowOTPModal(false);
  };

  const handleCloseModal = () => {
    setShowOTPModal(false);
    setShowContactForm(false);
    setSelectedContact(null);
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner47">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        {/* Nagpur's Top Automobile Services */}
        <h5>
          <strong>Nagpur's Top Automobile Services</strong>
        </h5>
        <div style={{ padding: "2px" }}></div>
        
        {/* Bike Service Provider 1 */}
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <div
                  id="carouselExampleSlidesOnly1"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1" style={{ marginBottom: "5px" }}>
                <b>Viraj Auto Services</b>
              </h5>
              <p>Fortune Mall, Sitabuldi, Nagpur</p>
              <p style={{ color: "grey" }}>
                Buying | Selling | Repair | Consultancy | Dealer | Insurance |
                Exchange | Extended Warranty | Annual Service Packages |
                Insurance Renewals
              </p>
              <div className="stars">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
                ))}
                <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              </div>
              {whatsappContacts.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                      style={{width:"250px"}}
                    >
                      <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                      <b> Chat with {contact.text}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bike Service Provider 2 */}
        <div style={{ padding: "5px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <div
                  id="carouselExampleSlidesOnly2"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly2"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly2"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1" style={{ marginBottom: "5px" }}>
                <b>V.S Car Care</b>
              </h5>
              <p>
                Plot No. 2, Near Ramteke Nagar (Manish Nagar), Beltarodi Road,
                Nagpur - 34 Beside Indian Oil Petrol Pump, Besa Square, Nagpur
              </p>
              <p style={{ color: "grey" }}>
                Denting & Painting | Car Sap & Cleaning | Radiator Flush & Clean
                etc.
              </p>
              <div className="stars">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
                ))}
                <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              </div>
              {whatsappContacts1.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                      c
                    >
                      <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                      <b> Chat with {contact.text2}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "5px" }}></div>
        
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
    </div>
  );
}

export default BikeServices;
