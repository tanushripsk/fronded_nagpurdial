import React, { useState } from "react";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

const whatsappContacts = [
  { id: 1, phone: "918048119001", text1: "Reliable Trading & Company" },
];
const whatsappContacts1 = [
  { id: 2, phone: "917104237998", text2: "Metalfab Hightech Private Limited" },
];
const whatsappContacts2 = [
  {
    id: 3,
    phone: "917498336490",
    text3: "BALPANDE INDUSTRIES PRIVATE LIMITED",
  },
];
const whatsappContacts3 = [
  { id: 4, phone: "918208493417", text4: "SP Jute Craft" },
];

function Manufacturing() {
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
      <div class="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div class="banner18 ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <h5>
          <strong>Nagpur's Top Manufacturing Services</strong>
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
                <b>Reliable Trading & Company</b>
              </h5>
              <p class="bp1">
                Kaniyapuram Housing Society, Dabha Wadi, Dabha Road, Wadi,
                Nagpur, Maharashtra - 440023, India
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Ride On Roller Machine, Bar Bending Machine, Bar Cutting
                Machine, Stirrup Bending Machine Vibratory Screed Machine, Rope
                Suspended Platform,Vibrating ,Paver Screed Roller, Concrete
                Power Trowel Machine,
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
                <b>Metalfab Hightech Private Limited</b>
              </h5>
              <p class="bp1">
                E-21-25 & 33 B/2, MIDC, Hingna Road, Nagpur - 440028 (MH) India
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Core Sectors like Power, Sugar, Cement and Infrastructure with a
                major thrust in Thermal and Wind Power.
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
                class="fa fa-star-half-full"
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

        <div style={{ padding: "2px" }}></div>
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
              <h5 class="bp mt-1">
                <b>BALPANDE INDUSTRIES PRIVATE LIMITED</b>
              </h5>
              <p class="bp1">
                R.K.Business Centre, 194 Cement Road, Dharampeth Extension,
                Nagpur – 440010
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Calcined Alumina powder | Alumina Powder | Alumina Hydrates
                Aluminium Ingots | Calcined Bauxite Steel Scrap | Laterite |
                Iron Ores
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
                class="fa fa-star-half-full"
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
                  id="carouselExampleSlidesOnly4"
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
              <h5 class="bp mt-1">
                <b>SP Jute Craft Enterprises</b>
              </h5>
              <p class="bp1">
                3rd Floor Ghole Building ,Beside Trillium Mall,Medical Square
                Nagpur -440003
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Jute shopping bags | Jute designer bags | Eco friendly Jute
                conference bags | Jute promotional bags | Jute Laptop Bags |
                Jute Corporate Bags
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
                class="fa fa-star-half-full"
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

export default Manufacturing;
