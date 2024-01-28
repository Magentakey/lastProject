import React from "react";
import { Link } from "react-router-dom";
import "./styleNavbar.css"
import icon from "./img.png"

const Navbar = () => {
  return (
    <div className="stickContainer">
      <nav>
        <div>
          <img src={icon} />
          <p>ReFood</p>
        </div>
        <ul>
          <li>
            <Link className="linkNav" to="/">Home</Link>
          </li>
          <li>
            <Link className="linkNav" to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link className="linkNav" to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar