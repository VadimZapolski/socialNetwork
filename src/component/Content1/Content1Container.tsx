import React from 'react';
import Content1 from './Content1';
import {connect} from 'react-redux';
import {getUserProfile} from './../../redux/Profile-reducer';
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
    }
    render() {
        return (
        <div>
            <Content1 {...this.props} profile={this.props.profile}/>
        </div>
        )
    }
}

let mapStateToProps = (state : any) => ({
    profile: state.profileReducer.profile
})
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(Content1Container)






