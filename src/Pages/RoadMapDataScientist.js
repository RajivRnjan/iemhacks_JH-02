import React from 'react'
import {FaLongArrowAltDown} from "react-icons/fa"
function RoadMapDataScientist() {
  return (
    <>
    <div id="Container">
        <h2>The Roadmap of <span>Data Scientist</span></h2>

        <div className="RoadMapContainer">
            <div className="Left">
                <div>
                    <span>Step 1</span>
                <p className="desc">Earn a bachelor's degree in computer science, statistics, mathematics, or a related field. (4 years)</p>
                <button>View Course</button>
                </div>
                <div>
                    <FaLongArrowAltDown/>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="Right"></div>
        </div>
    </div>
    </>
  )
}

export default RoadMapDataScientist