import React from "react";
import { Link } from "react-router-dom";

import "./NavigationItems.css"

const NavigationItems = ({ data }) => {
  return (
    <Link to={data.to}>
      <li>
        <p className="ItemName"> {data.divName} </p>
        {
            data.icon
        }
      </li>
    </Link>
  );
};

export default NavigationItems;
