import {profileAPI, usersAPI} from '../API/API';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    profile: null ,
    status: "",
}

const profileReducer = (state: { profile: null;
posts: ({ likeCount: number; id: number; message: string } | { likeCount: number; id: number; message: string })[];
status: string } | { posts: ({ likeCount: number; id: number; message: string } | { likeCount: number; id: number; message: string })[] } = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            debugger
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !=  action.postId)
            }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText: any) => ({type: ADD_POST,newPostText}) ;
export const setUserProfile = (profile:any) => ({ type: SET_USER_PROFILE , profile}) ;
export const setStatus = (status:string) => ({ type: SET_STATUS , status}) ;
export const deletePost = (postId: number) => ({ type: DELETE_POST , postId}) ;


export const getUserProfile = (userId:any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then((response: any) => {
        dispatch( setUserProfile(response.data) );
    })
} ;
export const getStatus = (userId:any) => (dispatch: any) => {
    debugger
    profileAPI.getStatus(userId).then((response: any) => {
        debugger
        dispatch( setStatus(response.data) );
    })
} ;
export const updateStatus = (status:string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: any) => {
        if (response.data.resultCode === 0 ) {
            dispatch(setStatus(status));
        }
    })
} ;


export default profileReducer;