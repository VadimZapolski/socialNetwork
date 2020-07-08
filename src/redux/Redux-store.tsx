import {combineReducers, createStore} from "redux" ;
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import usersReducer from "./Users-reducer";
import authReducer from './Auth-reducer';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
});

let store = createStore(reducers);

export default store;