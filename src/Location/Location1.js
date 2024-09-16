import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import "./locastion.css";

const Location1 = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = async () => {
    try {
      // Redirect to search results page with the query
      navigate(`/search/${encodeURIComponent(query)}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div className="">
        {/* <input
          type="text"
          placeholder="Search by Locations"
          className="location2"
          style={{ width: "480px" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="Search by Locations"
          className="location2" // This is the class we're styling in CSS
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button className="ml-2" variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </Container>
  );
};

export default Location1;
