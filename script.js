window.addEventListener("scroll", (e) => {
	const body = document.getElementsByTagName("body")[0];
	const nav = document.getElementsByTagName("nav")[0];

	const scrollTop = window.scrollY;
	console.log({ scrollTop });

	if (scrollTop == 0) {
		if (nav.classList.contains("nav_scroll")) {
			nav.classList.remove("nav_scroll");
		}
	} else {
		nav.classList.add("nav_scroll");
	}
	nav.style.paddingTop = `${Math.max(70 - scrollTop, 20)}px`;
});
