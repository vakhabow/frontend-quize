import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "../feateures/testsSlice";
import authSlice from "../feateures/authSlice"
import profileSlice from '../feateures/profileSlice';

const store = configureStore({
    reducer: {
        test: testsSlice,
        auth: authSlice,
        profile: profileSlice
    }
})

export default store