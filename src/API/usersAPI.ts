import {getItemsType, instance} from './API';


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}