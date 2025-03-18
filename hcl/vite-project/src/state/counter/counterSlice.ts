import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;    
}
const initialState: CounterState = {
  value: 0,
}
const counterSlice = createSlice(

{
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action:PayloadAction<number>) => {
            state.value += action.payload
    }
},
extraReducers: (builder) => {
    builder.addCase(incrementAsyc.pending, () => {
       console.log('pending')
    }
    )
   .addCase(incrementAsyc.fulfilled, (state, action:PayloadAction<number>) => {
        state.value += action.payload;
    });
}
})
export const incrementAsyc= createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)
export default counterSlice.reducer;
export const { increment, decrement ,incrementByAmount} = counterSlice.actions;