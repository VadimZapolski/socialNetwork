import React from 'react';
import Content1 from './Content1';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from './../../redux/Profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


class Content1Container extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8757;
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
                          update={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    updateStatus: state.profileReducer.updateStatus
})
export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    WithAuthRedirect
)(Content1Container) as React.FC;






