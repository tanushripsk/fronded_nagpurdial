import React, { useState } from "react";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component

function Train() {
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

  // Sample data for demonstration
  const whatsappContacts = [
    { id1: 1, text1: "Agent A" },
    // { id1: 2, text1: "Agent B" },
    // { id1: 3, text1: "Agent C" },
  ];

  const whatsappContacts1 = [
    { id2: 1, text2: "Agent X" },
    // { id2: 2, text2: "Agent Y" },
    // { id2: 3, text2: "Agent Z" },
  ];
  const whatsappContacts2 = [
    { id2: 1, text2: "Agent X" },
    // { id2: 2, text2: "Agent Y" },
    // { id2: 3, text2: "Agent Z" },
  ];

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {["Flight", "Hotel", "Bus", "Train", "Cab", "Visa", "International Sim Card"].map((item, index) => (
              <li key={index} className={`nav-item ${item === "Train" ? "active" : ""}`}>
                <a className="nav-link" href={`/${item.replace(" ", "").toLowerCase()}`}>
                  <b>{item}</b>
                  {item === "Train" && <span className="sr-only">(current)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner">
        <div style={{ padding: "10px" }}></div>
      </div>

      <div style={{ padding: "10px" }}></div>

      <div>
        <h5>
          <strong>
            Book Train Online with{" "}
            <span style={{ color: "#FF3F07", fontSize: "20px", fontFamily: "ArialBlack" }}>
              Nagpur{" "}
            </span>
            Dial{" "}
          </strong>
        </h5>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Welcome to Nagpur Dial, your one-stop destination for booking train tickets online with convenience and efficiency. Skip the long lines and tedious ticket counters – with Nagpur Dial, you can effortlessly plan your rail journey, select your preferred seats, and secure your tickets from the comfort of your home or on-the-go.
        </p>
      </div>

      {/* Client Sections */}
      {[{
        id: 1,
        title: "T3 Tourism Tours and Travels agency in Nagpur",
        address: "Swamy Samarth Commercial Complex, S/409, 4th floor, Dharampeth, Nagpur, Maharashtra 440010",
        description: "Flight Ticket Corporate Ticket, Luxury Vacation, Honeymoon, Cruises, Visa, Forex, Travel insurance, Chartered plane, Private yacht, Concierge, Group Tours, Jungle tours, Budget tours, Religious tours",
        contacts: whatsappContacts,
        className:"mx-2"
      }, {
        id: 2,
        title: "GHUMANEWALA TRAVEL SERVICES",
        address: "Plot No. 45, Sugandh, opp. Childrens Traffic Park, Dharampeth, Nagpur, Maharashtra 440010",
        description: "Hotels, Tickets, Cruises, MiceTours, Visa Assistance",
        contacts: whatsappContacts1,
              className:"mx-2"
      }, {
        id: 3,
        title: "DHANLAXMI TOURS AND TRAVELS",
        address: "Rahul Complex, Wing 1, Block No. 40 Near S.T. Stand, Ganeshpeth, Nagpur",
        description: "Tours & Travels",
        contacts: whatsappContacts2,
              className:"mx-2"
      }].map((client, index) => (
        <div key={index} className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id={`carouselExampleSlidesOnly${index + 1}`}
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    {[1, 2, 3].map(slide => (
                      <div key={slide} className={`carousel-item ${slide === 1 ? 'active' : ''}`}>
                        <img
                          src={`./images/client/ss${slide}.png`}
                          className="d-block w-100"
                          alt={`Slide ${slide}`}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href={`#carouselExampleSlidesOnly${index + 1}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#carouselExampleSlidesOnly${index + 1}`}
                    role="button"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp">
                <b>{client.title}</b>
              </h5>
              <p>{client.address}</p>
              <p style={{ color: "grey" }}>{client.description}</p>
              {[...Array(5)].map((_, starIndex) => (
                <i key={starIndex} className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              ))}
              <br />
              {client.contacts.map((contact) => (
                <div key={contact.id1 || contact.id2} className="col-lg-4">
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
                      <b> Chat with {contact.text1 || contact.text2}</b>
                    </button>
                  </div>
                </div>
              ))}
              <br />
            </div>
          </div>
        </div>
      ))}

      {/* Popular Train Travel Agencies */}
      <hr />
      <h5>
        <strong>
          Popular Train Travel Agency in{" "}
          <span style={{ color: "#FF3F07" }}>Nagpur</span>
        </strong>
      </h5>
      <p style={{ color: "grey" }}>
        T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS |
      </p>
      <hr />

      {/* Modals for OTP and Contact1 */}
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

export default Train;
