import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Row, Col, Carousel } from "react-bootstrap"; // Adjust imports based on your setup

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Search query cannot be empty");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/search", {
        params: { query: searchQuery },
      });
      setLocations(response.data);
      setQuery(searchQuery); // Update query for display
      setError("");
    } catch (error) {
      setError("Error searching images");
      console.error("Error searching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by business name or address"
          className="form-input mx-2"
          style={{ width: "500px" }}
        />
        <Button onClick={handleSearch} className="submit-button mx-2">
          Search
        </Button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {locations.length > 0 && (
        <div>
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
                            src={`http://localhost:5000/uploads/${location.filename}`}
                            alt="Slide 1"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col lg={8}>
                      {/* Description, Title, Button, Price */}
                      <div className="detail-info">
                        <h4 style={{ color: "green", fontWeight: "bold" }}>
                          {location.businessName}
                        </h4>
                        <div style={{ padding: "2px" }}></div>
                        <h6>{location.address}</h6>
                        <p>Number: {location.mobileNumber}</p>
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
                          onClick={() =>
                            console.log(`Chat with ${location.businessName}`)
                          }
                        >
                          <i
                            className="fa fa-comments"
                            style={{ fontSize: "20px", color: "red" }}
                          ></i>
                          Chat with {location.businessName}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <br />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default SearchBar;
