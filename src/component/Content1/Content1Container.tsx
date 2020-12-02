import React from 'react';
import Content1 from './Content1';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, savePhoto, updateStatus} from './../../redux/Profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {AppStateType} from '../../redux/Redux-store';


class Content1Container extends React.Component<any, any> {


    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Content1 {...this.props}
                          isOwner={!this.props.match.params.userId}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateStatus={this.props.updateStatus}
                          savePhoto={this.props.savePhoto}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth

})
export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    WithAuthRedirect
)(Content1Container) as React.FC;






