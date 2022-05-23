import React from "react";
import { useSelector } from "react-redux";
import Blogs from "../Blogs";
import "../../styles/pages/home.css";

const Home = () => {
	const { blogs } = useSelector((state) => state.blogs);
	return (
		<section className="container">{blogs ? <Blogs blogs={blogs} /> : <h1>Loading...</h1>}</section>
	);
};

export default Home;
