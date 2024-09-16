import React from "react";
import "../App.css";
import PopularSearch from "./PopularSearch";

function About() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner52">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-8">
          <h5>
            <i className="fa-regular fa-circle-question"></i>
            <b>About Us</b>
          </h5>
          <p style={{ textAlign: "justify", fontSize: "13px" }}>
            Nagpur Dial it is just a Website (Website Name) design and developed
            by PSK Technologies Pvt. Ltd. IT Company Nagpur Maharashtra (all
            Rights About Nagpur dial website Reserved at PSK Technologies Pvt.
            Ltd.) it is Nagpur Local Businesses And Services Search engine{" "}
            <b>(नागपुर का अपना लोकल सर्च इंजन)</b> it provides local search
            related services to users and it helps to connect business to
            business within Nagpur. through website & mobile App (Android Web
            View). PSK Technologies Motive is to give fast services to connect
            users to businesses and Business to Business
          </p>

          <h5>
            <i className="fa-solid fa-bullseye"></i>
            <b>Nagpurdial Mission</b>
          </h5>
          <p style={{ textAlign: "justify", fontSize: "13px" }}>
            To provide fast, free, reliable, and comprehensive information to
            our users and enable discovery and transactions for all products and
            services.
          </p>
          <h5>
            <i className="fa-regular fa-building"></i>
            <b>Corporate Information</b>
          </h5>
          <p style={{ textAlign: "justify", fontSize: "13px" }}>
            More Information about PSK Technologies pvt. Ltd. PSK Technologies
            IT firm started in 2011 by Mr. Prashant Kadhao, who has the vast
            experience in IT & Management field around 14 years. Later on
            converted in it IT Company in the year 2019 as PSK Technolgies Pvt.
            Ltd. (CIN U72900MH2019PTC324858) Since its inception, “PSK
            Technologies is dedicatedly engaged in providing services of highest
            class to our esteemed clients/customers. Our dedicated team has been
            working for last 10 years and our objective is to give “Complete IT
            Solutions.” Our “Principle” is to give “Solution Based Services”. A
            team of certified IT Professionals who have expertise in Digital
            Marketing , Website Development & Computer Teaching & Software
            Development & Personal Computer hardware, Networking and software
            technologies.
            <br />
            PSK Technologies is having more than 17 years of excellence as a
            Software & Hardware Development Firm and in providing training &
            Solutions on diverse IT education fields like Advance Hardware &
            Networking CCNA Linux MCITP MCSE Exchange Server CCNP AWS Cloud
            Computing Computer and Network Security, Programming, C, C++, JAVA,
            PHP, My-SQL, Information or Network Security, Database, Operating
            systems, Soft-skills, UI Development. Also we are in the field of
            E-commerce, Website Designing & Development, Digital Marketing like
            SEO, SMM, SEM, Email Marketing, Android App Development, Domain
            Registrations & Hosting. We are well known as the No. 1 IT Services
            Provider in Nagpur Maharashtra, Digital Marketing And Website
            Development | Computer Sales & Services & IT Training etc.
          </p>
        </div>
        <div className="col-lg-4">
          <small>
            <b>For more details on Nagpurdial's performances you may check:</b>
          </small>
          <div>
            {" "}
            <a>
              <img
                src="./images/fafa icon/psk.png"
                width="20px"
                alt="Psk Technnolologie Pvt. Ltd"
              />
              Psk Technnolologie Pvt. Ltd
            </a>
          </div>
          <div>
            {" "}
            <a>
              <img
                src="./images/fafa icon/psk.png"
                width="20px"
                alt="Psk Technnolologie Pvt. Ltd"
              />
              Psk Technnolologie Pvt. Ltd
            </a>
          </div>
          <div>
            {" "}
            <a>
              <img
                src="./images/fafa icon/psk.png"
                width="20px"
                alt="Psk Technnolologie Pvt. Ltd"
              />
              Psk Technnolologie Pvt. Ltd
            </a>
          </div>
          <div>
            {" "}
            <a>
              <img
                src="./images/fafa icon/psk.png"
                width="20px"
                alt="Psk Technnolologie Pvt. Ltd"
              />
              Psk Technnolologie Pvt. Ltd
            </a>
          </div>
          <div>
            {" "}
            <a>
              <img
                src="./images/fafa icon/psk.png"
                width="20px"
                alt="Psk Technnolologie Pvt. Ltd"
              />
              Psk Technnolologie Pvt. Ltd
            </a>
          </div>
        </div>
      </div>
      <hr />
      <PopularSearch/>
      <div style={{ padding: "2px" }}></div>
    </div>
  );
}

export default About;
