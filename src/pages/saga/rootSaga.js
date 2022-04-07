import {all, fork} from "@redux-saga/core/effects";
import BoardSaga from "./boardSaga";

export default function* rootSaga(){

    yield all([
        fork(BoardSaga),
    ])
}