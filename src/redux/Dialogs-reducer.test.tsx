import React from 'react';
import dialogsReducer, {sendMessageCreator} from './Dialogs-reducer';

let state = {
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

test('legth of message should be incremented', () => {
    // 1. test data

    let action = sendMessageCreator('Hello, how do yoy do')

    //  2.action
    let newState = dialogsReducer(state,action)

    // 3.expectation
    expect(newState.messages.length).toBe(6);
})