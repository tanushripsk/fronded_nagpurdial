import React, { useState } from "react";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

const whatsappContacts = [
  { id: 1, phone: "917058557560", text1: "Charu Girls Hostel" },
];
function PGhostel() {
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
        <div style={{ padding: "2px" }}></div>
        <div className="banner ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <h5>
          <strong>Top Paying Guest Accommodations in Nagpur</strong>
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
                <b>Charu Girls Hostel</b>
              </h5>
              <p>Charu Girls Hostel Azad Chowk Sadar, Nagpur</p>

              <p>MARG ERP</p>
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
                class="fa fa-star-half-full"
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

        {/* <!-- client-2 --> */}

        <div style={{ padding: "5px" }}></div>

        <hr />
      </div>
    </div>
  );
}

export default PGhostel;
