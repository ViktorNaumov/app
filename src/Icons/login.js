import React from "react";
import styles from "../comp/Header/Header.css";

const Login = (props) => {
  return (
    <div className="login">
      <p>{props.login}</p>
    </div>
  );
};

export default Login;
