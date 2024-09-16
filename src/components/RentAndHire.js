import React, { useState } from "react";
import "../App.css";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component
import PopularSearch from "./PopularSearch";

const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },
  // { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 2, phone: "919975288300", text2: "Nagpurdial" },
  // Add more contacts as needed
];

function RentAndHire() {
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
        <div class="banner3 ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <div style={{ padding: "2px" }}></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img ">
                <img
                  src="./images/fafa icon/mini bus.png"
                  class="icons-img"
                  alt="bus"
                />
                Mini Bus on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img ">
                <img
                  src="./images/fafa icon/truck.png"
                  class="icons-img"
                  alt="truck"
                />
                Tempos on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                <img
                  src="./images/fafa icon/customer.png"
                  class="icons-img"
                  alt="customer"
                />
                Constumer Rent
              </a>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                <img
                  src="./images/fafa icon/truck.png"
                  class="icons-img"
                  alt="truck"
                />
                Tempos on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                <img
                  src="./images/fafa icon/mini bus.png"
                  class="icons-img"
                  alt="mini bus "
                />
                Mini Bus on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                {" "}
                <img
                  src="./images/fafa icon/ac.png"
                  class="icons-img"
                  alt="ac"
                />
                AC on Rent
              </a>
            </div>
          </div>
          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                <img
                  src="./images/fafa icon/customer.png"
                  class="icons-img"
                  alt="customer"
                />
                Constumer Rent
              </a>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                <img
                  src="./images/fafa icon/ac.png"
                  class="icons-img"
                  alt="ac"
                />
                AC on Rent
              </a>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                {" "}
                <img
                  src="./images/fafa icon/caar.png"
                  class="icons-img"
                  alt="caar"
                />
                Car on Rent
              </a>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                <img
                  src="./images/fafa icon/buss.png"
                  class="icons-img"
                  alt="buss"
                />
                Bus on Rent
              </a>
            </div>
          </div>
        </div>
        <hr />
        <PopularSearch />
        <hr />
        <div style={{ padding: "2px" }}></div>
      </div>
    </div>
  );
}

export default RentAndHire;
