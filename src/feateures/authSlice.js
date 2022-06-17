import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signingUp: false,
  signingIn: false,
  registered: false,
  error: null,
  token: localStorage.getItem("token"),
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

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
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
      if (data.error) {
        return thunkAPI.rejectWithValue({ error: data.error });
      } else {
        localStorage.setItem("token", data.token);
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
        state.error = null;
        state.registered = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.signingUp = false;
        state.error = action.payload;
      })
      .addCase(doLogin.pending, (state, action) => {
        state.signingIn = true;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.signingIn = false;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.signingIn = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
