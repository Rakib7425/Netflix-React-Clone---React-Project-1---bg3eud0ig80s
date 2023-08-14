import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        watchlist: [],
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        },
        getWatchlist: (state, action) => {
            state.watchlist = action.payload;
        },
    },
});

export const { getUser, getWatchlist } = userSlice.actions;

export default userSlice.reducer;
