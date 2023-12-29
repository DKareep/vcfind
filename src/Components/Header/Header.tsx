import logo from "../../Assets/vcfinder-logos_black.png";
import React from "react";
import "./Styles/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={"landing-header"}>
      <div className="transparent"></div>
      <nav className="top-bar">
        <img className={"header-logo"} src={logo} alt="" />
        <Link to={"/dashboard"}>
          <button className="btn">Get Started!</button>
        </Link>
      </nav>

      <h1 className={"raise-funding-text"}>
        Raise funds for your startup <br /> with vcfinder
      </h1>
    </header>
  );
};

export default Header;
