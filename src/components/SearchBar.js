import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const pages = [
    { id: 1, title: "Account", link: "/account" },
    { id: 2, title: "Advertise", link: "/advertise" },
    { id: 3, title: "ACrepaire", link: "/acrepaire" },
    { id: 4, title: "ACRepairShops", link: "/acrepairshops" },
    { id: 5, title: "astrologies", link: "/astrologies" },
    { id: 6, title: "auditors", link: "/astrologies" },
    { id: 7, title: "auditors", link: "/auditors" },
    { id: 8, title: "auditors", link: "/auditors" },
    { id: 9, title: "bachlorparty", link: "/bachlorparty" },
    { id: 10, title: "band", link: "/band" },
    { id: 11, title: "beauty", link: "/beauty" },
    { id: 12, title: "BeautyParlour ", link: "/beautyparlour" },
    { id: 13, title: "banquithall", link: "/banquithall" },
    { id: 14, title: "bike", link: "/bike" },
    { id: 15, title: "bills&recharge", link: "/bills&recharge" },
    { id: 16, title: "bikeservices", link: "/bikeservices" },
    { id: 17, title: "bridalwear", link: "/bridalwear" },
    { id: 18, title: "bus", link: "/bus" },
    { id: 19, title: "ca", link: "/ca" },
    { id: 20, title: "cabs", link: "/cabs" },
    { id: 21, title: "carrepairs", link: "/carrepairs" },
    { id: 22, title: "carservices", link: "/carservices" },
    { id: 23, title: "cateres", link: "/cateres" },
    { id: 24, title: "contractors", link: "/contractors" },
    { id: 25, title: "choregrapheres", link: "/choregrapheres" },
    { id: 26, title: "consultants", link: "/consultants" },
    { id: 27, title: "contractorsclients", link: "/contractorsclients" },
    { id: 28, title: "corporatemedia", link: "/corporatemedia" },
    { id: 29, title: "couriers", link: "/couriers" },
    { id: 30, title: "CourierServices", link: "/CourierServices" },
    { id: 31, title: "csr", link: "/csr" },
    { id: 32, title: "dentist", link: "/dentist" },
    { id: 33, title: "dj", link: "/dj" },
    { id: 34, title: "drivingschool", link: "/drivingschool" },
    { id: 35, title: "education", link: "/education" },
    { id: 36, title: "educationcoaching", link: "/educationcoaching" },
    { id: 37, title: "educationcollages", link: "/educationcollages" },
    { id: 38, title: "educationschools", link: "/educationschools" },
    { id: 39, title: "educationtraining", link: "/educationtraining" },
    { id: 40, title: "electrician", link: "/electrician" },
    { id: 41, title: "engineers", link: "/engineers" },
    { id: 42, title: "estaeagents", link: "/estaeagents" },
    { id: 43, title: "eventorganizers", link: "/eventorganizers" },
    {
      id: 44,
      title: "eventorganizerservices",
      link: "/eventorganizerservices",
    },
    { id: 45, title: "flight", link: "/flight" },
    { id: 46, title: "grocery", link: "/grocery" },
    { id: 47, title: "gst", link: "/gst" },
    { id: 48, title: "gym", link: "/gym" },
    { id: 49, title: "halls", link: "/halls" },
    { id: 50, title: "homedecover", link: "/homedecover" },
    { id: 51, title: "homefurniture", link: "/homefurniture" },
    { id: 52, title: "honeymoontour", link: "/honeymoontour" },
    { id: 53, title: "hourse", link: "/hourse" },
    { id: 54, title: "hospital", link: "/hospital" },
    { id: 55, title: "hospitalclient", link: "/hospitalclient" },
    { id: 56, title: "hotel", link: "/hotel" },
    { id: 57, title: "hotelclient", link: "/hotelclient" },
    { id: 58, title: "incometax", link: "/incometax" },
    { id: 59, title: "internationalsim", link: "/internationalsim" },
    { id: 60, title: "internet", link: "/internet" },
    { id: 61, title: "invitationcard", link: "/invitationcard" },
    { id: 62, title: "jewellary", link: "/jewellary" },
    { id: 63, title: "job", link: "/job" },
    { id: 64, title: "lawyers", link: "/lawyers" },
    { id: 65, title: "listing", link: "/listing" },
    { id: 66, title: "manufacturing", link: "/manufacturing" },
    {
      id: 67,
      title: "marrigecertificateagents",
      link: "/marrigecertificateagents",
    },
    { id: 68, title: "mehandi", link: "/mehandi" },
    { id: 69, title: "menhairstyle", link: "/menhairstyle" },
    { id: 70, title: "menmakeup", link: "/menmakeup" },
    { id: 71, title: "mensaloan", link: "/mensaloan" },
    { id: 72, title: "movie", link: "/movie" },
    { id: 73, title: "overview", link: "/overview" },
    { id: 74, title: "packers&movers", link: "/packers&movers" },
    { id: 75, title: "panditji", link: "/panditji" },
    { id: 76, title: "petshops", link: "/petshops" },
    { id: 77, title: "pghotels", link: "/pghotels" },
    { id: 78, title: "photostudio", link: "/photostudio" },
    { id: 79, title: "press", link: "/press" },
    { id: 80, title: "readymadegarments", link: "/readymadegarments" },
    { id: 81, title: "rentandhire", link: "/rentandhire" },
    { id: 82, title: "rentservice", link: "/rentservice" },
    { id: 83, title: "report", link: "/report" },
    { id: 84, title: "restaurant", link: "/restaurant" },
    { id: 85, title: "Suits", link: "/Suits" },
    { id: 86, title: "Security", link: "/Security" },
    { id: 87, title: "Software", link: "/Software" },
    { id: 88, title: "Stagedecover", link: "/Stagedecover" },
    { id: 89, title: "Tatto", link: "/Tatto" },
    { id: 90, title: "Train", link: "/Train" },
    { id: 91, title: "Training", link: "/Training" },
    { id: 92, title: "Valuers", link: "/Valuers" },
    { id: 93, title: "Video", link: "/Video" },
    { id: 94, title: "Visa", link: "/Visa" },
    { id: 95, title: "Wedding", link: "/Wedding" },
    { id: 96, title: "restro", link: "/restro" },
    { id: 97, title: "store", link: "/store" },
  ];

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredPages = pages.filter((page) =>
      page.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredPages);
  };

  const handleSearch = () => {
    // Handle search action here if needed
  };

  return (
    <div>
      <form className="search-location-form">
        <input
          type="text"
          placeholder="Search business..."
          id="input-box"
          name="search"
          className="form-control"
          autoComplete="off"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
        {/* <button
          type="button"
          id="voice-search-btn"
          className="btn btn-primary mx-2"
        >
          <i className="fa fa-microphone"></i>
        </button> */}
      </form>
      <div className="suggestions-container">
        {suggestions.map((page) => (
          <div key={page.id} className="suggestion">
            <a href={page.link} style={{ textDecoration: "none" }}>
              {page.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
