import React from 'react';
import profileReducer, {addPostActionCreator} from './Profile-reducer';

test('legth of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra')
    let state = {
        posts: [
            {id: 1, message: 'Hey,how are you?', likeCount: 15},
            {id: 2, message: 'It\'s my first post', likeCount: 20},
        ]
    }
    //  2.action
    let newState = profileReducer(state,action)

    // 3.expectation
    expect(newState.posts.length ).toBe(3);
})