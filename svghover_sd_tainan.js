var urlroot = "http://shoppingfun.tainan.gov.tw/sd_index?sd=";
var url2;
function svgClick(url){
	switch(url) {
    		case '成大':
        		url2=3;
        		break;
    		case '安平':
       			url2=4;
        		break;
		case '善化':
       			url2=5;
        		break;
		case '中正':
       			url2=6;
        		break;
		case '孔廟':
       			url2=7;
        		break;
		case '國華友愛':
       			url2=8;
        		break;
		case '麻豆':
       			url2=9;
        		break;
		case '新化':
       			url2=10;
        		break;
		case '新營':
       			url2=11;
        		break;
		case '海安':
       			url2=12;
        		break;
		case '下營':
       			url2=13;
        		break;
		case '關子嶺':
       			url2=14;
        		break;
		case '東山':
       			url2=15;
        		break;
		case '玉井':
       			url2=16;
        		break;
		case '灣裡':
       			url2=17;
        		break;
		case '站前':
       			url2=18;
        		break;
		case '三星':
       			url2=19;
        		break;
		case '佳里':
       			url2=20;
        		break;
		case '北門':
       			url2=21;
        		break;
		case '鹽水':
       			url2=22;
        		break;
		case '後壁':
       			url2=23;
        		break;
			
	}
	window.open(urlroot+url2,'_blank');
}

function svgMouseOver(obj,color){
	obj.style.cursor='pointer';
	//obj.style.opacity = ".5";
}
function svgMouseOut(obj,color){
	
}

