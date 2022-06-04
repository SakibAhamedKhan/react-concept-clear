import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        default:
            return state;
    }
}

const Counter = () => {
    const [state , dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {state}</p>
            <button onClick={() => dispatch('increament')}>Increament</button>
            <button onClick={() => dispatch('decreament')}>Decreament</button>

        </div>
    );
};

export default Counter;