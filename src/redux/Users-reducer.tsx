import {updateObjectInArray} from '../utils/object-helper';
import {userType} from '../types/types';
import {usersAPI} from '../API/usersAPI';
import {BaseThunkType} from './Redux-store';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

type usersReducerType = {
    users: Array<userType>
    pageSize:number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>  //array of users id
}

let initialState:usersReducerType = {
    users: [] ,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: ActionUsersReducerType):usersReducerType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, 'id',{followed: true})
                // users: state.users.map(users => {
                //     if (users.id === action.userId) {
                //         return {...users, followed: true}
                //     }
                //     return users;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, 'id',{followed: false})
                // users: state.users.map(users => {
                //     if (users.id === action.userId) {
                //         return {...users, followed: false}
                //     }
                //     return users;
                // })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

type ActionUsersReducerType = followSuccessType|unfollowSuccessType|setUsersACType|
    setCurrentPageACType|setTotalUsersCountACType|toggleIsFetchingACType|toggleFollowingProgressType

type followSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number):followSuccessType => ({type: FOLLOW, userId});

type unfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number):unfollowSuccessType => ({type: UNFOLLOW, userId});

type setUsersACType = {
    type: typeof SET_USERS
    users: Array<userType>
}
export const setUsersAC = (users: Array<userType>):setUsersACType => ({type: SET_USERS, users});

type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPageAC = (currentPage: number):setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage});

type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCountAC = (totalUsersCount: number):setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

type toggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetchingAC = (isFetching: boolean):toggleIsFetchingACType => ({type: TOGGLE_IS_FETCHING, isFetching});

type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean,
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number):toggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

type ThunkType = BaseThunkType<ActionUsersReducerType>

export const requestUsers = (page: number, pageSize: number):ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
    }
}

const  followUnfolowFlow = async (dispatch:any,UserId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, UserId));
    let response = await apiMethod(UserId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(UserId))
    }
    dispatch(toggleFollowingProgress(false, UserId));
}


export const follow = (UserId: number):ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfolowFlow(dispatch,UserId,apiMethod,actionCreator)
    }
}
export const unfollow = (UserId: number):ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        let actionCreator = unfollowSuccess;
        followUnfolowFlow(dispatch,UserId,apiMethod,actionCreator)
    }
}

export default usersReducer;