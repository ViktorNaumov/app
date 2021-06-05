import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  allCloseCreator,
  setRegistrationDataThunkCreator,
} from "../../Redux/reduser";
import { inputComp } from "./inputComp";
import out from "../../IMG/out.png";
import { LengthCreator } from "../../validators/length_validator";
import { number_validator } from "../../validators/number_validator";
import { string_validator } from "../../validators/string_validator";
import { maxLengthCreator } from "../../validators/maxLength_validator";

const length10 = LengthCreator(10);
const length9 = LengthCreator(9);
const maxLength255 = maxLengthCreator(255);
const maxLength50 = maxLengthCreator(50);

const RegistrationForm = (props) => {
  const f = () => {
    props.allClose();
  };
  return (
    <div className="registration">
      <div className="out" onClick={f}>
        <div>
          <img src={out} alt="out" width="20" height="20"></img>
        </div>
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
            validate={[length10, number_validator]}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"КПП"}
            component={inputComp}
            name={"KPP"}
            validate={[length9, number_validator]}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"адрес организации"}
            component={inputComp}
            name={"adress"}
            type={"textarea"}
            validate={[maxLength255]}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"название организации"}
            component={inputComp}
            name={"name_org"}
            validate={[maxLength50]}
            required
          />
        </div>
        <div>
          <Field
            placeholder={"имя"}
            component={inputComp}
            name={"name"}
            validate={[ string_validator]}
          />
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
