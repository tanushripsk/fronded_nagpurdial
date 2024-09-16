import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Account from "./components/Account";
import ACRepair from "./components/ACRepair";
import ACRepairShops from "./components/ACRepairShops";
import Astrologies from "./components/Astrologies";
import Auditors from "./components/Auditors";
import BachlorParty from "./components/BachlorParty";
import Band from "./components/Band";
import BanquetHalls from "./components/BanquetHalls";
import Beauty from "./components/Beauty";
import BeautyParlour from "./components/BeautyParlour";
import Bike from "./components/Bike";
import BikeServices from "./components/BikeServices";
import Bill from "./components/Bill";
import BridalWear from "./components/BridalWear";
import Bus from "./components/Bus";
import CA from "./components/CA";
import Cab from "./components/Cab";
import CarRepaire from "./components/CarRepaire";
import CarServices from "./components/CarServices";
import Catering from "./components/Catering";
import Contractor from "./components/Contractor";
import Choregrapheres from "./components/Choregrapheres";
import Consultants from "./components/Consultants";
import ContractorsClients from "./components/ContractorsClients";
import CorporateMedia from "./components/CorporateMedia";
import Courier from "./components/Courier";
import CourierClients from "./components/CourierClients";
import CSR from "./components/CSR";
import Dentist from "./components/Dentist";
import DJ from "./components/DJ";
import DrivingSchool from "./components/DrivingSchool";
import Education from "./components/Education";
import Coaching from "./components/Coaching";
import Collages from "./components/Collages";
import School from "./components/School";
import EducationTraining from "./components/EducationTraining";
import Electrician from "./components/Electrician";
import Engineer from "./components/Engineer";
import EstaeAgents from "./components/EstaeAgents";
import EventOrganizers from "./components/EventOrganizers";
import EventsOrganizersServices from "./components/EventsOrganizersServices";
import Flight from "./components/Flight";
import Grocery from "./components/Grocery";
import GST from "./components/GST";
import GYM from "./components/GYM";
import GYM1 from "./components/GYM1";
import Halls from "./components/Halls";
import HomeDecover from "./components/HomeDecover";
import HomeFuriture from "./components/HomeFuriture";
import HoneymoonTour from "./components/HoneymoonTour";
import Hourse from "./components/Hourse";
import Hospital from "./components/Hospital";
import HospitalsClinic from "./components/HospitalsClinic";
import Hotel from "./components/Hotel";
import HotelsClient from "./components/HotelsClient";
import IncomeTax from "./components/IncomeTax";
import InternationalSim from "./components/InternationalSim";
import Internet from "./components/Internet";
import InvitationCards from "./components/InvitationCards";
import Jewellary from "./components/Jewellary";
import Jobs from "./components/Jobs";
import Lawyers from "./components/Lawyers";
import Listing from "./components/Listing";
import Manufacturing from "./components/Manufacturing";
import MarrigeCertificateAgents from "./components/MarrigeCertificateAgents";
import MehandiArtist from "./components/MehandiArtist";
import MenhairStyle from "./components/MenhairStyle";
import MenMakeUpArtist from "./components/MenMakeUpArtist";
import MenSalon from "./components/MenSalon";
import Movie from "./components/Movie";
import Overview from "./components/Overview";
import PackersMovers from "./components/PackersMovers";
import Panditji from "./components/Panditji";
import PetShops from "./components/PetShops";
import PGhostel from "./components/PGhostel";
import PhotoStudio from "./components/PhotoStudio";
import PressMedia from "./components/PressMedia";
import ReadyMadeGarments from "./components/ReadyMadeGarments";
import RentAndHire from "./components/RentAndHire";
import RentServices from "./components/RentServices";
import Report from "./components/Report";
import Restaurant from "./components/Restaurant";
import Suits from "./components/Suits";
import Security from "./components/Security";
import Software from "./components/Software";
import Stagedecover from "./components/Stagedecover";
import Tatto from "./components/Tatto";
import Train from "./components/Train";
import Training from "./components/Training";
import Valuers from "./components/Valuers";
import Video from "./components/Video";
import Visa from "./components/Visa";
import Wedding from "./components/Wedding";
import Restro from "./components/Restro";
import Store from "./components/Store";
import Index from "./components/Index";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Otp from "./Otp";
import ModelComponent from "./components/ModalComponent";
import Model1 from "./components/Model1";
import Model3 from "./components/Model3";
import Notes from "./components/Notes";
import NoteState from "./context/NoteState";
import Home1 from "./components/Home1";
import About1 from "./components/About1";
import Nav from "./components/Nav";
import Otp1 from "./Otp1";
import ImageForm from "./ImageForm";
import Footer from "./components/Footer";
import Location1 from "./Location/Location1";
import SearchResults from "./Location/SearchResults";
import Location from "./Location/Location";
import LocationDetails from "./Location/LocationDetail";
import Location2 from "./Location/Location2";
import Location2Result from "./Location/Location2Result";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import SearchBar from "./PhotoGallery/SerachBar";
import Advertise from "./Advertise/Advertise";
import AdvertiseModel from "./Advertise/AdvertiseModel";
import Businesschat from "./Businesschat/Businesschart";
import Businesschatmodel from "./Businesschat/Businesschatmodel";
// import AlertComponent from "./Advertise/AlertComponent"; 
// Import the component for image advertisements
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/advertise" element={<Advertise />} />
            <Route exact path="/acrepaire" element={<ACRepair />} />
            <Route exact path="/acrepairshops" element={<ACRepairShops />} />
            <Route exact path="/astrologies" element={<Astrologies />} />
            <Route exact path="/auditors" element={<Auditors />} />
            <Route exact path="/bachlorparty" element={<BachlorParty />} />
            <Route exact path="/band" element={<Band />} />
            <Route exact path="/beauty" element={<Beauty />} />
            <Route exact path="/beautyparlour" element={<BeautyParlour />} />
            <Route exact path="/banquithall" element={<BanquetHalls />} />
            <Route exact path="/bike" element={<Bike />} />
            <Route exact path="/bikeservices" element={<BikeServices />} />
            <Route exact path="/bills&recharge" element={<Bill />} />
            <Route exact path="/bridalwear" element={<BridalWear />} />
            <Route exact path="/bus" element={<Bus />} />
            <Route exact path="/ca" element={<CA />} />
            <Route exact path="/cabs" element={<Cab />} />
            <Route exact path="/carrepairs" element={<CarRepaire />} />
            <Route exact path="/carservices" element={<CarServices />} />
            <Route exact path="/cateres" element={<Catering />} />
            <Route exact path="/contractors" element={<Contractor />} />
            <Route exact path="/choregrapheres" element={<Choregrapheres />} />
            <Route exact path="/consultants" element={<Consultants />} />
            <Route
              exact
              path="/contractorsclients"
              element={<ContractorsClients />}
            />
            <Route exact path="/corporatemedia" element={<CorporateMedia />} />
            <Route exact path="/couriers" element={<Courier />} />
            <Route exact path="/CourierServices" element={<CourierClients />} />
            <Route exact path="/csr" element={<CSR />} />
            <Route exact path="/dentist" element={<Dentist />} />
            <Route exact path="/dj" element={<DJ />} />
            <Route exact path="/drivingschool" element={<DrivingSchool />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/educationcoaching" element={<Coaching />} />
            <Route exact path="/educationcollages" element={<Collages />} />
            <Route exact path="/educationschools" element={<School />} />
            <Route
              exact
              path="/educationtraining"
              element={<EducationTraining />}
            />
            <Route exact path="/electrician" element={<Electrician />} />
            <Route exact path="/engineers" element={<Engineer />} />
            <Route exact path="/estaeagents" element={<EstaeAgents />} />
            <Route
              exact
              path="/eventorganizers"
              element={<EventOrganizers />}
            />
            <Route
              exact
              path="/eventorganizerservices"
              element={<EventsOrganizersServices />}
            />
            <Route exact path="/flight" element={<Flight />} />
            <Route exact path="/grocery" element={<Grocery />} />
            <Route exact path="/gst" element={<GST />} />
            <Route exact path="/gym" element={<GYM />} />
            <Route exact path="/gym1" element={<GYM1 />} />
            <Route exact path="/halls" element={<Halls />} />
            <Route exact path="/homedecover" element={<HomeDecover />} />
            <Route exact path="/homefurniture" element={<HomeFuriture />} />
            <Route exact path="/honeymoontour" element={<HoneymoonTour />} />
            <Route exact path="/hourse" element={<Hourse />} />
            <Route exact path="/hospital" element={<Hospital />} />
            <Route exact path="/hospitalclient" element={<HospitalsClinic />} />
            <Route exact path="/hotel" element={<Hotel />} />
            <Route exact path="/hotelclient" element={<HotelsClient />} />
            <Route exact path="/incometax" element={<IncomeTax />} />
            <Route
              exact
              path="/internationalsim"
              element={<InternationalSim />}
            />
            <Route exact path="/internet" element={<Internet />} />
            <Route exact path="/invitationcard" element={<InvitationCards />} />
            <Route exact path="/jewellary" element={<Jewellary />} />
            <Route exact path="/job" element={<Jobs />} />
            <Route exact path="/lawyers" element={<Lawyers />} />
            <Route exact path="/listing" element={<Listing />} />
            <Route exact path="/location" element={<Location />} />
            <Route path="/location/:query" element={<LocationDetails />} />
            <Route exact path="/location1" element={<Location1 />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route exact path="/location2" element={<Location2 />} />
            <Route path="/location2/:query" element={<Location2Result />} />
            <Route exact path="/manufacturing" element={<Manufacturing />} />
            <Route
              exact
              path="/marrigecertificateagents"
              element={<MarrigeCertificateAgents />}
            />
            <Route exact path="/mehandi" element={<MehandiArtist />} />
            <Route exact path="/menhairstyle" element={<MenhairStyle />} />
            <Route exact path="/menmakeup" element={<MenMakeUpArtist />} />
            <Route exact path="/mensaloan" element={<MenSalon />} />
            <Route exact path="/movies" element={<Movie />} />
            <Route exact path="/overview" element={<Overview />} />
            <Route exact path="/packers&movers" element={<PackersMovers />} />
            <Route exact path="/panditji" element={<Panditji />} />
            <Route exact path="/petshops" element={<PetShops />} />
            <Route exact path="/pghotels" element={<PGhostel />} />
            <Route exact path="/photostudio" element={<PhotoStudio />} />
            <Route exact path="/press" element={<PressMedia />} />
            <Route
              exact
              path="/readymadegarments"
              element={<ReadyMadeGarments />}
            />
            <Route exact path="/rentandhire" element={<RentAndHire />} />
            <Route exact path="/rentservice" element={<RentServices />} />
            <Route exact path="/report" element={<Report />} />
            <Route exact path="/restaurant" element={<Restaurant />} />
            <Route exact path="/Suits" element={<Suits />} />
            <Route exact path="/Security" element={<Security />} />
            <Route exact path="/Software" element={<Software />} />
            <Route exact path="/Stagedecover" element={<Stagedecover />} />
            <Route exact path="/Tatto" element={<Tatto />} />
            <Route exact path="/Train" element={<Train />} />
            <Route exact path="/Training" element={<Training />} />
            <Route exact path="/Valuers" element={<Valuers />} />
            <Route exact path="/Video" element={<Video />} />
            <Route exact path="/Visa" element={<Visa />} />
            <Route exact path="/Wedding" element={<Wedding />} />
            <Route exact path="/restro" element={<Restro />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/otp" element={<Otp />} />
            <Route exact path="/otp1" element={<Otp1 />} />
            <Route exact path="/model" element={<ModelComponent />} />
            <Route exact path="/model1" element={<Model1 />} />
            <Route exact path="/model3" element={<Model3 />} />
            <Route exact path="/note" element={<Notes />} />
            <Route exact path="/home1" element={<Home1 />} />
            <Route exact path="/about1" element={<About1 />} />
            <Route exact path="/imageform" element={<ImageForm />} />
            <Route exact path="/photogallery" element={<PhotoGallery />} />
            <Route exact path="/searchbar" element={<SearchBar />} />
            <Route exact path="/searchresult1" element={<SearchResults />} />
            <Route exact path="/advertise" element={<Advertise />} />
            <Route exact path="/advertisemodel" element={<AdvertiseModel />} />
            <Route exact path="/businesschat" element={<Businesschat />} />
            <Route
              exact
              path="/businesschatmodel"
              element={<Businesschatmodel />}
            />
          </Routes>
          {/* <AlertComponent />  */}
          {/* this component is only for advertising */}
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
