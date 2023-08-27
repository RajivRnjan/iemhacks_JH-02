import React from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { PiStarFour } from "react-icons/pi";
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
              <h3>Fundamentals</h3>
              <ul>
                <tr>
                  <td>
                    <PiStarFour className="star-icon" />
                  </td>
                  <td>Mathematics: Algebra , Statistics engineer</td>
                </tr>
                <tr>
                  <td>
                    <PiStarFour className="star-icon" />
                  </td>
                  <td>Programming : Python</td>
                </tr>
              </ul>
              <button><Link to="/fundamental">View Course</Link></button>
            </div>
            <div>
              <FaLongArrowAltDown className="arrow" />
            </div>

            <div className="box">
              <h3>Data Manipulation and Visualization</h3>
              <ul>
                <tr>
                  <td>
                    <PiStarFour className="star-icon" />
                  </td>
                  <td>Data manipulation</td>
                </tr>
                <tr>
                  <td>
                    <PiStarFour className="star-icon" />
                  </td>
                  <td>Data Visualiation</td>
                </tr>
              </ul>
              <button>View Course</button>
            </div>
            <div>
              <FaLongArrowAltDown className="arrow" />
            </div>

            <div className="box">
              <h3>Data Science</h3>
              <ul>
                <tr>
                  <td>
                    <PiStarFour className="star-icon" />
                  </td>
                  <td>ML And DL</td>
                </tr>
                <tr>
                  <td>
                    <PiStarFour className="star-icon" />
                  </td>
                  <td>Big data and deployment technique</td>
                </tr>
              </ul>
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
                    <li>
                      <PiStarFour className="star-icon" />
                      Machine learning engineer
                    </li>
                    <li>
                      <PiStarFour className="star-icon" />
                      Data Analyst
                    </li>
                    <li>
                      <PiStarFour className="star-icon" />
                      Software Engineer
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Salary and Stats</h4>
                  <ul>
                    <li>
                      <PiStarFour className="star-icon" />
                      Fresher : 8- 15 LPY
                    </li>
                    <li>
                      <PiStarFour className="star-icon" />
                      Experience : 2 year
                    </li>
                  </ul>
                </div>
              </div>

              <div className="RightTopRow-2">
                <div>
                  <h4>Effect of AI integration</h4>
                  <ul>
                    <li>
                      <TiTick className="tick" />
                      Increase in Demand
                    </li>
                    <li>
                      <ImCross className="cross" />
                      Work Automation
                    </li>

                    <li>
                      <TiTick className="tick" />
                      High Salary
                    </li>
                    <li>
                      <TiTick className="tick" />
                      Shift in responsibilities
                    </li>
                    <li>
                      <ImCross className="cross" />
                      Technical Skill
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Opportunities</h4>
                  <ul>
                    <li>
                      <PiStarFour className="star-icon" />
                      Microsoft
                    </li>
                    <li>
                      <PiStarFour className="star-icon" />
                      DRDO
                    </li>
                    <li>
                      <PiStarFour className="star-icon" />
                      Google
                    </li>
                    <li>
                      <PiStarFour className="star-icon" />
                      TCS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="RightBottom">
              <div className="Heading">
                <h3>Reviews</h3>
              </div>
              <div className="Review">
                <img
                  src="/iemhacks_JH-02/images/Review/review-1.png"
                  alt="review-img"
                />
                <img
                  src="/iemhacks_JH-02/images/Review/review-2.png"
                  alt="review-img"
                />
                <img
                  src="/iemhacks_JH-02/images/Review/review-3.png"
                  alt="review-img"
                />
                <img
                  src="/iemhacks_JH-02/images/Review/review-4.png"
                  alt="review-img"
                />
                <img
                  src="/iemhacks_JH-02/images/Review/review-5.png"
                  alt="review-img"
                />
                <img
                  src="/iemhacks_JH-02/images/Review/review-6.png"
                  alt="review-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMapDataScientist;
