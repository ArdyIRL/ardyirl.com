//
// display the socialblade follower counts under the social media platform icons
// in the social media section
//

// TODO: FIX

// api links
let apiLinks = {
	youtube: "https://socialblade.com/youtube/channel/UCpyLZdiOz1TcVNQQ6VxvAsg",
	twitter: "https://bastet.socialblade.com/twitter/lookup?query=ArdysOP",
	twitch: "https://bastet.socialblade.com/twitch/lookup?query=138369937",
	instagram: "https://www.instagram.com/ardysop_/?__a=1",
	tiktok: "https://counts.live/api/tiktok-follower-count/ardysop/live",
}

// get elements to update
let socialPlatforms = document.querySelectorAll("[data-platform]")

socialPlatforms.forEach(e => {
	// get api link to use
	let platform = e.getAttribute("data-platform");
	// get data
	fetch(apiLinks[platform], {
		mode: "no-cors",
	})
		// format data
		.then(x => (platform == "instagram" || platform == "tiktok")? x.json() : x.text())
		// use data
		.then((data) => {
			console.log(data)
			switch (platform) {
				// if getting data from socialblade then just use it
				case "youtube": case "twitter": case "twitch":
					e.setAttribute("data-followers", parseInt(data).toLocaleString());
					break;

				// if getting data from instagram then just use the data
				case "instagram":
					e.setAttribute("data-followers", parseInt(data.graphql.user.edge_followed_by.count).toLocaleString());
					break;

				case "tiktok":
					e;
					break;
			}
		})
		// handle errors
		.catch(e => console.error(e));
});
