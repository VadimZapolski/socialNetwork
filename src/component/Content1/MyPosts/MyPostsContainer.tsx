import React from "react";
import {addPostActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {sendMessageCreator, } from "../../../redux/Dialogs-reducer";
import {connect} from "react-redux";


let mapStateProps = (state: any) => {
    return{
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return{
        addPost: (newPostText: any) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect( mapStateProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
