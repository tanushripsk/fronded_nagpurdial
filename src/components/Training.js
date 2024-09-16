import React,{useState} from "react";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component


const whatsappContacts = [
  { id: 1, phone: "9188056263005", text1: "Rruchita Unique Mindset Coach & NLP Master Practitioner" },
  // { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 2, phone: "919975288300", text2: "PSK Speaking Club" },
  // Add more contacts as needed
];
const whatsappContacts2 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 3, phone: "917387300081", text3: "Sunshine Tutorials - Best Home Tutor Tuition Classes Nagpur" },
  // Add more contacts as needed
];

const whatsappContacts3 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 4, phone: "917387300081", text4: "Chanakya Academy" },
  // Add more contacts as needed
];


const whatsappContacts4 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 5, phone: "918830583942", text5: "DAYAWAN'S PUBLIC SPEAKING ACADEMY" },
  // Add more contacts as needed
];

const whatsappContacts5 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 6, phone: "919763022333", text6: "ICAD GRE" },
  // Add more contacts as needed
];


const whatsappContacts6 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 7, phone: "919975288300", text7: "ICAD GRE" },
  // Add more contacts as needed
];


const whatsappContacts7 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 8, phone: "919975288300", text8: "PSK Technologies " },
  // Add more contacts as needed
];


const whatsappContacts8 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 9, phone: "917122532673", text8: "NIIT Nagpur Dharampeth Centre" },
  // Add more contacts as needed
];


const whatsappContacts9 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id:10, phone: "918007423016", text8: "Shubhas CBSE Scholars" },
  // Add more contacts as needed
];


const whatsappContacts10 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 11, phone: "917620583870", text8: "Pragati's Makeup Mantra" },
  // Add more contacts as needed
];


const whatsappContacts12 = [
  // { id: 1, phone: "919975288300", text1: "Prashant Kadhao" },
  { id: 9, phone: "917620583870", text8: "Pragati's Makeup Mantra" },
  // Add more contacts as needed
];




function Training() 

