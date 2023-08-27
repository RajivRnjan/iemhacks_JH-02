import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
    <div className="FooterContainer">
      <div className="Left">
        <p>&copy; Copyright 2023 by Career Path. All Rights Reserved.</p>
      </div>
      <div className="Right">
        <Link to=""><p>Terms & Services</p></Link>
        <Link to=""><p> Privacy Policy</p></Link>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer