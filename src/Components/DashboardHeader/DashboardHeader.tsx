import "./Styles/DashboardHeader.scss";
import logo from "../../Assets/vcfinder-logos_black.png";
import React from "react";
import { Link } from "react-router-dom";
const DashboardHeader = () => {
  return (
    <header className={"dashboard-header"}>
      <Link to={"/"}>
        <img className={"header-logo-dashboard"} src={logo} alt="" />
      </Link>
    </header>
  );
};
export default DashboardHeader;
