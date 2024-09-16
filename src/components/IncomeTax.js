import React, { useState } from "react";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";
import "../App.css";
const whatsappContacts = [
  { id: 1, phone: "917122248245", text1: "Aspire Aesthetics" },
];
const whatsappContacts1 = [
  { id: 2, phone: "919370402861", text2: "LegalFin Advisors" },
];
function IncomeTax() {
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
    <div class="container">
    <div class="container-fluid p-5">
      <div style={{ padding: "2px" }}></div>
      <div className="banner16">
        <div style={{ padding: "10px" }}></div>
      </div>
      <div style={{ padding: "5px" }}></div>

      <h5>
        <strong>Top GST's offices in Nagpur</strong>
      </h5>
      <div style={{ padding: "2px" }}></div>
      {/* <!-- client-1 --> */}

      <div style={{ padding: "2px" }}></div>
      <div class="beauty">
        <div class="row">
          <div class="col-lg-4">
            <div class="container">
              <br />
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="./images/client/master.png"
                      class="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/client/grow your business.png"
                      class="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/client/mens.png"
                      class="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleSlidesOnly"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only text-danger">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleSlidesOnly"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only text-danger">Next</span>
                </a>
                <br />
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <h5 class="bp mt-1">
              <b>A1 Investments</b>
            </h5>
            <p>
              Plot no. 53, Ashirwad Towers, Block no. 501 & 502, Besides
              Store, Bajaj Nagar, Nagpur - 440010
            </p>

            <p>
              We aim for SLR (Safety, Liquidity, Returns) in that order
              Services Offered - Goal Based Investment Planning, Personalized
              Investment Planning
            </p>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>

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

      <div style={{ padding: "2px" }}></div>
      <div class="beauty">
        <div class="row">
          <div class="col-lg-4">
            <div class="container">
              <br />
              <div
                id="carouselExampleSlidesOnly1"
                class="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="./images/client/master.png"
                      class="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/client/grow your business.png"
                      class="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/client/mens.png"
                      class="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleSlidesOnly1"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only text-danger">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleSlidesOnly1"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only text-danger">Next</span>
                </a>
                <br />
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <h5 class="bp mt-1">
              <b>LegalFin Advisors - Company</b>
            </h5>
            <p>
              Plot no. 128, Wardha Rd, behind Haldiram's, Ajni Square,
              Vivekanand Nagar, Nagpur, Maharashtra 440015
            </p>

            <p>
              Registration In Nagpur, Trademark Registration, GST
              Registration, Gumasta License & Best CA Firm
            </p>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>
            <i
              class="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>

            {whatsappContacts1.map((contact) => (
              <div key={contact.id2} className="col-lg-4">
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
                    <b> Chat with {contact.text2}</b>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      <hr />
    </div>
  </div>
  );
}

export default IncomeTax;
