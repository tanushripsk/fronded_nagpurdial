import React, { useState } from "react";
import "../App.css";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component
import PopularSearch from "./PopularSearch";

const whatsappContacts = [
  {
    id: 1,
    phone: "919975288300",
    text1: "Neelam Family Garden Restaurant & Catresl",
  },
  // { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 2, phone: "918085106173", text2: "MOMADE FOOD INDUSTRY" },
  // Add more contacts as needed
];
const whatsappContacts2 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  {
    id: 3,
    phone: "919975829891",
    text3: "Cutting Katta Events and Catering Kharbi",
  },
  // Add more contacts as needed
];

const whatsappContacts3 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  {
    id: 4,
    phone: "919975288300",
    text4: "India's First Authentic Pohewala. We Serve, You Taste",
  },
  // Add more contacts as needed
];

function Restaurant() {
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
        <div class="banner36 ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <div style={{ padding: "2px" }}></div>
        <hr />
        <div class="container">
          <center>
            <div class="container">
              <div class="row">
                <div class="col-sm-3 mx-3 sm">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-lg-61">
                        <br />
                        <img
                          src="./images/client/Designer (1).png"
                          class="img8"
                          alt="design1"
                        />
                      </div>
                      <div class="col-lg-6 col-lg-61">
                        <b>
                          <a
                            href="/restro"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            Indian{" "}
                          </a>
                        </b>

                        <h6>- Sea Food</h6>
                        <h6>- Thali</h6>
                        <h6>- Pure Veg</h6>
                        <h6>- Biryani</h6>
                        <h6>- South Indian</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 mx-3 sm">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-lg-61">
                        <br />
                        <img
                          src="./images/client/Designer (2).png"
                          class="img8"
                          alt="design2"
                        />
                      </div>
                      <div class="col-lg-6 col-lg-61">
                        <b>
                          <a
                            href="/restro"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            {" "}
                            Cuisines
                          </a>
                        </b>

                        <h6>- Arabic</h6>
                        <h6>- Pan Asian</h6>
                        <h6>- Korean</h6>
                        <h6>- Chinese</h6>
                        <h6>- Continental</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 mx-3 sm">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-lg-61">
                        <br />
                        <img
                          src="./images/client/Designer (3).png"
                          class="img8"
                          alt="design3"
                        />
                      </div>
                      <div class="col-lg-6 col-lg-61">
                        <b>
                          <a
                            href="/restro"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            Night Clubs
                          </a>
                        </b>
                        <h6>- Bars</h6>
                        <h6>-Restaurants</h6>
                        <h6>- Lounge</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: "5px" }}></div>
              <div class="row">
                <div class="col-sm-3 mx-3 sm">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-lg-61">
                        <br />
                        <img
                          src="./images/client/Designer (4).png"
                          class="img8"
                          alt="design4"
                        />
                      </div>
                      <div class="col-lg-6 col-lg-61">
                        <b>
                          <a
                            href="/restro"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            Quick Bites
                          </a>
                        </b>
                        <h6>-Fast Food</h6>
                        <h6>-Bakeries</h6>
                        <h6>-Coffee Shops</h6>
                        <h6>-Pizza Outlets</h6>
                        <h6>-Biryani Outlets</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 mx-3 sm">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-lg-61">
                        <br />
                        <img
                          src="./images/client/Designer (5).png"
                          class="img8"
                          alt="design5"
                        />
                      </div>
                      <div class="col-lg-6 col-lg-61">
                        <b>
                          <a
                            href="/restro"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            Sweet Tooth
                          </a>
                        </b>

                        <h6>-Cake Shops</h6>
                        <h6>-Desserts</h6>
                        <h6>-Donut Outlets</h6>
                        {/* <!--<h6>- Biryani</h6>-->
                    <!--<h6>- South Indian</h6>--> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 mx-3 sm">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-lg-61">
                        <br />
                        <img
                          src="./images/client/Designer (5).png"
                          class="img8"
                          alt="design6"
                        />
                      </div>
                      <div class="col-lg-6 col-lg-61">
                        <b>
                          <a
                            href="/restro"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            Foodie
                          </a>
                        </b>

                        <h6>- Sea Food</h6>
                        <h6>- Thali</h6>
                        <h6>- Pure Veg</h6>
                        <h6>- Biryani</h6>
                        <h6>- South Indian</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
        <hr />
        <PopularSearch />
        <hr />
        <div style={{ padding: "5px" }}></div>
      </div>
    </div>
  );
}
export default Restaurant;
