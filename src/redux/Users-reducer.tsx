const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

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
    totalUsersCount: 0,
    currentPage: 1
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
            return {... state ,users: action.user }
        }
        case SET_CURRENT_PAGE: {
            return {... state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {... state, totalUsersCount: action.count }
        }

        default:
            return state;
    }
}
export const followAC = (userId: any) => ({type: FOLLOW, userId});
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsersAC = (user: any) => ({type: SET_USERS, user});
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;