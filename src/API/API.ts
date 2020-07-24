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
            .then(response => {
                return response.data })
    },
    follow(userId: any) {
       return instance.post(`follow/${userId}`  )
    },
    unfollow(userId: any) {
       return instance.delete(`follow/${userId}` )
    },
    getProfile(userId: any){
    return instance.get(`profile/` + userId);
        }
}

export const authAPI = {
    me() {
        instance.get(`auth/me`)
    }
}