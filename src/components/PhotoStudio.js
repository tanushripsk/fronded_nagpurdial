import React, { useState } from "react";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component
import PopularSearch from "./PopularSearch";

const whatsappContacts = [
  { id: 1, phone: "919850332177", text1: "SNAPSHOT STUDIO" },
  // { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 2, phone: "917798421296", text2: "RK Photographyl" },
  // Add more contacts as needed
];

const whatsappContacts2 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 3, phone: "917447462244", text3: "RentOCamera Services" },
  // Add more contacts as needed
];

function PhotoStudio() {
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
        <hr />

        <div style={{ padding: "2px" }}></div>
        <div className="banner10 ">
          <div style={{ padding: "15px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <h5>
          <strong>Nagpur's Top Photo Studio</strong>
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
                <b>SNAPSHOT STUDIO</b>
              </h5>
              <p>
                Netaji Market, shop no:59,, Sitabuldi, Nagpur, Maharashtra
                440012
              </p>

              <p>
                Photo Printing | Video Editing| Whatsapp Invitation Data
                Recovery| VHS to Digital Video convertion | Photo Restoration |
                Collage Desing | Albbum Designing | 360 Photography
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

              <div className="container mt-1">
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
                <b>RK Photography</b>
              </h5>
              <p>Pardi Nagpur 441805</p>

              <p>
                wedding shoot | Candid shoot| Birthday shoot| Engagement shoot|
                Prewedding photoshoot| Baby Showers| Photoshoot
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
                <b>RentOCamera Services</b>
              </h5>
              <p>
                LG 203, Fortune Mall, near Jhansi Rani Square, Sitabuldi,
                Nagpur, Maharashtra 440012
              </p>

              <p>
                DSLR Camera Rental Services | Pickup and Drop Services | Special
                Deals for Wildlife lovers |Camera handling details | Accessories
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

        <hr />
        <PopularSearch />
        <hr />
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

        <hr />
      </div>
    </div>
  );
}

export default PhotoStudio;
