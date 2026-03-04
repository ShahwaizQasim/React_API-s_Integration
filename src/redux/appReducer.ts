import { createSlice } from "@reduxjs/toolkit";
import { removeToken } from "../utils/helpers";

interface AppState {
  isLoggedIn: boolean;
  user: String | null;
  token: String | null;
}

const initialState: AppState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      removeToken();
    },
    setLoginData: (state, action) => {
      state.isLoggedIn = action.payload.user ? true : false;
      state.user = action.payload.user as String;
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setUser, logout, setLoginData } =
  AppSlice.actions;

export default AppSlice.reducer;
