import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteBlog } from "../../redux/blogSlice";
import "../../styles/pages/blogPage.css";

const BlogPage = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const { blogs } = useSelector((state) => state.blogs);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (Array.isArray(blogs)) {
			blogs.forEach((blog) => {
				if (blog.id === parseInt(id)) {
					setBlog(blog);
				}
			});
		}
	}, [blogs, blog]);
	const handleDeleteBlog = () => {
		dispatch(deleteBlog(parseInt(id)));
		navigate("/");
	};
	const handleEditBlog = () => {
		navigate(`/blogs/edit/${id}`);
	};
	return (
		<section className="container blog__post">
			{blog ? (
				<div className="post">
					<div className="post__image">
						<img src={blog.image} alt="blog image" />
					</div>
					<h1 className="post__title">{blog.title}</h1>
					<span className="post__date"> Posted on {blog.date} </span>
					<p className="post__content">{blog.content}</p>
					<div className="post__edit">
						<button className="post__delete" onClick={handleDeleteBlog}>
							Delete post
						</button>
						<button className="post__update" onClick={handleEditBlog}>
							Edit post
						</button>
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</section>
	);
};

export default BlogPage;
