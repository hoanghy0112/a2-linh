window.addEventListener("scroll", (e) => {
	const nav = document.getElementsByTagName("nav")[0];

	const scrollTop = window.scrollY;
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

	if (scrollTop == 0) {
		if (nav.classList.contains("nav_scroll")) {
			nav.classList.remove("nav_scroll");
		}
	} else {
		nav.classList.add("nav_scroll");
	}
	nav.style.paddingTop = `${Math.max(4 * rem - scrollTop, 1.3 * rem)}px`;
});
