import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        logoutUser: () => null,
    },
});

export const { setUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
