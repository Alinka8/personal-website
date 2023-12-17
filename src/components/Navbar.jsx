import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <img
        src={logo}
        style={{ width: 60, marginTop: "10px" }}
        alt="logo"
        className="logo"
      />

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            className="title"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="title"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="title"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="title"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
