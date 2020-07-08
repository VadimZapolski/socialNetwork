import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import authReducer, {setAuthUserData} from '../../redux/Auth-reducer';

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: any) => {
                if (response.data.resultCode ===0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {

        return <Header {...this.props}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}
const mapStateToProps = (state: any) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login

});
export default connect (mapStateToProps , {setAuthUserData}) (HeaderContainer);