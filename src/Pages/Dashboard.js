import React from "react";
import Graph from "../Components/Graph";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div id="Container">
        <div className="Left">
          <div className="LeftBox1">
            <h3>Your Selected Path</h3>
            <div className="Box-1">
              <div className="Box-1L">
                <img src="" alt="img" />
              </div>
              <div className="Box-1R">
                <h5>Data Analysis</h5>
                <p>Rajiv Ranjan - Mentor</p>
                <p>30% completed</p>
              </div>
            </div>
            <div className="Box-1">
              <div className="Box-1L">
                <img src="" alt="img" />
              </div>
              <div className="Box-1R">
                <h5>Data Analysis</h5>
                <p>Rajiv Ranjan - Mentor</p>
                <p>30% completed</p>
              </div>
              <Link to="">See More</Link>
            </div>
            <div className="LeftBox"></div>
          </div>

          <div className="LeftBox2">
            <h3>Your Selected Course</h3>
            <div className="Box-1">
              <div className="Box-1L">
                <img src="" alt="img" />
              </div>
              <div className="Box-1R">
                <h5>Data Analysis</h5>
                <p>Rajiv Ranjan - Mentor</p>
                <p>30% completed</p>
              </div>
            </div>
            <div className="Box-1">
              <div className="Box-1L">
                <img src="" alt="img" />
              </div>
              <div className="Box-1R">
                <h5>Data Analysis</h5>
                <p>Rajiv Ranjan - Mentor</p>
                <p>30% completed</p>
              </div>
              <Link to="">See More</Link>
            </div>
            <div className="LeftBox"></div>
          </div>
        </div>

        {/* Left Boxes End */}
        {/* Left Boxes End */}

        <div className="Right">
          <div className="RBox1"></div>
          <div className="RBox2">
            <h3>People Choose Carrer</h3>
            <div>
              <span>Artificial Intelligance</span>
              <span>40%</span>
            </div>
            <div>
              <span>Artificial Intelligance</span>
              <span>40%</span>
            </div>
            <div>
              <span>Artificial Intelligance</span>
              <span>40%</span>
            </div>
            <div>
              <span>Artificial Intelligance</span>
              <span>40%</span>
            </div>
            <div>
              <span>Artificial Intelligance</span>
              <span>40%</span>
            </div>
            <div>
              <span>Artificial Intelligance</span>
              <span>40%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
