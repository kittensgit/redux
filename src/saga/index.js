import { all } from 'redux-saga/effects';
import { countWatcher } from './countSaga';
import { fetchUserWatcher } from './usersSaga';

export function* rootWatcher() {
    yield all([countWatcher(), fetchUserWatcher()])
}