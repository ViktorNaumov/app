import React from "react";

const Basket_content = (props) => {
  return (
    <div className="basket_content">
      <p className="bas_c">{props.length}</p>
    </div>
  );
};

export default Basket_content;
