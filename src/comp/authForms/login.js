import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  allCloseCreator,
  registrationFormShowCreator,
  setLoginDataThunkCreator,
} from "../../Redux/reduser";
import { inputComp } from "./inputComp";
import out from "../../IMG/out.png"

const LoginForm = (props) => {
  let f = () => {
    props.regFormShow();
  };
  let f1 = ()=>{
    props.allClose();
  }  
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="out" onClick={f1}>
        <div><img src={out} width="20" height="20"  ></img></div>
      </div>
      <div>
        <div>
          <Field
            placeholder={"email"}
            component={inputComp}
            name={"email"}
            type={"email"}
            placeholder="e-mail"
            required
          />
        </div>
        <div>
          <Field
            placeholder={"password"}
            component={inputComp}
            name={"pass"}
            type={"password"}
            required
          />
        </div>
      </div>

      <div>
        <button className="formBut">ВОЙТИ</button>
      </div>
      <div className="reg" >
        <a className="reg" href="#" onClick={f}>
          Зарегистрироваться
        </a>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (values) => {
    props.setLogin(values);
    console.log("кнопка нажата")
  };

  return (
    <div>
      {props.loginForm ? (
        <div className="Dark">
          <div className="onDarkLogin">
            <LoginReduxForm
              onSubmit={onSubmit}
              regFormShow={props.regFormShow}
              allClose={props.allClose}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loginForm: state.app.authorization.loginForm,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    setLogin: (values) => {
      dispatch(setLoginDataThunkCreator(values));
    },
    regFormShow: () => {
      dispatch(registrationFormShowCreator());
    },
    allClose:()=>{
      dispatch(allCloseCreator());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Login);
