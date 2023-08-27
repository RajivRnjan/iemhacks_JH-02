import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFillGrid1X2Fill,BsFillCartCheckFill} from "react-icons/bs"
import {SiTrendmicro} from "react-icons/si"
import {BiSupport} from "react-icons/bi"
import {AiOutlineLogout} from "react-icons/ai"
import {FaGraduationCap} from "react-icons/fa"

function LeftNavBar() {
   
  return (
    <>
    
    <div className="leftnavbar" id="LeftNavBar">
        <div className="Upper">
            <ul>
                <NavLink to="/"><li><BsFillGrid1X2Fill className="leftNavbar-icon" size={"18px"}/><span>Dashboard</span></li></NavLink>
                <NavLink to="/carrerpath"><li><BsFillCartCheckFill className="leftNavbar-icon"/><span>Carrer Path</span></li></NavLink>
                <NavLink to="/courses"><li><FaGraduationCap className="leftNavbar-icon"/><span>Course</span></li></NavLink>
                <NavLink to="/trending"><li><SiTrendmicro/><span>Trending</span></li></NavLink>
                <NavLink to="/logout"><li><AiOutlineLogout className="leftNavbar-icon"/><span>Logout</span></li></NavLink>
            </ul>
        </div>
        <div className="Lower">
            <div className="StudentSupport">
                <h3>Student Support</h3>
                <button><BiSupport className="support-icon"/>Connect Now</button>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default LeftNavBar 