import React from "react";
import "./Styles/Main.scss";
import { Link } from "react-router-dom";
import EntFirst from "../../Assets/ef.svg";
import Antler from "../../Assets/antler.svg";
import TechStars from "../../Assets/ts.svg";
import featured from "../../Data/Featured";
import USInvestorCard from "../InvestorCard/US/USInvestorCard";

const Main = () => {
  return (
    <main className={"main-content"}>
      <section className={"feature-content  flex-column"}>
        <Link className={"link-hook"} to={"/dashboard"}>
          <button className="btn"> Access all </button>
        </Link>

        <ul className={"featured"}>
          {featured.map(
            (
              {
                FundDescription,
                companies,
                urls,
                LinkedInLink,
                Location,
                Portfoliocompanies,
                firstname,
                emails,
              }: any,
              idx: number,
            ) => {
              return (
                <USInvestorCard
                  key={companies + idx}
                  description={FundDescription}
                  companyName={companies}
                  website={urls}
                  linkedIn={LinkedInLink}
                  location={Location}
                  portfolio={Portfoliocompanies}
                  firstname={firstname}
                  emails={emails}
                />
              );
            },
          )}
        </ul>
      </section>

      <section className={"outreach"}>
        <h3>Loved by 100+ founders worldwide</h3>
        <div className={"reach-roaster"}>
          <img src={EntFirst} alt="" />
          <img src={Antler} alt="" />
          <img src={TechStars} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Main;
