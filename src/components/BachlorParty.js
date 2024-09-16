import React, { useState } from "react";
import "../App.css"; // Assuming it's an CSS file, not JS

import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

// Sample contact data
const whatsappContacts = [
  { id: 1, phone: "919975288300", text: "Nagpurdial" },
  // Add more contacts as needed
];

function BachlorParty() {
  const [showOTPModal, setShowOTPModal] = useState(true);
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
        <div className="banner24">
          <div style={{ padding: "10px" }}></div>
        </div>
        <h5>
          <strong>Nagpur's Top Bachlor's Party</strong>
        </h5>
        <div className="beauty">
          <div className="row">
            {/* Carousel Section */}
            <div className="col-lg-4">
              <div className="container">
                <div
                  id="carouselExampleSlidesOnly"
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
                        src="./images/client/grow-your-business.png"
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
                    href="#carouselExampleSlidesOnly"
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
                    href="#carouselExampleSlidesOnly"
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

            {/* Details Section */}
            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>No data</b>
              </h5>
              <p className="bp1">No data</p>
              <p className="bp2" style={{ color: "grey" }}>
                No data
              </p>
              <div className="rating">
                <i
                  className="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  className="fa fa-star-half-full"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
              </div>

              {/* Contact Buttons */}
              {whatsappContacts.map((contact) => (
                <div key={contact.id} className="container mt-1">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleContactButtonClick(contact)}
                  >
                    <i
                      className="fa fa-comments"
                      style={{ fontSize: "20px", color: "red" }}
                    ></i>
                    <b> Chat with {contact.text}</b>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        
        <div style={{ padding: "2px" }}></div>
      </div>

      {/* OTP Modal */}
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

      {/* Contact Form Modal */}
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

export default BachlorParty;
