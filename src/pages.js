const pageWrap = document.getElementById("pages-wrapper");
const pageWindow = document.getElementById("pages-window");
// mini pages close button
const pageCloser = document.getElementById("pages-closer");
	pageCloser.addEventListener("click", () => hidePage());
/** @type {Object.<string, HTMLElement>} */
let linklist = {};

// mini pages data
let miniPages = {
	// CUSTOM MINI PAGES
	"about": {
		title: "About Me",
		content: `My name is Ardy, and I am a play by play shoutcaster for Valorant, and other FPS titles! I have been shoutcasting for 5 years now, and always looking for challenges to improve myself, and get better at doing what I love. Thank you for watching, and have a beautiful day!`,
		links: { resume: "./resume.pdf", contact: "mailto:contact@ardysop.com" },
	},
	// CUSTOM BRAND PAGES
	"arena": {
		title: "Arena Esports",
		content: "",
		links: { website: "./" },
	},
	"edu": {
		title: "EDU",
		content: "",
		links: { website: "./" },
	},
	"esports": {
		title: "Esports College and Career Pathways",
		content: "",
		links: { website: "./" },
	},
	"evo": {
		title: "EVO Championship Series Japan",
		content: "",
		links: { website: "./" },
	},
	"gci": {
		title: "Golden Coast International",
		content: "",
		links: { website: "./" },
	},
	"gpj": {
		title: "Game Party Japan 2019",
		content: "",
		links: { website: "./" },
	},
	"msi": {
		title: "MSI Gaming",
		content: "",
		links: { website: "./" },
	},
	"rb": {
		title: "Red Bull",
		content: "",
		links: { website: "./" },
	},
	"iq": {
		title: "Team iQ",
		content: "",
		links: { website: "./" },
	},
	"scs": {
		title: "SCS Esports",
		content: "",
		links: { website: "./" },
	},
};

// gather links
let linkArray = [
	// get brand links
	"arena",
	"edu",
	"esports",
	"evo",
	"gci",
	"gpj",
	"msi",
	"rb",
	"iq",
	"scs",
	// get textual links
	"about",
];

linkArray.forEach((l) => {
	linklist[l] = document.getElementById(l);

	if (linklist[l].tagName == "A")
		linklist[l].attributes.removeNamedItem("href");

	linklist[l].addEventListener("click", () =>
		showPage(miniPages[l].title, miniPages[l].content, miniPages[l].links));
});

function showPage(title = "Untitled", content = "Lorem Ipsum", links = null) {
	// clear previous elements (just in case)
	hidePage(false);

	// create title
	let _t = document.createElement("div");
		_t.classList.add("mini-title");
		_t.innerText = title;
		pageWindow.appendChild(_t);

	// create links
	if (links !== null) {
		Object.keys(links).forEach((link) => {
			let _l = document.createElement("div");
				_l.classList.add("mini-link");
				_l.innerHTML = `
					<span>${link}</span>
					<a href="${links[link]}">${links[link].replace("mailto:", "").replace("./", "")}</a>`;
				pageWindow.appendChild(_l);
		});
	}

	// create content
	let _c = document.createElement("div");
		_c.classList.add("mini-content");
		_c.innerHTML = content;
		pageWindow.appendChild(_c);

	// show page
	pageWrap.classList.remove("hidden");
	setTimeout(() => pageWrap.classList.remove("closed"), 16);
}

function hidePage(hide = true) {
	// clear previous elements
	if (hide)
		setTimeout(() => clear(), 200);
	else
		clear();

	// hide
	if (hide) {
		pageWrap.classList.add("closed");
		setTimeout(() => pageWrap.classList.add("hidden"), 200);
	}

	function clear() {
		let children = pageWindow.children;
		for (let i = children.length - 1; i > 0; i--) {
			let c = children[i];
			if (c.classList == "mini-title" || c.classList == "mini-content" || c.classList == "mini-link")
				pageWindow.removeChild(c);
		}
	}
}
