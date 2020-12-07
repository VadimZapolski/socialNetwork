import {applyMiddleware, combineReducers, createStore , Action} from 'redux' ;
import profileReducer from './Profile-reducer';
import dialogsReducer from './Dialogs-reducer';
import usersReducer from './Users-reducer';
import authReducer from './Auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
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

export type BaseThunkType<A extends Action , R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducer , applyMiddleware(thunkMiddleware));

export default store;