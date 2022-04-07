import {createReducer} from '@reduxjs/toolkit'
import {
    FAILURE_BOARD_DELETE,
    FAILURE_BOARD_DETAIL,
    FAILURE_BOARD_LIST, FAILURE_BOARD_MODIFY,
    FAILURE_BOARD_POST, SUCCESS_BOARD_DELETE, SUCCESS_BOARD_DETAIL,
    SUCCESS_BOARD_LIST, SUCCESS_BOARD_MODIFY,
    SUCCESS_BOARD_POST
} from "../action/boardActionType";

const boardInitialState = {
    list: null,
    post: false,
    detail: null,
    modify: false,
    delete: false,
}

export const boardReducer = createReducer(boardInitialState, {
        [SUCCESS_BOARD_LIST]: (state, action) => ({
            ...state,
            list: action.payload
        }),
        [FAILURE_BOARD_LIST]: (state, action) => ({
            ...state,
            list: action.payload
        }),
        [SUCCESS_BOARD_POST]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [FAILURE_BOARD_POST]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [SUCCESS_BOARD_DETAIL]: (state, action) => ({
            ...state,
            detail: action.payload
        }),
        [FAILURE_BOARD_DETAIL]: (state, action) => ({
            ...state,
            detail: action.payload
        }),
        [SUCCESS_BOARD_MODIFY]: (state, action) => ({
            ...state,
            modify: action.payload
        }),
        [FAILURE_BOARD_MODIFY]: (state, action) => ({
            ...state,
            modify: action.payload
        }),
        [SUCCESS_BOARD_DELETE]: (state, action) => ({
            ...state,
            delete: action.payload
        }),
        [FAILURE_BOARD_DELETE]: (state, action) => ({
            ...state,
            delete: action.payload
        })
    }
)




