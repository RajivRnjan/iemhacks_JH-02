import React from 'react'
import paidCoursesData from "../content.json";
import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
function PaidCourses() {
  return (
   <>
    <div id="Container">
        <div className="Courses">
          <div className="Heading">
            <h2>Paid Courses</h2>
          </div>
        </div>
        <div className="FreeCourseContainer">
          {/* <h2>Free Courses</h2> */}
          {Object.entries(paidCoursesData.paid_courses).map((paidCourse) => {
            return (
              <div className="FreeCourseCard">
                <div className="FreeCourseCardTop">
                  <h3 className="title">{paidCourse[1].title}</h3>
                  <span>
                    <img src={paidCourse[1].icon} alt="img"/>
                  </span>
                </div>

                <p className="desc">{paidCourse[1].desc}</p>
                <div className="FreeCourseCardRow">
                  <div>
                    <span><BsFillPeopleFill />
                    {paidCourse[1].author}</span>
                  </div>
                  <div>
                    <span><BsFillClockFill />
                    {paidCourse[1].duration}</span>
                  </div>
                </div>
                <div className="certificate">
                  <span><FaMedal />
                  Certificates
                </span></div>
                <button>Paid</button>
              </div>
            );
          })}
        </div>
      </div>
   
   </>
  )
}

export default PaidCourses