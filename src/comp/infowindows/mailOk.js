import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { mailOkShowCreator } from "../../Redux/reduser";
import out from "../../IMG/out.png";

const MailOk = (props) => {
  const f = () => {
    props.sregShow();
  };
  return (
    <div>
      {!props.mailOkShow ? (
        <div className="Dark">
          <div className="onDark">
            <NavLink to="/">
              <div className="out" onClick={f}>
                <div>
                  <img src={out} width="20" height="20" alt=""></img>
                </div>
              </div>
            </NavLink>
            <div className="message">
              <div>
                <h1>Адрес почты подтверждён. </h1>
                <h1>Войдите в аккаунт. </h1>
              </div>
            </div>
            
          </div>
        </div>
      ) : null}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     regOkShow: state.app.authorization.regOkShow,
//   };
// };

const mapDispatchToprops = (dispatch) => {
  return {
    sregShow: () => {
      dispatch(mailOkShowCreator());
    },
  };
};

export default connect(null, mapDispatchToprops)(MailOk);
