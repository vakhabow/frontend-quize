import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "../feateures/testsSlice";
import authSlice from "../feateures/authSlice"

const store = configureStore({
    reducer: {
        test: testsSlice,
        auth: authSlice
    }
})

export default store