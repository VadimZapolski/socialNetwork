import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPageAC,
    toggleFollowingProgress,
    getUsers, unfollow, follow
} from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {usersAPI} from '../../API/API';


class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage , this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber , this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInPropgress={this.props.followingInPropgress}
            />
        </>
    }
}

let mapStateProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInPropgress: state.usersReducer.followingInPropgress
    }
}

export default connect(mapStateProps, {
    follow,
    unfollow,
    setCurrentPageAC,
    toggleFollowingProgress ,
    getUsers: getUsers
})(UsersContainer);

