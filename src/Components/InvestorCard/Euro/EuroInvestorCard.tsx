import { RandomAvatar } from "react-random-avatars";
import React from "react";
import "../Styles/InvestorCard.scss";
import {
  RiGlobalLine,
  RiLinkedinBoxLine,
  RiUserLocationLine,
} from "react-icons/ri";
const EuroInvestorCard = ({
  Investor,
  Overview,
  Industries,
  MainCity,
  MainCountry,
  Domain,
  Contact1FirstName,
  Contact1LastName,
  Contact1Linkedin,
  Contact1Email,
  Contact2FirstName,
  Contact2LastName,
  Contact2Linkedin,
  Contact2Email,
}: any) => {
  return (
    <li className={"item"}>
      <div className="avatar-container">
        <RandomAvatar name={Overview} size={40} />
      </div>
      <div className={"investor-details"}>
        <h3 className="partner-name">{Investor}</h3>
        <p className="partner-details">{Overview}</p>
        <p className="partner-details">
          <span> Area of investment : {Industries}</span>
        </p>
        <p className="partner-location">
          <RiUserLocationLine /> {MainCity}
          {MainCity.length > 0
            ? "," + MainCountry.slice(4, MainCountry.length)
            : MainCountry}
        </p>

        <div className={"links"}>
          <a
            href={Domain}
            target={"_blank"}
            rel="noreferrer"
            className={"link-btn url"}
          >
            <RiGlobalLine /> <p>www</p>
          </a>
          {Contact1Linkedin && (
            <a
              href={Contact1Linkedin}
              target={"_blank"}
              rel="noreferrer"
              className={"link-btn url"}
            >
              <RiLinkedinBoxLine />{" "}
              <p>
                {Contact1FirstName} {Contact1LastName}
              </p>
            </a>
          )}

          {Contact2Linkedin && (
            <a
              href={Contact2Linkedin}
              target={"_blank"}
              rel="noreferrer"
              className={"link-btn url"}
            >
              <RiLinkedinBoxLine />{" "}
              <p>
                {Contact2FirstName} {Contact2LastName}
              </p>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default EuroInvestorCard;
