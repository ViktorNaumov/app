import React from "react";
import Field from "./content_components/field.js";
import Namefield from "./content_components/namefield.js";
import Workspace from "./content_components/workspace.js";

const Contentrec = (props) => {
  return (
    
      <div className="conteiner2">
        <div className="Flex">
        <Field />
        <Namefield name="Пластина" />
        <Workspace store={props.store} />
      </div>
    </div>
  );
};

export default Contentrec;
