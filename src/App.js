import React from "react";
import Footer from "./comp/Footer/Footer.js";
import { Route } from "react-router-dom";
import Contentrec from "./comp/Content/Contentrec";
import Contenttri from "./comp/Content/Contenttri";
import Contentcir from "./comp/Content/Contentcir";
import Contentwas from "./comp/Content/Contentwas";
import Contentsec from "./comp/Content/Contentsec";
import SpecificationContainer from "./comp/Content/content_components/specificContainer.js";
import HeaderContainer from "./comp/Header/HeaderContainer.js";
import Login from "./comp/authForms/login"
import Registration from "./comp/authForms/registration.js";
import MailOk from "./comp/infowindows/mailOk.js";
import PushOk from "./comp/infowindows/pushOk"
import Hello from "./comp/Content/content_components/hello.js";
import RegMail from "./comp/infowindows/regMail.js";



const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route path="/rectangle" render={() => <Contentrec />} />
      <Route path="/triangle" render={() => <Contenttri />} />
      <Route path="/circle" render={() => <Contentcir />} />
      <Route path="/washer" render={() => <Contentwas />} />
      <Route path="/sector" render={() => <Contentsec />} />
      <Route path="/basket" render={() => <SpecificationContainer />} />
      <Login/>
      <Registration/>
      <PushOk/>
      <RegMail/>
      <Route path="/ok" render={()=><MailOk/>}/>
      <Route path="//" render={()=><Hello/>}/>
      <Footer/>
    </div>
  );
};

export default App;
