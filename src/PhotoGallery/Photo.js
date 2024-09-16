import React from "react";
function Photo({ images }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image._id} className="gallery-item">
          <img
            src={`http://localhost:5000/uploads/${image.filename}`}
            alt="gallery"
            className="gallery-image"
            style={{ width: "180px" }}
          />
          <div className="gallery-info">
            <h3>{image.businessName}</h3>
            <p>{image.address}</p>
            <p>{image.mobileNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Photo;
