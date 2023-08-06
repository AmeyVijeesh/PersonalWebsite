import React, { useState } from "react";
import "./CSS/page2.css";
import dreamCars from "./carsList";
import LazyLoadedCar from "./lazyImageLoader";

const Page2 = () => {
  const [filter, setFilter] = useState("All Cars");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCars =
    filter === "All Cars"
      ? dreamCars
      : dreamCars.filter((car) => car.type === filter);

  return (
    <>
      <div>
        <div className="page2Sec1Container">
          <div className="page2Sec1BgImg"></div>
          <div className="page2Sec1Overlay"></div>
          <div className="page2Sec1TextOverlay">
            <h1 className="page2Sec1Text">My Dream Car Garage</h1>
            <p>
              This is what my garage would look like if I had enough money to
              buy all of them.
            </p>
          </div>
        </div>
        <div className="page2Sec2BgImg">
          <h1 className="filterName">{filter}</h1> <br />
          <h2 className="filterName">
            Garage Value:{" "}
            <i>
              {filter === "All Cars"
                ? "$14,201,000 USD"
                : filter === "Supercar Garage"
                ? "$13,543,000 USD"
                : filter === "Indian Garage"
                ? "$183,000 USD"
                : filter === "USA Garage"
                ? "$475,000 USD"
                : ""}
            </i>
          </h2>
          <p className="noteText">
            {filter === "All Cars"
              ? ""
              : filter === "Supercar Garage"
              ? "Max amount of cars allowed: 8."
              : filter === "Indian Garage"
              ? "Max value for this particular garage: $183,000 USD; Max amount of cars: 4."
              : filter === "USA Garage"
              ? "Max value for this particular garage: $500,000 USD; Max amount of cars: 5."
              : ""}
          </p>
          <div className="selectContainer">
            <select value={filter} onChange={handleFilterChange}>
              <option value="All Cars">All Cars</option>
              <option value="USA Garage">USA Garage</option>
              <option value="Indian Garage">Indian Garage</option>
              <option value="Supercar Garage">Supercar Garage</option>
            </select>
          </div>
          <div>
            <div className="car-gallery">
              {filteredCars.map((car) => (
                <LazyLoadedCar key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
