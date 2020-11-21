1) import and use useReducer function in component

2) useReducer() function takes two arguement -> reducer function and initial state  -> useReducer(reducer, initial state)

3) reducer function takes two arguement state and action and return a new state -> use switch case on action to return new state

4) in step 2 useReducer function return two things updatedstate and dispatch - > let [count, dispatch] = useReducer(reducer, initialstate)
