/*
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './Containers/App';
//import registerServiceWorker from './registerServiceWorker';


import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";


/!*  =========== REDUX =========== *!/

const mathInitialState = {
    result: 1,
    latestValues: []
}

const mathReducer = (state = mathInitialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                latestValues: [...state.latestValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                latestValues: [...state.latestValues, action.payload]
            };
            break;
    }
    return state;
};

const userInitialState = {
    name: "Oren",
    age: "34"
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const combinedReducers = combineReducers({mathReducer, userReducer});

const myLogger = (store) => (next) => (action) => {
    //console.log("Action: ",action);
    next(action);
}

const store = createStore(
    combinedReducers,
    {},
    applyMiddleware(myLogger, logger)
);

store.subscribe(() => {
    // console.log("store updated!", store.getState())
});


/!*  =========== REACT =========== *!/


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();

*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Containers/App";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);