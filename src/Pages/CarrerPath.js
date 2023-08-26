import React from "react";
import carrerPath from "../content.json";
import { Link } from "react-router-dom";
function CarrerPath() {
  return (
    <>
      <main>
        <div id="Container">
          <div className="CarrerPath">
            <div className="Heading">
              <h2>Choose the best road for your career</h2>
            </div>
            <div className="CardContainer">
            {Object.entries(carrerPath.carrier_path).map((carrerPathData) => {
              return (
                <div className="Card">
                  <div className="Img">
                    <img src={carrerPathData[1].img} alt="carrer-img" />
                  </div>
                  <div className="Desc">
                    <p>
                     {carrerPathData[1].desc}
                    </p>
                  </div>

                  <div className="Salary">
                    <span>Avg. Salary</span>
                    <span> &#8377; {carrerPathData[1].Avg_salary}</span>
                  </div>

                  <Link to={carrerPathData[1].link}><button>View Details</button></Link>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CarrerPath;
