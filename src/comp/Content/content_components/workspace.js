import React from "react";
import Leftblock from "./leftblock.js";
import { Route } from "react-router-dom";
import FORMS_REC_CONTAINER from "./forms_recContainer.js";
import FORMS_CIR_CONTAINER from "./forms_cirContainer.js";
import FORMS_WAS_CONTAINER from "./forms_wasContainer.js";
import FORMS_SEC_CONTAINER from "./forms_secContainer.js";
import FORMS_TRI_CONTAINER from "./forms_triContainer.js";


const Workspace = (props) => {
  return (
    <div className="workspace">
      <Leftblock />
      <Route path="/rectangle" render={() => <FORMS_REC_CONTAINER />} />
      <Route path="/triangle" render={() => <FORMS_TRI_CONTAINER />} />
      <Route path="/circle" render={() => <FORMS_CIR_CONTAINER />} />
      <Route path="/washer" render={() => <FORMS_WAS_CONTAINER />} />
      <Route path="/sector" render={() => <FORMS_SEC_CONTAINER />} />
    </div>
  );
};
export default Workspace;
