import React from 'react';
import {connect} from 'react-redux';
import style from './Users.module.css';
import {requestUsers, unfollow, follow} from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {compose} from 'redux';
import {
    currentPage,
    followingInProgress,
    isFetching,
    pageSize,
    totalUsersCount,
    getUsers
} from '../../redux/Users-selectors';
import {AppStateType} from '../../redux/Redux-store';
import {userType} from '../../types/types';
type MapStatePropsType = {
    currentPage:number
    pageSize: number
    isFetching:boolean
    totalUsersCount:number
    users:Array<userType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage:number,pageSize: number) => void
}
type OwnPropsType = {
    pageTitle:string
}
type UsersContainerType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage , this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber , this.props.pageSize)
    }

    render() {

        return <>

            <h2 className={style.pageTitle}>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
}
}


export default compose(
    connect(mapStateProps, {
        follow,
        unfollow,
        getUsers: requestUsers
    })
) (UsersContainer)
