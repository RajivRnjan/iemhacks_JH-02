import "./App.css";
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import LeftNavBar from "./Components/LeftNavBar";
import Dashboard from "./Pages/Dashboard";
import CarrerPath from "./Pages/CarrerPath";
import Courses from "./Pages/Courses";
import TrendingCarrerPath from "./Pages/TrendingCarrerPath";
import FreeCourses from "./Pages/FreeCourses";
import PaidCourses from "./Pages/PaidCourses";
import RoadMapDataScientist from "./Pages/RoadMapDataScientist";
import Logout from "./Pages/Logout";
import Fundamental from "./Pages/Fundamental";
function App() {
  const [mode, setMode] = useState("light");

  console.log(mode)
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "#3e494c";

      const nav = document.getElementsByClassName("nav");
      nav[0].style.backgroundColor = "#000";
      nav[0].style.borderBottom="1px solid white"

      const carrer = document.getElementsByClassName("carrer");
      carrer[0].style.color = "#6C6C6C";

      const path = document.getElementsByClassName("path");
      path[0].style.color = "#999";

      const searchBar = document.getElementsByClassName("SearchBar");
      searchBar[0].style.backgroundColor = "#fff";

      const searchIcon = document.getElementsByClassName("search-icon");
      searchIcon[0].style.color = "#000";

      const NavMenu = document.getElementsByClassName("NavMenu");
      NavMenu[0].style.color = "#FFF";
      
      const leftnav = document.getElementsByClassName("leftnavbar");
      leftnav[0].style.backgroundColor = "#000";
      leftnav[0].style.color="#FFF";
      leftnav[0].style.borderRight="1px solid white"
      
      
     
      
     

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      const nav = document.getElementsByClassName("nav");
      nav[0].style.backgroundColor = "#fff";
      nav[0].style.color = "#000";

      const carrer = document.getElementsByClassName("carrer");
      carrer[0].style.color = "#6271FF";

      const path = document.getElementsByClassName("path");
      path[0].style.color = "#FF4D00";

      const NavMenu = document.getElementsByClassName("NavMenu");
      NavMenu[0].style.color = "#000";




      const searchBar = document.getElementsByClassName("SearchBar");
      searchBar[0].style.color = "#fff";
      
      const searchIcon = document.getElementsByClassName("search-icon");
      searchIcon[0].style.color = "#000";
      
      const leftnav = document.getElementsByClassName("leftnavbar");
      leftnav[0].style.backgroundColor = "#fff";
      leftnav[0].style.color="#000";
    }
  };
  return (
    <>
      <HashRouter>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <LeftNavBar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/carrerpath" element={<CarrerPath />} />
          <Route exact path="/trending" element={<TrendingCarrerPath />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/freecourses" element={<FreeCourses />} />
          <Route exact path="/paidcourses" element={<PaidCourses />} />
          <Route exact path="/roadmapDS" element={<RoadMapDataScientist />} />
          <Route exact path="/fundamental" element={<Fundamental />} />
          <Route exact path="/logout" element={<Dashboard />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
