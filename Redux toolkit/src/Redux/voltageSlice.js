import { createSlice }  from '@reduxjs/toolkit';

export const voltageSlice = createSlice({
    name:'voltage',
    initialState:{
        voltage: 0
    },
    reducers:{
        voltageUp: (state) => {state.voltage++},
        voltageDown: (state) => {state.voltage--}
    }
});

export const {voltageUp, voltageDown} = voltageSlice.actions;

export const selectVoltage = (state) => {return(state.voltage.voltage)};

export default voltageSlice.reducer

