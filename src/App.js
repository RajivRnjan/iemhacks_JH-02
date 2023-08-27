import './App.css';
import {HashRouter,Routes, Route} from "react-router-dom"
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import LeftNavBar from './Components/LeftNavBar';
import Dashboard from './Pages/Dashboard';
import CarrerPath from './Pages/CarrerPath';
import Courses from './Pages/Courses';
import TrendingCarrerPath from './Pages/TrendingCarrerPath';
import FreeCourses from './Pages/FreeCourses';
import PaidCourses from './Pages/PaidCourses';
import RoadMapDataScientist from './Pages/RoadMapDataScientist';
import Logout from './Pages/Logout';
function App() {
  return (
    <>
    <HashRouter>
      <NavBar/>
      <LeftNavBar/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
      <Route exact path="/carrerpath" element={<CarrerPath/>}/>
      <Route exact path="/trending" element={<TrendingCarrerPath/>}/>
      <Route exact path="/courses" element={<Courses/>}/>
      <Route exact path="/freecourses" element={<FreeCourses/>}/>
      <Route exact path="/paidcourses" element={<PaidCourses/>}/>
      <Route exact path="/roadmapDS" element={<RoadMapDataScientist/>}/>
      <Route exact path="/logout" element={<Logout/>}/>

      </Routes>
      <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
