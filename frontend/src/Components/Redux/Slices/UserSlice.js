import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    logged: false,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("Converter - userData", JSON.stringify(action.payload));
      state.data = action.payload;
      state.logged = true;
    },
    logout(state) {
      localStorage.removeItem("Converter - userData");
      state.data = null;
      state.logged = false; // Fix here
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
