import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name :"lang",
    initialState : {selectedLanguage:"hindi"},
    reducers :{
        addGlobalLanguage :(state, action)=>{
            state.selectedLanguage = action.payload
        }
    }
});

export const {addGlobalLanguage} = languageSlice.actions;
export default languageSlice.reducer;