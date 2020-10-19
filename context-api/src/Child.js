import React,{useContext} from 'react';
import State_handling from './State_handling';

function Child(){
    let value = useContext(State_handling);
    return(
        <React.Fragment>
            <h1>this is child component and value i received is : {value}</h1>
        </React.Fragment>
    );
}

export default Child;