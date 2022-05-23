import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home";
import { initialBlogs } from "./utils/data";
import Footer from "./components/layouts/Footer";
import NewBlog from "./components/pages/NewBlog";
import Navbar from "./components/layouts/Navbar";
import BlogPage from "./components/pages/BlogPage";
import { Routes, Route, useLocation } from "react-router";
import { fetchBlogs, setInitialBlogs } from "./redux/blogSlice";

function App() {
	const dispatch = useDispatch();
	const routePath = useLocation();
	useEffect(() => {
		const localBlogs = localStorage.getItem("blogs");
		if (!localBlogs) {
			console.log("helllo");
			dispatch(setInitialBlogs(initialBlogs));
		} else {
			dispatch(fetchBlogs(JSON.parse(localStorage.getItem("blogs"))));
		}
		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, [routePath]);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="new" element={<NewBlog />} />
				<Route path="blogs/:id" element={<BlogPage />} />
				<Route path="blogs/edit/:id" element={<NewBlog />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