{
  const [showOTPModal, setShowOTPModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // To store the selected contact information

  const handleContactButtonClick = (contact) => {
    setSelectedContact(contact); // Store the selected contact
    setShowOTPModal(true); // Show the OTP modal
  };

  const handleOtpVerified = () => {
    setShowContactForm(true); // Show contact form after OTP verification
    setShowOTPModal(false); // Close OTP modal after verification
  };

  const handleCloseModal = () => {
    setShowOTPModal(false); // Close both OTP and Contact modals
    setShowContactForm(false);
    setSelectedContact(null); // Clear the selected contact
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner14">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <h5>
          <strong>Nagpur's Top Training Services</strong>
        </h5>
        <div style={{ padding: "2px" }}></div>
        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>Rruchita Unique Mindset Coach & NLP Master Practitioner</b>
              </h5>
              <p className="bp1">
                109, Bhagwaghar Complex, Khare Town, Dharampeth, Nagpur
              </p>

              <p className="bp2" style={{ color: "grey" }}>
                Unique Mindset Coaching & Counseling For Students | Career
                Counseling | Public Speaking Skills | Communication Skills &
                Inner Personality Development
              </p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>

{whatsappContacts.map((contact) => (
                <div key={contact.id1} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text1}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly7"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly7"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly7"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>PSK Speaking Club</b>
              </h5>
              <p className="bp1">
                Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi,
                Nagpur
              </p>

              <p className="bp2" style={{ color: "grey" }}>
                PUBLIC SPEAKING | PRESENTATION | SPOKEN ENGLISH | GROUP
                DISCUSSION | INTERVIEW TECHNIQUES | PERSONAL TRAINING
              </p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
{whatsappContacts1.map((contact) => (
                <div key={contact.id2} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text2}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly8"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly8"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly8"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>
                  Sunshine Tutorials - Best Home Tutor Tuition classNamees
                  Nagpur
                </b>
              </h5>
              <p className="bp2" style={{ color: "grey" }}>
                Anant Apartments, near Children Traffic Park, Khare Town,
                Dharampeth, Nagpur, Maharashtra 440010
              </p>

              <p className="bp2" style={{ color: "grey" }}>
                Ist To XIIth | CBSE | ICSE | STATE BOARD
              </p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontsize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>

{whatsappContacts2.map((contact) => (
                <div key={contact.id3} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text3}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly11"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly11"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly11"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>DAYAWAN'S PUBLIC SPEAKING ACADEMY</b>
              </h5>
              <p className="bp1">
                Flat no,303 ved residency, near Nilkamal society, near Haldiram,
                Besa, Nagpur, Maharashtra 400034
              </p>

              <p className="bp2" style={{ color: "grey" }}>
                Personality Development | Business Management |Leadership
                Development | English Speaking | Public Speaking | Professional
                Selling
              </p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>

{whatsappContacts3.map((contact) => (
                <div key={contact.id4} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact)}
                    >
                      <i
                        className="fa fa-comments"
                        style={{ fontSize: "20px", color: "red" }}
                      ></i>
                      <b> Chat with {contact.text4}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "2px" }}></div>
        {/* <div className="beauty">
                   <div className="row">
                       <div className="col-lg-4">
                           <div className="container">
                               <br/>
                               <div id="carouselExampleSlidesOnly14" className="carousel slide" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                           <div className="carousel-item active">
                                            <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1"/>
                                           </div>
                                               <div className="carousel-item">
                                                <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2"/>
                                               </div>
                                                   <div className="carousel-item">
                                                   <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3"/>
                                                   </div>
                                               </div>
                                                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly14" role="button" data-slide="prev">
                                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                   <span className="sr-only text-danger">Previous</span>
                                                   </a>
                                               <a className="carousel-control-next" href="#carouselExampleSlidesOnly14" role="button" data-slide="next">
                                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                               <span className="sr-only text-danger">Next</span>
                                               </a>
                                              
                                           </div>
                                           
                                   </div>
                                   </div>
                                   <br/>
                               </div>
   
                           <div className="col-lg-8">
                          <h5 className="bp mt-1"><b>PSK Technologies Pvt. Ltd.</b></h5>
                              <p className="bp1">Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi, Nagpur</p>
                       
                              <p className="bp2" style={{color:'grey'}}>Software Languages | Hardware | Networking | Digital Marketing</p>
                              <i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star-half-full" style={{fontSize:'26px',color:'#FFC300'}}></i> */}

        {/* <!-- **************modal******************* --> */}
        {/* <div className="container mt-1">
   <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-comments" style={{fontSize:'20px',color:'red'}}></i>
      <b> chat</b></button>
   </div> */}

        {/* <!-- The Modal --> */}
        {/* <div className="modal" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
   
         {/* <!-- Modal Header --> */}
        {/* <div className="modal-header">
           <h4 className="modal-title">Nagpurdial</h4>
           <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
         </div> */}
        {/* <!-- Modal body --> */}
        {/* <div className="modal-body">
        <h4>Name</h4>
        <h4>mobile no</h4> */}
      </div>

      {/* <!-- Modal footer --> */}
      {/* <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Continue</button>
         </div> */}

      {/* </div>
     </div>
   </div> */}
      {/* </div>
   </div>
   </div> */}

      <div style={{ padding: "2px" }}></div>
      {/* <div className="beauty">
                   <div className="row">
                       <div className="col-lg-4">
                           <div className="container">
                               <br/>
                               <div id="carouselExampleSlidesOnly14" className="carousel slide" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                           <div className="carousel-item active">
                                            <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1"/>
                                           </div>
                                               <div className="carousel-item">
                                                <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2"/>
                                               </div>
                                                   <div className="carousel-item">
                                                   <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3"/>
                                                   </div>
                                               </div>
                                                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly14" role="button" data-slide="prev">
                                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                   <span className="sr-only text-danger">Previous</span>
                                                   </a>
                                               <a className="carousel-control-next" href="#carouselExampleSlidesOnly14" role="button" data-slide="next">
                                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                               <span className="sr-only text-danger">Next</span>
                                               </a>
                                               <br/>
                                           </div>
                                   </div>
                               </div>
{/*     */}
      {/*}
                           <div className="col-lg-8">
                          <h5 className="bp mt-1"><b>NIIT Nagpur Dharampeth Centre</b></h5>
                              <p className="bp1">3rd floor, Mangalam Arcade North Bazar Road, Dharampeth Exten  nsion, Nagpur</p>
                       
                              <p className="bp2" style={{color:'grey'}}>IT | Data Analytics | Digital Marketing</p>
                              <i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star-half-full" style={{fontSize:'26px',color:'#FFC300'}}></i> */}

      {/* <!-- **************modal******************* --> */}
      {/* <div className="container mt-1">
   <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-comments" style={{fontSize:'20px',color:'red'}}></i>
      <b> chat</b></button>
   </div> */}

      {/* <!-- The Modal --> */}
      {/* <div className="modal" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
   
         {/* <!-- Modal Header --> */}
      {/* <div className="modal-header">
           <h4 className="modal-title">Nagpurdial</h4>
           <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
         </div> */}

      {/* <!-- Modal body --> */}
      {/* <div className="modal-body">
        <h4>Name</h4>
        <h4>mobile no</h4>
   
         </div> */}

      {/* <!-- Modal footer --> */}
      {/* <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Continue</button>
         </div>
   
       </div> */}
      {/* </div>
   </div>
   </div>
   </div>
   </div> */}

      {/*    
   <div style={{padding:'2px'}}></div>
            <div className="beauty">
                   <div className="row">
                       <div className="col-lg-4">
                           <div className="container">
                               <br/>
                               <div id="carouselExampleSlidesOnly18" className="carousel slide" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                           <div className="carousel-item active">
                                            <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1"/>
                                           </div>
                                               <div className="carousel-item">
                                                <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2"/>
                                               </div>
                                                   <div className="carousel-item">
                                                   <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3"/>
                                                   </div>
                                               </div>
                                                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly18" role="button" data-slide="prev">
                                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                   <span className="sr-only text-danger">Previous</span>
                                                   </a>
                                               <a className="carousel-control-next" href="#carouselExampleSlidesOnly18" role="button" data-slide="next">
                                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                               <span className="sr-only text-danger">Next</span>
                                               </a>
                                               <br/>
                                           </div>
                                   </div>
                               </div>
   
                           <div className="col-lg-8">
                          <h5 className="bp mt-1"><b>Shubhas CBSE Scholars</b></h5>
                              <p className="bp1">Plot no. 14, मार्केट रोड, Surya Nagar, Nagpur, Maharashtra 440035</p>
                       
                              <p className="bp2" style={{color:'grey'}}>8th className CBSE | 9th className CBSE | 10th className CBSE | 11th & 12th className Science CBSE/State</p>
                              <i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star-half-full" style={{fontSize:'26px',color:'#FFC300'}}></i>
   
   {/* <!-- **************modal******************* --> */}
      {/* <div className="container mt-1">
   <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-comments" style={{fontSize:'20px',color:'red'}}></i>
      <b> chat</b></button>
   </div> */}

      {/* <!-- The Modal --> */}
      {/* <div className="modal" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
   
         {/* <!-- Modal Header --> */}
      {/* <div className="modal-header">
           <h4 className="modal-title">Nagpurdial</h4>
           <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
         </div> */}

      {/* <!-- Modal body --> */}
      {/* <div className="modal-body">
        <h4>Name</h4>
        <h4>mobile no</h4> */}

      {/* </div> */}

      {/* <!-- Modal footer --> */}
      {/* <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Continue</button>
         </div> */}

      {/* </div>
     </div>
   </div> */}
      {/* </div>
   </div>
   </div>  */}
      {/* <div style={{padding:'2px'}}></div>
            <div className="beauty">
                   <div className="row">
                       <div className="col-lg-4">
                           <div className="container">
                               <br/>
                               <div id="carouselExampleSlidesOnly21" className="carousel slide" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                           <div className="carousel-item active">
                                            <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1"/>
                                           </div>
                                               <div className="carousel-item">
                                                <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2"/>
                                               </div>
                                                   <div className="carousel-item">
                                                   <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3"/>
                                                   </div>
                                               </div>
                                                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly21" role="button" data-slide="prev">
                                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                   <span className="sr-only text-danger">Previous</span>
                                                   </a>
                                               <a className="carousel-control-next" href="#carouselExampleSlidesOnly21" role="button" data-slide="next">
                                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                               <span className="sr-only text-danger">Next</span>
                                               </a>
                                               <br/>
                                           </div>
                                   </div>
                               </div>
   
                           <div className="col-lg-8">
                          <h5 className="bp mt-1"><b>Pragati's Makeup Mantra</b></h5>
                              <p className="bp1">Fortune Mall, Lower ground Munje Square Sitabuldi Nagpur- 440012</p>
                       
                              <p className="bp2" style={{color:'grey'}}>Full Diploma Course | Fast Track Master className | Artistic Makeup Course | Workshop className</p>
                              <i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}  ></i><i className="fa fa-star" style={{fontSize:'26px', color:'#FFC300'}}></i><i className="fa fa-star-half-full" style={{fontSize:'26px',color:'#FFC30'}}></i>
   
   {/* <!-- **************modal******************* --> */}
      {/* <div className="container mt-1">
   <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-comments" style={{fontSize:'20px',color:'red'}}></i>
      <b> chat</b></button>
   </div> */}
      {/*    
   <!-- The Modal --> */}
      {/* <div className="modal" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
   
         {/* <!-- Modal Header --> */}
      {/* <div className="modal-header">
           <h4 className="modal-title">Nagpurdial</h4>
           <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
         </div> */}

      {/* <!-- Modal body --> */}
      {/* <div className="modal-body">
        <h4>Name</h4>
        <h4>mobile no</h4>
   
         </div> */}

      {/* <!-- Modal footer --> */}
      {/* <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Continue</button>
         </div> */}

      {/* </div>
     </div>
   </div> */}
      {/* </div>
   </div>
   </div> */}

      <div style={{ padding: "2px" }}></div>
      {/* <div className="beauty">
                   <div className="row">
                       <div className="col-lg-4">
                           <div className="container">
                               <br/>
                               <div id="carouselExampleSlidesOnly22" className="carousel slide" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                           <div className="carousel-item active">
                                            <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1"/>
                                           </div>
                                               <div className="carousel-item">
                                                <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2"/>
                                               </div>
                                                   <div className="carousel-item">
                                                   <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3"/>
                                                   </div>
                                               </div>
                                                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly22" role="button" data-slide="prev">
                                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                   <span className="sr-only text-danger">Previous</span>
                                                   </a>
                                               <a className="carousel-control-next" href="#carouselExampleSlidesOnly22" role="button" data-slide="next">
                                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                               <span className="sr-only text-danger">Next</span>
                                               </a>
                                               <br/>
                                           </div>
                                   </div>
                               </div>
   
                           <div className="col-lg-8">
                          <h5 className="bp mt-1"><b>CBSE Coaching Institute in Nagpur</b></h5>
                              <p className="bp1">209, Orange City Towers, Opp Patrakar Bhavan, Dhantoli, Nagpur- 440012 India</p>
                       
                              <p className="bp2" style={{color:'grey'}}>For className 6th to 10th Special Session on Personality Development by Esha Arora</p>
                              <i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star" style={{fontSize:'26px',color:'#FFC300'}}></i><i className="fa fa-star-half-full" style={{fontSize:'26px',color:'#FFC300'}}></i>
   
   {/* <!-- **************modal******************* --> */}
      {/* <div className="container mt-1">
   <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-comments" style={{fontSize:'20px',color:'red'}}></i>
      <b> chat</b></button>
   </div> */}

      {/* <!-- The Modal --> */}
      {/* <div className="modal" id="myModal">
     <div className="modal-dialog">
       <div className="modal-content">
   
         {/* <!-- Modal Header --> */}
      {/* <div className="modal-header">
           <h4 className="modal-title">Nagpurdial</h4>
           <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
         </div> */}

      {/* <!-- Modal body --> */}
      {/* <div className="modal-body">
        <h4>Name</h4>
        <h4>mobile no</h4>
   
         </div> */}

      {/* <!-- Modal footer --> */}
      {/* <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Continue</button>
         </div> */}

      {/* </div>
     </div>
   </div>
   </div>
   </div>
   </div> */}
      <div style={{ padding: "5px" }}></div>
       {/* Modal for OTP and Contact1 */}
       {showOTPModal && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">OTP Verification</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <Otp3
                    onClose={handleCloseModal}
                    onOtpVerified={handleOtpVerified}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {showContactForm && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Contact Form</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <Contact1
                    contact={selectedContact}
                    onClose={handleCloseModal}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      {/* <!-- *****************************footer************************************** --> */}
      
      <hr />
      
    </div>
  );
}

export default Training;
