	
const 	pagenames = [{ id:0,
		name00: "TransAuto",	index:		"00index",
		name01: "About Us",		events:		"events",
		name02: "Services",		services:	"services",
		name03: "Portfolio",	portfolio:	"portfolio",
		name04: "Contact Us",	contactus:	"contactus",
		}]
const	page =	pagenames[0];

const 	tagnames = [{ id:0,
		tag00:"Company Name", 		company: 	page.name00,
		tag01:"Industry", 			industry:	"Car Export Dealership",
		tag02:"Location", 			location:	"Benoni, Johannesburg",
		tag03:"Overview", 			overview:	page.name00+` is an Events Management company dedicated to creating exceptional experiences for individuals, businesses and organizations.
												The company specializes in designing, planning and executing a wide range of events.
												Corporate functions to personal celebratory events - with a focus on creativity, professionalism, and excellence.`				,
		tag06:"Vision", 			vision:		"To become a leading name in the events industry by setting new standards of excellence and innovation."						,
		tag07:"Mission", 			mission:	"To transform ideas into unforgettable experiences through meticulous planning, creative design, and flawless execution."		,
		tag04:"Value Proposition", 	value:		"Combining creativity, precision, and professional execution to provide tailor-made event solutions that exceed expectations."	,
		tag05:"Target Market", 		target:		"Corporates, private clients, organizations, and brands seeking impactful event experiences."									,
		tag08:"Core Values",		values:		`- Excellence: Delivering services that exceed expectations.
												 - Creativity: Crafting unique concepts for each event.
												 - Professionalism: Integrity, reliability, and service quality.
												 - Collaboration: Strong partnerships with clients & vendors.
												 - Attention to Detail: Every element carefully managed.` }]
const	tag =	tagnames[0];

const 	services = [{ id:0,
		coreserv00:"Core Services",						auxserv00:"Auxillary Services",
		coreserv01:"Corporate Event Planning",			auxserv01:"Event Marketing & Promotion",
		coreserv02:"Venue Sourcing & Management",		auxserv02:"Wedding Planning",
		coreserv03:"Logistics & Guest Management",		auxserv03:"Private Parties & Celebrations",
		coreserv04:"Event Consultancy",	  				auxserv04:"Entertainment & Talent Booking",
		coreserv05:"Audio-Visual & Technical Support",	auxserv05:"Team-Building Experiences"}];
const	service =	services[0];

const 	pageicons = [{ id:0,
		basket:		`<i class="bi bi-cart2">	</i>`	,	youtube: 	`<i class="bi bi-youtube">	</i>`	,
		playbttn: 	`<i class="bi bi-play-fill"></i>`	,	threads: 	`<i class="bi bi-youtube">	</i>`	,
		instagram: 	`<i class="bi bi-instagram"></i>`	,	tiktok:  	`<i class="bi bi-tiktok">	</i>`	,
		facebook: 	`<i class="bi bi-facebook">	</i>`	,	twitter: 	`<i class="bi bi-twitter-x"></i>`	,
		spotify: 	`<i class="bi bi-spotify">	</i>`	,
		vimeo: 		`<i class="bi bi-vimeo">	</i>`	}]
const 	icon = pageicons[0];

const 	ratings = [{ id:0,
		rate01 : 	"&#9733;&#9734;&#9734;&#9734;&#9734;"	,
		rate02 : 	"&#9733;&#9733;&#9734;&#9734;&#9734;"	,
		rate03 : 	"&#9733;&#9733;&#9733;&#9734;&#9734;"	,
		rate04 : 	"&#9733;&#9733;&#9733;&#9733;&#9734;"	,
		rate05 : 	"&#9733;&#9733;&#9733;&#9733;&#9733;"	}]
const 	rate = ratings[0];

const 	slogans = [{ id:0,
		slog00:	"Be"	,
		slog01:	"Mogul"	,
		slog02:	"Vocal"	,
		slog03:	"Noble"	,
		slog04:	"Social"	,
		slog05:	"Soulful",
		slog06:	"Global"	}]
const 	slogan = slogans[0];

const 	eventdates = [{ id:0,
		title:"Event Dates"	, 
		jan:"January"	, jul:"July"		, 	dig01:1, dig06:6,  dig11:11, dig16:16, dig21:21, dig26:26, dig31:31,
		feb:"February"	, aug:"August"		, 	dig02:2, dig07:7,  dig12:12, dig17:17, dig22:22, dig27:27,
		mar:"March"		, sep:"September"	, 	dig03:3, dig08:8,  dig13:13, dig18:18, dig23:23, dig28:28,
		apr:"April"		, oct:"October"		, 	dig04:4, dig09:9,  dig14:14, dig19:19, dig24:24, dig29:29,
		may:"May"		, nov:"November"	, 	dig05:5, dig10:10, dig15:15, dig20:20, dig25:25, dig30:30,
		jun:"June"		, dec:"December"	,	year25:2025, year26:2026, year27:2027, year28:2028,
												year29:2029, year30:2030, year31:2031, year32:2032
		}]
const	eventdate =	eventdates[0];

// Event Calculator
const 	eventsponsordetails = [{ id:0,
		name	: "Name",
		surname	: "Surname",
		email	: "Email",
		address	: "Address",
		postal	: "Postal",
		mobile	: "Mobile"}]
const	eventclient = eventsponsordetails[0];

const 	eventequestticket= [{ id:0,
		title		: "Event Estimate",		
		eventtitle	: "Event Title",		
		venue		: "Venue Address",
		date		: "Date",		
		time		: "Time",		
		duration	: "Duration",	
		noofheads	: "Number of Attendees",		
		contact		: "Event Contact Person",
		number		: "+27"+" **"+" ***"+" ****",
		submit		: "Submit",
		}]
