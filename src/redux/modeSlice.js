import { createSlice } from "@reduxjs/toolkit";

const isLightValue = JSON.parse(localStorage.getItem('themeValue'));

export const modeSlice = createSlice({
    name: 'mode',
    initialState:{
        isLight: isLightValue,
    },
    reducers:{
     toDark: (state) => {
        state.isLight = false
    },

     toLight: (state) => {
        state.isLight = true
    }
    }
})

export const { toDark , toLight} = modeSlice.actions;

// export default modeSlice.reducer