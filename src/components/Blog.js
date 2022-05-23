import React from "react";
import { useNavigate } from "react-router";
import { truncate, truncateLetters } from "../utils/truncate";

const Blog = ({ blog }) => {
	const { id, title, content, image, date } = blog;
	const navigate = useNavigate();
	const handleNavigation = () => {
		navigate(`blogs/${id}`);
	};
	return (
		<div onClick={handleNavigation} className="card blog">
			<img src={image} alt={title} />
			<span className="card__date">{date}</span>
			<h1 className="card__title">{truncateLetters(title, 20)}</h1>
			<p className="card__content shortend">
				{`${truncate(content, 15)}`}
				<button className="card__read-more">...</button>
			</p>
			<button className="card__btn" onClick={handleNavigation}>
				Read more
			</button>
		</div>
	);
};

export default Blog;
