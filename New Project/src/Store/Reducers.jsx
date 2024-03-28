import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
}
export const Reducers = createReducer(initialState, (builder) => {
    builder
        .addCase("INCREMENT", (state)=>{
            state.count += 1;
        })
        .addCase("DECREMENT", (state) => {
            state.count -= 1;
        })
        .addCase("INCREMENT_VALUE", (state, action) => {
            state.count += action.payload;
        })
})