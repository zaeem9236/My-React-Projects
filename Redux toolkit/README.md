redux tool kit using steps

1- install redux toll kit  -->  npm install react-redux redux @reduxjs/toolkit

2- go to root component (i.e index.js), wrap with provider component.  
also import provider from 'react-redux' and store from store location

3- make new component with name store and do following things
	import { configureStore } from '@reduxjs/tookit';
	import couterReducer from './location of couter Slice'
	export default configureStore({reducer: {counter: counterReducer}})


In order to use reducer,
4- make new file with name counterSlice.js
	import { creatSlice } from '@reduxjs/tookit'

	export const counterSlice = createSlice({name: 'counter', 
						initialState:{value:0},
						reducers:{
						increment: state => {state.value+=1},	
						decrement: state => {state.value -= 1}
						}
						})

export const {increment, decrement} = counterSlice.actions;

  export const selectCount = (state) => {return(state.counter.value)};

  export default counterSlice.reducer;


5- import {useSelector, useDispatch} from 'react-redux'


