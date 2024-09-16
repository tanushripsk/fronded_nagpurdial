// SearchResults.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./PhotoGalley.css"; // Ensure this path is correct

const SearchResults1 = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch images from the backend
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/images");
      setImages(response.data);
      setFilteredImages(response.data); // Initialize filtered images with all images
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Error fetching images");
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      // If the search query is empty, show all images
      setFilteredImages(images);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/search", {
        params: { query: searchQuery },
      });
      setFilteredImages(response.data);
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Error searching images");
      console.error("Error searching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  return (
    <Container>
      <div className="banner-location">
        <div style={{ padding: "10px" }}></div>
      </div>
      <h4 className="mt-4 mb-4">
        <strong>Search Results for "{searchQuery}"</strong>
      </h4>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <Row>
        {filteredImages.map((image) => (
          <Col lg={12} key={image._id}>
            <div style={{ padding: "10px" }}></div>
            <div className="beauty">
              <br />
              <Row>
                <Col lg={4}>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={`http://localhost:5000/uploads/${image.filename}`}
                        alt="Slide 1"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col lg={8}>
                  <div className="detail-info">
                    <h4 style={{ color: "green", fontWeight: "bold" }}>
                      {image.businessName}
                    </h4>
                    <div style={{ padding: "2px" }}></div>
                    <h6>{image.address}</h6>
                    <p>Number: {image.mobileNumber}</p>
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
                      onClick={() => alert(`Chat with ${image.businessName}`)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      Chat with {image.businessName}
                    </Button>
                  </div>
                </Col>
              </Row>
              <br />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults1;
