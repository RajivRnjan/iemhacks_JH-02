import React from "react";
import {TiTick} from "react-icons/ti"
import {ImCross} from "react-icons/im";
import {PiStarFour} from "react-icons/pi"
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-router-dom";
function RoadMapDataScientist() {
  return (
    <>
      <div id="Container">
        <h2>
          The Roadmap of <span>Data Scientist</span>
        </h2>

        <div className="RoadMapContainer">
          <div className="Left">
            <div className="box">
              <h3>Step 1</h3>
              <p className="desc">
                Earn a bachelor's degree in computer science, statistics,
                mathematics, or a related field. (4 years)
              </p>
              <button>View Course</button>
            </div>
            <div>
              <FaLongArrowAltDown className="arrow" />
            </div>

            <div className="box">
              <h3>Step 2</h3>
              <p className="desc">
                Gain experience in data analysis and machine learning. (1-2
                years)
              </p>
              <button>View Course</button>
            </div>
            <div>
              <FaLongArrowAltDown className="arrow" />
            </div>

            <div className="box">
              <h3>Step 3</h3>
              <p className="desc">
                Get a master's degree in data science or a related field. (2
                years)
              </p>
              <button>View Course</button>
            </div>

            <Link to="">See More</Link>
          </div>
          <div className="Right">
            <div className="RightTop">
              <div className="RightTopRow-1">
                <div>
                  <h4>Jobs with similar skills</h4>
                  <ul>
                    <li><PiStarFour className="star-icon" />Machine learning engineer</li>
                    <li><PiStarFour className="star-icon" />Data Analyst</li>
                    <li><PiStarFour className="star-icon" />Software Engineer</li>
                  </ul>
                </div>
                <div>
                  <h4>Salary and Stats</h4>
                  <ul>
                    <li><PiStarFour className="star-icon" />Fresher : 8- 15 LPY</li>
                    <li><PiStarFour className="star-icon" />Experience : 18- 35 LPY</li>
                  </ul>
                </div>
              </div>

              <div className="RightTopRow-2">
                <div>
                  <h4>Effect of AI integration</h4>
                  <ul>
                    <li><TiTick className="tick"/>Increase in Demand</li>
                    <li><ImCross className="cross"/>Work Automation</li>

                    <li><TiTick className="tick"/>High Salary</li>
                    <li><TiTick className="tick"/>Shift in responsibilities</li>
                    <li><ImCross className="cross"/>Technical Skill</li>
                  </ul>
                </div>
                <div>
                  <h4>Opportunities</h4>
                  <ul>
                    <li><PiStarFour className="star-icon" />Microsoft</li>
                    <li><PiStarFour className="star-icon" />DRDO</li>
                    <li><PiStarFour className="star-icon" />Google</li>
                    <li><PiStarFour className="star-icon" />Google</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="RightBottom">
              <div className="Hedi">
                <h3>Reviews</h3>
              </div>
              <div className="Review">
                <img src="/iemhacks_JH-02/images/review/review-1.png" alt="review-img" />
                <img src="/iemhacks_JH-02/images/review/review-2.png" alt="review-img" />
                <img src="/iemhacks_JH-02/images/review/review-3.png" alt="review-img" />
                <img src="/iemhacks_JH-02/images/review/review-4.png" alt="review-img" />
                <img src="/iemhacks_JH-02/images/review/review-5.png" alt="review-img" />
                <img src="/iemhacks_JH-02/images/review/review-6.png" alt="review-img" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMapDataScientist;
