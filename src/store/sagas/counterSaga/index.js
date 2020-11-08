import {takeEvery, delay, put, all, fork} from "redux-saga/effects"

import  {PLUS, PLUS_ASYNC, MINUS, MINUS_ASYNC} from "../../actions/";

export function* plusAsyncSaga(){
    yield delay(2000);
    yield put({type : PLUS}); 
} 

export function* minusAsyncSaga(){
    yield delay(2000);
    yield put({type: MINUS});
}

function* plusWatch(){
    yield takeEvery(PLUS_ASYNC, plusAsyncSaga);
}

function* minusWatch(){
    yield takeEvery(MINUS_ASYNC, minusAsyncSaga)
}

export default function* counterSagaWatch(){
    yield all([fork(plusWatch), fork(minusWatch)])
};