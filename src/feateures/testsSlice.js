import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    tests: []
}

export const fetchTests = createAsyncThunk(
    'tests/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch("/tests");
            const data = await res.json();
            return data.reverse()
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const testsReducer = createSlice({
    name: 'tests',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTests.fulfilled, (state, action) => {
                state.tests = action.payload;
            })
    }
})

export default testsReducer.reducer;