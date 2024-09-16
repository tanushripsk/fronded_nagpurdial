import React from "react";
import "../App.css";
function Flight() {
  return (
    <div className="container">
      {/* <!-- second navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/flight">
                <b>Flight</b>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hotel">
                <b>Hotel</b>
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
                Departure Date:
              </label>
              <input type="date" className="form-control" id="departureDate" />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="departureCity" className="form-label">
                Departure City:
              </label>
              <input
                type="text"
                className="form-control"
                id="departureCity"
                placeholder=" departure city"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="arrivalCity" className="form-label">
                Arrival City:
              </label>
              <input
                type="text"
                className="form-control"
                id="arrivalCity"
                placeholder=" arrival city"
              />
            </div>
            <div className="mb-3 col-lg-4">
              <label for="passengerCount" className="form-label">
                Number of Passengers:
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
            Book Flight Online with{" "}
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
          Forget the long queues and endless phone calls – booking your flight
          online with Nagpur Dial is quick, efficient, and secure. Simply enter
          your travel details, choose from a range of available options, and
          proceed to secure your seat with confidence. Plus, with our flexible
          booking policies, you can enjoy peace of mind knowing that you have
          the flexibility to modify or cancel your reservation if plans change.
        </p>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Experience the convenience of online flight booking with Nagpur Dial
          today. Whether you're flying domestically or internationally, let us
          take the stress out of planning your journey, so you can focus on
          making unforgettable memories wherever your travels take you. Book
          your flight online with Nagpur Dial and prepare for an effortless
          travel experience like never before.
        </p>
      </div>
      <hr />
      <div>
        <h5>
          <b>Airport Of Orange City</b>
        </h5>
        <h6 style={{ color: " grey" }}>
          <b>Dr. Babasaheb Ambedkar International Airport</b>
        </h6>
        <p style={{ color: "grey", fontSize: " 15px" }}>
          Dr. Babasaheb Ambedkar International Airport (IATA: NAG, ICAO: VANP)
          is an international airport serving the city of Nagpur, Maharashtra,
          India. The airport is located at Sonegaon, 8 km (5 mi) southwest of
          Nagpur. The airport covers an area of 1,355 acres (548 hectares). In
          2005, it was named after B. R. Ambedkar,[4] the chief architect of the
          Constitution of India and one of the founding fathers of the Republic
          of India. The airport handles around 8,500 passengers per day and
          caters to four domestic airlines and two international airlines
          connecting Nagpur to Sharjah, Doha, and 14 domestic destinations. The
          airport spread over 1,460 acres is also home to Nagpur Air Force
          Station of the Indian Air Force. Growth in passenger traffic is
          fuelled by passengers traveling to and from the state capital Mumbai,
          located over 700 km (378 mi) away. The airport has one terminal and
          has two aerobridges.
        </p>
      </div>
      {/* <!--Popular Categories--> */}
      <hr />
      <h5>
        <strong>Popular Categories</strong>
      </h5>
      <p style={{ color: "grey" }}>
        Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
        Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
        Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
        Sexologist Doctors | Neurologists | Gynaecologist | & Obstetrician |
        Doctors |Train Ticket| Booking Agents| Travel Agents| Paying Guest
        Accommodations| General Physician Doctors| Dentists| Orthopaedic
        Doctors| Chemists| Motor Training Schools| Gastroenterologists |Car
        Rental| Salons Courier Services |Dance Classes| Pathology Labs| Taxi
        Services| Cake Shops| AC Repair & Services| Mobile Phone| Dealers| Pet
        Shops | Dmart| Packers And Movers| Psychiatrists| Dharamshalas|
        Urologist Doctors| Bakeries | Bicycle | Dealers Coffee Shops|
        Paediatricians |Sonography Centres | Yoga Classes| Hostels
        Cardiologists| Electrical Shops| Skin Care Clinics | Diagnostic Centres|
        Homeopathic Doctors | Physiotherapists | Photo Studios | Plumbers |Music
        Classes| Electricians| Sports |Goods Dealers| Shoe Dealers| Hair
        Stylists| Gift Shops | Ophthalmologists | Car Repair & Services
        |Ayurvedic Doctors| Eye Clinics| Restaurants| Carpenters| Jewellery|
        Showrooms |Cooks On Hire |Stationery Shops| Nephrologists |Caterers
        Interior Designers| Rehabilitation Center | Grocery Stores |Banks ATM |5
        Star Hotels |Hotels |Resorts |Plastic Surgeons
      </p>

      <hr />
    </div>
  );
}

export default Flight;
