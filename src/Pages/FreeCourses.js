import React from "react";
import freeCoursesData from "../content.json";
import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
function FreeCourses() {
  return (
    <>
      <div id="Container">
        <div className="Courses">
          <div className="Heading">
            <h2>Free Courses</h2>
          </div>
        </div>
        <div className="FreeCourseContainer">
          {/* <h2>Free Courses</h2> */}
          {Object.entries(freeCoursesData.free_courses).map((freeCourse) => {
            return (
              <div className="FreeCourseCard">
                <div className="FreeCourseCardTop">
                  <h3 className="title">{freeCourse[1].title}</h3>
                  <span>
                    <img src={freeCourse[1].icon} />
                  </span>
                </div>

                <p className="desc">{freeCourse[1].desc}</p>
                <div className="FreeCourseCardRow">
                  <div>
                    <span><BsFillPeopleFill />
                    {freeCourse[1].author}</span>
                  </div>
                  <div>
                    <span><BsFillClockFill />
                    {freeCourse[1].duration}</span>
                  </div>
                </div>
                <div className="certificate">
                  <span><FaMedal />
                  Certificates
                </span></div>
                <button>Free</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FreeCourses;
