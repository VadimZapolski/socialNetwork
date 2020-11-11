import axios from 'axios';


const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/' ,
    withCredentials: true,
    headers:  {
        'API-KEY': '39e2ccbf-6904-4d9e-81e4-edb73700d646'
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize : number) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: any) => {
                return response.data })
    },
    follow(userId: any) {
       return instance.post(`follow/${userId}`  )
    },
    unfollow(userId: any) {
       return instance.delete(`follow/${userId}` )
    },
    getProfile(userId: any){
    return profileAPI.getProfile(userId)
        }
}

export const profileAPI = {
    getProfile(userId: any){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: any){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string){
        return instance.put(`profile/status`,  {status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string , password: string ,rememberMe: boolean ) {
        return instance.post(`auth/login` , { email , password , rememberMe})
    },
    logout() {
        return instance.delete(`auth/login` )
    },
}