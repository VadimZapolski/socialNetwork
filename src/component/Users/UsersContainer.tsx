import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPageAC,
    toggleFollowingProgress,
    requestUsers, unfollow, follow
} from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {compose} from 'redux';
import {
    currentPage,
    followingInPropgress,
    isFetching,
    pageSize,
    totalUsersCount,
    getUsers
} from '../../redux/Users-selectors';


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
        users: getUsers(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInPropgress: followingInPropgress(state)
}
}


export default compose(
    connect(mapStateProps, {
        follow,
        unfollow,
        setCurrentPageAC,
        toggleFollowingProgress ,
        getUsers: requestUsers
    })
) (UsersContainer)

