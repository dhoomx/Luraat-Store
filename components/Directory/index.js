import React from "react";

import ShopMan from "./../../assets/businesman.jpg";
import ShopWomen from "./../../assets/womenbag.jpg";
import "./styles.scss";
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
          <a>Shop Women</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ShopMan})` }}>
          <a>Shop Men</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
