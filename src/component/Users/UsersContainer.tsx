import React from "react";
import {connect} from "react-redux";
import Users from "./UsersClass";
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";


let mapStateProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect(mapStateProps, mapDispatchToProps)(Users);

