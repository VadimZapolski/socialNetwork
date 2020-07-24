import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import  {getAuthUserData} from '../../redux/Auth-reducer';


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuthUserData();
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
export default connect (mapStateToProps , {getAuthUserData}) (HeaderContainer);