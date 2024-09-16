import React, { useState } from "react";
import "../App.css";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component

const whatsappContacts = [
  { id: 1, phone: "917020959344 ", text1: "ICDI MULTITRADE PVT. LTD" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  { id: 2, phone: "919422174059", text2: "GLOBAL HYDRO ENGINEERS" },
  // Add more contacts as needed
];

function ContractorsClients() {
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
        <div className="banner5">
          <div style={{ padding: "10px" }}></div>
        </div>

        <h5>
          <strong>Top Contractors in Nagpur</strong>
        </h5>

        {/* Client 1 */}
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <div
                  id="carouselExampleSlidesOnly1"
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
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>ICDI MULTITRADE PVT. LTD.</b>
              </h5>
              <p className="bp1">
                ICDI MULTITRADE PVT. LTD. Plot No.9, Rucha Prakashan, C/o
                Madhuri Mule, Gajanan Nagar, Nagpur - 440015
              </p>
              <p className="bp2" style={{ color: "grey" }}>
                Residential | Commercial | Government | Industrial
              </p>
              <div className="stars">
                {[...Array(4)].map((_, index) => (
                  <i
                    key={index}
                    className="fa fa-star"
                    style={{ fontSize: "26px", color: "#FFC300" }}
                  ></i>
                ))}
                <i
                  className="fa fa-star-half-full"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
              </div>
              {whatsappContacts.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{width:"350px"}}
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
        <div style={{ padding: "5px" }}> </div>
        {/* Client 2 */}
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <div
                  id="carouselExampleSlidesOnly2"
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
                    href="#carouselExampleSlidesOnly2"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly2"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>GLOBAL HYDRO ENGINEERS</b>
              </h5>
              <p className="bp1">
                Plot No- 38, Ward No-3, Firth India Colony Rajeev Nagar, Hingna
                Road, Nagpur
              </p>
              <p className="bp2" style={{ color: "grey" }}>
                Hydraulic, Pneumatic
              </p>
              <div className="stars">
                {[...Array(4)].map((_, index) => (
                  <i
                    key={index}
                    className="fa fa-star"
                    style={{ fontSize: "26px", color: "#FFC300" }}
                  ></i>
                ))}
                <i
                  className="fa fa-star-half-full"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
              </div>
              {whatsappContacts1.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{width:"350px"}}
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

        <div style={{ padding: "5px" }}></div>
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        <p style={{ color: "grey", fontSize: "12px" }}>
          Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
          Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
          Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
          Sexologist Doctors | Neurologists | Gynaecologist & Obstetrician |
          Doctors | Train Ticket | Booking Agents | Travel Agents | Paying Guest
          Accommodations | General Physician Doctors | Dentists | Orthopaedic
          Doctors | Chemists | Motor Training Schools | Gastroenterologists |
          Car Rental | Salons | Courier Services | Dance Classes | Pathology
          Labs | Taxi Services | Cake Shops | AC Repair & Services | Mobile
          Phone Dealers | Pet Shops | Dmart | Packers And Movers | Psychiatrists
          | Dharamshalas | Urologist Doctors | Bakeries | Bicycle Dealers |
          Coffee Shops | Paediatricians | Sonography Centres | Yoga Classes |
          Hostels | Cardiologists | Electrical Shops | Skin Care Clinics |
          Diagnostic Centres | Homeopathic Doctors | Physiotherapists | Photo
          Studios | Plumbers | Music Classes | Electricians | Sports Goods
          Dealers | Shoe Dealers | Hair Stylists | Gift Shops | Ophthalmologists
          | Car Repair & Services | Ayurvedic Doctors | Eye Clinics |
          Restaurants | Carpenters | Jewellery Showrooms | Cooks On Hire |
          Stationery Shops | Nephrologists | Caterers | Interior Designers |
          Rehabilitation Centers | Grocery Stores | Banks ATM | 5 Star Hotels |
          Hotels | Resorts | Plastic Surgeons
        </p>

        <hr />

        {/* Modals for OTP and Contact Form */}
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

export default ContractorsClients;
