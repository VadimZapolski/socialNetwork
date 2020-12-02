import axios from 'axios';
import {savePhoto} from '../redux/Profile-reducer';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '39e2ccbf-6904-4d9e-81e4-edb73700d646'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: any) => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image' , photoFile)
        return instance.put(`profile/photo`, formData ,{
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
    }
}

export enum ResultCodesEnum {
    Success =0,
    Error =1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired =10
}

type dataType = {
    id: number
    email: string
    login: string
}
type MeResponseType = {
    data: dataType
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponsetype = {
    data: {
        userId:number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response =>  response.data)
    },

    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponsetype>(`auth/login`, {email, password, rememberMe})
            .then(response =>  response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
    },
}