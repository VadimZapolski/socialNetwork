import {profileAPI, usersAPI} from '../API/API';
import {photosType, postsType, profileType} from '../types/types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';



let initialState:profileReducerType = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    profile: null,
    status: '',
    newPostText: ''
}

type profileReducerType = {
    profile: profileType | null,
    posts:Array<postsType>
    status: string
    newPostText:string
}


const profileReducer = (state = initialState, action: ActionProfileReducerType):profileReducerType => {

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
                newPostText: ''
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as profileType
            }
        default:
            return state;
    }
}

//ActionCreator

type ActionProfileReducerType = addPostActionCreatorType|setUserProfileType|setStatusType|deletePostType|savePhotoSuccess

type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string):addPostActionCreatorType => ({type: ADD_POST, newPostText});

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}
export const setUserProfile = (profile: profileType):setUserProfileType => ({type: SET_USER_PROFILE, profile});

type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string):setStatusType => ({type: SET_STATUS, status});

type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number):deletePostType => ({type: DELETE_POST, postId});

type savePhotoSuccess = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:photosType
}
export const savePhotoSuccess = (photos:photosType):savePhotoSuccess => ({type: SAVE_PHOTO_SUCCESS, photos});



// Thunk
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId).then((response: any) => {
        dispatch(setUserProfile(response.data));
    })
};
export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId).then((response: any) => {
        dispatch(setStatus(response.data));
    })
};
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: any) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
};

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
};


export default profileReducer;