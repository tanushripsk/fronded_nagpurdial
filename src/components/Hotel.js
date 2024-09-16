import React from "react";
function Hotel() {
  return (
    <div className="container">
      {/* <!-- second navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/flight">
                <b>Flight</b>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/hotel">
                <b>Hotel</b>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bus">
                <b>Bus</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Train">
                <b>Train</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cab">
                <b>Cab</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Visa">
                <b>Visa Assistance</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/internationalsim">
                <b>International Sim Card</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- banner --> */}
      <div className="banner ">
        <div style={{ padding: "10px" }}></div>
        <div className="container99 mt-3">
          <form className="row">
            <div className="mb-3 col-lg-4">
              <label for="fullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="your full name"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="email" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=" email"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="phone" className="form-label">
                Mob No:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder=" phone number"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="departureDate" className="form-label">
                Check in Date:
              </label>
              <input type="date" className="form-control" id="departureDate" />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="departureDate" className="form-label">
                Check Out Date:
              </label>
              <input type="date" className="form-control" id="departureDate" />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="passengerCount" className="form-label">
                No of Days:
              </label>
              <input
                type="number"
                className="form-control"
                id="passengerCount"
                min="1"
                max="360"
                value="1"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="passengerCount" className="form-label">
                No of Rooms:
              </label>
              <input
                type="number"
                className="form-control"
                id="passengerCount"
                min="1"
                max="10"
                value="0"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <button type="submit" className="btn btn-primary mt-3">
                Confirm Booking
              </button>
            </div>
            <div className="mb-3 col-lg-4">
              <button type="submit" className="btn btn-primary mt-3">
                Cancel - Booking
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ padding: "10px" }}></div>
      <div>
        <h5>
          <strong>
            Book Hotel Online with{" "}
            <span
              style={{
                color: "#FF3F07",
                fontSize: "20px",
                fontFamily: "Arial Black",
              }}
            >
              Nagpur{" "}
            </span>
            Dial{" "}
          </strong>
        </h5>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Planning a getaway to Nagpur and need a place to stay? Look no further
          than Nagpur Dial's hassle-free online hotel booking service. Whether
          you're visiting for business or leisure, we've got you covered with a
          wide selection of accommodations to suit every preference and budget.
        </p>
        <p style={{ color: "grey", fontSize: "15px" }}>
          At Nagpur Dial, we understand that finding the perfect hotel is
          essential for a comfortable and memorable stay. That's why our
          platform offers an extensive range of options, from luxurious resorts
          to budget-friendly guesthouses, ensuring there's something for
          everyone. With detailed descriptions, photos, and reviews, you can
          make an informed decision and find the ideal hotel that meets your
          needs.
        </p>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Booking your hotel online with Nagpur Dial is easy and convenient.
          Simply enter your destination, travel dates, and preferences, and
          browse through our curated list of available accommodations. Filter
          your search results based on price, amenities, and location to find
          the perfect match for your trip. Once you've found the ideal hotel,
          secure your reservation with confidence using our secure payment
          gateway.
        </p>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Forget the stress of traditional booking methods – with Nagpur Dial,
          you can plan your entire trip from the comfort of your home or office.
          Plus, with our flexible booking policies, you can enjoy peace of mind
          knowing that you have the flexibility to modify or cancel your
          reservation if your plans change.
        </p>
      </div>

      {/* <!-- Popular Hotel --> */}
      <hr />
      <h5>
        <strong>
          Popular Hotels in <span style={{ color: "#FF3F07" }}>Nagpur</span>
        </strong>
      </h5>
      <p style={{ color: "grey" }}>
        Rampriya Apartment | Rampriya | Rampriya Apartment | Rampriya | Rampriya
        Service Apartment | Rampriya | Rampriya Apartment | Rampriya | Rampriya
        Apartment | Rampriya | Rampriya | Rampriya Service Apartment | Rampriya
        Apartment | Rampriya Service Apartment | Rampriya | Rampriya Apartment |
        Rampriya Service Apartment | Rampriya Service Apartment| Rampriya
        |Rampriya Apartment| Rampriya Service Apartment|{" "}
      </p>

      <hr />
    </div>
  );
}

export default Hotel;
