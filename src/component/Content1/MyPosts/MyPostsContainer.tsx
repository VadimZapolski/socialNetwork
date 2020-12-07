import React from 'react';
import {addPostActionCreator} from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/Redux-store';


let mapStateProps = (state: AppStateType) => {
    return{
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return{
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect( mapStateProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
