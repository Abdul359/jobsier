import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
	return (
		<>
			<h1 className="blogs__title">All blogs</h1>
			{blogs.length > 0 ? (
				<div className="blogs">
					{blogs.map((blog) => {
						return <Blog key={blog.id} blog={blog} />;
					})}
				</div>
			) : (
				<h1>No blogs :(</h1>
			)}
		</>
	);
};

export default Blogs;
