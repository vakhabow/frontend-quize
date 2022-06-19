import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "../feateures/testsSlice";
import authSlice from "../feateures/authSlice"
import profileSlice from '../feateures/profileSlice';
import { commentsSlice } from "../feateures/commentsSlice";

const store = configureStore({
    reducer: {
        test: testsSlice,
        auth: authSlice,
        profile: profileSlice,
        comments: commentsSlice
    }
})

export default store