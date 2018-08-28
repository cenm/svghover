var urlroot = "http://www.chengda-plaza.com/nckubd/shops.action?id=";
function svgClick(url){
	window.open(urlroot+url,'_blank');
}

function svgMouseOver(obj,color){
	var all = obj.getElementsByTagName("path");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill=color;
	}
	var all = obj.getElementsByTagName("text");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill=color;
	}
	obj.style.cursor='pointer';
}
function svgMouseOut(obj,color){
	var all = obj.getElementsByTagName("path");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill=color;
	}
	var all = obj.getElementsByTagName("text");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill=color;
	}
}

