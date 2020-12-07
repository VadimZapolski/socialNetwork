import {instance, LoginResponsetype, MeResponseType} from './API';

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponsetype>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
    },
}