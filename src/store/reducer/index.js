import {PLUS, MINUS}from "../actions/";

const handlers = {
    [PLUS] : (state, action) => {
        return state+1
    }, 
    [MINUS] : (state, action) => {
        return state-1
    }, 
    DEFAULT : (state) => state
}

export const counterReducer = (state = 0, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}