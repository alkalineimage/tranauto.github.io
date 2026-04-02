
const 	bgcontus 	= document.getElementsByClassName("tranautocontus")[0];
const 	navcontus 	= document.getElementsByClassName("navcontus")[0];
const 	bodycontus 	= document.getElementsByClassName("bodycontus")[0];
const 	footercontus = document.getElementsByClassName("footercontus")[0];

		// 01 NAVIGATION
		navcontus.innerHTML +=`	<div class="navcontus">
		<div class="navcontus01">	<a class="navlink"	href="${fromindex.toindexpage}">		${pagetext.name00}</a></div>
		<div class="navcontus02">	<a class="navlink"	href="${fromindex.toaboutuspage}">		${pagetext.name01}</a>
									<a class="navlink" 	href="${fromindex.toservicespage}">		${pagetext.name02}</a>
									<a class="navlink" 	href="${fromindex.tocontusfoliopage}">	${pagetext.name03}</a>
									<a class="navlink" 	href="${fromindex.tocontactuspage}">	${pagetext.name04}</a>
		<div class="navcontus03">	&nbsp;</div>
		</div>
		`;
		// 01 INDEX BODY
		bodycontus.innerHTML +=`		<div class="bodycontus">
		<div class="bodycontus01">	<h1>${contusinfo.tag01}</h1>
									<p>${contusinfo.tag02}</p>
									<p>${contusinfo.tag03}</p>
									</div>
									</div>
									`;
		// 01 INDEX FOOTER
		footercontus.innerHTML +=`	<div class="footercontus">
		<div class="footercontus01">	</div>
									</div>
									`;

		// 01 INDEX BACKGROUND
		// bgcontus.innerHTML +=`	<img src="${imagelink.index04image}"/> `;
