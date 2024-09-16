import React, { useState } from "react";
import Contact1 from "./Contact1"; // Ensure this path is correct
import Otp3 from "../Otp3"; // Ensure this path is correct
import "../App.css";

const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },
  // Add more contacts as needed
];

function Cab() {
  const [showOTPModal, setShowOTPModal] = useState(false); // Start with OTP modal hidden
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
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {["Flight", "Hotel", "Bus", "Train", "Cab", "Visa Assistance", "International Sim Card"].map((item, index) => (
              <li key={index} className={`nav-item ${item === "Cab" ? "active" : ""}`}>
                <a className="nav-link" href={`/${item.toLowerCase().replace(/ /g, "")}`}>
                  <b>{item}</b>
                  {item === "Cab" && <span className="sr-only">(current)</span>}
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

      {/* Content */}
      <div style={{ padding: "10px" }}></div>
      <div>
        <h5>
          <strong>
            Top Cool Cab Services in{" "}
            <span style={{ color: "#FF3F07", fontSize: "20px", fontFamily: "Arial Black" }}>
              Nagpur
            </span>
          </strong>
        </h5>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Are you looking for hassle-free transportation solutions in Nagpur? Look no further! Nagpur is home to a variety of reputable cool cab services that offer comfortable and convenient travel experiences for both locals and visitors alike. From airport transfers to city tours, these top cool cab services in Nagpur ensure a smooth and enjoyable journey from start to finish.
        </p>
      </div>

      {/* Client 1 */}
      <div className="beauty">
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <br />
              <div id="carouselExampleSlidesOnly1" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                  {["ss1.png", "ss2.png", "ss3.png"].map((src, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img src={`./images/client/${src}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only text-danger">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleSlidesOnly1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only text-danger">Next</span>
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h5 className="bp"><b>T3 Tourism Tours and Travels agency in Nagpur</b></h5>
            <p>Swamy Samarth Commercial Complex, S/409, 4th floor, Dharampeth, Nagpur, Maharashtra 440010.</p>
            <p style={{ color: "grey" }}>
              Flight Ticket Corporate Ticket, Luxury Vacation, Honeymoon, Cruises, Visa, Forex, Travel insurance, Chartered plane, Private yacht, Concierge, Group Tours, Jungle tours, Budget tours, Religious tours,
            </p>
            <div>
              {[...Array(5)].map((_, index) => (
                <i key={index} className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              ))}
            </div>
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

      {/* Client 2 */}
      <hr />
      <h5>
        <strong>
          Popular Travel Agency in{" "}
          <span style={{ color: "#FF3F07" }}>Nagpur</span>
        </strong>
      </h5>
      <p style={{ color: "grey" }}>
        T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS | T3 Tourism Tours and Travels agency in Nagpur | GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS |
      </p>

      <hr />

      {/* Modals */}
      {showOTPModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">OTP Verification</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
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
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
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

export default Cab;
