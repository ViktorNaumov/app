import React from "react";
import Field from "./content_components/field.js";
import Namefield from "./content_components/namefield.js";
import Workspace from "./content_components/workspace.js";

const Contentsec = (props) => {
  return (
    <div className="conteiner2">
      <Field />
      <Namefield name="Сектор" />
      <Workspace store={props.store} />
    </div>
  );
};

export default Contentsec;
