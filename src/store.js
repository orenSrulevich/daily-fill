
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
//import mathReducer from "./Reducers/mathReducer";
//import userReducer from "./Reducers/userReducer";
import thunk from "redux-thunk";
//import promise from 'redux-promise-middleware'
import uiReducer from "./Reducers/uiReducer";
import employeeReducer from "./Reducers/employeeReducer";
import {reducer as formReducer} from "redux-form";
import adminReducer from "./Reducers/adminReducer";
import appReducer from "./Reducers/appReducer";

//const combinedReducers = combineReducers({mathReducer, userReducer});
const combinedReducers = combineReducers({
    ui:uiReducer,
    employee:employeeReducer,
    app:appReducer,
    admin:adminReducer,
    form: formReducer
});

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/*const myLogger = (store) => (next) => (action) => {
    //console.log("Action: ",action);
    next(action);
}*/

export default createStore(
    combinedReducers,
    reduxDevTool,
    applyMiddleware(thunk)
);