import { createSlice } from "@reduxjs/toolkit";

const utility = {
    commondailog:false,
    auth:true,
    isloggedin:false
}

const utilSlice = createSlice({
    name: 'util',
    initialState:utility,
    reducers: {
        loginuser: (state, action) => {
            debugger
            state.isloggedin = action.payload
        },
        changedailog : (state,action) => {
            debugger
            if(state[action.payload.key] != undefined){
            state[action.payload.key] = action.payload.flag
            }else{
                Object.keys(state).forEach((key)=> {
                    state[key] = false
                });
            }
        }
       
    }
});

export const { loginuser,changedailog } = utilSlice.actions;

export default utilSlice.reducer;