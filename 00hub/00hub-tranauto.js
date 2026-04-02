
//		INDEX -----------------------------
const 	pagenames = [{ id:0,
		title: "Page Names"	,
		name00: "TranAuto"	,	index:		"tranauto",
		name01: "About Us"	,	aboutus:	"aboutus",
		name02: "Services"	,	services:	"services",
		name03: "Portfolio"	,	portfolio:	"portfolio",
		name04: "Contact Us",	contactus:	"contactus",
		name05: "Shop Now"	,
		}]	
const	pagetext =	pagenames[0];

const 	indextags = [{ id:0,
		title:"Index Tags",
		tag01:"Find the car suited for your heart",		
		tag01descript:`	Finding a car is a daunting task, especially when you have a perticular
						car in mind or you envision certain principles such as safety in your search.
						Either, way, you want the kind of service which is dependable and has a wide range
						vehicle options, suited for a variety of use cases.
						Join the many customers who have enjoyed our services in helping them find the perfect car.
						`,
		tag02:"A car is more than a status symbol",
		tag02descript:"	Benoni, Johannesburg",
		}]
const	tag =	indextags[0];

const 	pageicons = [{ id:0,
		basket:		`<i class="bi bi-cart2">	</i>`	,	youtube: 	`<i class="bi bi-youtube">	</i>`	,
		playbttn: 	`<i class="bi bi-play-fill"></i>`	,	threads: 	`<i class="bi bi-threads">	</i>`	,
		instagram: 	`<i class="bi bi-instagram"></i>`	,	tiktok:  	`<i class="bi bi-tiktok">	</i>`	,
		facebook: 	`<i class="bi bi-facebook">	</i>`	,	twitter: 	`<i class="bi bi-twitter-x"></i>`	,
		spotify: 	`<i class="bi bi-spotify">	</i>`	,
		vimeo: 		`<i class="bi bi-vimeo">	</i>`	
		}]
const 	icon = pageicons[0];

const 	footercontacts = [{ id:0,
		telephone:	`+27 12 345 6789`	,
		mobile:		`+27 82 345 6789`	,
		email: 		`info@tranauto.co.za`	,
		}]
const 	contact = footercontacts[0];

const 	footerdisclaimer = [{ id:0,
		rights:	`All rights reserved`	,
		}]
const 	disclaimer = footerdisclaimer[0];

/////// ABOUT US
const 	abtus = [{ id:0,
		title:`			About Us`,
		tag01:`			Company History`,
		tag01descript:`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim et id est laborum.
						`,
		tag02descript:`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim et id est laborum.
						`,
		tag02:"A car is more than a status symbol",
		}]
const	abtusinfo =	abtus[0];

/////// SERVICES
const 	services = [{ id:0,
		title:`			What We Offer`,
		tag01:`			Company History`,
		tag01descript:`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim et id est laborum.
						`,
		tag02descript:`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim et id est laborum.
						`,
		tag02:"A car is more than a status symbol"
		}];
const	service =	services[0];


///////////////////
/////// PORTFOLIO
///////////////////
const 	portfolio = [{ id:0,
		title:`			Portfolio`,
		tag01:`			Our Work`,
		tag01descript:`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim et id est laborum.
						`,
		tag02descript:`	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim et id est laborum.
						`,
		tag02:"A car is more than a status symbol"
		}];
const	portfolioinfo =	portfolio[0];

const 	eventdates = [{ id:0,
		title:"Event Dates"	, 
		jan:"January"	, jul:"July"		, 	
		feb:"February"	, aug:"August"		, 	
		mar:"March"		, sep:"September"	, 	
		apr:"April"		, oct:"October"		, 	
		may:"May"		, nov:"November"	, 	
		jun:"June"		, dec:"December"	,	
		//
		dig01:1, dig06:6,  dig11:11, dig16:16, dig21:21, dig26:26, 
		dig02:2, dig07:7,  dig12:12, dig17:17, dig22:22, dig27:27,
		dig03:3, dig08:8,  dig13:13, dig18:18, dig23:23, dig28:28,
		dig04:4, dig09:9,  dig14:14, dig19:19, dig24:24, dig29:29,
		dig05:5, dig10:10, dig15:15, dig20:20, dig25:25, dig30:30,
		dig31:31,
		//
		year25:2025, year26:2026, year27:2027, year28:2028,
		year29:2029, year30:2030, year31:2031, year32:2032,

		}]
const	eventdate =	eventdates[0];

// Event Calculator
const 	eventsponsorform = [{
		id:0,	clientname		: "Name",
				clientsurname	: "Surname",
				clientemail		: "Email",
				clientaddress	: "Address",
				clientpostal	: "Postal",
				clientmobile	: "Mobile"
				}]
const	eventsponsor = eventsponsorform[0];

