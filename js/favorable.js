var page = 0;
var sumPage;
$(function(){
	//点击后退
	$('.back').click(function(event) {
		history.back();	
	});
	leader(page);
	// 下一页
	$('#right').click(function(){
		// 这里-1 是因为 page是从0开始 所以要—1；
		if(page===sumPage-1){
			console.log(1);
			return ;
		}

		page++;
		leader(page);

	})
	$('#left').click(function(){
		if(page<1){
			return ;
		}
		page--;
		leader(page);
	})
})
function leader(page){
	var arr =[];
	$.get('http://127.0.0.1:3000/api/getmoneyctrl?pageid='+page,function(data){
		console.log(data);
		sumPage = Math.ceil(data.totalCount/data.pagesize);
		console.log(sumPage);
		var data = data.result;

		// 先将页数显示到页面
		$(".page").text(page+1);
		$(".num").text(sumPage);
		// 将第一页数据渲染页面
		for(var i=0,len=data.length;i<len;i++){
		 var cct =	data[i].productComCount.replace(/\D/g, " ")
		
			arr.push(
				'<li id='+data[i]._id+'>'
				+  data[i].productImgSm
				+'		<div class="text f_right">'
				+'			<a href="favorableShow.html?productid='+data[i].productId+'">'
				+'				<h3>'
				+                   data[i].productName
				+'					<span>'+data[i].productPinkage+'</span>'
				+'				</h3>'
				+'			</a>'
				+'			<p class="f_left">'
				+'							'+data[i].productFrom+' | '+data[i].productFrom+'			'
				+'			</p>'
				+'			<a href="javasctipt:;" class="count f_right">'
				+'				<b></b>'
				+'				<span>'+cct+'</span>'
				+'			</a>'
				+'		</div>'
				+'	</li>'

				)
		}
		$('#ctn').html(arr.join(""));
	})
	
	
}