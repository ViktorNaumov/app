import React from "react";
import Field from "./content_components/field.js";
import Namefield from "./content_components/namefield.js";
import Workspace from "./content_components/workspace.js";

const Contentwas = (props) => {
  return (
    <div className="conteiner2">
      <Field />
      <Namefield name="Шайба" />
      <Workspace store={props.store} />
    </div>
  );
};

export default Contentwas;
