import { createSlice }  from '@reduxjs/toolkit';

export const currentSlice = createSlice({
    name:'current',
    initialState:{
        current: 0.0
    },
    reducers:{
        currentUp: (state) => {state.current=state.current+0.5},
        currentDown: (state) => {state.current=state.current-0.5}
    }
});

export const {currentUp, currentDown} = currentSlice.actions;

export const selectCurrent = (state) => {return(state.current.current)};

export default currentSlice.reducer

