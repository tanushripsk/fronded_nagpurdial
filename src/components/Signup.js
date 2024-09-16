import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Signup1 = (props) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    number: props.data || "", // Initialize with props.data if available
  });
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  // Update number in state when props.data changes
  useEffect(() => {
    setCredential({ ...credential, number: props.data || "" });
  }, [props.data]);

  const clickhere = async (e) => {
    e.preventDefault();
    const { name, email, password, number } = credential;

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, number }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/home1");
      } else {
        console.error("User creation failed:", json.message); // Log the error message
        alert("Failed to create user. Please try again.");
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <form onSubmit={clickhere}>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              value={credential.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={credential.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={credential.password}
              onChange={onChange}
            />
          </div>
          {/* Conditional rendering of mobile number field */}
          {props.showMobileNumberField && (
            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Mobile Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="number"
                placeholder="Enter mobile number"
                name="number"
                value={credential.number}
                onChange={onChange}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Signup1.propTypes = {
  data: PropTypes.string, // Define PropTypes for props.data (assuming it's a string)
  showMobileNumberField: PropTypes.bool, // Prop to control whether to show the mobile number field
};

Signup1.defaultProps = {
  showMobileNumberField: false, // Default to hiding the mobile number field
};

export default Signup1;
