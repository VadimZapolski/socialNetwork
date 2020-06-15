const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type UsersType = {
    id: string,
    name: string,
    photos: {
        small: string,
        large: string
    },
    followed: boolean,
    status: string,
    location: {
        city: string,
        country: string}
}

let initialState = {
    users: [ ] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0
}

const usersReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return  {...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed:true}
                    }
                    return users;
                })
            }
        case UNFOLLOW:
            return  {...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed:false}
                    }
                    return users;
                })
            }
        case SET_USERS: {
            return {
                ... state,
                users: [...state.users, ...action.user] }
        }

        default:
            return state;
    }
}
export const followAC = (userId: any) => ({type: FOLLOW, userId});
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsersAC = (user: any) => ({type: SET_USERS, user});

export default usersReducer;