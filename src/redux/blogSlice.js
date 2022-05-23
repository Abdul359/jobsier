import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorage } from "../utils/localStore";

const initialState = {
	blogs: [],
};

const blogSlice = createSlice({
	name: "blogs",
	initialState: initialState,
	reducers: {
		setInitialBlogs: (state, action) => {
			updateLocalStorage(action.payload);
			state.blogs = action.payload;
		},
		fetchBlogs: (state, action) => {
			state.blogs = action.payload;
		},
		addNewBlog: (state, action) => {
			const newBlogs = [action.payload, ...state.blogs];
			updateLocalStorage(newBlogs);
			state.blogs = newBlogs;
		},
		updateBlog: (state, action) => {
			const newBlogs = state.blogs.map((blog) => {
				if (blog.id === action.payload.id) {
					return action.payload;
				}
				return blog;
			});
			updateLocalStorage(newBlogs);
			state.blogs = newBlogs;
		},
		deleteBlog: (state, action) => {
			let newBlogs = state.blogs.filter((blog) => blog.id !== action.payload);
			updateLocalStorage(newBlogs);
			state.blogs = newBlogs;
		},
	},
});

export const blogReducer = blogSlice.reducer;
export const { fetchBlogs, addNewBlog, deleteBlog, updateBlog, setInitialBlogs } =
	blogSlice.actions;
