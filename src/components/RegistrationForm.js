import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("profileImage", image);

    try {
      await axios.post("http://localhost:3000/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("User registered successfully");
      // Optionally clear form fields
      setUsername("");
      setEmail("");
      setImage(null);
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("Error registering user");
    }
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br />
          <label>
            Profile Image:
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
