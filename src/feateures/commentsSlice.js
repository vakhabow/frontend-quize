import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `/comments/test/${id}`
      );
      const data = await res.json();
      return data;

    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postComment = createAsyncThunk(
  "comments/postComments", 
  async ({id, text}, thunkAPI) => {
    try {
      const state = thunkAPI.getState()
      const res = await fetch(`/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`
        },
        body: JSON.stringify({
          text
        })

      });
      const data = await res.json()
      return thunkAPI.fulfillWithValue(data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)

export const commentsSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.comments.push(action.payload)
    })
  },
});


export default commentsSlice.reducer;