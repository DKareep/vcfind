import { RandomAvatar } from "react-random-avatars";
import React from "react";
import "./Styles/InvestorCard.scss";
const InvestorCard = () => {
  return (
    <li className={"item"}>
      <div className="avatar-container">
        <RandomAvatar name={"name"} size={40} />
      </div>
      <div className={"investor-details"}>
        <p className="partner-name">Partner name</p>
        <p className="partner-details">
          Lorem ipsum dolor sit amet, consectetur adipisi
        </p>
      </div>
    </li>
  );
};

export default InvestorCard;
