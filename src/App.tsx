import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Content1 from "./component/Content1/Content1";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './component/Music/Music';
import News from './component/News/News';
import Setting from "./component/Setting/Setting";



const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path="/messages" render={() =>
                        <Dialogs state ={props.state.dialogPage}/>}/>
                    <Route path="/profile" render={() =>
                        <Content1 profilePage ={props.state.profilePage}
                                  addPost={props.addPost}
                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


