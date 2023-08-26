import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillGrid1X2Fill,BsFillCartCheckFill} from "react-icons/bs"
import {SiTrendmicro} from "react-icons/si"
import {BiSupport} from "react-icons/bi"
import {AiOutlineLogout} from "react-icons/ai"
import {FaGraduationCap} from "react-icons/fa"

function LeftNavBar() {
  return (
    <>
    
    <div id="LeftNavBar">
        <div className="Upper">
            <ul>
                <Link to="/"><li><BsFillGrid1X2Fill className="leftNavbar-icon" size={"18px"}/><span>Dashboard</span></li></Link>
                <Link to="/carrerpath"><li><BsFillCartCheckFill className="leftNavbar-icon"/><span>Carrer Path</span></li></Link>
                <Link to="/courses"><li><FaGraduationCap className="leftNavbar-icon"/><span>Course</span></li></Link>
                <Link to="/trending"><li><SiTrendmicro/><span>Trending</span></li></Link>
                <Link to=""><li><AiOutlineLogout className="leftNavbar-icon"/><span>Logout</span></li></Link>
            </ul>
        </div>
        <div className="Lower">
            <div className="StudentSupport">
                <h3>Student Support</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dolore.</p>
                <button><BiSupport className="support-icon"/>Connect Now</button>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default LeftNavBar 