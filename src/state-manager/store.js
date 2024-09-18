import {configureStore}  from "@reduxjs/toolkit";
import userReducer, { rootReducer } from "./slice"
import utilReducer from "./commondata"
import customerReducer from "./slice"


export const store = configureStore({
    // devTools: true,
    reducer: {
        user:userReducer,
        util:utilReducer,
        // customer:customerReducer,
        commmon:rootReducer
    },

});

