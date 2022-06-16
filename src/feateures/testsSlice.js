import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    tests: [],
    currentTest:{},
}

export const fetchTests = createAsyncThunk(
    'tests/fetchTests',
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

export const fetchDescriptionTest = createAsyncThunk(
    'Description/fetchDescriptionTest',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`/tests/${id}`);
            const data = await res.json();
            return data.reverse()
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTests.fulfilled, (state, action) => {
                state.tests = action.payload;
            })
            .addCase(fetchDescriptionTest.fulfilled, (state, action) => {
                state.tests.push(action.payload)
            })
    }
})

export default testsSlice.reducer;