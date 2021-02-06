import { configureStore } from '@reduxjs/toolkit';
import voltageReducer from './voltageSlice';
import currentReducer from './currentSlice';


export default configureStore({
    reducer:{
        voltage: voltageReducer,
        current: currentReducer
    }
})