import React from "react";
import freeCoursesData from "../content.json";
function FreeCourses() {
  return (
    <>
      <div id="Container">
        <div className="FreeCourseContainer">
          {/* <h2>Free Courses</h2> */}
          {Object.entries(freeCoursesData.free_courses).map((freeCourse) => {
            return (
              <div className="FreeCourseCard">
                <div className="FreeCourseCardTop">
                <h3 className="title">{freeCourse[1].title}</h3>
                <span><img src={freeCourse[1].icon}/></span>
                </div>
                
                <p className="desc">{freeCourse[1].desc}</p>
                <div className="FreeCourseCardRow">
                  <span>{freeCourse[1].author}</span>
                  <span>{freeCourse[1].duration}</span>
                </div>
                <span className="certificate">Certificates</span>
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
