import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   storeUser: (state, action) => {
      state.user = action.payload.user;
   },
  }
});

export const {
  storeUser,
} = userSlice.actions;
export const getUser = state => state.user.user;
export default userSlice.reducer;