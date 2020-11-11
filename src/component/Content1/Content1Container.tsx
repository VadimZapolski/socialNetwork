import React from 'react';
import Content1 from './Content1';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from './../../redux/Profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import authReducer from '../../redux/Auth-reducer';


class Content1Container extends React.Component<any, any> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId  = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Content1 {...this.props}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth

})
export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    WithAuthRedirect
)(Content1Container) as React.FC;






