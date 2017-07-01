var ID = getNum(location.search);
var arr =[];
$(function(){
	$('.back').click(function(event) {
		history.back();	
	});
	$.get('http://127.0.0.1:3000/api/getdiscountproduct?productid='+ID,function(data){
		console.log(data);

		data= data.result[0];
		var city ="";
		if(data.productCity){
			city = data.productCity;
		}
		arr.push(
			'<h2>'+data.productName+'</h2>	'+
			'<p class="p1">'+data.productFrom+data.productFrom+data.productTips+'</p>	'+
			'<div class="imgsm clearfix">	'+
			'	<p class="p2">'+data.productInfo+'</p>	'+
				data.productImg			+
			'	'+
			'</div>	'+
			'<p class="p3">'+data.productInfo+'</p>	'+
			'<a href="javasctipy:;" class="imglg">	'+
				data.productImg+
			'</a>	'+
				city		+
			'<div class="buy">	'+
			'	<a href="javascript:;">前往购买</a>	'+
			'</div>	'+
			'<div class="ewm">	'+
			'	<img src="images/mmbweixin2.png" alt="">	'+
			'</div>	'+
			data.productComment
		)
		$("#content").html(arr.join(''));
	})
})
function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}
