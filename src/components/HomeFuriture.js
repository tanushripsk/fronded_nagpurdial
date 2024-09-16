import React, { useState } from "react";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },
];
const whatsappContacts1 = [
  { id: 2, phone: "919764441144", text2: "Bharat Furniture" },
];
const whatsappContacts2 = [
  { id: 3, phone: "919975288300", text3: "Nagpurdial" },
];
const whatsappContacts3 = [
  { id: 4, phone: "919028662792", text4: "The Jain Group Of Manufacturer & Supplier" },
];
function HomeFuriture() {
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
    <div>
      <div class="container">
        <div class="container-fluid p-10">
          <div style={{ padding: "2px" }}></div>
          <div class="banner2 ">
            <div style={{ padding: "10px" }}></div>
          </div>
          <div style={{ padding: "5px" }}></div>

          <h5>
            <strong>Nagpur's Top Furniture Services</strong>
          </h5>
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
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
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
                <h5 class="bp">
                  <b>S.S Furniture</b>
                </h5>
                <p class="bp1">
                  Behind Agrasen Metro Station, Near Blue Daimond School, Jyoti
                  Nagar, Nagpur.
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Manufacturers of Hydraulic Chairs & All Types of Repairing
                  Works
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

                <br />
              </div>
            </div>
          </div>

          <div style={{ padding: "5px" }}></div>
          {/* <!-- client 2 --> */}
          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly2"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly2"
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
                      href="#carouselExampleSlidesOnly2"
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
                <h5 class="bp">
                  <b>Bharat Furniture</b>
                </h5>
                <p class="bp1">
                  Sadar Showroom - 5, Residency Rd, Sadar, Nagpur, Maharashtra
                  440001 Wardha Showroom - 24, Pragati Layout,Somalwada, Wardha
                  Road, Nagpur, Maharashtra 440025
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Home Furniture | Office Furniture | Outdoor Furniture| Modular
                  Kitchen|
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
                <br />
              </div>
            </div>
          </div>

          <div style={{ padding: "5px" }}></div>
          {/* <!--client 3 --> */}
          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly3"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly3"
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
                      href="#carouselExampleSlidesOnly3"
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
                <h5 class="bp">
                  <b>Spanwood Furniture</b>
                </h5>
                <p class="bp1">
                  Hudkeshwar Rd, near Radha Krishna Mandir, Nagpur
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Bedroom | Kitchen | Wardrobe, Sofas| Mattresses| Tables
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

                {whatsappContacts2.map((contact) => (
                  <div key={contact.id3} className="col-lg-4">
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
                        <b> Chat with {contact.text3}</b>
                      </button>
                    </div>
                  </div>
                ))}
                <br />
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }}></div>
          {/* <!-- client 4--> */}
          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly4"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly4"
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
                      href="#carouselExampleSlidesOnly4"
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
                <h5 class="bp">
                  <b>The Jain Group Of Manufacturer & Supplier</b>
                </h5>
                <p class="bp1">Amaravti Road , NAGPUR.</p>
                <p class="bp2" style={{ color: "grey" }}>
                  Window | Wall | Home Decor
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
                {whatsappContacts3.map((contact) => (
                  <div key={contact.id4} className="col-lg-4">
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
                        <b> Chat with {contact.text4}</b>
                      </button>
                    </div>
                  </div>
                ))}
                <br />
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
    </div>
  );
}

export default HomeFuriture;
