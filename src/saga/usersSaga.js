import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_USERS, setUsersAction } from '../store/usersReducer'

const fetchUsersFromAPI = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromAPI)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsersAction(json))
}

export function* fetchUserWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}