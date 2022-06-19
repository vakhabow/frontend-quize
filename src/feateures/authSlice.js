import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signingUp: false,
  signingIn: false,
  registered: false,
  error: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem('id')
};

export const createUser = createAsyncThunk(
  "user/register",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3300/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        return thunkAPI.rejectWithValue({ error: data.error });
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doLogin = createAsyncThunk(
  "user/auth",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3300/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue({ error: data.error });
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "Authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.signingUp = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.signingUp = false;
        state.error = false;
        state.registered = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.signingUp = false;
        state.error = true;
      })
      .addCase(doLogin.pending, (state, action) => {
        state.signingIn = true;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.signingIn = false;
        state.error = null;
        state.token = action.payload.token;
        state.id = action.payload.id;
        console.log(action.payload.token)
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.signingIn = false;
        state.error = true;
      })
  },
});

export default authSlice.reducer;
