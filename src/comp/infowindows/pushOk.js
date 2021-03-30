import React from "react";
import { connect } from "react-redux";
import { pushOkshowCreator} from "../../Redux/reduser";

const PushOk = (props) => {
    const f =() =>{
        props.pushShow()
    }
  return (
    <div>
      {(props.pushOkShow)?<div className="Dark">
        <div className="onDark">
          <div>
            <h3>На Вашу почту направлен счёт </h3>
            
          </div>
          <button onClick={f}>OK</button>
        </div>
      </div>:null}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        pushOkShow: state.app.authorization.pushOkShow,
    };
  };

const mapDispatchToprops = (dispatch) => {
  return {
    pushShow: () => {
      dispatch(pushOkshowCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(PushOk);