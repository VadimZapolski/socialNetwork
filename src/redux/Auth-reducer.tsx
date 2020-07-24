import {authAPI} from '../API/API';

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null ,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId: null, email: null, login: null) => ({
    type: SET_USER_DATA, data : {userId,email,login}});

export const getAuthUserData = (props: any) => (dispatch:any) => {
    authAPI.me().then((response: any) => {
        if (response.data.resultCode ===0) {
            let {id, email, login} = response.data.data;
            dispatch( setAuthUserData(id, email, login) );
        }
    })
}

export default authReducer;