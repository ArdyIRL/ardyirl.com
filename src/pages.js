const pageWrap = document.getElementById("pages-wrapper");
const pageWindow = document.getElementById("pages-window");
const pageCloser = document.getElementById("pages-closer");
/** @type {Object.<string, HTMLElement>} */
let linklist = {};

// mini pages data
let miniPages = {
	// CUSTOM MINI PAGES
	"about": {
		title: "About Me",
		image: {
			url: "src/img/headshot-small.jpg",
			classes: "headshot",
			preload: true,
		},
		content: [
			"<q>When everyone asked what my favorite sport was growing up. They would all respond with these weird puzzled looks when I said 'Counterstrike'. They would tell me that it wasn't a real sport and tease me for it. But I had always loved it, watching my favorite teams duke it out in esports tournaments around the world. Listening to my favorite shoutcasters creating hype and memorable experiences. I always wanted to be a part of it. So here I am now, trying to make that a reality.</q>",
			"Ardy has been shoutcasting since 2016 when he was a freelancer for the esports arena in Santa Ana, California. Since then, Ardy has taken part in every sector of the esports industry, gaining experience as a producer, host, analyst, administrator, translator, and more. Though his main passion remains as a play by play shoutcaster.",
			"Since the release of VALORANT (2020), Ardy has shoutcasted for almost every major collegiate VALORANT tournament. Making sure to provide the most hype play by play commentary imaginable when needed, but always keeping the tempo moving forward.",
			"From tournaments in Japan, to his own twitch streams, to the esports program at the University of Hawaii. Ardy continues to funnel his creative energy to make sure that there is nothing but good vibes, and positive energy.",
		],
		links: { contact: "mailto:contact@ardysop.com" },
	},
	// CUSTOM BRAND PAGES
	"arena": {
		title: "Arena Esports",
		content: "In 2016 I was just a kid in high school who watched CS:GO esports tournaments every single day before going home to spend over 1000 hours on CS:GO myself. I wanted to take part in the local esports scene, and I absolutely LOVED hearing the shoutcasters create hype - which is something that I thought I would be capable of. So when I saw on ad on reddit asking for a shoutcaster for an upcoming CS:GO tournament I jumped on it. I sent in a clip of me shoutcasting a replay of one of my matches, and they worked with me to get me on the stage in front of a mic and camera for the very first time! I continued shoutcasting with them until I moved away for university, but I still have a very large space in my heart for the esports arena.",
		links: { website: "https://www.esportsarena.com/" },
	},
	"edu": {
		title: "EDU",
		content: "The University of Hawaii Esports Valorant team spent quite a bit of time in tournaments hosted by TheGamersEDU / TeamIQ. When they approached me on twitter to join them as a guest for a showdown between UH Esports and SJSU Esports, I instantly said yes! Not only are they 2 of the best Collegiate teams in North America, but I have a close relationship with both teams. Which made this showdown even more fun! Since that match, our relationship has grown and I am continuing to shoutcast for more regular events with them!",
		links: { website: "https://edu.teamiq.gg/" },
	},
	"esports": {
		title: "Esports College and Career Pathways",
		content: "Amazing people who want nothing more than to provide a clear path into the esports industry for not only players, but all personnel in collegiate esports. They have sponsored multiple events that I have participated in, and I am always happy and thankful to be a part of their bigger picture.",
		links: { website: "https://esportsccp.gg/" },
	},
	"evo": {
		title: "EVO Championship Series Japan",
		content: "My very first time as an assistant producer, unfortunately never to see the light of day. While EVO in Fukuoka Japan paid to bring me to the event, unfortunately the game I was meant to produce was cancelled. Still a fun experience to be around a large professional tournament!",
		links: { wikipedia: "https://en.wikipedia.org/wiki/Evo_Japan_2019" },
	},
	"gci": {
		title: "Golden Coast Invitational",
		content: "My first large scale collegiate VALORANT tournament! After hosting my university's VALORANT tryouts and shoutcasting for them, I had picked up some notoriety in that I had about 5 months of experience shoutcasting VALORANT before the game was even released. I worked with the producer at Academy of Art University to do a little bit more than just shoutcasting for the tournament, and amidst the COVID-19 Pandemic, this was one of many events that was 100% remote, meaning that solutions were needed for these new problems. Overall it was an extremely fun experience, and I continue to work closely with the Academy of Art University's esports program to create more high octane VALORANT productions!",
		links: { twitter: "https://twitter.com/valorantgci" },
	},
	"gpj": {
		title: "Tokaigi 2019 (Game Party Japan)",
		content: "When I lived in Osaka, it was brought to my attention on twitter that there was need for an english shoutcaster for the first paid first person shooter tournament in Japan! I got in touch as soon as possible to lend a hand and take part in it. I went up to Chiba-ken and had a great time shoutcasting for a PS4 Rainbow 6 Siege tournament. It was an extremely fun time, and I got to meet a lot of high profile foreigners living in Japan who were part of the fighting game community. Extremely fun to take part in an event like this!",
		links: { website: "https://videogamecons.com/event/12100/tokaigi-game-party-japan-2019" },
	},
	"msi": {
		title: "Space Productions x MSI Student Broadcast Initiative",
		content: "I was chosen out of a group of applicants to take part in the MSI Student Broadcast Initiative to produce the MSI Radiant Cup! The folks over at Space Productions took me on board as they wanted someone to take up the role of a mentor for new shoutcasters, and to be a role model for some of the newer students in the program. This was the first time that I had realized that I could provide something as more than just an up-and-comer, something as more than just a new shoutcaster. The Space Productions crew continues to provide me with incredible support, feedback, and advice - and I could not have been happier than to have met them and gotten to know them through this program. I am also extremely grateful to have had MSI sponsor the event, and make sure that every member of the student broadcast initiative was paid hourly for their work; something that is extremely rare in the collegiate esports space.",
		links: { website: "https://www.spaceproductions.org/", twitter: "https://twitter.com/msiUSA" },
	},
	"rb": {
		title: "Red Bull Campus Clutch",
		content: "The largest Collegiate VALORANT tournament in the WORLD! The RedBull Campus Clutch brought together teams from campuses across the world, giving them a chance to compete for some amazing prizes. The tournament was another amazing opportunity to work with ArtU Esports to produce and shoutcast not only the recording production for the early stages, but to also be a part of the official Campus Clutch streams later in the tournament!",
		links: { website: "https://www.redbull.com/campusclutch" },
	},
	"iq": {
		title: "Team iQ",
		content: "The University of Hawaii Esports Valorant team spent quite a bit of time in tournaments hosted by TheGamersEDU / TeamIQ. When they approached me on twitter to join them as a guest for a showdown between UH Esports and SJSU Esports, I instantly said yes! Not only are they 2 of the best Collegiate teams in North America, but I have a close relationship with both teams. Which made this showdown even more fun! Since that match, our relationship has grown and I am continuing to shoutcast for more regular events with them!",
		links: { website: "https://teamiq.gg/" },
	},
	"scs": {
		title: "SCS Esports",
		content: "The Storm Competitive Series is an ambitious R6 siege production filled with some really impressive people! They adopted me after seeing me shoutcast my University's R6 tryouts, and they helped me improve my skills with R6 commentating and analyzing, and put me together with T2 and T3 casters as a real test of my ability!",
		links: { website: "https://scsesports.com/" },
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

	linklist[l].addEventListener("click", () =>
		showPage(miniPages[l].title, miniPages[l].content, miniPages[l].links, l, miniPages[l].image));

	try {
		if (linklist[l].tagName == "A")
			linklist[l].attributes.removeNamedItem("href");
	} catch (e) {
		console.error(e);
	}
});

