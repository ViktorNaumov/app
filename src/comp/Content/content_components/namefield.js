import React from "react";
import Styles from "../content.css";

const Namefield = (props) => {
  return (
    <div className="namefield">
      <span>
        <h1>{props.name}</h1>
      </span>
    </div>
  );
};
export default Namefield;
