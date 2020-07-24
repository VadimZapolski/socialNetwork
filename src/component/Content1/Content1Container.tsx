import React from 'react';
import Content1 from './Content1';
import {connect} from 'react-redux';
import {getUserProfile} from './../../redux/Profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';


class Content1Container extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8757;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to = {"/login"} /> ;
        return (
        <div>
            <Content1 {...this.props} profile={this.props.profile}/>
        </div>
        )
    }
}


let mapStateToProps = (state : any) => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
})

let WithUrlDataContainerComponent = withRouter(Content1Container)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);