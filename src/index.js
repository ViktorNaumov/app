import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";


  ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store} >
      <App store={store} />
    </Provider> 
  </HashRouter> , document.getElementById("root"));



// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// {
  /* <React.StrictMode>   </React.StrictMode> */
// }
