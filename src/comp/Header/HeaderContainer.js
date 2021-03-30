import React from "react";
import { connect } from "react-redux";
import {
  getStateAPIThunkCreator,
  loginFormShowCreator,
  setLogoutDataCreator,
  setUserDataThunkCreator,
} from "../../Redux/reduser.js";
import Header from "./Header.js";

class HeaderCont extends React.Component {
  componentDidMount() {
    this.props.getApiState(this.props.length);
    this.props.setUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    length: state.app.SpecArray.length - 1,
    isAuth: state.app.authorization.isAuth,
    login: state.app.authorization.login,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    getApiState: (length) => {
      dispatch(getStateAPIThunkCreator(length));
    },
    setUserData: (data) => {
      dispatch(setUserDataThunkCreator(data));
    },
    userLogout: ()=>{
      dispatch(setLogoutDataCreator())
    },
    loginFormShow : ()=>{
      dispatch(loginFormShowCreator())
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(HeaderCont);
export default HeaderContainer;
