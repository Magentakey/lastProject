import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../style/styleNavbar.css"
import icon from "../../assets/img.png"

const Navbar = (dropdown) => {
  let userName;
  userName = localStorage.getItem("userName")

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
            <Link className="linkNav" to="/Menu">
              <div className="dropdownMenu">
                <span>Menu</span>
                {dropdown.dropdown === "true" ? (
                  <div className="dropdownMenuContent">
                    <p>Dinner!</p>
                    <p>Lunch!</p>
                    <p>Snack!</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to="/AboutMe">About Me</Link>
          </li>
          {!userName && (
            <li>
              <Link style={{color: "white"}} className="linkNav" to="/Login">Login</Link>
            </li>
          )}
          {userName && (
            <>
              <li>
                <p>{userName}</p>
              </li>
              <li>
                <Link style={{color: "white"}} className="linkNav" to="/LogOut">Log Out</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}
export default Navbar