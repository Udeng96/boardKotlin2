import {
    FAILURE_BOARD_DELETE,
    FAILURE_BOARD_DETAIL,
    FAILURE_BOARD_LIST, FAILURE_BOARD_MODIFY, FAILURE_BOARD_POST, REQUEST_BOARD_DELETE, REQUEST_BOARD_DETAIL,
    REQUEST_BOARD_LIST, REQUEST_BOARD_MODIFY,
    REQUEST_BOARD_POST, SUCCESS_BOARD_DELETE, SUCCESS_BOARD_DETAIL,
    SUCCESS_BOARD_LIST, SUCCESS_BOARD_MODIFY,
    SUCCESS_BOARD_POST
} from "./boardActionType";
import {createAction} from "redux-actions";

export const getBoardList = createAction(REQUEST_BOARD_LIST);
export const successBoardList = createAction(SUCCESS_BOARD_LIST)
export const failureBoardList = createAction(FAILURE_BOARD_LIST)

export const getBoardPost = createAction(REQUEST_BOARD_POST)
export const successBoardPost = createAction(SUCCESS_BOARD_POST)
export const failureBoardPost = createAction(FAILURE_BOARD_POST)

export const getBoardDetail = createAction(REQUEST_BOARD_DETAIL)
export const successBoardDetail = createAction(SUCCESS_BOARD_DETAIL)
export const failureBoardDetail = createAction(FAILURE_BOARD_DETAIL)

export const getBoardModify = createAction(REQUEST_BOARD_MODIFY)
export const successBoardModify = createAction(SUCCESS_BOARD_MODIFY)
export const failureBoardModify = createAction(FAILURE_BOARD_MODIFY)

export const getBoardDelete = createAction(REQUEST_BOARD_DELETE)
export const successBoardDelete = createAction(SUCCESS_BOARD_DELETE)
export const failureBoardDelete = createAction(FAILURE_BOARD_DELETE)

