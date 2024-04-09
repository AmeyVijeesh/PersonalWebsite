import React, { useState } from "react";
import dreamCars from "./carsList.js";
import "./CSS/page2.css";
import { Tooltip } from "react-tooltip";
import LazyLoad from "react-lazy-load";
import Page2Sec1 from "./page2Sec1.jsx";

function Page2() {
  return (
    <>
      <Page2Sec1 />
      <div className="card-container">
        {dreamCars.map((car) => (
          <div className="card" key={car.id}>
            <div className="card-content">
              <div className="banner-image">
                <LazyLoad>
                  <img
                    src={car.image}
                    alt={car.name}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={car.desc}
                    data-tooltip-place="top"
                  />
                </LazyLoad>
              </div>
              <h1 className="titleh1">{car.name}</h1>
              <p className="pricep">{car.price}</p>
            </div>
          </div>
        ))}
        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
}

export default Page2;
