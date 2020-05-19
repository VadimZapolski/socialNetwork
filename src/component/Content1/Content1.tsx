import React from "react";
import f from './Content1.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import {addPost} from "../../redux/State";

type Content1Type = {

}

const Content1 = (props : any) => {


    return <div>
        <ProFileInfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText = {props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}/>
    </div>
}

export default Content1;