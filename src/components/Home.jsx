import React from "react";
import PageSec1 from "./pageSec1";
import PageSec2 from "./pageSec2";
import PageSec3 from "./pageSec3";

const Home = () => {
  return (
    <div className="container-wrapper snap-scroll-section">
      <PageSec1 />
      <PageSec2 />
      <PageSec3 />
    </div>
  );
};

export default Home;
