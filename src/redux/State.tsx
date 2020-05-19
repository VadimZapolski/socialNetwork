import React from "react";
import {rerenderEntireTree} from "../Render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hey,how are you?', likeCount: 15},
            {id: 2, message: 'It\'s my first post', likeCount: 20},
        ],
        newPostText: 'it tut   '
    },
    dialogPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Privet!!'},
            {id: 4, message: 'Good morning'},
            {id: 5, message: 'Yoooo'},
        ],
        dialogs: [
            {id: 1, name: 'Vadim'},
            {id: 2, name: 'Vitya'},
            {id: 3, name: 'Pasha'},
            {id: 4, name: 'Nik'},
            {id: 5, name: 'Alina'},
        ]
    }
}

export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
//    state.profilePage.newPostText = ' ';
    rerenderEntireTree(state);
//}
// export let updateNewPostText = (newText: string ) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
}
export default state;
