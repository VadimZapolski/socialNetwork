import React from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import {Route, withRouter, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import Music from './component/Music/Music';
import News from './component/News/News';
import Setting from './component/Setting/Setting';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import Content1Container from './component/Content1/Content1Container';
import HeaderContainer from './component/Header/HeaderContainer';
import LoginPage from './component/Login/LoginForm';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/App-reducer';
import Preloader from './component/Common/Preloader/Preloader';
import store, {AppStateType} from './redux/Redux-store';


type  MapPropsType = ReturnType<typeof mapStateToProps>
type  DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
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
                    <Switch>
                        <Route exact path="/"
                               render={() => <Redirect to={'/profile'}/>}/>

                    <Route path="/messages" render={() =>
                        <DialogsContainer/>}/>

                    <Route path="/profile/:userId?" render={() =>
                        <Content1Container/>}/>

                    <Route path="/users" render={() =>
                        <UsersContainer pageTitle={'Пользователи'}/>}/>

                    <Route path="/login" render={() =>
                        <LoginPage/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                </Switch>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state:AppStateType) => ({
    initialized: state.appReducer.initialized
})

// export default compose<React.ComponentType> (
//     withRouter,
//     connect (mapStateToProps , {initializeApp})) (App) ;

let AppContainer= compose<React.ComponentType> (
    withRouter,
    connect (mapStateToProps , {initializeApp})) (App) ;

const SamuraiApp : React.FC = ()  => {
    return <BrowserRouter>
        <Provider store={store}>
        <AppContainer/>
        </Provider>
    </BrowserRouter>
}
 export default SamuraiApp