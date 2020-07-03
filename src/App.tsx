import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import {Route} from 'react-router-dom';
import Music from './component/Music/Music';
import News from './component/News/News';
import Setting from "./component/Setting/Setting";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import Content1Container from './component/Content1/Content1Container';



const App = (props: any) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/messages" render={() =>
                        <DialogsContainer />}/>

                    <Route path="/profile" render={() =>
                    <Content1Container /> } />

                    <Route path="/users" render={() =>
                        <UsersContainer /> } />

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                </div>
            </div>
    );
}

export default App;


