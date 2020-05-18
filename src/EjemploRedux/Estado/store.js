import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import operacionesReducer from './reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const reducer = combineReducers({operaciones: operacionesReducer});
const store = createStore(reducer,compose(applyMiddleware(...middleware)));
export default store;