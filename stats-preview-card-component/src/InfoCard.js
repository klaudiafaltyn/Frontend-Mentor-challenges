import React, { Suspense } from "react";
import "./InfoCard.scss";
import Photo from "./image-header-desktop.jpg";

const Tile = ({ textTop, textBottom }) => {
  return (
    <span className="tile">
      <p className="tile__top">{textTop}</p>
      <p className="tile__bottom">{textBottom}</p>
    </span>
  );
};

const InfoCard = () => {
  return (
    <div className="bcg">
      <div className="container">
        <div className="txtFields">
          <div className="subContainer">
            <div className="hugeTxtField">
              Get <span className="violetWord">insights</span> that help your
              business grow.
            </div>

            <div className="smallTxtField">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </div>
            <div className="numbers">
              <Tile textTop="10k+" textBottom="companies" />
              <Tile textTop="314" textBottom="templates" />
              <Tile textTop="12M+" textBottom="queries" />
            </div>
          </div>
        </div>
        <div className="violetImg">
          <div className="violetOpacity"></div>
          <img className="photo" src={Photo} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
