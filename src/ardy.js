// fetch elements
const nav = document.getElementById("nav-bar");
const mScroller = document.getElementById("scroller");
const links = document.getElementsByTagName("a");

// responsive nav bar
nav.classList.add("minimized");
function updateScroll() {
	if (scrollY > innerHeight / 2) {
		nav.classList.remove("minimized");
		scroller.classList.add("hidden");
	} else {
		nav.classList.add("minimized");
		scroller.classList.remove("hidden");
	}
}
updateScroll();
addEventListener("scroll", updateScroll);

// scroller arrow for lazy people
mScroller.addEventListener("click", () =>
	scroll({ top: innerHeight / 2 + 1, behavior: "smooth"}));

// smooth scroll on anchor links
// and also smooth scroll back to top via. the title logo thing
[].forEach.call(links, (link) => {
	/** @type {string} */
	let loc = link.getAttribute("href");

	if (loc.charAt() == "#") { // anchor link behavior
		let anchor = document.getElementById(loc.substring(1));

		link.addEventListener("click", () => {
			// remove current hash from url, if any
			let url = location.href;
			if (url.includes("#"))
				url = url.slice(0, url.indexOf("#"));
			// add new hash to address
			history.pushState({}, "", url + loc);

			// scroll to anchor
			anchor.scrollIntoView({ behavior: "smooth" });
		});

		link.removeAttribute("href");
	} else if (loc == "./") { // title logo behavior
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
