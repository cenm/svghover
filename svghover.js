function svgClick(url){
	window.open(url,'_blank');
}

function svgMouseOver(this){
	var all = this.getElementsByTagName("path");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill='RED';
	}
}
function svgMouseOut(this){
	var all = this.getElementsByTagName("path");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].style.fill='black';
	}
}

