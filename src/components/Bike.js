import React from "react";
import "../App.css";
function Bike() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner47">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        {/* Bike Options */}
        <div className="container h">
          <div className="row">
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/bikes-removebg-preview.png"
                  width="20px"
                />
                All Options
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/bajaj.jpg" width="20px" />
                Bajaj Bikes
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/mahindra-removebg-preview.png"
                  width="20px"
                />
                Hero Bikes
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/honda2-removebg-preview.png"
                  width="20px"
                />
                Honda Bikes
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/yamaha.png" width="20px" />
                Yamaha Bikes
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/royal enfilled.jpg" width="20px" />
                Royal Enfield
              </a>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="container hh">
          <div className="row">
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/bikes-removebg-preview.png"
                  width="20px"
                  alt="bikes"
                />
                All Options
              </a>
            </div>
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/royal enfilled.jpg"
                  width="20px"
                  alt="royal enfield"
                />
                Royal Enfield
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/yamaha.png"
                  width="20px"
                  alt="yamaha"
                />
                Yamaha
              </a>
            </div>
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/honda2-removebg-preview.png"
                  width="20px"
                  alt="honda"
                />
                Honda
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/bajaj.jpg"
                  width="20px"
                  alt="bajaj"
                />
                Bajaj
              </a>
            </div>
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/mahindra-removebg-preview.png"
                  width="20px"
                  alt="mahindra"
                />
                Hero
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* Popular Categories */}
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        <p style={{ color: "grey", fontSize: "12px" }}>
          Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
          Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
          Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
          Sexologist Doctors | Neurologists | Gynaecologist & Obstetrician |
          Doctors | Train Ticket Booking Agents | Travel Agents | Paying Guest
          Accommodations | General Physician Doctors | Dentists | Orthopaedic
          Doctors | Chemists | Motor Training Schools | Gastroenterologists |
          Car Rental | Salons Courier Services | Dance Classes | Pathology Labs
          | Taxi Services | Cake Shops | AC Repair & Services | Mobile Phone
          Dealers | Pet Shops | Dmart | Packers And Movers | Psychiatrists |
          Dharamshalas | Urologist Doctors | Bakeries | Bicycle Dealers Coffee
          Shops | Paediatricians | Sonography Centres | Yoga Classes | Hostels
          Cardiologists | Electrical Shops | Skin Care Clinics | Diagnostic
          Centres | Homeopathic Doctors | Physiotherapists | Photo Studios |
          Plumbers | Music Classes | Electricians | Sports Goods Dealers | Shoe
          Dealers | Hair Stylists | Gift Shops | Ophthalmologists | Car Repair &
          Services | Ayurvedic Doctors | Eye Clinics | Restaurants | Carpenters
          | Jewellery Showrooms | Cooks On Hire | Stationery Shops |
          Nephrologists | Caterers Interior Designers | Rehabilitation Center |
          Grocery Stores | Banks ATM | 5 Star Hotels | Hotels | Resorts |
          Plastic Surgeons
        </p>
        <hr />
      </div>
    </div>
  );
}
export default Bike;
