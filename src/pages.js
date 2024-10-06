//
// this js file loads miniature pages showing stuff about sponsors/brands that
// ardy has worked with as well as displaying the about page and stuff™
//

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
		image: "src/img/media/headshot.jpg",
		content: [
			"<q>When everyone asked what my favorite sport was growing up. They would all respond with these weird puzzled looks when I said 'Counter-Strike'. They would tell me that it wasn't a real sport and tease me for it. But I had always loved it, watching my favorite teams duke it out in esports tournaments around the world. Listening to my favorite shoutcasters creating hype and memorable experiences. I always wanted to be a part of it. So here I am now, making that a reality.</q>",
			"Ardy has been shoutcasting since 2015 when he was a freelancer for the esports arena in Santa Ana, California. Since then, Ardy has taken part in every sector of the esports industry, gaining experience as a producer, host, analyst, administrator, translator, and more. Though his main passion remains as a play by play shoutcaster.",
			"Since the release of VALORANT (2020), Ardy has shoutcasted for almost every major collegiate VALORANT tournament. Making sure to provide the most hype play by play commentary imaginable when needed, but always keeping the tempo moving forward.",
			"From casting tournaments in Japan, to the esports program at the University of Hawaii - Ardy has continued to funnel his positive energy into shoutcasting, and has dominated the Collegiate Valorant scene. On top of Valorant, Ardy has taken on T2 Apex legends tournaments while still pursuing his degree at the University of Hawaii.",
		],
		links: { contact: "mailto:contact@ardyirl.com" },
	},
	"education": {
		title: "Education",
		content: [
			"<h3>My experience as an undergraduate at the University of Hawai'i</h3>",
			"<img src='src/img/media/trophy.jpg'><span class='subtext'>September 2021, Overwatch League Grand Finals, Honolulu, Hawai'i</span>",
			"In March of 2020 at the start of the pandemic I transferred to the University of Hawai'i at Manoa. Coming from Japan to Hawai'i, I was expecting a lot of lifestyle changes. However, the biggest lifestyle change did not come from being in a different locale, instead it came from the new way of life that everyone had to adapt to: being socially distanced, and entirely remote.",
			"But remote learning, especially from Hawai'i, turned out to be the best thing that had ever happened to me. This blessing in disguise allowed me to put my head down, and focus on building my brand, and begin engaging in a career from within my dream industry: gaming and esports.",
			"During my first semester at the University of Hawai'i, I was still unsure if I would ever get to have a career in this industry. I had been shoutcasting since 2015, but only freelance, and never anything that paid me well enough to think it could be a career path. In Japan, I hosted the largest nightlife event in Osaka - The Osaka Pub crawl. It was there that I learned I really had a knack for hosting, and being in front of a large crowd and audience. But these skills surely would never lead to an actual career right? I certainly didn't think so, which is why I transferred into the Astronomy program.",
			"My second semester, I realized that Astronomy was fantastic, but my heart was with Geography and Earth Science. I wanted to combine those so I transferred into the School of Ocean and Earth Science and Technology. Concurrent to my studies, however, I continued to work on my skills as a shoutcaster, and started to build my brand as a streamer. I learned video editing, and through the UH esports program, I started shoutcasting and doing various social media projects.",
			"In 2021, when the Overwatch League came to Hawai'i, the Director of the UH esports program - Sky Kauweloa - gave me an incredible opportunity to lead the way in content creation for the program during the school sanctioned Overwatch League Internship. Shortly after this, I was approached by the Overwatch League directors and offered an internship directly through them, rather than the internship through the school. It was during this time that Sky informed me I had a unique skill set that would serve me well, and if I wanted to do esports / gaming full time. I would benefit from joining the school of communications to aid me in my dream to break into the industry. So I made the switch.",
			"From then on, I was a communications major, doing my best to make sure I was working full time to make it in the industry as well. I was networking, attending workshops, always learning both in and outside of class, and through my mentors at Overwatch League and Call of Duty League, I picked up a very diverse variety of skills extremely quickly. Following my internship with the Overwatch League, I was offered an internship at Team Liquid - my first ever job with an esports organization. What started as an internship where I would assist the director of events became an internship where I was project lead for 2 insanely important events for the organization. The first half of my internship saw me overlooking the first in person event for the org post-covid, and the second half saw me as the project lead for the first ever women-centric tournament for Valorant that the org would hold. After my work with Team Liquid, I was offered a full time role handling the social media for Opera GX, my very first real job.",
			"None of these things would have been possible without the very real skills that I learned during my time at the University of Hawai'i at Manoa. From all of my professors, to my class projects that felt like more than just assignments meant to be graded and forgotten, there was so much passion that was generated from this beautiful campus.",
			"Here are a few of the things that I worked on in my time at the University of Hawai'i:",

			"<h3>Original Capstone Project</h3>",
			"<img src='src/img/media/capstone.jpg'>",
			"My capstone project oversaw me collecting data from all around the island of O'ahu with regards to esports. It was amazing to get perspective from locals who had no idea how much influence their island had over the industry, let alone those who had no idea that this industry existed. It was touching to have conversations about the “brain-drain” that the islands have experienced, especially with regards to esports and gaming - and to hear ideas from locals for ways that they wanted to see the issues fixed. Ultimately knowing that the majority of people supported the idea of a state-funded esports program helped to inspire confidence in the program here at the University of Hawai'i - and I hope that this project will eventually help to realize an official state program here on the islands.",

			"<h3>Overwatch League Internship</h3>",
			"<img src='src/img/media/olinternship.jpg'>",
			"The overwatch league internship manifested itself into one of the most incredibly rewarding experiences of my entire life. During the internship, on the school side of things, I helped guide a class of students at UH esports through content production and instructed them on social media growth. On the Overwatch side of things, I was taken under the wing of Eric Fischman ~ the lead features producer for the Overwatch League ~ where I learned so many new skills in the area of video production and content creation. I had a lot of ideas that I was able to translate on screen for millions of viewers, and on top of that I got to experience a real world example of professional content creation as a career option. I will forever be thankful for this opportunity that thrust me into right into the heart of the esports industry.",

			"<h3>UH Esports</h3>",
			"<img src='src/img/media/videos.jpg'>",
			"Before I even set foot on the campus of the University of Hawai'i, I was involved in the UH esports program. I approached Sky Kauweloa and told him I was an incoming transfer student, and that I wanted to get involved in their program, mentioning that their social Media presence could use some work. Within the first month, I was streaming live various matches on their twitch channel, and generating content for youtube with the sole purpose of building the program up in the public eye, and it was working. I had used all of my spare time granted by the pandemic and asynchronous classes to make all the content that was possible. At this time, the program was even struggling to be fully recognized by the campus, and so the YouTube videos ended up being published on my own YouTube channel since we couldn't get an official program one. This was an amazing learning experience for myself, and I had the pleasure of taking a whole new generation under my wing to train the next content team, as I would quickly find myself stepping out of the collegiate space and into the real world of content production.",

			"<h3>The School of Communications at the University of Hawai'i</h3>",
			"<img src='src/img/media/skyline.jpg'>",
			"Ultimately, my time with the communications program felt a lot shorter than it really was, mostly due to the pandemic, and a majority online asynchronous format. While not the ideal 4 year college experience, it was this college experience that saw me taking on a full time job 2 semesters before graduation. That is something that I had always wanted to do, inspired by the amazing people that I looked up to in the industry before I knew it was a possibility. Ultimately, it was a massive risk, but I am so thankful to all of my professors and advisors who saw to it that I could make adjustments to their courses in order to incorporate my work life into my school assignments. The fact is, the school of communication taught me that through communication itself, I would be able to make anything work out that I set my mind to. When it all comes down to it, we are all people, and we are all brought together through communication. Everyone has their needs, and everyone has their agenda, my time at the University of Hawai'i taught me that if you just be fully truthful and upfront about those needs and that agenda - people will always at least be willing to meet you halfway. The number one thing I learned through this, was to always live with Aloha 🤙"
		]
	},
	// CUSTOM BRAND PAGES
	"arena": {
		title: "Esports Arena",
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
	"owl": {
		title: "Overwatch League",
		content: "The Overwatch League came to Hawai'i, and it was a BLAST. The Overwatch League approached the University of Hawaii esports program back in december of 2020 to discuss the possibility of OWL 2021 to be hosted on campus. In summer 2021, the 4 main tournaments of the Overwatch League were held at UH Manoa. Throughout the event, the directors and staff of the league provided our students with hands on experience operating a proper esports event. With insight into tournament operations, league operations, and global events management - as well as the technical direction involved in such a large scale production - it was an incredible learning opportunity. Not only that, but during the event I lead the process of content creation and social media management for the University in order to document the students' experiences during the events.",
		links: { website: "https://overwatchleague.com/" }
	},
	"uhe": {
		title: "UH Esports",
		content: [
			"After transferring to the University of Hawaii right at the start of the pandemic, I quickly became involved in the burgeoning esports program at the university. I started out by producing streams and shoutcasting for the VALORANT tryouts, as the game had just come out and I was one of the very first participants in the closed beta.",
			"After the success of the VALORANT content, I quickly made a name for myself at UH Esports, becoming an administrator before I even formally began attending the university. Through the pandemic, everything was remote work, and I was able to offer my in-home production studio to create content for UH Esports, creating promotional content, streams, in house tournaments, and more. I continue to grow UH esports as if it were my own program, and in Summer of 2021, we began working directly with the Overwatch League to put on the official Overwatch league 2021 production from our UH esports program here at the University of Hawaii at Manoa campus."
		],
		links: { website: "https://www.hawaii.edu/esports/" }
	},
	"owl2021": {
		title: "Overwatch Leage 2021",
		content: "Throughout the entire Overwatch League 2021 season, I had the amazing opportunity to work directly with the directors and staff of the league in an internship that not even OWL was expecting. I began working more closely with OWL after the May Melee, and during the June Joust and summer showdown, I was working as a production assistant on the IRL features that would appear on the broadcast! I also was able to create drone footage for use during the broadcast that would act as filler between breaks. During the Grand Finals, I was given even more responsibility to help out the post production crew, and help to assure that things went smoothly when the league was on island. I am super thankful for the lessons I learned during the grand finals, and the connections I made to some truly fantastic people!",
		links: { website: "https://overwatchleague.com/en-us/" }
	},
	"cod": {
		title: "Call of Duty League",
		content: "Between the Summer Showdown and the Countdown Cup for Overwatch League, I was offered a role as a production assistant at the Call of Duty League Stage V Major in Arlington Texas. Similar to the Overwatch League, I was able to get experience with everything from personal assistant, post production, basic event setup, and finally Main stage camera operator! Having such a wide variety of roles between CDL and OWL allowed me to get extremely detailed insight as to how these events are run, and what the structure of a proper esports tournament looks like. Sharing my experiences of OWL to the CDL team was incredibly funny as they were all aware of the chaos that was occurring in Hawai'i, but had no idea how crazy things actually got. I'm very thankful for my time in Texas; and I take pride in knowing that I learned MANY things from both my successes AND my mistakes.",
		links: { website: "https://www.callofdutyleague.com/en-us/" }
	},
	"tl": {
		title: "Team Liquid",
		content: "During the same time as the Overwatch League grand finals, I was offered an internship at Team Liquid ~ one of my absolute dream orgs! While the first week was absolutely CRAZY, working on OWL & getting settled in to my internship with TL simultaneously , once the dust settled I had a fantastic time both with my team in the events department and my fellow interns! At Team Liquid - they saw in me what I didn't see in myself and connected the dots to find me something that could utilize my skills to the fullest. This internship allowed me to hone my abilities, as well as learn new ones. My managers gave me so much insight to the industry as a larger entity, and enabled me to learn from more than just the events team, but to work with and learn from the other departments at Team Liquid too. I've grown so much, not only as someone in the industry, but as a person as well. I finally feel like I belong here, and I am no longer weary of the decisions I have to make. I am so thankful to have been a part of the first cohort of interns for the Liquid Legacy Guild. And I'm proud be one of the interns to carry that torch into 2022.",
		links: { website: "https://tl.gg/" }
	},
	"boomavgl": {
		title: "BoomTV and AVGL",
		content: [
			"In November of 2021 I enterd the BoomTV / AVGL x Intel Inspire shoutcasting competition, in this competition I managed to secure 4th place thanks to my highlight reel, as well as casting League of Legends, fortnite, rocket league, and valorant!",
			"I am incredibly thankful for the boost in confidence this gave me to continue pushing forward my casting career, and intel inspires provided a very generous prize for it too!",
			"Later AVGL and BoomTV invited me to cast their $20,000 collegiate Vanguard tournament, and I am super thankful for the opportunity to work with such a great production crew!",
		],
		links: { "boomtv website": "https://boom.tv/", "avgl website": "https://avgl.org/" }
	},
	"esportsworkshop": {
		title: "Esports Workshop",
		content: [
			"ArtU Esports and Redbull invited me to host a college class on esports level design!",
			"During the spring 2021 semester, I was able to host this class alongside a veteran level designer and talk about how level design impacts esports. During this class, I was able to provide insight as to how small map changes can lead to entirely different gameplay loops - as well as how level designers cater to both the wide general audience, and the smaller pro scene with certain details.",
			"Hosting this course has definitely given me deeper understanding of map flow and design, and has tremendously benefitted my casting ever since!",
		],
		links: { "youtube playlist": "https://www.youtube.com/playlist?list=PL33ae5Gg6n32g3SowRuxfff-KqcIcOTxF" }
	},
	"nerdstreet": {
		title: "Nerdstreet Gamers",
		content: "Starting in May of 2022, Ardy has taken his Apex Legends casting to the next level with the Nerdstreet Gamers Summer Champs series. Alongside some amazing talent, Ardy has taken care to study the best of the best that the Apex community has to offer. Taking his experience working alongside the Team Liquid Apex team to make sure he brought the highest quality insight to his best play by play yet. Finishing in August of 2022 at the Nerdstreet LAN in Philadelphia.",
		links: { website: "https://nerdstreet.com/" }
	},
	"eveasc": {
		title: "Eve Ascension",
		content: "In March of 2022, Ardy took on the role of project lead for Eve Ascension, Team Liquid’s first ever Women-centric valorant tournament. Providing Women in the Valorant scene with the ability to show their skills in a dedicated tournament, where the winners were able to play alongside signed pro teams in a best of 1, round robin charity show match. It was incredibly successful, and even though Ardy moved away from Team Liquid in April, they continue to bring Eve Ascension back as a returning circuit - along with some special collaborations with Riot Games in the Women’s Valorant space.",
		links: { website: "https://tl.gg/eveascension/" }
	},
	"egf": {
		title: "EGF",
		content: "Shoutcasting Valorant for the Electronic Gaming Federation with Tyler Schrodt has always been a very fun outlet for Ardy. With incredibly low stakes, and very talented casters and producers, Ardy always has had nothing but love for EGF and their collegiate valorant and CS:GO circuits.",
		links: { website: "https://egf.gg/" }
	},
	"egl": {
		title: "EGL",
		content: "Alongside one of his longest partners in casting, Ashkon Hojati, Ardy was signed for the entire first season of the EGL club clash for Apex Legends, and got a lot of great experience on Apex during his time with the EGL contract.",
		links: { website: "https://egl.tv/" }
	},
	"unified": {
		title: "Unified Premier",
		content: "Concurrent to EGL and other contracts, Ardy and Ashkon continued their epic duo presence together in the Unified Premier League. A classic, low stakes Collegiate valorant conference filled with fun times and good vibes :)",
		links: { website: "https://uea.gg/premier/" }
	},
	"nace": {
		title: "NACE Starleague",
		content: "On more than one occasion, Ardy has worked with NACE starleague to provide coverage for their VALORANT and Call of Duty events! With NACE, the quality is always excellent, and its one of many collegiate productions that knows they can always count on Ardy to jump in at the last minute when they need quality on short notice.",
		links: { website: "https://nacesports.org/" }
	},
	"imc": {
		title: "IMC College Clash",
		content: "Concurrently to his time at Team Liquid, Ardy was called upon by his employers to utilize his skill for play by play casting in the IMC Trading College Clash for CS:GO. Covering both the NA and Australia / NZ regions, Ardy was working alongside some of the best collegiate CS:GO talent on offer.",
		links: { website: "https://careers.imc.com/us/en/imc-college-clash" }
	},
	"redbull": {
		title: "Redbull Pacific Gauntlet",
		content: "Powered by Redbull Gaming and Twitch student the pacific gauntlet follows its ancestors of the Golden Coast Invitational and the Redbull Campus Clutch. Ardy and Kanashii took the reigns of this legendary collegiate in December of 2021 and in May of 2022 to provide rock solid coverage for the best Valorant Collegiate talent that North America has to offer.",
		links: { twitter: "https://twitter.com/pacificgauntlet" }
	},
	"operagx": {
		title: "Opera GX",
		content: "After years of hard work in the gaming and esports industry, Ardy landed his first ever full time job, while concurrently pursuing his degree in communications at the University of Hawai’i at Manoa. After being hired to produce content for the GX corner that would garner millions of views, Ardy took on the role of social media manager to rewrite the brand voice across their Twitter, TikTok, Twitch, and YouTube accounts for the World’s first gaming browser. Ardy's activations with brand partners would also boost their twitch from 30,000 followers to over 200,000. The brand strategy that Ardy created for their Tiktok and Twitter would grow their following to over 2 million.",
		links: { website: "https://opera.com/gx" }
	},
	"valcol": {
		title: "Valorant College",
		content: "Ardy was able to host and cast for over 8 hours of broadcast for Cval winter 2023, including the grand finals of the CVAL North regional qualifiers.",
		links: { website: "https://battlefy.com/cval2023" }
	},
	"gengglobal": {
		title: "Gen.G Global Academy",
		content: [
			"With over 250 students coached across over a dozen countries, Ardy's work at Gen.G academy has created a new culture of ambition and excitement as Gen.G becomes established in the middle east.",
			"Taking charge as a partnerships manager, Gen.G trusted Ardy's expertise in esports to bring events, tournaments, and Gen.G Academy Activations to Gen.G's new Saudi Arabian head quarters which will open in 2025. As well as the signing of all new Gen.G teams in the region."
			],
		links: { website: "https://www.ggacademy.gg/?lang=en" }
	},
	"mongolz": {
		title: "TheMongolZ",
		content: [
			"From July of 2024, Ardy has served as the Head Coach for TheMongolZ Valorant, helping them to qualify through Valorant Premier and into Valorant Challengers League. Officially marking TheMongolZ as a Tier 2 organization in Valorant.",
			"Competing in VCL Southeast Asia, Ardy will lead the team against major opponents like Disguised, Riddle, and BOOM Esports - All while remaining as Head Coach with Gen.G Esports. Ardy is the first person in Valorant history to be coaching 2 teams at the same time."
			],
		links: { website: "https://www.ggacademy.gg/?lang=en" }
	},
	"twitch-rivals": {
		title: "Twitch Rivals x The Finals",
		content: "As the number 1 caster in The Finals community, Ardy has casted every large prize pool event in The Finals history. Including the first ever Twitch Rivals integration with the game."
	},
	"esportsworldcup": {
		title: "Esports World Cup",
		content: [
			"2 Years in a row, the Saudi Arabian government has sponsored projects to train local coaches in Saudi Arabia. With Gen.G, Ardy was in charge of making sure that Saudi Arabian coaches were trained at the highest level of standard through the Gen.G Academy program.",
			"Alongside the management of this project, as well as being head instructor - Ardy also operated Valorant Coaching operations on behalf of Gen.G Academy throughout the duration of the Esports World Cup. This is the 2nd year in a row that Ardy has spent time in Saudi Arabia, training members of their esports community who are already being signed to teams like NASR and Falcons."
			],
		links: { website: "https://www.ggacademy.gg/?lang=en" }
	}
};

// gather links
Object.keys(miniPages).forEach((l) => {
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
	document.title = "ArdyIRL / " + title;
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
		img.src = image;
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
	document.title = "ArdyIRL";

	if (hide) { // hide page and clear when hidden
		pageWrap.classList.add("closed");
		setTimeout(() => {
			pageWrap.classList.add("hidden");
			clear() }, 200);
		// remove url
		let u = new URL(location.href);
		u.searchParams.delete("page");
		history.pushState({}, "", u.toString());
	}
	else // immediately clear previous elements
		clear();

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
