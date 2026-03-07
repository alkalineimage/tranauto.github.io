
const 	indexnav 		=	document.getElementsByClassName("indexnav")[0];
const 	indexbody 		=	document.getElementsByClassName("indexbody")[0];
const 	indexfooter 	=	document.getElementsByClassName("indexfooter")[0];

		// 01 NAVIGATION
		indexnav.innerHTML +=`	<div class="navigation">
								<div class="navigation01">	<a class="navlink"	href="${fromindex.toindexpage}">		${page.name00}</a></div>
								<div class="navigation02">	<a class="navlink"	href="${fromindex.toaboutuspage}">		${page.name01}</a>
															<a class="navlink" 	href="${fromindex.toservicespage}">		${page.name02}</a>
															<a class="navlink" 	href="${fromindex.toportfoliopage}">	${page.name03}</a>
															<a class="navlink" 	href="${fromindex.tocontactuspage}">	${page.name04}</a>
								<div class="navigation03">	&nbsp;</div>
								</div>
								`;
		// 01 INDEX BODY
		indexbody.innerHTML +=`	<div class="brcindex01">
								<div class="brcindex01slogan">	<p>${btxt.ctxt001}</p></div>
								<div class="brcindex01anchor">	<a href="${linkindex.tobeatroot}">${btxt.name01}</a></div>
								</div>
								`;
/*
		// INDEX FOOTER
		indexfooter.innerHTML +=`	<div class="brcindex02">
								<a class="brcindex02social" href="#">${icons.spotify}</a>
								<a class="brcindex02social" href="#">${icons.youtube}</a>
								<a class="brcindex02social" href="#">${icons.instagram}</a>
								<a class="brcindex02social" href="#">${icons.facebook}</a>
								</div>
								`;	

		// BACKGROUND
		transauto.innerHTML +=`	<div class="indexbg"></div>
								`;
		
*/