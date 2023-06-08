import { put, takeEvery } from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementAction, incrementAction } from '../store/countReducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementAction())
}

function* decrementWorker() {
    yield delay(1000)
    yield put(decrementAction())
}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}