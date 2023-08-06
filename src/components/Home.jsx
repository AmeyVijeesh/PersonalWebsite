import React from "react";
import PageSec1 from "./pageSec1";
import PageSec2 from "./pageSec2";
import PageSec3 from "./pageSec3";
import PageSec4 from "./pageSec4";

const Home = () => {
  return (
    <div className="container-wrapper snap-scroll-section">
      <PageSec1 />
      <PageSec2 style={{ scrollSnapAlign: "none" }} />
      <PageSec3 style={{ scrollSnapAlign: "none" }} />
      <PageSec4 />
    </div>
  );
};

export default Home;
