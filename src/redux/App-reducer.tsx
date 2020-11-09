import React from 'react';
import {getAuthUserData} from './Auth-reducer';

const SET_INITIALIZED_SUCCESS = 'SET-INITIALIZED-SUCCESS';


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {

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
export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })

}

export default appReducer;