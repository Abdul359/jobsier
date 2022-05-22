import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	// blogs: [],
	error: null,
};
const blogSlice = createSlice({
	name: "blogs",
	initialState: initialState,
	reducers: {
		fetchBlogs: (state, action) => {
			state.blogs = action.payload;
		},
	},
});

export const blogReducer = blogSlice.reducer;
export const { fetchBlogs } = blogSlice.actions;
