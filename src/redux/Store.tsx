import React from "react";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hey,how are you?', likeCount: 15},
                {id: 2, message: 'It\'s my first post', likeCount: 20},
            ],
            profile : null ,
            status: " "
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
            ],
        }
    },
    _callSubscriber(_state: any) {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
}





export default store;
