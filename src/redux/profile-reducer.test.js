import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message:'Hi, how are you?', likesCount: 0 },
        {id: 2, message:'It`s my first post', likesCount: 23 },
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra');
});

test('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(100);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});