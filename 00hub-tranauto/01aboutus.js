
const 	navabtus 	= document.getElementsByClassName("tranauto-abtus")[0];
const 	bodyabtus	= document.getElementsByClassName("tranauto-abtus")[0];
const 	footerabtus	= document.getElementsByClassName("tranauto-abtus")[0];


		// 01 NAVIGATION
		navabtus.innerHTML +=`<div class="navabtus">
								<div class="navabtus01">	<a class="navlink active"	href="${fromindex.toindexpage}">		${pagetext.name00}</a></div>
								<div class="navabtus02">	<a class="navlink"			href="${fromindex.toaboutuspage}">		${pagetext.name01}</a>
															<a class="navlink" 			href="${fromindex.toservicespage}">		${pagetext.name02}</a>
															<a class="navlink" 			href="${fromindex.toportfoliopage}">	${pagetext.name03}</a>
															<a class="navlink" 			href="${fromindex.tocontactuspage}">	${pagetext.name04}</a>
								<div class="navabtus03">	&nbsp;</div>
								</div>
								`;
		// 01 INDEX BODY
		bodyabtus.innerHTML +=`	<div class="bodyabtus">
								<div class="contain01">	<h1 class="contain01">${tag.tag01}</h1>
														<p class="tagbox0102">${tag.tag01descript}</p>
														<p class="tagbox0103">${pagetext.name05}</p>
														</div>
														</div>
														`;
		// 01 INDEX FOOTER
		footerabtus.innerHTML +=`	
							<div class="footerabtus">
							<div class="footerabtus01">	<a href="${indexsocials.toinstagram}">${icon.instagram}</a>
													<a href="${indexsocials.tofacebook}">${icon.facebook}</a>
													<a href="${indexsocials.totwitter}">${icon.twitter}</a>
													</div>
													</div>
													`;


