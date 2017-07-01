var  URL = decodeURI(location.search);
// var  ID = getNum(URL);
var tltid = URL.split('=')[3];
var name1 = URL.split('=')[2].split("&")[0]; 

var pdtid = URL.split('=')[1].split("&")[0];

$(function(){
	$('.name1').get(0).href="brandProductList.html?id="+tltid+"&name="+name1;
	$('.name1').text(name1);

	data(pdtid);
})
function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}

function data(id){
	$.get("http://127.0.0.1:3000/api/getproductcom?productid="+id,function(data){
		console.log(data);
	})
}