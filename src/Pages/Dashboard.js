import React from "react";
import Graph from "../Components/Graph";
import { Link } from "react-router-dom";
import {BsFillPeopleFill} from "react-icons/bs";
function Dashboard() {
  return (
    <>
      <div id="Container">
        <div className="Dashboard">
          <div className="Left">
            <div className="LeftBox1">
              <h3>Your Selected Path</h3>
              <div className="Box-1">
                <div className="Box-1L">
                  <img src="/iemhacks_JH-02/images/image.png" alt="img" />
                </div>
                <div className="Box-1R">
                  <h5>Data Scientist</h5>
                  <p><BsFillPeopleFill className="people"/>Radhe Shyam - Mentor</p>
                  <p>30% completed</p>
                </div>
              </div>
              <div className="Box-1">
                <div className="Box-1L">
                  <img src="/iemhacks_JH-02/images/image.png" alt="img" />
                </div>
                <div className="Box-1R">
                  <h5>Machine Learning  Engineer</h5>
                  <p><BsFillPeopleFill className="people"/>Radhe Shyam - Mentor</p>
                  <p>30% completed</p>
                </div>
              </div>
              <Link to="">See More</Link>
            </div>

            <div className="LeftBox2">
              <h3>Your Selected Course</h3>
              <div className="Box-1">
                <div className="Box-1L">
                  <img src="/iemhacks_JH-02/images/image.png" alt="img" />
                </div>
                <div className="Box-1R">
                  <h5>Data Visualization </h5>
                  <p><BsFillPeopleFill className="people"/>Radhe Shyam - Mentor</p>
                  <p>30% completed</p>
                </div>
              </div>
              <div className="Box-1">
                <div className="Box-1L">
                  <img src="/iemhacks_JH-02/images/image.png" alt="img" />
                </div>
                <div className="Box-1R">
                  <h5>Introduction to Machine learning </h5>
                  <p><BsFillPeopleFill className="people"/>Radhe Shyam - Mentor</p>
                  <p>30% completed</p>
                </div>
              </div>
              <Link to="">See More</Link>
            </div>
          </div>

          {/* Left Boxes End */}
          {/* Left Boxes End */}

          <div className="Right">
            <div className="LeftBox1">
              <h3>For You</h3>
              <div className="Box-1">
                <div className="Box-1L">
                  <img src="/iemhacks_JH-02/images/image.png" alt="img" />
                </div>
                <div className="Box-1R">
                  <h5>Introduction to LLMs  </h5>
                  <p><BsFillPeopleFill className="people"/>Radhe Shyam - Mentor</p>
                  <p>30% completed</p>
                </div>
              </div>
              <div className="Box-1">
                <div className="Box-1L">
                  <img src="/iemhacks_JH-02/images/image.png" alt="img" />
                </div>
                <div className="Box-1R">
                  <h5>Introduction to Deep learning </h5>
                  <p><BsFillPeopleFill className="people"/>Radhe Shyam - Mentor</p>
                  <p>30% completed</p>
                </div>
              </div>
              <Link to="">See More</Link>
            </div>
            
            <div className="RightBox2">
              <h3>People Choose Carrer</h3>
              <div className="">
                <div className="list">
                  <span>Artificial Intelligance</span>
                  <span className="percentage  percentage1">40%</span>
                </div>
                <div className="list">
                  <span>Web Development</span>
                  <span className="percentage  percentage6">30%</span>
                </div>
                <div className="list">
                  <span>Software Engineering</span>
                  <span className="percentage  percentage2">21%</span>
                </div>

                <div className="list">
                  <span>Digital Marketing</span>
                  <span className="percentage  percentage3">14%</span>
                </div>

                <div className="list">
                  <span>Chartered Accountant.</span>
                  <span className="percentage  percentage4">10%</span>
                </div>

                <div className="list">
                  <span>Blockchain Developer.</span>
                  <span className="percentage  percentage5">7%</span>
                </div>

                <div className="list">
                  <span>Management</span>
                  <span className="percentage  percentage7">2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
