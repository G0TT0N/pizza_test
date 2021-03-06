import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import employeesReducer from "./reducers/employeesRdc";
import employeesEditReducer from "./reducers/employeesEditRdc";
// import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    employeesList: employeesReducer,
    employeesEditList: employeesEditReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;


