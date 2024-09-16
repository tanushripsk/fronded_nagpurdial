import React, { useState } from "react";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

const whatsappContacts = [
  { id: 1, phone: "919822049233", text1: "Alankar Jewellers" },
];
const whatsappContacts1 = [
  { id: 2, phone: "917122760778", text2: "ORRA Diamond Jewellery" },
];
const whatsappContacts2 = [
  { id: 3, phone: "9199234 46062", text3: "Shri krishna Jewellers" },
];
function Jewellary() {
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
        <hr />

        <div style={{ padding: "2px" }}></div>
        <div class="banner27">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <h5>
          <strong>Nagpur's Top Jewellary Shop's</strong>
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
                <b>Alankar Jewellers</b>
              </h5>
              <p class="bp1">
                Itwara Sarafa Bajar, Itwari, Nagpur - 440002 (Nr Nick Galli,)
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Jwellery
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
                <b>ORRA Diamond Jewellery</b>
              </h5>
              <p class="bp1">
                Rachna Galaxy, Plot -10, Ground Floor, Ambazari Rd, opp.
                Wockhardt Hospital, Dharampeth, Nagpur, Maharashtra 440010
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Global Pioneers in craftsmanship of jewelry and diamond
                perfection since 1888
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
                <b>Shri krishna Jewellers</b>
              </h5>
              <p class="bp1">
                Shop No.5, Coffee House Builiding, W High Ct Rd, Gokulpeth,
                Nagpur, Maharashtra 440010
              </p>

              <p class="bp2" style={{ color: "grey" }}>
                Discover Shri Krishna Jewellers' exquisite and expensive
                jewellery. 100% authentic gold hallmark.
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

export default Jewellary;
