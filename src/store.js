
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
//import mathReducer from "./Reducers/mathReducer";
//import userReducer from "./Reducers/userReducer";
import thunk from "redux-thunk";
//import promise from 'redux-promise-middleware'
import uiReducer from "./Reducers/uiReducer";
import employeeReducer from "./Reducers/employeeReducer";

//const combinedReducers = combineReducers({mathReducer, userReducer});
const combinedReducers = combineReducers({uiReducer,employeeReducer});

/*const myLogger = (store) => (next) => (action) => {
    //console.log("Action: ",action);
    next(action);
}*/

export default createStore(
    combinedReducers,
    {},
    applyMiddleware(logger,thunk)
);