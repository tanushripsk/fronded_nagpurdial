import React from "react";
import "../App.css";
function Overview() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <nav className="navbar">
          <ul className="menu">
            <li>
              <a href="/overview">
                <b> Overview</b>
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                News & Events <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/corporatemedia">Corporate News</a>
                </li>
                <li>
                  <a href="/press">Press Release</a>
                </li>
                <li>
                  <a href="/corporatemedia">Goverments news</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/csr">CSR</a>
            </li>
          </ul>
          {/* <!--user visiable in media query--> */}
          <div className="offcanvas offcanvas-start" id="demo1">
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="row">
                <div className="col-lg-6 ">
                  <h4>
                    <b>Sign-in</b>
                    <img
                      src="./images/fafa icon/usericon.png"
                      alt="userlogin image"
                      style={{ width: "40px", float: "right" }}
                    />
                  </h4>
                </div>
              </div>
              <p>
                <i className="fa fa-language"></i> English
              </p>
              <p>
                <i className="fa fa-user"></i> Customer Service
              </p>
              <p>
                <i className="fa fa-line-chart"></i> List Your Busimess
              </p>
              <p>
                <i className="fa fa-bullhorn"></i> Advertise
              </p>
              <p>
                <i className="fa fa-vcard-o"></i> My Transactions
              </p>
              <p>
                <i className="fa fa-users"></i> Manage Quotes
              </p>
              <p>
                <i className="fa fa-laptop"></i> We are hiring
              </p>
              <p>
                <i className="fa fa-cog"></i> Settings
              </p>
              <p>
                <i className="fa fa-universal-access"></i> Privacy Policy
              </p>
              <p>
                <i className="fa fa-slideshare"></i> Investor Relations
              </p>
              <p>
                <i className="fa fa-plus-square"></i> What's New
              </p>
              <p>
                <i className="fa fa-paperclip"></i> Others
              </p>
              <p>
                <i className="fa fa-user-times"></i> Sign Out
              </p>
            </div>
          </div>
          <li data-bs-toggle="offcanvas" data-bs-target="#demo1" className="h">
            <img
              src="./images/fafa icon/usericon.png"
              alt="userlogin image"
              style={{ width: "25px" }}
            />
          </li>
        </nav>
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div className="banner48">
          <div style={{ padding: "90px" }}></div>
          <div style={{ padding: "10px" }}>
            <a>
              <img
                src="./images/client/psk.jpg"
                width="45px"
                height="45px"
                style={{ borderRadius: "50%", border: "2px solid white" }}
                alt="psk"
              />
              <span style={{ color: "white", fontWeight: "bold" }}>
                Prashant S. Kadhao
              </span>
              <small>
                <span style={{ color: "white", fontWeight: "bold" }}>
                  (Founder CEO)
                </span>
              </small>
            </a>
          </div>
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />
        <div className="mt-4 p-2 ">
          <div className="row">
            <div className="col-lg-6">
              <center>
                <h5 className="mt-3">
                  <strong>About NagpurDial</strong>
                </h5>
              </center>
              <p>
                Nagpur Dial it is just a Website (Website Name) design and
                developed by PSK Technologies Pvt. Ltd. IT Company Nagpur
                Maharashtra (all Rights About Nagpur dial website Reserved at
                PSK Technologies Pvt. Ltd.) it is Nagpur Local Businesses And
                Services Search engine (नागपुर का अपना लोकल सर्च इंजन) it
                provides local search related services to users and it helps to
                connect business to business within Nagpu r. through website &
                mobile App (Android Web View). PSK Technologies Motive is to
                give fast services to connect users to businesses and Business
                to Business
              </p>
              <p>
                More Information about PSK Technologies pvt. Ltd. PSK
                Technologies IT firm started in 2011 by Mr. Prashant Kadhao, who
                has the vast experience in IT & Management field around 14
                years. Later on converted in it IT Company in the year 2019 as
                PSK Technolgies Pvt. Ltd. (CIN U72900MH2019PTC324858) Since its
                inception, “PSK Technologies is dedicatedly engaged in providing
                services of highest className to our esteemed clients/customers.
                Our dedicated team has been working for last 10 years and our
                objective is to give “Complete IT Solutions.” Our “Principle” is
                to give “Solution Based Services”. A team of certified IT
                Professionals who have expertise in Digital Marketing , Website
                Development & Computer Teaching & Software Development &
                Personal Computer hardware, Networking and software
                technologies.PSK Technologies is having more than 17 years of
                excellence as a Software & Hardware Development Firm and in
                providing training & Solutions on diverse IT education fields
                like Advance Hardware & Networking CCNA Linux MCITP MCSE
                Exchange Server CCNP AWS Cloud Computing Computer and Network
                Security, Programming, C, C++, JAVA, PHP, My-SQL, Information or
                Network Security, Database, Operating systems, Soft-skills, UI
                Development. Also we are in the field of E-commerce, Website
                Designing & Development, Digital Marketing like SEO, SMM, SEM,
                Email Marketing, Android App Development, Domain Registrations &
                Hosting. We are well known as the No. 1 IT Services Provider in
                Nagpur Maharashtra, Digital Marketing And Website Development |
                Computer Sales & Services & IT Training etc.
              </p>
            </div>
            <div className="col-lg-6">
              <center>
                <h5 className="mt-3">
                  <strong>key Highlights</strong>
                </h5>
              </center>
              <div className="row p-4">
                <div className="col-lg-6 col-lg-61 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="80px"
                      alt="primium listing"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Listing as of march 31, 2024</small>
                </div>
                <div className="h"></div>
                <div className="col-lg-6 col-lg-61 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="80px"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Active paid campaigns as of March 31, 2024</small>
                </div>
              </div>
              <div className="row p-4">
                <div className="col-lg-6 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="100px"
                      alt="primium listing"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Reviews and ratings as of March 31, 2024</small>
                </div>
                <div className="h"></div>
                <div className="col-lg-6 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="100px"
                      alt="primium listing"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Listing as of march 31, 2024</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
      </div>
    </div>
  );
}
export default Overview;
