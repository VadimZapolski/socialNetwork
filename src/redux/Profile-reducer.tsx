import {profileAPI, usersAPI} from '../API/API';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    newPostText: "" ,
    profile: null ,
    status: ""
}

const profileReducer = (state= initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST}) ;
export const setUserProfile = (profile:any) => ({ type: SET_USER_PROFILE , profile}) ;
export const setStatus = (status:any) => ({ type: SET_STATUS , status}) ;


export const getUserProfile = (userId:any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then((response: any) => {
        dispatch( setUserProfile(response.data) );
    })
} ;
export const getStatus = (userId:any) => (dispatch: any) => {
    profileAPI.getStatus(userId).then((response: any) => {
        dispatch( setStatus(response.data) );
    })
} ;
export const updateStatus = (status:any) => (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: any) => {
        if (response.data.resultCode === 0 ) {
            dispatch(updateStatus(status));
        }
    })
} ;
export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT , newText: text});

export default profileReducer;