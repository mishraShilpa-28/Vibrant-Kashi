import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Registration/Login";
import Register from "./Pages/Registration/Register";
import AboutUs from "./Pages/AboutUs/AboutUs";
import VaranasiMap from "./Components/Map/VaranasiMap";
import Destinations from "./Pages/Destinations/Destinations";
import { headingAndimage } from "./Data/headingImage.json";
import DivinePlaces from "./Pages/Destinations/DivinePlaces";
import Ghats from "./Pages/Destinations/Ghats";
import Adventure from "./Pages/Destinations/Adventure";
import Museum from "./Pages/Destinations/Museum";
import Historicplaces from "./Pages/Destinations/Historicplaces";
import CultureHeritage from "./Pages/Ways/CultureAndHeritage/CultureHeritage";
import SubEBaranas from "./Pages/Ways/SubEBaranas/SubEBaranas";
import NatureAdventure from "./Pages/Ways/NatureAndAdventure/NatureAndAdventure";
import TentCity from "./Pages/Ways/TentCity/TentCity";
import Hotels from "./Pages/Hotels/Hotels";
import Restaurants from "./Pages/Restaurants/Restaurants";
import ThingsToDo from "./Pages/ThingsToDo/ThingsToDo";
import EventsAndFestivals from "./Pages/EventsAndFestivals/EventsAndFestivals";
import ReviewPage from "./Pages/Review/ReviewPage";
import Footer from "./Components/Footer/Footer";
import Forgot from "./Pages/Registration/Forgot";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about-us"
          element={<AboutUs headerTwelve={headingAndimage[10]} />}
        />
        <Route
          path="/review-page"
          element={<ReviewPage headerTenth={headingAndimage[9]} />}
        />
        <Route path="/map" element={<VaranasiMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route
          path="/culture-heritage"
          element={<CultureHeritage headerSixth={headingAndimage[5]} />}
        />

        <Route
          path="/sub-e-baranas"
          element={<SubEBaranas headerSeven={headingAndimage[6]} />}
        />
        <Route
          path="/nature-adventure"
          element={<NatureAdventure headerEight={headingAndimage[7]} />}
        />
        <Route
          path="/tent-city"
          element={<TentCity headerNine={headingAndimage[8]} />}
        />

        <Route
          path="/destination"
          element={<Destinations headerOne={headingAndimage[0]} />}
        />
        <Route path="/divine-places" element={<DivinePlaces />} />
        <Route path="/ghats" element={<Ghats />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/historical-places" element={<Historicplaces />} />
        <Route path="/adventure" element={<Adventure />} />

        <Route
          path="/hotels"
          element={<Hotels headerTwo={headingAndimage[1]} />}
        />
        <Route
          path="/restaurants"
          element={<Restaurants headerThree={headingAndimage[2]} />}
        />
        <Route
          path="/thingToDo"
          element={<ThingsToDo headerFour={headingAndimage[3]} />}
        />
        <Route
          path="/eventsFestivals"
          element={<EventsAndFestivals headerFive={headingAndimage[4]} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
