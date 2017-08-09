function svgClick(url){
	window.open(url,'_blank');
}

function svgMouseOver(obj){
	var all = obj.getElementsByTagName("path");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill='RED';
	}
}
function svgMouseOut(obj){
	var all = obj.getElementsByTagName("path");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill='black';
	}
}

