import React from "react";
import { connect } from "react-redux";
import out from "../../IMG/out.png";
import { allCloseCreator } from "../../Redux/reduser";

const RegMail = (props) => {
  let f = () => {
    props.allClose();
  };
  return (
    <div>
      {props.regMail ? (
        <div className="Dark">
          <div className="onDark">
            <div className="out" onClick={f}>
              <div>
                <img src={out} width="20" height="20" alt=""></img>
              </div>
            </div>
            <div className="message">
              <div>
                <h1>Вам отправлена ссылка для подтверждения регистрации</h1>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    regMail: state.app.authorization.regMail,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    allClose: () => {
      dispatch(allCloseCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(RegMail);
