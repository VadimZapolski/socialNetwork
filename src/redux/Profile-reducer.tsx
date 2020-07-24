import {usersAPI} from '../API/API';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    newPostText: "" ,
    profile: null
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
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST}) ;
export const setUserProfile = (profile:any) => ({ type: SET_USER_PROFILE , profile}) ;
export const getUserProfile = (userId:any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then((response: any) => {
        dispatch( setUserProfile(response.data) );
    })
} ;
export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT , newText: text});

export default profileReducer;