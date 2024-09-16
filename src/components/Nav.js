import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Location2 from "../Location/Location2";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("email");
    if (token) {
      setLoggedIn(true);
      setEmail(userEmail || "");
    } else {
      setLoggedIn(false);
      setEmail("");
    }
  }, [location]);

  const clickLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <div className="logo mx-2">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img src="../logo.png" alt="Logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="mynavbar"
            >
              <ul
                className="navbar-nav mb-2 mb-lg-0"
                style={{
                  fontSize: "18px",
                  fontFamily: "Source Sans Pro, Arial, sans-serif",
                  fontWeight: "bold",
                }}
              >
                <li className="nav-item mx-2">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/overview" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/advertisemodel" className="nav-link">
                    <i className="fa fa-bullhorn"></i> Advertise
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/model" className="nav-link">
                    <button
                      className="btn btn-primary mx-2"
                      type="button"
                      style={{ fontWeight: "bold" }}
                    >
                      <i className="fa fa-line-chart"></i> Contact For Free
                      Listing
                    </button>
                  </Link>
                </li>
              </ul>
              {/* login and signup concepts */}
              {/* <form className="d-flex ms-auto">
                {loggedIn ? (
                  <>
                    <span className="mx-2">
                      <strong>
                        Welcome <Link to="/home1">{email}</Link>
                      </strong>
                    </span>
                    <button
                      className="btn btn-primary mx-2"
                      type="button"
                      onClick={clickLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/model">
                      <button className="btn btn-primary mx-2" type="button">
                        Sign Up
                      </button>
                    </Link>
                    <Link to="/model3">
                      <button className="btn btn-primary mx-2" type="button">
                        Login
                      </button>
                    </Link>
                  </>
                )}
              </form> */}
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-6">
            <Location2 />
          </div>
          <div className="col-md-6 ">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