const	eventdetail =	eventequestticket[0];

const 	servicefees = [{ id:0,
		contigencies: .15,		
		servcharge	: .25,		
		tax			: .15,		
		cost		: "Cost",		
		}]
const	servicefee = servicefees[0];

const 	eventrates = [{	id:0,
		venue01head: 100,	venue01rate:10000,	venue01decor:10000	*.20,
		venue02head: 98,	venue02rate:9000,	venue02decor:9000	*.25,	
		venue03head: 95,	venue03rate:8000,	venue03decor:8000	*.30,
		venue04head: 92,	venue04rate:7000,	venue04decor:7000	*.35,
		venue05head: 89,	venue05rate:6000,	venue05decor:6000	*.40,
		venue06head: 86,	venue06rate:5000,	venue06decor:5000	*.45,
		venue07head: 83,	venue07rate:4000,	venue07decor:4000	*.50,
		venue08head: 80,	venue08rate:3000,	venue08decor:3000	*.55	
		//**********
		}]
const	eventrate =	eventrates[0];

const 	eventvenues = [{ id:0,
		id:0,venue:"DKNY"			, venadd01:"insert address"	, rate:eventrate.venue01rate},{
		id:1,venue:"Two Tone"		, venadd02:"insert address"	, rate:eventrate.venue01rate},{
		id:2,venue:"Mabaso"			, venadd03:"insert address"	, rate:eventrate.venue01rate},{
		id:3,venue:"Social On Main"	, venadd04:"insert address"	, rate:eventrate.venue01rate},{
		id:4,venue:"Lush"			, venadd05:"insert address"	, rate:eventrate.venue01rate
		}]
const	eventvenue = eventvenues[0];

const 	eventartists = [{ id:0,
		tit:"Artists", 
		art01:"Artist", art11:"Artist", art21:"Artist", art31:"Artist", 
		art02:"Artist", art12:"Artist", art22:"Artist", art32:"Artist", 
		art03:"Artist", art13:"Artist", art23:"Artist", art33:"Artist", 
		art04:"Artist", art14:"Artist", art24:"Artist", art34:"Artist", 
		art05:"Artist", art15:"Artist", art25:"Artist", art35:"Artist", 
		art06:"Artist", art16:"Artist", art26:"Artist", art36:"Artist", 
		art07:"Artist", art17:"Artist", art27:"Artist", art37:"Artist", 
		art08:"Artist", art18:"Artist", art28:"Artist", art38:"Artist", 
		art09:"Artist", art19:"Artist", art29:"Artist", art39:"Artist", 
		art10:"Artist",	art20:"Artist", art30:"Artist", art40:"Artist"}]
const	eventartist = eventartists[0];



const 	eventdresscodes = [{ id:0,
		venue00:"Event Dates"	,
		venue01:"Formal"		,
		venue02:"Semi Formal"	,
		venue03:"Casual"		,
		venue04:"Forward"		,
		venue05:"Rouge"			}]
const	eventdresscode = eventdresscodes[0];

const 	eventsponsorform = [{ id:0,
		clientname		: "Name",
		clientsurname	: "Surname",
		clientemail		: "Email",
		clientaddress	: "Address",
		clientpostal	: "Postal",
		clientmobile	: "Mobile"}]
const	eventsponsor = eventsponsordetails[0];

const 	levels = [{ id:0,
		html:		".html"								,
		level01:	"../"								,
		level02:	"../../"							,
		level03:	"../../../"							,
		level04:	"../../../../"						,
		level05:	"../../../../../"					,
		level06:	"../../../../../../"				,
		level07:	"../../../../../../../"				,
		level08:	"../../../../../../../../"			,
		level09:	"../../../../../../../../../"		,
		level10:	"../../../../../../../../../../"	}]
const 	level = levels[0];

const 	directory = [{ id:0,
		root00:	"/"							,
		root01:	"bmpack/"					,
		root02:	"bmpack/00app00objects/"	,
		root03:	"bmpack/00app01images/"		,
		root04:	"bmpack/00app02apis/"		,
		//////////////////
		root05:	"bmpack/01index/"			,
		root06:	"bmpack/02events/"			,
		root07:	"bmpack/03services/"		,
		root08:	"bmpack/04portfolio/"		,
		root09:	"bmpack/05contactus/"		}]
const 	direct = directory[0];

const 	pagelinks = [{ id:0,
		link00:	page.index+level.html ,
		link01:	direct.root01+page.events+level.html	,
		link02:	direct.root02+page.services+level.html	,
		link03:	direct.root03+page.portfolio+level.html	,
		link04:	direct.root04+page.contactus+level.html	,
		link04:	direct.root04+page.contactus+level.html	}]
const 	pagelink = pagelinks[0];

const 	imagefolder = [{ id:0,
		img00 : 	direct.root03+"00brc.jpg"	,
		img01 : 	direct.root03+"01brc.jpg"	,
		img02 : 	direct.root03+"02brc.jpg"	,
		img03 : 	direct.root03+"03brc.jpg"	,
		img04 : 	direct.root03+"04brc.jpg"	,
		img05 : 	direct.root03+"05brc.jpg"	,
		//----------
		img06 : 	"https://i.pinimg.com/736x/28/ec/b3/28ecb3f53c835f21abb95b0d594a5415.jpg",
		img07 : 	"https://i.pinimg.com/736x/28/ec/b3/28ecb3f53c835f21abb95b0d594a5415.jpg",
		img08 : 	"https://i.pinimg.com/736x/28/ec/b3/28ecb3f53c835f21abb95b0d594a5415.jpg"
		}]
const 	images = imagefolder[0];
	
	
	
	

















