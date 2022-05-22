import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "../Blogs";
import "../../styles/pages/home.css";

const Home = () => {
	const { blogs, error } = useSelector((state) => state.blogs);
	return (
		<section className="container">{blogs ? <Blogs blogs={blogs} /> : <h1>Loading...</h1>}</section>
	);
};

export default Home;
