import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import icon from "./img.png"

const Navbar = () => {
    return(
        <nav>
          <img src={icon}/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AboutMe">About Me</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
    )
}
export default Navbar