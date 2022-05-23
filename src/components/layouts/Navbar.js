import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/layouts/navbar.css";

const Navbar = () => {
	const [isHiding, setIsHiding] = useState(true);
	const handleNav = (e) => {
		e.preventDefault();
		navLinksRef.current.classList.toggle("hide");
		setIsHiding(!isHiding);
	};
	const navLinksRef = useRef();
	const hamRef = useRef();
	const hideNav = (e) => {
		setIsHiding(true);
	};
	return (
		<nav className={`nav nav__mobile`}>
			<div className="nav__info">
				<a className="nav__logo" href="/">
					JOBSIER
				</a>
				<div ref={hamRef} onClick={handleNav} className="ham"></div>
			</div>
			<ul ref={navLinksRef} className={`nav__links ${isHiding && "hide"}`}>
				<li className="nav__link">
					<Link to="/" onClick={hideNav}>
						Home
					</Link>
				</li>
				<li className="nav__link">
					<Link to="/new" onClick={hideNav}>
						New Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
