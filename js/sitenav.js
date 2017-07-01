 var arr = [];
 
$(function(){
	$('.back').click(function(){
		history.back();
	})
	//获取数据
	requestSite();
	//nav滑动

	//商品列表

	
	
	
})
// 获取标题id
function requestSite(){
	$.get('http://127.0.0.1:3000/api/getsitenav',function(data){
		console.log(data);
		leader(data);
	})
}

function leader(data){
  	var data = data.result;
  	for(var i =0,len=data.length;i<len;i++){
  		arr.push(
  			`<li>
					<a href="${data[i].navHref}">
						<img src=${data[i].navImg}>
						
						<span >${data[i].navTitle}</span>
					
					</a>
				</li>	`

  			)
  	}
  	$("#content ul").html(arr.join(""));
  	
}
