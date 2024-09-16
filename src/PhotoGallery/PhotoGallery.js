// ImageUploadForm.js
import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./PhotoGalley.css"; // Ensure this path is correct

const ImageUploadForm = ({ onUploadSuccess }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const handleImageUpload = async () => {
    if (!selectedImage || !businessName || !address || !mobileNumber) {
      setError("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("businessName", businessName);
    formData.append("address", address);
    formData.append("mobileNumber", mobileNumber);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      alert(response.data.message);
      setSelectedImage(null);
      setBusinessName("");
      setAddress("");
      setMobileNumber("");
      if (onUploadSuccess) onUploadSuccess();
    } catch (error) {
      setError("Error uploading image");
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          className="form-input"
        />
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">
            Business Name:
            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address:
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number:
            <input
              id="mobileNumber"
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="form-input"
            />
          </label>
        </div>
        <Button onClick={handleImageUpload} className="submit-button">
          Upload Image
        </Button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ImageUploadForm;
