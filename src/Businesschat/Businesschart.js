import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Businesschat = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    number: props.data || "", // Initialize with props.data or an empty string
  });
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  useEffect(() => {
    setCredential({ ...credential, number: props.data });
  }, [props.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${host}/api/auth/businesschat`,
        credential
      );
      const json = response.data;
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        alert("Businesschat Data saved successfully!"); // Show alert
        openWhatsApp(); // Open WhatsApp link after alert
      } else {
        alert("Failed to submit form. Please fill in all fields correctly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const openWhatsApp = () => {
    const { name, email, number } = credential;
    const message = `I found your business on NagpurDial\nName: ${name}\nEmail: ${email}`;
    const whatsappNumber = "918080724453";
    // Replace with your WhatsApp number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      whatsappNumber
    )}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <div className="row mx-2">
            <div className="col-12">
              <label htmlFor="name" className="form-label">
                FullName:-
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={credential.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Businesschat.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Businesschat;
