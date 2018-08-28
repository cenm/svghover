var urlroot = "http://60.248.247.190/sd_tainan/sd_index?sd=";
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

