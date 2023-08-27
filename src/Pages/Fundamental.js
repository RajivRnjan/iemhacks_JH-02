import React from "react";
import carrerPath from "../content.json";
import { Link } from "react-router-dom";
import FreeCourses from "../Pages/FreeCourses";
import PaidCourses from '../Pages/PaidCourses'
function Fundamental() {
  return (
    <>
      <main>
        <div id="Container">
          <div className="Fundamental">

            <div className="Heading">
              <h2>Fundamentals</h2>
            </div>
          
            <FreeCourses/>
            <PaidCourses/>

          </div>
        </div>
      </main>
    </>
  );
}

export default Fundamental;
