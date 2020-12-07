import axios from 'axios';
import {userType} from '../types/types';


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '39e2ccbf-6904-4d9e-81e4-edb73700d646'
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type dataType = {
    id: number
    email: string
    login: string
}
export type MeResponseType = {
    data: dataType
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export type LoginResponsetype = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export type getItemsType = {
    items: Array<userType>
    totalCount: number
    error: string | null
}