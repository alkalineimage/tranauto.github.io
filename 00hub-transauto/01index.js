
const 	indexbg 		=	document.getElementsByClassName("indextransauto")[0];
const 	indexnav 		=	document.getElementsByClassName("indexnav")[0];
const 	indexbody 		=	document.getElementsByClassName("indexbody")[0];
const 	indexfooter 	=	document.getElementsByClassName("indexfooter")[0];

		// 01 NAVIGATION
		indexnav.innerHTML +=`	<div class="indexnav">
								<div class="indexnav01">	<a class="navlink"	href="${fromindex.toindexpage}">		${page.name00}</a></div>
								<div class="indexnav02">	<a class="navlink" 	href="${fromindex.toservicespage}">		${page.name01}</a>
															<a class="navlink"	href="${fromindex.toaboutuspage}">		${page.name02}</a>
															<a class="navlink" 	href="${fromindex.toportfoliopage}">	${page.name03}</a>
															<a class="navlink" 	href="${fromindex.tocontactuspage}">	${page.name04}</a>
								<div class="indexnav03">	&nbsp;</div>
								</div>
								`;
		// 01 INDEX BODY
		indexbody.innerHTML +=`	<div class="indexbody00">
		
								<div class="indextagbox01">
								<div class="indextagbox0101">${tag.tag01}</div>
								<div class="indextagbox0102">${tag.tag01descript}</div>
								<div class="indextagbox0103"><a src="${fromindex.toservicespage}">${fromindex.servicepitch}</a></div>
								</div>
								</div>
								`;
		// 01 INDEX BACKGROUND
		indexbg.innerHTML +=`	<img src="${image.toindexpage}"/> `;







/*
		// INDEX FOOTER
		indexfooter.innerHTML +=`	<div class="brcindex02">
								<a class="brcindex02social" href="#">${icons.spotify}</a>
								<a class="brcindex02social" href="#">${icons.youtube}</a>
								<a class="brcindex02social" href="#">${icons.instagram}</a>
								<a class="brcindex02social" href="#">${icons.facebook}</a>
								</div>
								`;
*/