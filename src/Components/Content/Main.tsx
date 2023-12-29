import React from "react";
import "./Styles/Main.scss";
import { Link } from "react-router-dom";
import ProdHunt from "../../Assets/ph.svg";
import EntFirst from "../../Assets/ef.svg";
import Antler from "../../Assets/antler.svg";
import TechStars from "../../Assets/ts.svg";
import YCombinator from "../../Assets/yc.svg";

import { RandomAvatar } from "react-random-avatars";

const Main = () => {
  return (
    <main className={"main-content"}>
      <section className={"feature-content  flex-column"}>
        <button className="btn">
          {" "}
          <Link className={"link-hook"} to={"/dashboard"}>
            Access all{" "}
          </Link>
        </button>

        <ul className={"featured"}>
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
        </ul>
      </section>

      <section className={"outreach"}>
        <h1>Loved by 100+ founders worldwide</h1>
        <div className={"reach-roaster"}>
          <img src={ProdHunt} alt="" />
          <img src={EntFirst} alt="" />
          <img src={Antler} alt="" />
          <img src={TechStars} alt="" />
          <img src={YCombinator} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Main;
