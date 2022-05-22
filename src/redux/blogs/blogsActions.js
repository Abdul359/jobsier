import { FETCH_BLOGS } from "./blogsTypes";

export const fetchBlogs = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_BLOGS,
				payload: initialState,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
