import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "@models/AuthSlice.ts";

interface LoginProps {
  username: string;
  password: string;
}

const initialState: AuthSlice = {
  isLoggedIn:
    localStorage.getItem("username") !== null &&
    localStorage.getItem("username") !== undefined &&
    localStorage.getItem("username") !== "",
  modalOpen: false,
  username: localStorage.getItem("username") ?? "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, modalOpen: action.payload };
    },
    doLogin: (state, action: PayloadAction<LoginProps>) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (user: { username: string; password: string }) =>
          user.username === action.payload.username &&
          user.password === action.payload.password,
      );

      if (user) {
        localStorage.setItem("username", user.username);
        return {
          ...state,
          username: user.username,
          modalOpen: false,
          isLoggedIn: true,
        };
      } else {
        return state;
      }
    },
    doLogout: (state) => {
      localStorage.removeItem("username");
      return { ...state, username: "", isLoggedIn: false };
    },
  },
});

export const { updateModal, doLogin, doLogout } = authSlice.actions;
export default authSlice.reducer;
