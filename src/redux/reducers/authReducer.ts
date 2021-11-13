import { createSlice } from '@reduxjs/toolkit';

type InitialType = {
  authenticated: string | null;
  admin: boolean;
};

const initialState: InitialType = {
  authenticated: localStorage.getItem('token'),
  admin: false,
};

const authReducer = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    changeAuth(state, action): void {
      state.authenticated = action.payload;
    },
    makeAdmin(state) {
      state.admin = true;
    },
  },
});

export default authReducer.reducer;
export const { changeAuth, makeAdmin } = authReducer.actions;
