import React from 'react';
import Content1 from './Content1';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from './../../redux/Profile-reducer';

class Content1Container extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


let mapStateToProps = (state : any) => {
    profile: state.profilePage.profile
}

export default connect(mapStateToProps, {setUserProfile}) (Content1Container);