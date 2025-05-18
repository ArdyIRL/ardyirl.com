const nav = document.getElementById("nav-bar"),
      mScroller = document.getElementById("scroller"),
      links = document.getElementsByTagName("a");

addEventListener("scroll", function updateScroll() {
	if (scrollY > innerHeight / 4) {
		nav.classList.remove("minimized");
		mScroller.classList.add("hidden");
	} else {
		nav.classList.add("minimized");
		mScroller.classList.remove("hidden");
	}
});

mScroller.addEventListener("click", () => scroll({ top: innerHeight * 1.33, behavior: "smooth"}));

// smooth scroll on anchor links
// and also smooth scroll back to top via. the title logo thing
[].forEach.call(links, (link) => {
	/** @type {string} */
	let loc = link.getAttribute("href");

	if (loc && loc.charAt() == "#") { // anchor link behavior
		let anchor = document.getElementById(loc.substring(1));

		link.addEventListener("click", () => {
			// remove current hash from url, if any
			let url = location.href;
			if (url.includes("#"))
				url = url.slice(0, url.indexOf("#"));

			// scroll to anchor
			anchor.scrollIntoView({ behavior: "smooth" });
		});

		link.removeAttribute("href");
	} else if (loc == "./" && link.classList.contains("logo-link")) { // title logo behavior
		link.addEventListener("click", () => {
			// remove hash from address, if any
			if (location.href.includes("#"))
				history.pushState({}, "", location.href.slice(0, location.href.indexOf("#")));

			// scroll to top
			scroll({ top: 0, behavior: "smooth"});
		});

		link.removeAttribute("href");
	}
});
