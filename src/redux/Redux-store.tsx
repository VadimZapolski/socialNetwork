import {applyMiddleware, combineReducers, createStore} from 'redux' ;
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import usersReducer from "./Users-reducer";
import authReducer from './Auth-reducer';
import thunkMiddleware  from 'redux-thunk';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
});

let store = createStore(reducers , applyMiddleware(thunkMiddleware));

export default store;