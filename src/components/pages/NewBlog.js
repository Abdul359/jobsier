import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/pages/newBlog.css";

const NewBlog = ({ isNew, id }) => {
	const [blog, setBlog] = useState({
		title: "",
		content: "",
		date: "",
		image: "",
	});
	const { blogs } = useSelector((state) => state.blogs);
	useEffect(() => {
		if (isNew === false) {
			blogs.forEach((blog) => {
				if (blog.id === id) {
					setBlog(blog);
					return;
				}
			});
		}
	});
	const [error, setError] = useState(null);

	const handleInput = (e) => {
		const target = e.target;
		setBlog((previousState) => {
			return {
				...previousState,
				[target.name]: target.value,
			};
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const fields = Object.keys(blog);
		fields.forEach((field) => {
			if (!blog[field] || blog[field] === "") {
				setError({ message: `Please provide ${field}` });
				setTimeout(() => {
					setError(null);
				}, 3000);
				return;
			}
		});
		console.log(blog);
	};
	return (
		<section className="container new__blog">
			{error && <div className="error">{error.message}</div>}
			<h1 class="title">New Blog</h1>
			<form onSubmit={handleSubmit} className="form">
				<div className="form__field">
					<label htmlFor="title" className="label">
						Title
					</label>
					<input
						value={blog.title}
						type="text"
						id="title"
						name="title"
						className="input"
						onChange={handleInput}
						placeholder="Title"
					/>
				</div>
				<div className="form__field">
					<label htmlFor="content" className="label">
						Content
					</label>
					<textarea
						value={blog.content}
						name="content"
						id="content"
						type="text"
						className="input"
						onChange={handleInput}
						placeholder="Content"
					/>
				</div>
				<div className="form__field">
					<label htmlFor="date" className="label">
						Date
					</label>
					<input
						value={blog.date}
						type="date"
						name="date"
						id="date"
						className="input date"
						onChange={handleInput}
						placeholder="Date"
					/>
				</div>
				<div className="form__field">
					<label htmlFor="image" className="label">
						Image URL
					</label>
					<input
						value={blog.image}
						type="text"
						id="image"
						name="image"
						className="input"
						onChange={handleInput}
						placeholder="Image url"
					/>
				</div>
				<div>
					<button type="submit" className="submit">
						Create
					</button>
				</div>
			</form>
		</section>
	);
};

export default NewBlog;
