
const 	bg 			= document.getElementsByClassName("transauto")[0];
const 	navigation 	= document.getElementsByClassName("navigation")[0];
const 	body 		= document.getElementsByClassName("body")[0];
const 	footer 		= document.getElementsByClassName("footer")[0];

		// 01 NAVIGATION
		navigation.innerHTML +=`<div class="navigation">
								<div class="navigation01">	<a class="navlink"	href="${fromindex.toindexpage}">		${pagetext.name00}</a></div>
								<div class="navigation02">	<a class="navlink"	href="${fromindex.toaboutuspage}">		${pagetext.name01}</a>
															<a class="navlink" 	href="${fromindex.toservicespage}">		${pagetext.name02}</a>
															<a class="navlink" 	href="${fromindex.toportfoliopage}">	${pagetext.name03}</a>
															<a class="navlink" 	href="${fromindex.tocontactuspage}">	${pagetext.name04}</a>
								<div class="navigation03">	&nbsp;</div>
								</div>
								`;
		// 01 INDEX BODY
		body.innerHTML +=`	<div class="body">
								<div class="tagbox01">
								<div class="tagbox0101">${tag.tag01}</div>
								<div class="tagbox0102">${tag.tag01descript}</div>
								<div class="tagbox0103"><a href="${fromindex.totranautostore}">${pagetext.name05}</a></div>
								</div>
								</div>
								`;
		// 01 INDEX FOOTER
		footer.innerHTML +=`	
								<div class="footer">
								<div class="footer01"><a href="${indexsocials.toinstagram}">${icon.instagram}</a></div>
								<div class="footer01"><a href="${indexsocials.tofacebook}">${icon.facebook}</a></div>
								<div class="footer01"><a href="${indexsocials.totwitter}">${icon.twitter}</a></div>
								</div>
								`;
	
		// 01 INDEX BACKGROUND
		bg.innerHTML +=`	<img src="${imagelink.index04image}"/> `;







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