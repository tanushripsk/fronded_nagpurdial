import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ImageForm = (props) => {
  const [files, setFiles] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(props.number);
  const [businessname, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length + files.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    const newFiles = [...files, ...selectedFiles.slice(0, 5 - files.length)];

    setFiles(newFiles);

    const selectedFilesPreview = newFiles.map(file =>
      URL.createObjectURL(file)
    );
    setPreviewUrls(selectedFilesPreview);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBusinessNameChange = (e) => {
    setBusinessName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert("Please select one or more files");
      return;
    }

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });
    formData.append("firstname", firstname);
    formData.append("middlename", middlename);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("businessname", businessname);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("pincode", pincode);

    try {
      await axios.post("http://localhost:3000/freelisting ", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Files uploaded successfully");
      setFiles([]);
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setEmail("");
      setBusinessName("");
      setDescription("");
      setLocation("");
      setPincode("");
      setPreviewUrls([]);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Failed to upload files");
    }
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div className="file-upload-container">
          <form className="file-upload-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="firstname" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter First name"
                  value={firstname}
                  onChange={handleFirstNameChange}
                  className="name-input form-control"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="middlename" className="form-label">
                  Middle Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Middle name"
                  value={middlename}
                  onChange={handleMiddleNameChange}
                  className="name-input form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="lastname" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Last name"
                  value={lastname}
                  onChange={handleLastNameChange}
                  className="name-input form-control"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="businessname" className="form-label">
                  Business Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter business name"
                  value={businessname}
                  onChange={handleBusinessNameChange}
                  className="name-input form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="location" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  placeholder="Enter business location"
                  value={location}
                  onChange={handleLocationChange}
                  className="location-input form-control"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="description" className="form-label">
                  Business Description:
                </label>
                <textarea
                  placeholder="Enter business description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="description-input form-control"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  placeholder="Enter business email"
                  value={email}
                  onChange={handleEmailChange}
                  className="email-input form-control"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="pincode" className="form-label">
                  Pincode:
                </label>
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  className="pincode-input form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="file" className="form-label">
                  Choose Images (Max 5):
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="file-input form-control"
                  multiple
                />
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="upload-button btn btn-success mt-3"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          {previewUrls.length > 0 && (
            <div className="image-preview mt-3">
              {previewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  style={{ maxWidth: "200px", maxHeight: "150px", marginRight: "10px" }}
                  className="preview-image"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ImageForm.propTypes = {
  number: PropTypes.string.isRequired,
};

export default ImageForm;
