import { createSlice } from "@reduxjs/toolkit";

const utility = {
    commondailog:false,
    auth:true
}

const utilSlice = createSlice({
    name: 'util',
    initialState:utility,
    reducers: {
        pushUser: (state, action) => {
            debugger
            // state.push(action.payload)
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

export const { pushUser,changedailog } = utilSlice.actions;

export default utilSlice.reducer;