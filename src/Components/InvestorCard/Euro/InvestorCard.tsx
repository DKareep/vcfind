import { RandomAvatar } from "react-random-avatars";
import React from "react";
import "../Styles/InvestorCard.scss";
const InvestorCard = ({
  companyName,
  description,
}: {
  companyName: string;
  description: string;
}) => {
  return (
    <li className={"item"}>
      <div className="avatar-container">
        <RandomAvatar name={description} size={40} />
      </div>
      <div className={"investor-details"}>
        <p className="partner-name">{companyName}</p>
        <p className="partner-details">{description}</p>
      </div>
    </li>
  );
};

export default InvestorCard;
