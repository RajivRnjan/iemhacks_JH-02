import './App.css';
import {HashRouter,Routes, Route} from "react-router-dom"
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import LeftNavBar from './Components/LeftNavBar';
import CarrerPath from './Pages/CarrerPath';
import Courses from './Pages/Courses';
import TrendingCarrerPath from './Pages/TrendingCarrerPath';

function App() {
  return (
    <>
    <HashRouter>
      <NavBar/>
      <LeftNavBar/>
      <Routes>
      <Route exact path="/carrerpath" element={<CarrerPath/>}/>
      <Route exact path="/trending" element={<TrendingCarrerPath/>}/>
      <Route exact path="/courses" element={<Courses/>}/>

      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
