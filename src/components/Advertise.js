import React from "react";
import "../App.css";
import PopularSearch from "./PopularSearch";
function Advertise() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "5px" }}></div>
        <hr className="hide1" />
        <h5 className="hide1">
          <span style={{ color: "blue" }}>
            <b>GROW</b>
          </span>{" "}
          Your Business
        </h5>
        <h6 className="hide1">Advertise with NagpurDial +91-1234567896</h6>
        <h6 className="hide1">Nagpur's No. 1 Search Engine</h6>
        <hr className="hide1" />
        <div className="row hide1">
          <div className="col-lg-6">
            <h6>
              {" "}
              <i
                className="fa fa-check"
                style={{ fontSize: "20px", color: "green" }}
              ></i>
              <b> Rank ahead of your compitition</b>
            </h6>
            <h6>
              {" "}
              <i
                className="fa fa-check"
                style={{ fontSize: "20px", color: "green" }}
              ></i>
              <b>Find ready to buy customer instantly</b>
            </h6>
            <h6>
              {" "}
              <i
                className="fa fa-check"
                style={{ fontSize: "20px", color: "green" }}
              ></i>
              <b>Track lead and compitition Trends</b>
            </h6>
          </div>
          <div className="col-lg-6">
            <img
              src="./images/client/grow your business.png"
              width="180px"
              alt="Grow Your Business"
            />
          </div>
        </div>
        <hr className="hide1" />
        <div style={{ padding: "5px" }}></div>
        <div className="hide">
          <hr />
          <h5>
            <span style={{ color: "blue" }}>
              <b>GROW</b>
            </span>{" "}
            Your Business
          </h5>
          <small>
            Advertise with NagpurDial +91-1234567896 Nagpur's No. 1 Search
            Engine
          </small>
          <hr />
          <div className="row ">
            <div className="col-lg-6 col-lg-61">
              <p>
                <i
                  className="fa fa-check"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                <b>Rank ahead of your compitition</b>{" "}
              </p>
              <p>
                {" "}
                <i
                  className="fa fa-check"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                <b>Find ready to buy customer instantly</b>{" "}
              </p>
              <p>
                {" "}
                <i
                  className="fa fa-check"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                <b>Track lead and compitition Trends </b>
              </p>
            </div>
            <div className="col-lg-6 col-lg-61">
              <img
                src="./images/client/grow your business.png"
                width="120px"
                alt="Grow Your Business"
              />
            </div>
          </div>
          <hr />
        </div>
        {/* features */}
        <h4>
          <b style={{ color: "red" }}>Features</b>
        </h4>
        <div className="row">
          <div className="col-lg-6">
            <p>
              <b>
                <img
                  src="./images/fafa icon/primium listing.png"
                  width="20px"
                  alt="Premium Listing"
                />
                Primium Listing
              </b>
            </p>
            <p style={{ fontSize: "12px" }}>
              Get higher visibility and exposure on nagpurdial
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              <b>
                <img
                  src="./images/fafa icon/primium listing.png"
                  width="20px"
                  alt="Transaction Enabled Website"
                />
                Transaction Enabled Website
              </b>
            </p>
            <p style={{ fontSize: "12px" }}>
              Get a professional looking website with your own domain
            </p>
          </div>
        </div>
        
        <PopularSearch/>
        
        

        <div className="container">
          <div className="social-media">
            <p className="social">
              <strong
                style={{
                  fontSize: "20px",
                  fontFamily: "'Source Sans Pro', 'Arial', sans-serif",
                }}
              >
                Follow us on:
              </strong>

              <a href="#">
                <i
                  className="fa fa-facebook-square mx-1"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-instagram mx-1"
                  style={{ fontSize: "20px", color: "red" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-linkedin-square mx-1"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-youtube-square mx-1"
                  style={{ fontSize: "20px", color: "red" }}
                ></i>
              </a>
            </p>
            <p style={{ color: "grey", fontSize: "12px" }}>
              Nagpur Dial it is just a Website (Website Name) design and
              developed by PSK Technologies Pvt. Ltd. IT Company Nagpur
              Maharashtra (all Rights About Nagpur dial website Reserved at PSK
              Technologies Pvt. Ltd.) it is Nagpur Local Businesses And Services
              Search engine (नागपुर का अपना लोकल सर्च इंजन) it provides local
              search related services to users and it helps to connect business
              to business within Nagpur. through website & mobile App (Android
              Web View). PSK Technologies Motive is to give fast services to
              connect users to businesses and Business to Business
            </p>

            <p style={{ color: "grey", fontSize: "12px" }}>
              More Information about PSK Technologies pvt. Ltd. PSK Technologies
              IT firm started in 2011 by Mr. Prashant Kadhao, who has the vast
              experience in IT & Management field around 14 years. Later on
              converted in it IT Company in the year 2019 as PSK Technolgies
              Pvt. Ltd. (CIN U72900MH2019PTC324858) Since its inception, “PSK
              Technologies is dedicatedly engaged in providing services of
              highest class to our esteemed clients/customers. Our dedicated
              team has been working for last 10 years and our objective is to
              give “Complete IT Solutions.” Our “Principle” is to give “Solution
              Based Services”. A team of certified IT Professionals who have
              expertise in Digital Marketing , Website Development & Computer
              Teaching & Software Development & Personal Computer hardware,
              Networking and software technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertise;
