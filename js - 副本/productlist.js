var ID = getNum(location.search);
var page = 1;
var sum ;
$(function(){
	//请求三级联动添加动态数据
	$.get("http://127.0.0.1:3000/api/getcategorybyid?categoryid="+ID,function(data){
		data = data.result[0].category;
		$('.name').text(data+" > ");
	});
	//渲染页面
	leader(page);
	//点击下一页
	$("#right").click(function(){
		if(page<sum){
			page++;
			leader(page);
			if(page==sum){
				return ;
				}
		}

		
	})
	//上一页
	$("#left").click(function(){
		if(page>0){
			page--;
			leader(page);
			if(page===0){
				return;
			}
		}
		$('.count').val(page);
		$('.num').val(sum);
	})	


})

function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}
function leader(page){
	var arr =[];
	$.get("http://127.0.0.1:3000/api/getproductlist?categoryid="+ID+'&&pageid='+page,function(data){
		//计算总页数 渲染到页面；

		sum = Math.ceil(data.totalCount/data.pagesize);
		// $('.count').html(page);
		// $('.num').html(sum);
		
		console.log(tag);
		data =data.result;
		for(var i = 0,len=data.length;i<len;i++){
		arr.push(
				'<li>'+
				'	<a href="#">'+
				'		<div  class="imgs f_left">'+
							data[i].productImg+
				'		</div>'+
				'		<div class="intro f_left">'+
				'			<h2>'
							+data[i].productName+
				'			</h2>'+
				'			<p>'+data[i].productPrice+'</p>'+
				'			<p>'+
				'				<span>'+data[i].productQuote+'</span>'+
				'				<span>'+data[i].productCom+'</span>'+
				'			</p>'+
				'		</div>'+
				'	</a>'+
				'</li>'
			)
		}
	



		$('#productlist').html(arr.join(""));
			})
}

	//动态创建select option
function selects(p,s){
	console.log(1)
	var tag ="";
	for(var i=0;i<s;i++){
		 tag +=  '<li><span class="count">'+i+'</span>/<span class="num">'+s+'</span></li>'
	}
	$('#select').html(tag);
	console.log(tag);
}