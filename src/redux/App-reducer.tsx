import React from 'react';
import {getAuthUserData} from './Auth-reducer';

const SET_INITIALIZED_SUCCESS = 'SET-INITIALIZED-SUCCESS';

type initialStateType = {
    initialized: boolean
}
let initialState:initialStateType = {
    initialized: false
}


const appReducer = (state = initialState, action: initializedSuccessType):initialStateType => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

type initializedSuccessType = {
    type: typeof SET_INITIALIZED_SUCCESS
}
export const initializedSuccess  = ():initializedSuccessType => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })

}

export default appReducer;