import React from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import {Route, withRouter} from 'react-router-dom';
import Music from './component/Music/Music';
import News from './component/News/News';
import Setting from './component/Setting/Setting';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import Content1Container from './component/Content1/Content1Container';
import HeaderContainer from './component/Header/HeaderContainer';
import LoginPage from './component/Login/LoginForm';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/App-reducer';
import Preloader from './component/Common/Preloader/Preloader';



class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render () {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/messages" render={() =>
                        <DialogsContainer/>}/>

                    <Route path="/profile/:userId?" render={() =>
                        <Content1Container/>}/>

                    <Route path="/users" render={() =>
                        <UsersContainer/>}/>

                    <Route path="/login" render={() =>
                        <LoginPage/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state:any) => ({
    initialized: state.appReducer.initialized
})

export default compose (
    withRouter,
    connect (mapStateToProps , {initializeApp})) (App);

