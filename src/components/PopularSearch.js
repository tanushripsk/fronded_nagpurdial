import React from "react";
import "./Footer.css";

const popularSearches = [
  { text: "Cinema Halls", url: "/movies" },
  { text: "Schools", url: "/educationschools" },
  { text: "Beauty Spas", url: "/beautyparlour" },
  { text: "Dermatologists", url: "/hospital" },
  { text: "Hospitals", url: "/hospital" },
  { text: "Wedding Planner", url: "/malls" },
  { text: "Gyms", url: "/gym" },
  { text: "Beauty Parlours", url: "/beautyparlour" },
  { text: "Estate Agents", url: "/estaeagents" },
  { text: "Banquet Halls", url: "/banquithall" },
  { text: "ENT Doctors", url: "/hospital" },
  { text: "Bridal Requisite", url: "/jewellary" },
  { text: "spa & Massag", url: "/beautyparlour" },
  { text: "Neurologists", url: "/hospital" },
  { text: "Gynaecologist & Obstetrician", url: "/hospital" },
  { text: "Doctors", url: "/hospital" },
  { text: "Train Ticket", url: "/Train" },
  { text: "Booking Agents", url: "/flight" },
  { text: "Travel Agents", url: "/flight" },
  { text: "Paying Guest Accommodations", url: "/pghotels" },
  { text: "General Physician Doctors", url: "/hospital" },
  { text: "Dentists", url: "/hospital" },
  { text: "Orthopaedic Doctors", url: "/hospital" },
  { text: "Car Rental", url: "/carservices" },
  { text: "Courier Services", url: "/couriers" },
  { text: "AC Repair & Services", url: "/acrepairshops" },
  { text: "Pet Shops", url: "/petshops" },
  { text: "Packers And Movers", url: "/packers&movers" },
  { text: "Hostels", url: "/hotel" },
  { text: "Cardiologists", url: "/hospital" },
  { text: "Electrical Shops", url: "/electrician" },
  { text: "Photo Studios", url: "/photostudio" },
  { text: "Electricians", url: "/electrician" },
  { text: " Men Hair Stylists", url: "/menhairstyle" },
  { text: "Car Repair & Services", url: "/carrepairs" },
  { text: "Eye Clinics", url: "/hospital" },
  { text: "Restaurants", url: "/restaurant" },
  { text: "Jewellery Showrooms", url: "/jewellary" },
  { text: "Caterers", url: "/cateres" },
  { text: "Interior Designers", url: "/homefurniture" },
  { text: "Grocery Stores", url: "/grocery" },
  { text: "Banks ATM", url: "/account" },
  { text: "5 Star Hotels", url: "/hotel" },
  { text: "Hotels", url: "/hotel" },
  { text: "Plastic Surgeons", url: "/hospital" },
  { text: "Software Services", url: "/Software" },
  { text: "Security services", url: "/Security" },
  { text: "Media Press", url: "/press" },
  { text: "Rent Services", url: "/rentservice" },
  { text: "BanquitHalls for wedding", url: "/banquithall" },
  { text: "Astrologies", url: "/astrologies" },
  {text:  "Auditors", url:"/auditors"},
  {text: "Electronic Repaires Shops", url: "/electrician"},
  {text: "Home Furniture", url: "/homefurniture"},
  {text: "Home Decor", url: "/homedecover"},
  


];

function PopularSearch() {
  return (
    <div className="Container">
      <p className="social">
        <strong>Popular Searches:</strong>
        <p style={{ color: "grey", fontSize: "13px" }}>
          {popularSearches.map((search, index) => (
            <React.Fragment key={index}>
              <a href={search.url} className="link">
                {search.text}
              </a>
              {index < popularSearches.length - 1 && " | "}
            </React.Fragment>
          ))}
        </p>
      </p>
    </div>
  );
}
export default PopularSearch;
