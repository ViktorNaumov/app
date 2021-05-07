import { createStore, combineReducers, applyMiddleware } from "redux";
import reduser from "./reduser"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import setAuthorizationToken from "./utils";


let redusers = combineReducers({
    app: reduser,
    form : formReducer, 
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));


setAuthorizationToken(localStorage.token)

// let arr = JSON.parse(localStorage.getItem('array'))
// setArrBasket(arr,store.dispatch)
// window.store=store;

export default store;