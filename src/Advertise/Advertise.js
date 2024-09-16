import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Advertise = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    address: "",
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
        `${host}/api/auth/advertise`,
        credential
      );
      const json = response.data;
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        alert("Data saved successfully!"); // Show alert
      } else {
        alert("Failed to submit form. Please fill in all fields correctly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
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
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your fullname"
                name="name"
                value={credential.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="address"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={credential.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-auto">
              <a href="/" style={{ textDecoration: "none" }}>
                <button type="submit" className="btn btn-primary mb-2">
                  Save
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
Advertise.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Advertise;
