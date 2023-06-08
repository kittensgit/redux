import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countReducer } from './countReducer';
import { usersReducer } from './usersReducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))