import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
} from '../../redux/Users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.items);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
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
        isFetching: state.usersReducer.isFetching
    }
}
// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: any) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: any) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateProps, {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
})(UsersContainer);

