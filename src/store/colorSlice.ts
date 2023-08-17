import {createSlice} from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        value: 'red',
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
    },
})

export default colorSlice.reducer;
