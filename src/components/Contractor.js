import React from "react";
import "../App.css";
import PopularSearch from "./PopularSearch"
function Contractor() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner24">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        {/* Top Caterers in Nagpur */}
        {/* Client */}
        <div style={{ padding: "2px" }}></div>
        <div style={{ padding: "2px" }}></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img">
                {" "}
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Carpentry{" "}
              </a>
            </div>
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Plumbing{" "}
              </a>
            </div>
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img hide1">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />{" "}
                Electrical{" "}
              </a>
            </div>
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img hide1">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />{" "}
                Flooring{" "}
              </a>
            </div>
          </div>
          <div class="row ">
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img hide1">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Furniture{" "}
              </a>
            </div>
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img hide1">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Civil{" "}
              </a>
            </div>
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img hide1">
                {" "}
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Painting{" "}
              </a>
            </div>
            <div class="col-lg-3 col-lg-41">
              <a href="/contractorsclients" class="icons-img hide1">
                {" "}
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Plumbing{" "}
              </a>
            </div>
          </div>
          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <a href="/contractorsclients" class="icons-img">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />{" "}
                Electrical{" "}
              </a>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <a href="/contractorsclients" class="icons-img">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />{" "}
                Flooring{" "}
              </a>
            </div>
          </div>
          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <a href="/contractorsclients" class="icons-img">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Painting{" "}
              </a>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <a href="/contractorsclients" class="icons-img">
                <img
                  src="./images/fafa icon/CarpentryContractors.png"
                  class="icons-img"
                  alt="CarpentryContractors"
                />
                Civil
              </a>
            </div>
          </div>
        </div>
        <hr/>
        <PopularSearch/>
        <hr/>
        <div style={{ padding: "5px" }}></div>
      </div>
    </div>
  );
}

export default Contractor;
