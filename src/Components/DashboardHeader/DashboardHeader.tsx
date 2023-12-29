import "./Styles/DashboardHeader.scss";
import logo from "../../Assets/vcfinder-logos_black.png";
import React from "react";
const DashboardHeader = () => {
  return (
    <header className={"dashboard-header"}>
      <img className={"header-logo-dashboard"} src={logo} alt="" />
    </header>
  );
};
export default DashboardHeader;
