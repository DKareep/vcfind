import { RandomAvatar } from "react-random-avatars";
import React from "react";
import "../Styles/InvestorCard.scss";
import {
  RiGlobalLine,
  RiLinkedinBoxLine,
  RiUserLocationLine,
  RiMailCheckLine,
} from "react-icons/ri";

const USInvestorCard = ({
  companyName,
  description,
  website,

  linkedIn,
  location,
  portfolio,
  firstname,
  emails,
}: any) => {
  return (
    <li className={"item"}>
      <div className="avatar-container">
        <RandomAvatar name={description} size={40} />
      </div>
      <div className={"investor-details"}>
        <h3 className="partner-name">{companyName}</h3>
        <p className="partner-details">{description}</p>
        <p className="partner-details">
          <span> Portfolio : {portfolio}</span>
        </p>
        <p className="partner-location">
          <RiUserLocationLine /> {location}
        </p>
        <div className={"links"}>
          <a
            href={`https://${website}`}
            target={"_blank"}
            rel="noreferrer"
            className={"link-btn url"}
          >
            <RiGlobalLine /> <p>www</p>
          </a>
          <a
            href={linkedIn}
            target={"_blank"}
            rel="noreferrer"
            className={"link-btn url"}
          >
            <RiLinkedinBoxLine /> <p>Linkedin</p>
          </a>

          <a
            href={`mailto:${emails}`}
            target={"_blank"}
            rel="noreferrer"
            className={"link-btn url"}
          >
            <RiMailCheckLine />{" "}
            <p>
              {" "}
              {firstname} : <span>{emails}</span>
            </p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default USInvestorCard;
