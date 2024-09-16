import React, { useState } from "react";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component

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

function PressMedia() {
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
        <div class="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />

        <div class="media">
          <div class="container mt-3">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link " href="/corporatemedia">
                  Media(all)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/press">
                  Press
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Video">
                  Videos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link hh" href="/report">
                  Consumers Reports
                </a>
                <a class="nav-link h" href="/report">
                  Reports
                </a>
              </li>
            </ul>

            <div style={{ padding: "15px" }}></div>
            <div class="row  mt-3">
              <div class="col-lg-4 p-4 mt-2 media1 mx-3 ">
                <img
                  src="./images/Home services/news2.jpeg"
                  class="igm"
                  alt="new2"
                />
              </div>
              <div class="col-lg-8 media11 mx-3 p-2 m-2">
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />
      </div>
    </div>
  );
}
export default PressMedia;