function showPage(title = "Untitled", content = ["Lorem Ipsum"], links = null, url = null, image = null) {
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

	// create image(s)
	if (image !== null) {
		let img = document.createElement("img");
			img.src = image.url;

		// if special classes need to be applied
		if (image.classes) {
			let classes = typeof(image.classes) == "string" ? [ image.classes ] : image.classes;
			img.classList.add(...classes);
		}

		// if a large version of the image is available
		if (image.preload) {
			console.debug("[ USING PRELOAD IMG ]", img.src);
			// large image to replace that placeholder small image
			let large = new Image;
			large.addEventListener("load", () => {
				img.src = large.src;
				console.debug("[ LOADED RESOURCE   ]", large.src);
			});
			large.src = image.url.replace("small", "large");
			console.debug("[ LOADING RESOURCE  ]", large.src);
		}

		pageWindow.appendChild(img);
	}

	// create content
	let _content = typeof(content) == "string" ? [ content ] : content;
	_content.forEach((c) => {
		let _c = document.createElement("div");
			_c.classList.add("mini-content");
			_c.innerHTML = c;
			pageWindow.appendChild(_c);
	});

	// show page
	pageWrap.classList.remove("hidden");
	setTimeout(() => pageWrap.classList.remove("closed"), 16);

	// change url
	if (url !== null) {
		let u = new URL(location.href);
		u.searchParams.set("page", url);
		history.pushState({}, "", u.toString());
	}
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
		// remove url
		let u = new URL(location.href);
		u.searchParams.delete("page");
		history.pushState({}, "", u.toString());
	}

	function clear() {
		let children = pageWindow.children;
		for (let i = children.length - 1; i > 0; i--) {
			let c = children[i];
			if (c.nodeName == "IMG" || c.classList == "mini-title" || c.classList == "mini-content" || c.classList == "mini-link")
				pageWindow.removeChild(c);
		}
	}
}

// event listeners
pageCloser.addEventListener("click", () => hidePage());
pageWrap.addEventListener("click", (e) => {
	if (e.target.isSameNode(pageWrap)) {
		hidePage(true);
	}
});

setTimeout(() => {
	let _pageToOpenOnLoad = false;
	if (_pageToOpenOnLoad = new URL(location.href).searchParams.get("page")) {
		let p = miniPages[_pageToOpenOnLoad];
		if (p)
			showPage(p.title, p.content, p.links, undefined, p.image);
	}
});
