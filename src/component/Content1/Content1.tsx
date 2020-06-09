import React from "react";
import f from './Content1.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type Content1Type = {

}

const Content1 = (props : any) => {


    return <div>
        <ProFileInfo />
        <MyPostsContainer />
    </div>
}

export default Content1;