import React from "react";
import styles from "../comp/Header/Header.css";

const Auth = (props) => {

  let f1= ()=>{
    props.userLogout()
  }
  let f2 =()=>{
    props.loginFormShow()
  }
  return (
    <div className="a1">
      {props.isAuth ?<div className="auth" onClick={f1}>
         <p>выход</p> 
      </div>:
      <div className="auth" onClick={f2}>
          <p>вход</p>
      </div>}
    </div>
  );
};

export default Auth;
