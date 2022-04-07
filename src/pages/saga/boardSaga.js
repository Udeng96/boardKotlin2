import {
    REQUEST_BOARD_DELETE,
    REQUEST_BOARD_DETAIL,
    REQUEST_BOARD_LIST,
    REQUEST_BOARD_MODIFY,
    REQUEST_BOARD_POST
} from "../action/boardActionType";
import {all, call, put, takeLatest} from "@redux-saga/core/effects"
import axios, {Axios} from "axios";
import {
    failureBoardDelete,
    failureBoardList, failureBoardModify, failureBoardPost, successBoardDelete,
    successBoardDetail,
    successBoardList,
    successBoardModify,
    successBoardPost
} from "../action/boardAction";

export function* getBoardSaga(action){

    if(action.type === REQUEST_BOARD_LIST){
        let url = "http://localhost:8088/example/board/read/list"
        try{
            const response = yield call([axios,'get'],url);
            yield put(successBoardList(response.data));
        }catch(e){
            yield put(failureBoardList(e))
        }
    }

    if(action.type === REQUEST_BOARD_DETAIL){
        let postId = action.payload;
        let url = "http://localhost:8088/example/board/read/detail?postId="+"'"+postId+"'";

        try{
            console.log("postId",postId)
            const response = yield call([axios,'get'],url);
            yield put(successBoardDetail(response.data));
        }catch(e){
            yield put(failureBoardList(e))
            console.log("fail");
        }
    }

    if(action.type === REQUEST_BOARD_POST){
        let url = "http://localhost:8088/example/board/write"
        try{
            console.log("action.payload",action.payload);
            let response = yield call(axios.post(url,action.payload));
            yield put(successBoardPost(true))
        }catch(e){
            yield put(failureBoardPost(false))
        }
    }

    if(action.type === REQUEST_BOARD_MODIFY){
        let postId = action.payload.id;
        console.log("RequestModifyId:",postId);

        let url = "http://localhost:8088/example/board/modify?postId="+postId;
        try{
            console.log("RequestModifyPayload",action.payload);
            let response = yield call(axios.post(url,action.payload));
            yield put(successBoardModify(true))
        }catch(e){
            yield put(failureBoardModify(false))
        }
    }

    if(action.type === REQUEST_BOARD_DELETE){
        let postId = action.payload;
        let url = "http://localhost:8088/example/board/delete?postId="+postId;
        try{
            const response = yield call([axios,'post'],url);
            yield put(successBoardDelete(true))
        }catch(e){
            yield put(failureBoardDelete(false))
        }
    }
}

function* watchRoot(){
    yield takeLatest(REQUEST_BOARD_LIST,getBoardSaga)
    yield takeLatest(REQUEST_BOARD_DETAIL,getBoardSaga)
    yield takeLatest(REQUEST_BOARD_POST,getBoardSaga)
    yield takeLatest(REQUEST_BOARD_MODIFY,getBoardSaga)
    yield takeLatest(REQUEST_BOARD_DELETE,getBoardSaga)
}

export default function* BoardSaga(){
    yield all([watchRoot()]);

}