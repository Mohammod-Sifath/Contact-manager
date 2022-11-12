import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/ContactSlice"

const store=configureStore({
    reducer:{
        contactReducer:contactReducer
    }
})

export default store;