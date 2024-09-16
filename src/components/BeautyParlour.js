import React, { useState } from "react";
import "../App.css";
import Contact1 from "./Contact1";
import Otp3 from "../Otp3";

// Sample contacts
const whatsappContacts = [
  { id: 1, phone: "918237339021", text: "Prime Exotica Salon" },
];
const whatsappContacts2 = [
  { id: 1, phone: "918956004008", text: "Master Cut Salon" },
];
const whatsappContacts3 = [
  { id: 1, phone: "919049608586", text: "MENS PARLOR" },
];

const BeautyParlour = () => {
  const [showOTPModal, setShowOTPModal] = useState(false);
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

  const parlourData = [
    {
      name: "Prime Exotica Salon Nagpur",
      address: "ETERNITY MALL, Sitabuldi, Nagpur, Maharashtra 440010",
      description:
        "Get pampered by professionals beauty services, also Get Complete Hair Services From Haircut, Hair Color To Hair Treatment",
      images: [
        "./images/client/master.png",
        "./images/client/grow your business.png",
        "./images/client/mens.png",
      ],
      contacts: whatsappContacts,
    },
    {
      name: "The Master Cut Salon",
      address: "Fortune Mall, Sitabuldi, Nagpur, Maharashtra 440012",
      description: "Unisex Salon",
      images: [
        "./images/client/master.png",
        "./images/client/grow your business.png",
        "./images/client/mens.png",
      ],
      contacts: whatsappContacts2,
    },
    {
      name: "MENS PARLOR HAIR SALON",
      address: "513, INDORA SQ., KAMPTEE ROAD, opp. TULI JASWANT MALL, Nagpur",
      description: "Hair salon",
      images: [
        "./images/client/master.png",
        "./images/client/grow your business.png",
        "./images/client/mens.png",
      ],
      contacts: whatsappContacts3,
    },
  ];

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div className="banner1">
          <div style={{ padding: "10px" }}></div>
        </div>
        <h5>
          <strong>Nagpur's Top Beauty Parlour</strong>
        </h5>

        {/* Beauty Parlour Listings */}
        {parlourData.map((parlour, index) => (
          <div className="beauty" key={index}>
            <div className="row">
              <div className="col-lg-4">
                <div className="container">
                  <div
                    id={`carouselExampleSlidesOnly${index}`}
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div className="carousel-inner">
                      {parlour.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}
                        >
                          <img src={image} className="d-block w-100" alt={`Slide ${imgIndex + 1}`} />
                        </div>
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href={`#carouselExampleSlidesOnly${index}`}
                      role="button"
                      data-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only text-danger">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href={`#carouselExampleSlidesOnly${index}`}
                      role="button"
                      data-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only text-danger">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <h5 className="bp mt-1" style={{ marginBottom: "5px" }}>
                  <b>{parlour.name}</b>
                </h5>
                <p className="bp1">{parlour.address}</p>
                <p className="bp2" style={{ color: "grey" }}>
                  {parlour.description}
                </p>
                <div className="stars">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
                  ))}
                  <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>
                </div>
                {parlour.contacts.map((contact) => (
                  <div key={contact.id} className="col-lg-4">
                    <div className="container mt-1">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleContactButtonClick(contact)}
                      >
                        <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                        <b> Chat with {contact.text}</b>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "5px" }}></div>
          </div>
        ))}

        {/* Modals for OTP and Contact1 */}
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
    </div>
  );
};

export default BeautyParlour;
