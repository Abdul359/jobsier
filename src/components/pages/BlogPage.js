import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "../../styles/pages/blogPage.css";

const BlogPage = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const { blogs } = useSelector((state) => state.blogs);
	useEffect(() => {
		if (Array.isArray(blogs)) {
			blogs.forEach((blog) => {
				if (Number(blog.id) === Number(id)) {
					setBlog(blog);
				}
			});
		}
	}, [blog]);
	return (
		<section className="container blog__post">
			{blog ? (
				<div className="post">
					<div className="post__image">
						<img src={"https://source.unsplash.com/random/"} alt="blog image" />
					</div>
					<h1 className="post__title">{blog.title}</h1>
					<span className="post__date"> Posted on {blog.date} </span>
					<p className="post__content">{blog.content}</p>
					<div className="post__edit">
						<button className="post__delete">Delete post</button>
						<button className="post__update">Update post</button>
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</section>
	);
};

export default BlogPage;
