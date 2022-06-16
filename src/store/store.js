import { configureStore } from "@reduxjs/toolkit";
import testsSlice from "../feateures/testsSlice";

const store = configureStore({
    reducer: {
        test: testsSlice
    }
})

export default store