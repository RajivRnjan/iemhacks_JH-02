import React from "react";
import { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
function NavBar(props) {
  const [mode, setMode] = useState("light");

  return (
    <>
      <nav id="nav">
        <div className="nav">
          <div className="navLeft">
            <div className="NavLogo">
              <span className="carrer">Carrer</span>&nbsp;
              <span className="path">Path</span>
            </div>

            <div className="SearchBar">
              <BiSearch className="search-icon" />
              <input type="text" placeholder="Search Your Carrer Path" />
            </div>
          </div>
          <div className="NavMenu">
            <span className="setting">
              <AiFillSetting />
            </span>
            <span className="mode" onClick={props.toggleMode}>
              {props.mode === "light" ? <MdDarkMode /> 
              : <MdLightMode />
              }
              
              {/* <MdModeNight /> */}
            </span>
            <span className="notification">
              <BsFillBellFill />
            </span>
            <span className="avtar">
              <img src="/iemhacks_JH-02/images/Icons/avatar.svg" alt="avtar" />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
