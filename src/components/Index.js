import React from "react";
import PopularSearch from "./PopularSearch";
function Index() {
  return (
    <div class="container">
      <div class="container-fluid p-10">
        <hr />
        {/* <div style={{ padding: "5px" }}></div> */}
        {/* <!-------------------20 product--------------------> */}
        <div className="container1 ">
          <div>
            <a href="/restaurant">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Restaurants.png"
                    alt="Restaurants image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/restaurant">
                  <b style={{ fontSize: "15px" }}>Restaurants</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/hotelclient">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/hotel.png"
                    alt="hotel image"
                    className="small"
                  />
                </center>
              </div>
              <center>
                <a href="/hotelclient">
                  <b style={{ fontSize: "15px" }}>Hotels</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/beauty">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Beauty.png"
                    alt="BeautyParlour image"
                    className="small2"
                  />
                </center>
              </div>
              <center>
                <a href="/beauty">
                  <b style={{ fontSize: "15px" }}>
                    Beauty <br /> Spa
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/homedecover">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/HomeDecor.png"
                    alt="homedecor image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/homedecover">
                  <b style={{ fontSize: "15px" }}>
                    Home <br /> Decor
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/Wedding">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/WeddingPlanning.png"
                    alt="wedding image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="Wedding">
                  <b style={{ fontSize: "15px" }}>
                    Wedding
                    <br />
                    Planning
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/education">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Education.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/education">
                  <b style={{ fontSize: "15px" }}>Education</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/rentandhire">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Rent&Hire.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/rentandhire">
                  <b style={{ fontSize: "15px" }}>Rent & Hire</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/hospital">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/hospital.png"
                    alt="hosptal image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/hospital">
                  <b style={{ fontSize: "15px" }}>Hospitals</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/contractors">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/constractor.png"
                    alt="contractor image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/contractors">
                  <b style={{ fontSize: "15px" }}>Contractors</b>
                </a>
              </center>
            </a>
          </div>

          <div className="menu">
            <a href="/petshops">
              {" "}
              <div className="box menu">
                <center>
                  <img
                    src="./images/fafa icon/pethouse.png"
                    alt="pethouse image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/petshops">
                  <b style={{ fontSize: "15px" }}>Pet Shops</b>
                </a>
              </center>
            </a>
          </div>
        </div>
        <div className="container1">
          <div>
            <a href="/pghotels">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/pg.png"
                    alt="pg image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/pghotels">
                  <b style={{ fontSize: "15px" }}>PG/Hostels</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/estaeagents">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/EstateAgent.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/estaeagents">
                  <b style={{ fontSize: "15px" }}>
                    Estate
                    <br /> Agent
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/dentist">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Dentists.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/dentist">
                  <b style={{ fontSize: "15px" }}>Dentists </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/gym">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Gym.png"
                    alt="gym image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/gym">
                  <b style={{ fontSize: "15px" }}>Gym</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/consultants">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Consultants.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/consultants">
                  <b style={{ fontSize: "15px" }}>Consultants</b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/eventorganizers">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/EventOrganisers.png"
                    alt="EventOrganisers image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/eventorganizers">
                  <b style={{ fontSize: "15px" }}>
                    Event
                    <br />
                    Organisers
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/drivingschool">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/DrivingSchools.png"
                    alt="DrivingSchools image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/drivingschool">
                  <b style={{ fontSize: "15px" }}>
                    Driving <br />
                    Schools
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/packers&movers">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Packer&Movers.png"
                    alt="Packer&Movers image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/packers&movers">
                  <b style={{ fontSize: "15px" }}>
                    Packers &<br />
                    Movers
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            <a href="/couriers">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/CourierService.png"
                    alt="CourierService image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <a href="/couriers">
                  <b style={{ fontSize: "15px" }}>
                    Courier
                    <br />
                    Service
                  </b>
                </a>
              </center>
            </a>
          </div>
          <div>
            {/* <!-- Offcanvas container --> */}
            <div
              className="offcanvas offcanvas-start"
              id="demo99"
              style={{ width: "80%" }}
            >
              <div className="offcanvas-header">
                <h3 className="offcanvas-title">
                  <strong>Popular Categories</strong>
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                {/* <!-- Content of offcanvas menu --> */}
                <div className="row">
                  {/* <!-- Category Links --> */}
                  <div className="col-lg-2">
                    <a href="/ac-repair">
                      <img
                        src="./images/fafa icon/ac.png"
                        width="20px"
                        alt="ac"
                      />{" "}
                      AC Services
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/software">
                      <img
                        src="./images/fafa icon/software.png"
                        width="20px"
                        alt="software"
                      />{" "}
                      Software
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/astrologies">
                      <img
                        src="./images/fafa icon/Astrology.png"
                        width="20px"
                        alt="astrology"
                      />
                      Astrology
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/Training">
                      <img
                        src="./images/fafa icon/training.png"
                        width="25px"
                        alt="training"
                      />
                      Training
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/carrepairs">
                      <img
                        src="./images/fafa icon/automobile.png"
                        width="20px"
                        alt="automobile"
                      />
                      Automobile
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/bills&recharge">
                      <img
                        src="./images/fafa icon/insurance.png"
                        width="20px"
                        alt="insurance"
                      />
                      Insurance
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <a href="/Security">
                      <img
                        src="./images/fafa icon/security.png"
                        width="20px"
                        alt="security"
                      />
                      Security
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/flight">
                      <img
                        src="./images/fafa icon/flight.png"
                        width="20px"
                        alt="flight"
                      />
                      Travel
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/Shoping">
                      <img
                        src="./images/fafa icon/shopping.png"
                        width="20px"
                        alt="shopping"
                      />
                      Shopping
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/eventorganizers">
                      <img
                        src="./images/fafa icon/EventOrganisers.png"
                        width="20px"
                        alt="EventOrganisers"
                      />
                      Events
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/job">
                      <img
                        src="./images/fafa icon/job.png"
                        width="20px"
                        alt="job"
                      />
                      Jobs
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/incometax">
                      <img
                        src="./images/fafa icon/legal.png"
                        width="20px"
                        alt="legal"
                      />
                      Legal
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <a href="/hotelclient">
                      <img
                        src="./images/fafa icon/pg.png"
                        width="20px"
                        alt="pg"
                      />
                      Hotels
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/electrician">
                      <img
                        src="./images/fafa icon/electricity.png"
                        width="20px"
                        alt="electricity"
                      />
                      Electrical
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/jewellary">
                      <img
                        src="./images/fafa icon/jewelary.png"
                        width="20px"
                        alt="jewelary"
                      />
                      Jewellary
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/movies">
                      <img
                        src="./images/fafa icon/Entertainment.png"
                        width="20px"
                        alt="Entertainment"
                      />
                      Entertainment
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/internet">
                      <img
                        src="./images/fafa icon/Internet.png"
                        width="20px"
                        alt="internet"
                      />
                      Internet
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/homedecover">
                      <img
                        src="./images/fafa icon/HomeDecor.png"
                        width="20px"
                        alt="Home Decor"
                      />
                      Home Decore
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <a href="/beautyparlour">
                      <img
                        src="./images/fafa icon/slen.png"
                        width="20px"
                        alt="beauty parlour"
                      />
                      Salon
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/manufacturing">
                      <img
                        src="./images/fafa icon/Manufacturing.png"
                        width="20px"
                        alt="manufacturing.png"
                      />
                      Manufacturing
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/account">
                      <img
                        src="./images/fafa icon/account.png"
                        width="20px"
                        alt="account"
                      />
                      Account
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/advertise">
                      <img
                        src="./images/fafa icon/Advertising.png"
                        width="20px"
                        alt="advertising"
                      />
                      Advertising
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/internet">
                      <img
                        src="./images/fafa icon/Internet.png"
                        width="20px"
                        alt="internet"
                      />
                      Internet
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/Tatto">
                      <img
                        src="./images/fafa icon/tattoo.png"
                        width="20px"
                        alt="tattoo"
                      />
                      tattoo
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <a href="Store">
                      <img
                        src="./images/fafa icon/store.png"
                        width="20px"
                        alt="store"
                      />
                      Store
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/photostudio">
                      <img
                        src="./images/fafa icon/PhotoStudio.png"
                        width="20px"
                        alt="photostudio"
                      />
                      Photo Studio
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/gym">
                      <img
                        src="./images/fafa icon/Gym.png"
                        width="20px"
                        alt="gym"
                      />
                      Fitness
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/engineers">
                      <img
                        src="./images/fafa icon/Engineers.png"
                        width="20px"
                        alt="engineers"
                      />
                      Engineers
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/restaurant">
                      <img
                        src="./images/fafa icon/Restaurants.png"
                        width="20px"
                        alt="restaurant"
                      />
                      Restaurants
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/education">
                      <img
                        src="./images/fafa icon/Education.png"
                        width="20px"
                        alt="education"
                      />
                      Education
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <a href="/rentandhire">
                      <img
                        src="./images/fafa icon/Rent&Hire.png"
                        width="20px"
                        alt="rent and hire"
                      />
                      Rent & Hire
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/hospital">
                      <img
                        src="./images/fafa icon/hosp.png"
                        width="20px"
                        alt="hospital"
                      />
                      Hospitals
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/contractors">
                      <img
                        src="./images/fafa icon/constractor.png"
                        width="20px"
                        alt="contractor"
                      />
                      Contractors
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/petshops">
                      <img
                        src="./images/fafa icon/pethouse.png"
                        width="20px"
                        alt="pethouse"
                      />
                      Pet Shops
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/estaeagents">
                      <img
                        src="./images/fafa icon/EstateAgent.png"
                        width="20px"
                        alt="estageagent"
                      />
                      Estate Agent
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/dentist">
                      <img
                        src="./images/fafa icon/Dentists.png"
                        width="20px"
                        alt="dentist"
                      />
                      Dentists
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <a href="/gym">
                      <img
                        src="./images/fafa icon/Gym.png"
                        width="20px"
                        alt="gym"
                      />
                      Gym
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/consultants">
                      <img
                        src="./images/fafa icon/Consultants.png"
                        width="20px"
                        alt="consultant"
                      />
                      Consultants
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/eventorganizers">
                      <img
                        src="./images/fafa icon/EventOrganisers.png"
                        width="20px"
                        alt="eventorganisers"
                      />
                      Event Organisers
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/drivingschool">
                      <img
                        src="./images/fafa icon/DrivingSchools.png"
                        width="20px"
                        alt="drivingschools"
                      />
                      Driving Schools
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/packers&movers">
                      <img
                        src="./images/fafa icon/Packer&Movers.png"
                        width="20px"
                        alt="packer&movers"
                      />
                      Packers & Movers
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a href="/courier">
                      <img
                        src="./images/fafa icon/CourierService.png"
                        width="20px"
                        alt="courierservice"
                      />
                      Courier Service
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Button to Trigger Offcanvas Menu --> */}
            <a data-bs-toggle="offcanvas" data-bs-target="#demo99">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/PopularCategories.png"
                    alt="Popular Categories"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <b style={{ fontSize: "15px" }}>
                  Popular
                  <br /> Categories
                </b>
              </center>
            </a>
          </div>
        </div>

        {/* <----end 20 product--------- --> */}
        <hr />
        <div style={{ padding: "20px" }}></div>
        <div class="container2">
          <div class="big">
            <h3 class="text-center">
              <strong>Wedding Requisites</strong>
            </h3>
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <a href="/halls">
                    {" "}
                    <img
                      src="./images/Home services/banquet hall.png"
                      alt="banquet hall image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/halls">
                      <b style={{ fontSize: "15px" }}>Banquet Halls</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/jewellary">
                    {" "}
                    <img
                      src="./images/wedding/p5.png"
                      alt="spa image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/jewellary">
                      <b style={{ fontSize: "15px" }}>Bridal Requisite</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/caterings">
                    {" "}
                    <img
                      src="./images/Home services/Caterers.png"
                      alt="Caterers image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/caterings">
                      <b style={{ fontSize: "15px" }}>Caterers</b>{" "}
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div class="big">
            <h3 class="text-center">
              <strong>Beauty & Spa</strong>
            </h3>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-4">
                  <a href="/beautyparlour">
                    <img
                      src="./images/Home services/Beauty salon.png"
                      alt="beauty image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    {" "}
                    <a href="/beautyparlour">
                      <b style={{ fontSize: "15px" }}>Beauty Parlour</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/beautyparlour">
                    {" "}
                    <img
                      src="./images/Home services/spa.png"
                      alt="spa image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/beautyparlour">
                      <b style={{ fontSize: "15px" }}>spa & Massage</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/beautyparlour">
                    {" "}
                    <img
                      src="./images/Home services/salon.png"
                      alt="salon image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    {" "}
                    <a href="/beautyparlour">
                      <b style={{ fontSize: "15px" }}>Salon</b>
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div style={{ padding: "20px" }}></div>
          </div>
        </div>

        <div class="container2">
          <div class="big">
            <h3 class="text-center">
              <strong>Repairs & Services</strong>
            </h3>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-4">
                  <a href="/acrepaire" style={{ textDecoration: "none" }}>
                    <img
                      src="./images/Home services/AC services.png"
                      alt="AC image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/acrepaire" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px" }}>AC Services</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/carservices" style={{ textDecoration: "none" }}>
                    {" "}
                    <img
                      src="./images/Home services/car services.png"
                      alt="car image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/carservices" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px" }}>Car Services</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/bike" style={{ textDecoration: "none" }}>
                    {" "}
                    <img
                      src="./images/Home services/bike services.png"
                      alt="bike image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/bike" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px" }}>Bike Services</b>
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div class="big">
            <h3 class="text-center">
              <strong>Daily Needs</strong>
            </h3>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-4">
                  <a href="/movies">
                    {" "}
                    <img
                      src="./images/Home services/movies.png"
                      alt="hotel image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/movies">
                      <b style={{ fontSize: "15px" }}>Movies</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/grocery">
                    {" "}
                    <img
                      src="./images/Home services/grocery.png"
                      alt="hotel image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/grocery">
                      <b style={{ fontSize: "15px" }}>Grocery</b>
                    </a>
                  </center>
                </div>
                <div class="col-lg-4">
                  <a href="/electrician">
                    <img
                      src="./images/Home services/electrician.png"
                      alt="electrician image"
                      class="mx-2 daily"
                    />
                  </a>
                  <center>
                    <a href="/electrician">
                      <b style={{ fontSize: "15px" }}>Electrician</b>
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div style={{ padding: "10px" }}></div>
          </div>
        </div>
        <hr />
        {/* <!-- ---services-------> */}
        <div style={{ padding: "5px" }}></div>
        <div class="border">
          <div class="container1">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <h3>
                    <strong>Bills & Recharge</strong>
                  </h3>
                  <p>
                    Pay your bills & recharge <br />
                    instantly with Justdial
                  </p>
                  <p style={{ color: "blue" }}>Explore More</p>
                </div>
                <div class="col-lg-8">
                  <div class="row">
                    <div class="container1">
                      <div>
                        <a href="/bills&recharge">
                          {" "}
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/mobileicon.png"
                                alt="mobileicon image"
                                class="small"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/bills&recharge">
                            <b style={{ fontSize: "15px" }}>Mobile</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/bills&recharge">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/electricity.png"
                                alt="hotel image"
                                class="small1"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/bills&recharge">
                            <b style={{ fontSize: "15px" }}>Electricity</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/bills&recharge">
                          {" "}
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/DTH.png"
                                alt="BeautyParlour image"
                                class="small1"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/bills&recharge">
                            <b style={{ fontSize: "15px" }}>DTH</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/bills&recharge">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/water.png"
                                alt="homedecor image"
                                class="small"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/bills&recharge">
                            <b style={{ fontSize: "15px" }}>Water</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/bills&recharge">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/gas.png"
                                alt="bus image"
                                class="small"
                              />
                            </center>
                          </div>
                          <center>
                            <a href="/bills&recharge">
                              <b style={{ fontSize: "15px" }}>Gas</b>
                            </a>
                          </center>
                        </a>
                      </div>
                      <div>
                        <a href="/bills&recharge">
                          {" "}
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/insurance.png"
                                alt="bus image"
                                class="small1"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/bills&recharge">
                            <b style={{ fontSize: "15px" }}>Insurance</b>
                          </a>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="container1">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <h3>
                    <strong>Travel Bookings</strong>
                  </h3>
                  <p>Instant ticket bookings for your best travel experience</p>
                  <p style={{ color: "blue" }}>Explore More</p>
                </div>
                <div class="col-lg-8">
                  <div class="row">
                    <div class="container1">
                      <div>
                        <a href="/flight">
                          {" "}
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/flight.png"
                                alt="Restaurants image"
                                class="small1"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/flight">
                            <b style={{ fontSize: "15px" }}>Flight</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/bus">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/bus.png"
                                alt="hotel image"
                                class="small1"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/bus">
                            <b style={{ fontSize: "15px" }}>Bus</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="Train">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/train.png"
                                alt="BeautyParlour image"
                                class="small2"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/Train">
                            <b style={{ fontSize: "15px" }}>Train</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/hotel">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/hotelrent.png"
                                alt="homedecor image"
                                class="small"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/hotel">
                            <b style={{ fontSize: "15px" }}>Hotel</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/cab">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/rentcar.png"
                                alt="bus image"
                                class="small"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/cab">
                            <b style={{ fontSize: "15px" }}>Car Rentals</b>
                          </a>
                        </center>
                      </div>
                      <div>
                        <a href="/Visa">
                          <div class="box">
                            <center>
                              <img
                                src="./images/fafa icon/visaimages.png"
                                alt="bus image"
                                class="small"
                              />
                            </center>
                          </div>
                        </a>
                        <center>
                          <a href="/Visa">
                            <b style={{ fontSize: "15px" }}>Visa</b>
                          </a>
                          {/* <!-- <p style="color:green;">Drive Easy<br/> Anywhere</p> --> */}
                        </center>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "20px" }}></div>
        {/* <!-- follow us --> */}
        {/* <div className="container">
          <div class="social-media">
            <p className="social">
              <strong>Follow us on:</strong>
              <a href="#">
                <i
                  class="fa fa-facebook-square mx-2"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  class="fa fa-instagram mx-2"
                  style={{ fontSize: "20px", color: "red" }}
                ></i>
              </a>
              <a href="#">
                <i
                  class="fa fa-linkedin-square mx-2"
                  style={{ fontSize: "20px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  class="fa fa-youtube-square mx-2"
                  style={{ fontSize: "20px", color: "red" }}
                ></i>
              </a>
            </p>
            <p>
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
          </div>
        </div> */}
      </div>
      <hr />
      <PopularSearch />
      <hr />
    </div>
  );
}
export default Index;
