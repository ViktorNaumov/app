import React from "react";
import Leftblock from "./leftblock.js";
import { Route } from "react-router-dom";
import Forms_recContainer from "./forms_recContainer.js";
import Forms_cirContainer from "./forms_cirContainer.js";
import Forms_wasContainer from "./forms_wasContainer.js";
import Forms_secContainer from "./forms_secContainer.js";
import Forms_triContainer from "./forms_triContainer.js";


const Workspace = (props) => {
  return (
    <div className="workspace">
      <Leftblock />
      <Route path="/rectangle" render={() => <Forms_recContainer />} />
      <Route path="/triangle" render={() => <Forms_triContainer />} />
      <Route path="/circle" render={() => <Forms_cirContainer />} />
      <Route path="/washer" render={() => <Forms_wasContainer />} />
      <Route path="/sector" render={() => <Forms_secContainer />} />
    </div>
  );
};
export default Workspace;
