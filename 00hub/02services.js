
const 	bgservs 	= document.getElementsByClassName("tranauto-servs")[0];
const 	navservs 	= document.getElementsByClassName("navservs")[0];
const 	bodyservs 	= document.getElementsByClassName("bodyservs")[0];
const 	footerservs = document.getElementsByClassName("footerservs")[0];

		// 01 NAVIGATION
		navservs.innerHTML +=`	<div class="navservs">
		<div class="navservs01">	<a class="navlink"	href="${fromindex.toindexpage}">		${pagetext.name00}</a></div>
		<div class="navservs02">	<a class="navlink"	href="${fromindex.toaboutuspage}">		${pagetext.name01}</a>
									<a class="navlink" 	href="${fromindex.toservicespage}">		${pagetext.name02}</a>
									<a class="navlink" 	href="${fromindex.toportfoliopage}">	${pagetext.name03}</a>
									<a class="navlink" 	href="${fromindex.tocontactuspage}">	${pagetext.name04}</a>
		<div class="navservs03">	&nbsp;</div>
		</div>
		`;
		// 01 INDEX BODY
		bodyservs.innerHTML +=`		<div class="bodyservs">
		<div class="bodyservs01">	<h1>${service.title}</h1>
									<p>${service.tag01descript}</p>
									<p>${service.tag02descript}</p>
									<p>${service.tag02}</p>
									</div>
									</div>
									`;
		// 01 INDEX FOOTER
		footerservs.innerHTML +=`	<div class="footerservs">
		<div class="footerservs01">	</div>
									</div>
									`;

		// 01 INDEX BACKGROUND
		// bgservs.innerHTML +=`	<img src="${imagelink.index04image}"/> `;
