import React, { useState } from "react";
import "../App.css";
import Contact1 from "./Contact1"; // Ensure the correct import path
import Otp3 from "../Otp3"; // Ensure the correct import path

const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },
  // Add more contacts as needed
];

function ACRepairShops() {
  const [showOTPModal, setShowOTPModal] = useState(false);
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
        <div className="banner45">
          <div style={{ padding: "10px" }}></div>
        </div>
        <h5><strong>Top Carrier AC Repair & Services in Nagpur</strong></h5>
      </div>
      <div className="beauty">
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <div
                id="carouselExampleSlidesOnly3"
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
                  href="#carouselExampleSlidesOnly3"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleSlidesOnly3"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h5 className="bp mt-1"><b>No Data</b></h5>
            <p className="bp1">NO Data</p>
            <p className="bp2" style={{ color: "grey" }}>NO Data</p>
            <div className="rating">
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>
            </div>
            <div className="container mt-1">
              {whatsappContacts.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                      <b> Chat with {contact.text1}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal for OTP and Contact1 */}
      {showOTPModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
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
                <Otp3 onClose={handleCloseModal} onOtpVerified={handleOtpVerified} />
              </div>
            </div>
          </div>
        </div>
      )}
      {showContactForm && (
        <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
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
                <Contact1 contact={selectedContact} onClose={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ACRepairShops;
