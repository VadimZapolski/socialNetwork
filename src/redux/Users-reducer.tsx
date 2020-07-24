import {usersAPI} from '../API/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

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
    currentPage: 1 ,
    isFetching: true ,
    followingInPropgress: []
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
        case TOGGLE_IS_FETCHING: {
            return {... state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {... state,
                followingInPropgress: action.isFetching
                    ? [...state.followingInPropgress, action.userId]
                    : state.followingInPropgress.filter(id => id != action.userId ) }
        }

        default:
            return state;
    }
}
export const followSuccess = (userId: any) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsersAC = (user: any) => ({type: SET_USERS, user});
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching , userId });



export const getUsers = (currentPage: number, pageSize: number ) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true));

        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {

            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        })
    }
}
export const follow = (UserId : number ) => {
    return (dispatch: any) => {
        dispatch( toggleFollowingProgress(true , UserId) );
        usersAPI.follow(UserId)
            .then((response: any) => {
                if (response.data.resultCode === 0 ) {
                    dispatch ( followSuccess(UserId) )
                }
                dispatch ( toggleFollowingProgress(false, UserId));
            })
    }
}
export const unfollow = (UserId : number ) => {
    return (dispatch: any) => {
        dispatch ( toggleFollowingProgress(true , UserId) );
        usersAPI.unfollow(UserId)
            .then((response: any) => {
                if (response.data.resultCode === 0 ) {
                    dispatch ( unfollowSuccess(UserId) )
                }
                dispatch (toggleFollowingProgress(false, UserId));
            })

    }
}

export default usersReducer;