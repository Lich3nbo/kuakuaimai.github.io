var URL = decodeURI(location.search);
var ID = getNum(URL);
// 类名
var  Name= URL.split("=")[2];

$(function(){
	//渲染到页面
	function leader(data){
		var  data = data.result[0];
		// 商品名 name
		var name = data.productName;

		name = name.split(" ");
		

		//渲染标题
		var tag = '<li>'
					+'	<a href="index.html">首页 > </a>'
					+'	<a href="productlist.html?categoryId='+data.categoryId+'">'+Name+' > </a>'
					+'	<a href="#" class="name">'+name[0]+' > </a>'
						
					+'</li>';
		$('.menu-nav ul').append(tag);

		tag="";
		// 渲染图片和标题
		tag = '<h2>'
				+ data.productName
				+'</h2>'
				+'<div class="imgs">'
				+ data.productImg
				+'</div>'
		$("#product").append(tag);
		// 渲染比价列表
		$('.buy').append(data.bjShop);
	}
	function comment(data){
		var arr =[];
		var data = data.result;
		console.log(data);
		for(var i=0,len=data.length;i<len;i++){
			arr.push(
				'<li>'
				+'		<div class="top">'
				+'			<span>'+data[i].comName+'</span>'
				+'			<span class="f_right">'+data[i].comTime+'</span>'
				+'			<p>'+data[i].comFrom+'</p>'
				+'		</div>'
				+'		<div class="bottom">'
				+'			<p>'+data[i].comContent+'</p>'
				+'		</div>'
				+'</li>	'
				)
		}
		$('.cmt-ctn').append(arr.join(""));
	}
	//请求商品详细信息数据
	$.get('http://127.0.0.1:3000/api/getproduct?productid='+ID,function(data){
		leader(data);
	})
	//请求商品评论信息
	$.get("http://127.0.0.1:3000/api/getproductcom?productid="+ID,function(data){
		comment(data);
	})
})
// 获取url参数
function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}