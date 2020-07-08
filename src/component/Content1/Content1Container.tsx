import React from 'react';
import Content1 from './Content1';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from './../../redux/Profile-reducer';
import { withRouter } from 'react-router-dom';

class Content1Container extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8757;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: any) => {
                this.props.setUserProfile(response.data);

            })
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

let WithUrlDataContainerComponent = withRouter(Content1Container)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);