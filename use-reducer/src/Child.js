import React, { useReducer } from 'react';
import AppReducer from './AppReducer';

function Child(){
    let [state, dispatch] = useReducer(AppReducer,0);
    return(
        <React.Fragment>
            <h1>value: {state}</h1>
            <button onClick={()=>{dispatch('Increment')}}>Increment</button>
            <button onClick={()=>{dispatch('Decrement')}}>Decrement</button>
        </React.Fragment>
    );
}

export default Child;