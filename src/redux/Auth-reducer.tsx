import {authAPI, ResultCodesEnum} from '../API/API';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';

type initialStateType = {
    userId: number | null ,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState:initialStateType  = {
    userId: null ,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: setAuthUserDataType):initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type ActionPayloadType ={
    userId: number | null ,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: ActionPayloadType
}
export const setAuthUserData = (userId: number | null ,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean):setAuthUserDataType => ({
    type: SET_USER_DATA, payload : {userId,email,login,isAuth}});

export const getAuthUserData = () => async (dispatch:any) => {
    let meData = await authAPI.me()
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = meData.data;
            dispatch( setAuthUserData(id, email, login, true) );
    }
}

export const login = (email: string , password: string ,rememberMe: boolean) => async (dispatch:any) => {
    // создаём переменную респонс, результат которым зарезолвится промис.
    let loginData = await authAPI.login(email, password, rememberMe)
        if (loginData.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        }
         else {
        //     if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        //         dispatch(getCaptchaUrl())
        //     }
             let message = loginData.messages.length > 0 ?loginData.messages[0] : 'Some error'
             dispatch(stopSubmit('login', {_error: message}))
        }
}

export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()
        if (response.data.resultCode ===0) {
            dispatch(setAuthUserData(null ,null, null, false ) );
        }
}

export default authReducer;