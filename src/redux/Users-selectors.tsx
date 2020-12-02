import {AppStateType} from './Redux-store';

export const getUsers = (state:AppStateType) => {
    return state.usersReducer.users
}

export const pageSize = (state:AppStateType) => {
    return state.usersReducer.pageSize
}

export const totalUsersCount = (state:AppStateType) => {
    return state.usersReducer.totalUsersCount
}

export const currentPage = (state:AppStateType) => {
    return state.usersReducer.currentPage
}

export const isFetching = (state:AppStateType) => {
    return state.usersReducer.isFetching
}

export const followingInProgress = (state:AppStateType) => {
    return state.usersReducer.followingInProgress
}
