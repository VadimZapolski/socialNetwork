export const getUsers = (state:any) => {
    return state.usersReducer.users
}

export const pageSize = (state:any) => {
    return state.usersReducer.pageSize
}

export const totalUsersCount = (state:any) => {
    return state.usersReducer.totalUsersCount
}

export const currentPage = (state:any) => {
    return state.usersReducer.currentPage
}

export const isFetching = (state:any) => {
    return state.usersReducer.isFetching
}

export const followingInPropgress = (state:any) => {
    return state.usersReducer.followingInPropgress
}
