import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import NewBlog from "./components/pages/NewBlog";
import { fetchBlogs } from "./redux/blogSlice";
import BlogPage from "./components/pages/BlogPage";
import Footer from "./components/layouts/Footer";
const initialState = [
	{
		id: 0,
		title: "hello world hello world hello world jlejlajrlajrlj lhalelrjl",
		content: "how to write a hello world programming",
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblog&psig=AOvVaw0n9umVUu52L_M4v8Hd4e6H&ust=1653311268870000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLikucmW8_cCFQAAAAAdAAAAABAD",
		date: "10-04-2022",
	},
	{
		id: 1,
		title: "hello world aljflajfljafljl",
		content: "how to write a hello world programming",
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblog&psig=AOvVaw0n9umVUu52L_M4v8Hd4e6H&ust=1653311268870000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLikucmW8_cCFQAAAAAdAAAAABAD",
		date: "10-04-2022",
	},
	{
		id: 2,
		title: "hello aljflajflaj",
		content: "how to write a hello world programming",
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblog&psig=AOvVaw0n9umVUu52L_M4v8Hd4e6H&ust=1653311268870000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLikucmW8_cCFQAAAAAdAAAAABAD",
		date: "10-04-2022",
	},
	{
		id: 3,
		title: "world",
		content: "how to write a hello world programming",
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblog&psig=AOvVaw0n9umVUu52L_M4v8Hd4e6H&ust=1653311268870000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLikucmW8_cCFQAAAAAdAAAAABAD",
		date: "10-04-2022",
	},
];

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBlogs(initialState));
	}, []);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="new" element={<NewBlog />} />
				<Route path="blogs/:id" element={<BlogPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
