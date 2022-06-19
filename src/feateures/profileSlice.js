import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loader: false,
};

export const profileFetch = createAsyncThunk(
  "profile/fetch",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(`/users/${state.auth.id}`);
      console.log(state.auth.id);
      return res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const profilePatch = createAsyncThunk(
  "patch/profile",
  async ({ name, surname }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(`/users/${state.auth.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
        }),
      });
      return res.json();
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const profileAvatar = createAsyncThunk('avatar/fetch', async (photo, thunkAPI) => {
  try {
    const form = new FormData();
    form.append('avatar', photo);
    const state = thunkAPI.getState();
    const res = await fetch(`/users/${state.auth.id}/avatar`, {
      method: "PATCH",
      body: form
  });
    return res.json();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
})

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileFetch.pending, (state) => {
        state.loader = true
      })
      .addCase(profileFetch.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loader = false
      })
      .addCase(profilePatch.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(profileAvatar.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
});

export default profileSlice.reducer;
