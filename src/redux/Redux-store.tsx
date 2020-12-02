import {applyMiddleware, combineReducers, createStore} from 'redux' ;
import profileReducer from './Profile-reducer';
import dialogsReducer from './Dialogs-reducer';
import usersReducer from './Users-reducer';
import authReducer from './Auth-reducer';
import thunkMiddleware  from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './App-reducer';


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    form: formReducer,
    appReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer , applyMiddleware(thunkMiddleware));

export default store;