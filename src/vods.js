//
// show a list of highlighted vods that ardy has shoutcasted in in the vods
// section
//

// get elements
const list = document.getElementById("vods");
const scroller = document.getElementById("vod-scroller");
const counter = document.getElementById("vod-counter");
let vods = [];
let count = 0;

// fetch
fetch(new Request("/src/data/vods.csv"))
	.then((result) => result.text())
	.then((data) => parseCSV(data))
	.then((data) => {
		// store parsed CSV in memory
		vods = data.reverse();
		// clear placeholders
		list.innerHTML = "";
		// attach handlers
		scroller.addEventListener("click", () => loadVODs());
		// load VODs
		loadVODs();
	}).catch((e) => { console.error("Error while trying to load VODs section;", e); });

// load more
function loadVODs() {
	if (count < vods.length) {
		let nCount = 3;

		if (count + nCount > vods.length) {
			nCount = vods.length - count;
			scroller.setAttribute("disabled", "");
		}

		for (let i = 0; i < nCount; i++) {
			list.appendChild(generateVOD(vods[count + i]));
		}

		count += nCount;
		counter.innerText = `showing ${count}/${vods.length}`;
	}
}

function generateVOD(vod) {
	let linkBase;
	let linkType;
	let authorImage = vod[3].toLowerCase().replace(/ /g, "");

	switch (vod[0]) {
		case "yt":
			linkBase = "https://www.youtube.com/watch?v=";
			linkType = "YouTube (video)"; break;
		case "ytpl":
			linkBase = "https://www.youtube.com/playlist?list=";
			linkType = "YouTube (playlist)"; break;
		case "ttv":
			linkBase = "https://www.twitch.tv/videos/";
			linkType = "Twitch (vod)"; break;
		case "ttvc":
			linkBase = `https://www.twitch.tv/${authorImage}/clips/`;
			linkType = "Twitch (clip)"; break;
	}

	// create link
	let a = document.createElement("a");
		a.href = linkBase + vod[1];
	// create vod wrapper
	let wrapper = document.createElement("div");
		wrapper.classList.add("vod");
		wrapper.setAttribute("style", `background-image: url("src/img/thumbs/${authorImage.trim()}.jpg")`);
		a.appendChild(wrapper);
	// create info wrapper
	let info = document.createElement("div");
		info.classList.add("info");
		wrapper.appendChild(info);
	// create info/title
	let title = document.createElement("div");
		title.classList.add("title");
		title.innerText = vod[2];
		info.appendChild(title);
	// create info/author
	let author = document.createElement("div");
		author.classList.add("author");
		author.innerText = vod[3] + " on " + linkType;
		info.appendChild(author);

	// return VOD element
	return a;
}

// CSV parser
/** @param {string} data  */
function parseCSV(data) {
	let table = data.trim().split("\n") // split into separate lines
		.map(x => x.split(",")) // split into columns
		.filter(x => x.length >= 4); // get only columns with required length

	// check for video titles containing commas
	table.forEach((row, i) => {
		if (row.length > 4) {
			let nRow = [];
			// push platform
			nRow.push(row.shift());
			// push id
			nRow.push(row.shift());
			// remove author
			let last = row.pop();
			// push title
			nRow.push(row.join(","));
			// push author
			nRow.push(last);

			// replace row with new row
			table[i] = nRow;
		}
	});

	return table;
}
