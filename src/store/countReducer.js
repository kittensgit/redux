const INCREMENT = 'INCREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
const DECREMENT = 'DECREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';

let defaultState = {
    count: 0
}

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export const incrementAction = () => ({ type: INCREMENT })
export const AsyncIcrementAction = () => ({ type: ASYNC_INCREMENT })
export const decrementAction = () => ({ type: DECREMENT })
export const AsyncDecrementAction = () => ({ type: ASYNC_DECREMENT })

