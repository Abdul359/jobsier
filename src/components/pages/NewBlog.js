import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addNewBlog, updateBlog } from "../../redux/blogSlice";
import "../../styles/pages/newBlog.css";

const NewBlog = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [blog, setBlog] = useState({
		title: "",
		content: "",
		date: "",
		image: "",
	});
	const { blogs } = useSelector((state) => state.blogs);
	const navigate = useNavigate();
	useEffect(() => {
		if (id) {
			blogs.forEach((blog) => {
				console.log(blog);
				if (blog.id === parseInt(id)) {
					setBlog(blog);
				}
			});
		}
	}, [blogs]);
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
		if (!id) {
			dispatch(
				addNewBlog({
					id: Date.now(),
					...blog,
				})
			);
			setBlog({
				title: "",
				content: "",
				date: "",
				image: "",
			});
		} else {
			dispatch(updateBlog(blog));
			navigate("/");
		}
	};
	return (
		<section className="container new__blog">
			{error && <div className="error">{error.message}</div>}
			<h1 className="title">
				{id ? "Update " : "Create "}
				Blog
			</h1>
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
						{id ? "Update" : "Create"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default NewBlog;
