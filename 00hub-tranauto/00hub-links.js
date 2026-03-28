
//		PAGE NAMES
//--------------------------------------------------------------
const 	pages = [{ id:0,
		indexpage 		: "index.html"				,
		aboutuspage		: "01aboutus.html"			,
		servicespage	: "02services.html"			,
		portfoliopage	: "03portfolio.html"		,
		contactuspage	: "04contactus.html"		,
		//
		tranautostore	: "tranautostore.html"		,
		tranautostorecss: "00style-transauto.css"	,
		}];
const 	page = pages[0];

//  CHAINS
//--------------------------------------------------------------
const 	chains = [{ id:0,	chain00 : "/"							,
							chain01 : "../"							,
							chain02 : "../../"						,
							chain03 : "../../../"					,
							chain04 : "../../../../"				,
							chain05 : "../../../../../"				,
							chain06 : "../../../../../../"			,
							chain07 : "../../../../../../../"		,
							chain08 : "../../../../../../../../"	,
							chain09 : "../../../../../../../../../"	,
							chain10 : "../../../../../../../../../../"
							}];
							const 	chain = chains[0];

const 	directory 	= [{ id:0,	topipe01 : "00hub-tranauto/"		,
								topipe02 : "00hub-tranauto/03imgs/",	
								topipe002 : chain.chain01 + "03imgs/",
								}];
								const 	direct 		= directory[0];

//		PAGE LINKS
//--------------------------------------------------------------
const 	pagelinks 	= [{ id:0,
					toindexpage 	: page.indexpage ,
					toaboutuspage 	: direct.topipe01 + page.aboutuspage	, toaboutus02page : direct.topipe002 + page.aboutuspage	,
					toservicespage 	: direct.topipe01 + page.servicespage	,
					toportfoliopage : direct.topipe01 + page.portfoliopage	,
					tocontactuspage : direct.topipe01 + page.contactuspage	,
					totranautostore : direct.topipe01 + page.tranautostore	,
					}];
const 	fromindex	= pagelinks[0];


		// PAGE LINKS FROM INDEX
const 	indexlinkstosocials = [{ id:0,
		toinstagram 	: "#https://www.instagram.com/tranauto"	,
		tofacebook		: "#https://www.facebook.com/tranauto"	,
		totwitter		: "#https://twitter.com/tranauto"	,
		}];
const 	indexsocials = indexlinkstosocials[0];

//		IMAGES
//--------------------------------------------------------------
//		INDEX
const 	pageimages = [{ id:0,	index01image 	: "00index01.jpg",
								index02image 	: "00index02.jpg",
								index03image 	: "00index03.jpg",
								index04image 	: "00index04.jpg",
								index05image 	: "00index05.jpg",
								index06image 	: "00index06.jpg",
								index07image 	: "00index07.jpg",
								index08image 	: "00index08.jpg",
								index09image 	: "00index09.jpg",
								}];
const 	pageimage = pageimages[0];

const 	indeximgs = [{ id:0,	index01image : direct.topipe02 + pageimage.index01image,
								index02image : direct.topipe02 + pageimage.index02image,
								index03image : direct.topipe02 + pageimage.index03image,
								index04image : direct.topipe02 + pageimage.index04image,
								index05image : direct.topipe02 + pageimage.index05image,
								index06image : direct.topipe02 + pageimage.index06image,
								index07image : direct.topipe02 + pageimage.index07image,
								index08image : direct.topipe02 + pageimage.index08image,
								index09image : direct.topipe02 + pageimage.index09image,
								}];
								const 	indeximg = indeximgs[0];

const 	imagelinks = [{ id:0,	index01image : direct.topipe002 + pageimage.index01image,
								index02image : direct.topipe002 + pageimage.index02image,
								index03image : direct.topipe002 + pageimage.index03image,
								index04image : direct.topipe002 + pageimage.index04image,
								index05image : direct.topipe002 + pageimage.index05image,
								index06image : direct.topipe002 + pageimage.index06image,
								index07image : direct.topipe002 + pageimage.index07image,
								index08image : direct.topipe002 + pageimage.index08image,
								index09image : direct.topipe002 + pageimage.index09image,
								}];
								const 	imagelink = imagelinks[0];

