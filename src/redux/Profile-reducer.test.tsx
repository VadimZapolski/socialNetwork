import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from './Profile-reducer';


let state = {
    posts: [
        {id: 1, message: 'Hey,how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ]
}
test('legth of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra')

    //  2.action
    let newState = profileReducer(state,action)

    // 3.expectation
    expect(newState.posts.length ).toBe(3);
})

test('Сheck messages ', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra')

    //  2.action
    let newState = profileReducer(state,action)

    // 3.expectation
    expect(newState.posts[2].message ).toBe('it-kamasutra');
})

test('Сhecking the number of likes', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra')

    //  2.action
    let newState = profileReducer(state,action)

    // 3.expectation
    expect(newState.posts[2].likeCount ).toBe(0);
})

test('After deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    //  2.action
    let newState = profileReducer(state,action)

    // 3.expectation
    expect(newState.posts.length ).toBe(1);
})