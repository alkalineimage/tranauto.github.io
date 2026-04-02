
const 	bgport 	= document.getElementsByClassName("tranautoport")[0];
const 	navport 	= document.getElementsByClassName("navport")[0];
const 	bodyport 	= document.getElementsByClassName("bodyport")[0];
const 	footerport = document.getElementsByClassName("footerport")[0];

		// 01 NAVIGATION
		navport.innerHTML +=`	<div class="navport">
		<div class="navport01">	<a class="navlink"	href="${fromindex.toindexpage}">		${pagetext.name00}</a></div>
		<div class="navport02">	<a class="navlink"	href="${fromindex.toaboutuspage}">		${pagetext.name01}</a>
									<a class="navlink" 	href="${fromindex.toservicespage}">		${pagetext.name02}</a>
									<a class="navlink" 	href="${fromindex.toportfoliopage}">	${pagetext.name03}</a>
									<a class="navlink" 	href="${fromindex.tocontactuspage}">	${pagetext.name04}</a>
		<div class="navport03">	&nbsp;</div>
		</div>
		`;
		// 01 INDEX BODY
		bodyport.innerHTML +=`		<div class="bodyport">
		<div class="bodyport01">	<h1>${portfolioinfo.tag01}</h1>
									<p>${portfolioinfo.tag02descript}</p>
									<p>${portfolioinfo.tag02descript}</p>
									<p>${portfolioinfo.tag02}</p>
									</div>
									</div>
									`;
		// 01 INDEX FOOTER
		footerport.innerHTML +=`	<div class="footerport">
		<div class="footerport01">	</div>
									</div>
									`;

		// 01 INDEX BACKGROUND
		// bgport.innerHTML +=`	<img src="${imagelink.index04image}"/> `;
