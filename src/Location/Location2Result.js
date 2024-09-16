import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

const Location2Result = () => {
  const { query } = useParams();
  const [locations, setLocations] = useState([]);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        // const response = await axios.post(
        //   "http://localhost:3000/api/location",

        const response = await axios.post(
          "http://localhost:3000/api/location",
          {
            locationsName: query,
          }
        );
        setLocations(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocations();
  }, [query]);

  const handleChatButtonClick = (location) => {
    setCurrentLocation(location);
    setShowOTPModal(true);
  };

  const handleCloseModal = () => {
    setShowOTPModal(false);
    setShowContactForm(false);
    setSelectedContact(null);
  };

  // const handleOtpVerified = () => {
  if (currentLocation) {
    window.open(
      `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        currentLocation.number
      )}&text=Hi, I found your Business on NagpurDial location in ${encodeURIComponent(
        currentLocation.name
      )}.`,
      "_blank"
    );
    // }
    handleCloseModal();
  }

  const handleFormSuccess = (contactNumber) => {
    window.open(
      `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        contactNumber
      )}&text=Hello, I have just submitted a contact form.`,
      "_blank"
    );
  };

  return (
    <Container>
      <div className="banner-location ">
        <div style={{ padding: "10px" }}></div>
      </div>
      <h4 className="mt-4 mb-4">
        <strong>Search Results for "{query}"</strong>
      </h4>

      <Row>
        {locations.map((location) => (
          <Col lg={12} key={location._id}>
            <div style={{ padding: "10px" }}></div>
            <div className="beauty">
              <br />
              <Row>
                <Col lg={4}>
                  {/* Carousel */}
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../images/client/business123.png"
                        alt="Slide 1"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col lg={8}>
                  {/* Description, Title, Button, Price */}
                  <div className="detail-info">
                    <h4 style={{ color: "green", fontWeight: "bold" }}>
                      {location.description}
                    </h4>
                    <div style={{ padding: "2px" }}></div>
                    <h6>{location.name}</h6>
                    {/* <p style={{ display: "none" }}>Number: {location.number}</p> */}
                    <p>Number: {location.number}</p>
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "26px", color: "#FFC300" }}
                    ></i>
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "26px", color: "#FFC300" }}
                    ></i>
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "26px", color: "#FFC300" }}
                    ></i>
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "26px", color: "#FFC300" }}
                    ></i>
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "26px", color: "#FFC300" }}
                    ></i>
                    <div style={{ padding: "8px" }}></div>
                    <Button
                      variant="primary"
                      onClick={() => handleChatButtonClick(location)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      Chat with {location.description}
                    </Button>
                  </div>
                </Col>
              </Row>
              <br />
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for OTP Verification */}
      {/* {showOTPModal && (
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
              </div> */}
      {/* <div className="modal-body">
                <Otp3
                  onClose={handleCloseModal}
                  onOtpVerified={handleOtpVerified}
                />
              </div> */}
      {/* </div>
          </div>
        </div>
      )} */}

      {/* Modal for Contact Form */}
      {/* {showContactForm && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Form</h5>
                    type="button"
                  className="btn-close"
                  <button
                    aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <Contact1
                  contact={currentLocation}
                  onClose={handleCloseModal}
                  onSuccess={handleFormSuccess}
                />
              </div>
            </div>
          </div>
        </div>
      )} */}
    </Container>
  );
};
export default Location2Result;
