import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
	name: 'counter',
	initialState:{
		value: 0
	},
	reducers:{
		increment: (state)=>{
			state.value +=1;
		},
		encrement: (state)=>{
			state.value -=1;
		},
		uncrement: (state)=>{
			state.value = state.value * state.value;
		},
		Amount:(state, action)=>{
			state.value += Number(action.payload)
		}
	},
})

export const {increment, encrement, uncrement, Amount} = counterSlice.actions
export default counterSlice.reducer;