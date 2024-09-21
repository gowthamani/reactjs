import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


let userdata = {}
let lovs = []

// export const getUserDetails = createAsyncThunk(
//     "user/getuser",
//     async (userdto, thunkAPI) => {
//         debugger
//         console.log("enterd in thunk  " + userdto)
//         let obj = {
//             flag: true
//         }
//         return obj
//         thunkAPI.fulfillWithValue("full")
//     }
// )

const userSlice = createSlice({
    name: 'user',
    initialState: userdata,
    reducers: {
        setUser: (state, action) => {
            debugger
            console.log(state)
            return action.payload
        },
        // clearUser: (state, action) => {
        //     // state = {}
        // }
    }
});

// , extraReducers: (builder) => {
//     builder.addCase(getUserDetails.fulfilled,(state, action) => {
//         console.log(action.payload)
//     })
//     builder.addCase(getUserDetails.pending, (state, action) => {
//         console.log("pending")
//     })
// }


export const customerSlice = createSlice({
    name: 'customer',
    initialState: lovs,
    reducers: {
        getlov: (state, action) => {
            debugger
            // let apiurl = action.payload.url
            state.push("fffrtteer")
        }
    }
});








export const rootReducer = combineReducers({
    userdetails: userSlice.reducer,
    customer: customerSlice.reducer
})

export const { getlov } = customerSlice.actions

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer
