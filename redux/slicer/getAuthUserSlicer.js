import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
};

const getAuthUserSlicer = createSlice({
  name: 'authUserSlicer',
  initialState,
  reducers: {
    setUserDetailsInStore(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUserDetailsInStore } = getAuthUserSlicer.actions;
export default getAuthUserSlicer.reducer;
