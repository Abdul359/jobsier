export function truncate(str, noWords) {
	return str.split(" ").splice(0, noWords).join(" ");
}

export function truncateLetters(str, noLetters) {
	return str.split("").splice(0, noLetters).join("");
}
