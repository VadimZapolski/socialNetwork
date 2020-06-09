import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/Dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


// const MyPostsContainer = (props: any) => {
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     let onPostChange = (text: any ) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action);
//     }
//
//     return <MyPosts  updateNewPostText={onPostChange}
//                      addPost={addPost}
//                      posts={state.profileReducer.posts}
//                      newPostText = {state.profileReducer.newPostText}/>
// }

let mapStateProps = (state: any) => {
    return{
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text: any) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect( mapStateProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
