export function updateLocalStorage(newBlogs) {
	localStorage.setItem("blogs", JSON.stringify(newBlogs));
}
