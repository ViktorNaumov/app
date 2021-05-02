import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  allCloseCreator,
  setRegistrationDataThunkCreator,
} from "../../Redux/reduser";
import { inputComp } from "./inputComp";
import out from "../../IMG/out.png"

const RegistrationForm = (props) => {
  const f = () => {
    props.allClose();
  };
  return (
    <div>
      <div className="out" onClick={f}>
        <div><img src={out} alt="out" width="20" height="20"  ></img></div>
      </div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={"email"}
            component={inputComp}
            type={"email"}
            name={"email"}
            required
          />
        </div>

        <div>
          <Field
            name={"pass"}
            placeholder={"password"}
            component={inputComp}
            type={"password"}
            required
          />
        </div>
        <div>
          <Field
            name={"INN"}
            placeholder={"ИНН"}
            component={inputComp}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"КПП"}
            component={inputComp}
            name={"KPP"}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"адрес организации"}
            component={inputComp}
            name={"adress"}
            type={"textarea"}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"название организации"}
            component={inputComp}
            name={"name_org"}
            required
          />
        </div>
        <div>
          <Field placeholder={"имя"} component={inputComp} name={"name"} />
        </div>
        <div>
          <Field placeholder={"телефон"} component={inputComp} name={"tel"} />
        </div>
        <div>
          <button className="formBut">ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
      </form>
      
    </div>
  );
};

const RegistrationReduxForm = reduxForm({ form: "registration" })(
  RegistrationForm
);

const Registration = (props) => {
  const onSubmit = (values) => {
    props.setRegistration(values);
  };

  return (
    <div>
      {props.regForm ? (
        <div className="Dark">
          <div className="onDark">
            <RegistrationReduxForm
              onSubmit={onSubmit}
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
    regForm: state.app.authorization.regForm,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    setRegistration: (values) => {
      dispatch(setRegistrationDataThunkCreator(values));
    },
    allClose: () => {
      dispatch(allCloseCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Registration);
