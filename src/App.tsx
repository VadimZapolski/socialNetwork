import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Content1 from "./component/Content1/Content1";
import Dialogs from "./component/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import Music from './component/Music/Music';
import News from './component/News/News';
import Setting from "./component/Setting/Setting";
import DialogsContainer from "./component/Dialogs/DialogsContainer";



const App = (props: any) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/messages" render={() =>
                        <DialogsContainer />}/>
                    <Route path="/profile" render={() =>
                        <Content1 /> } />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                </div>
            </div>
    );
}

export default App;


