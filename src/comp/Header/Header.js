import React from "react";
import Navbar from "../../Icons/navbar.js";
import Rectangle from "../../Icons/rectangle.js";
import Triangle from "../../Icons/triangle.js";
import Circle from "../../Icons/circle.js";
import Washer from "../../Icons/washer.js";
import Sector from "../../Icons/sector.js";
import Basket from "../../Icons/basket.js";
import Auth from "../../Icons/auth.js";
import Login from "../../Icons/login.js";
import BASKET_CONTENT from "../../Icons/basket_content.js";

const Header = (props) => {
 
  return (
    <div className="conteiner1">
      <Navbar />
      <Rectangle />
      <Triangle />
      <Circle />
      <Washer />
      <Sector />
      <Login login={props.login} />
      <Auth isAuth={props.isAuth} userLogout={props.userLogout} loginFormShow={props.loginFormShow} />
      <BASKET_CONTENT length={props.length} />
      <Basket />
    </div>
  );
};
export default Header;
