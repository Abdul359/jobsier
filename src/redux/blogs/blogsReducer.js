import { CREATE_BLOG, DELETE_BLOG, FETCH_BLOGS, GET_BLOG, UPDATE_BLOG } from "./blogsTypes";

const initialState = {
	blogs: [],
	error: null,
};

const blogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BLOGS:
			return {
				...state,
				blogs: action.payload,
			};
		case CREATE_BLOG:
			return {
				...state,
				blogs: [{ ...action.payload }, ...state.blogs],
			};
		case UPDATE_BLOG:
			const filteredBlogs = state.blogs.filter((blog) => blog.id !== action.payload.id);
			return {
				...state,
				blogs: [...filteredBlogs, { ...action.payload }],
			};
		case DELETE_BLOG:
			return {
				...state,
				blogs: state.blogs.filter((blog) => blog.id !== action.payload),
			};
			defualt: return state;
	}
};

export default blogsReducer;
