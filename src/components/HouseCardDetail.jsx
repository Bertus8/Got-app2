import React from "react";
import "./HouseCardDetail.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const HouseCardDetail = ({ houseDetail }) => {
  console.log(houseDetail);

  return (
    <div>
      <div className="house-card-detail">
        <div className="house-card-link">
          <Link to="/houses"><FormattedMessage id="app.housesDetail.back" defaultMessage="← Go back" ></FormattedMessage></Link>
        </div>
        <h2 className="house-container-name">
          {houseDetail.map((houseDetail) => houseDetail.name)}
        </h2>

        <img
          src={houseDetail.map((houseDetail) => houseDetail.logoURL)}
          alt={houseDetail.map((houseDetail) => houseDetail.name)}
        />
        <div className="list-container">
          <ul>
            <li>
              <h4><FormattedMessage id="app.housesDetail.words" defaultMessage="Words" ></FormattedMessage></h4>
            </li>
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.words}</p>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h4><FormattedMessage id="app.housesDetail.seat" defaultMessage="Seat" ></FormattedMessage></h4>
            </li>
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.seat}</p>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h4><FormattedMessage id="app.housesDetail.region" defaultMessage="Region" ></FormattedMessage></h4>
            </li>
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.region}</p>
              </li>
            ))}
          </ul>

          <ul>
            <li>
              <h4><FormattedMessage id="app.housesDetail.allegiance" defaultMessage="Allegiances" ></FormattedMessage></h4>
            </li>

            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.allegiance[0]}</p>
              </li>
            ))}
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.allegiance[1]}</p>
              </li>
            ))}
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.allegiance[2]}</p>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h4><FormattedMessage id="app.housesDetail.religion" defaultMessage="Religions" ></FormattedMessage></h4>
            </li>
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.religion}</p>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h4><FormattedMessage id="app.housesDetail.foundation" defaultMessage="Foundation" ></FormattedMessage></h4>
            </li>
            {houseDetail.map((houseDetail) => (
              <li>
                <p>{houseDetail.createdAt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseCardDetail;
