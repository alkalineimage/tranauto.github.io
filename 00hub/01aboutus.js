
const 	navabtus 	= document.getElementsByClassName("navabtus")[0];
const 	bodyabtus	= document.getElementsByClassName("bodyabtus")[0];
const 	footerabtus	= document.getElementsByClassName("footerabtus")[0];


		// 01 NAVIGATION
		navabtus.innerHTML +=`	<div class="navabtus">
		<div class="navabtus01"><a class="navlink"			href="${fromindex.toindexpage}">		${pagetext.name00}</a></div>
		<div class="navabtus02"><a class="navlink active"	href="${fromindex.toaboutuspage}">		${pagetext.name01}</a>
								<a class="navlink" 			href="${fromindex.toservicespage}">		${pagetext.name02}</a>
								<a class="navlink" 			href="${fromindex.toportfoliopage}">	${pagetext.name03}</a>
								<a class="navlink" 			href="${fromindex.tocontactuspage}">	${pagetext.name04}</a>
								<div class="navabtus03">	&nbsp;</div>
								</div>
								`;

		// 01 INDEX BODY
		bodyabtus.innerHTML +=`	<div class="bodyabtus">
		<div class="contain01">	<h1 class="contain0101">${abtusinfo.tag01}</h1>
								<p 	class="contain0102">${abtusinfo.tag01descript}</p>
								</div>
								</div>
								`;

		// 01 INDEX FOOTER
		footerabtus.innerHTML +=`<div class="footerabtus"></div>
													`;


