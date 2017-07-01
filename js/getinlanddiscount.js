var sum;


//加载的数据放在arr里；
var arr =[];
//把数据保存在 data1数组里
var data1= [];
//将i 提出来 一会要作为变量加载；
var i = 0;
var scrollTop1, height;

$(function(){
	$(".back").click(function(){
		history.back();
	})
	leader();
	//获取滚动条到顶部的距离；
	
	//容器减去网页的高度 容器的高度是动态的 当加载下一条数据的时候就会变高
	

	$(window).on('scroll',function(){

		scrollTop1 = $(window).scrollTop();

		console.log($('#mm-layout').height())
		console.log($(window).height())
		console.log($(window).scrollTop())
		if($(window).scrollTop() == $('#mm-layout').height() - $(window).height()){
			console.log('a')
			if(i>= data1.length){
				return ;
			}
			for( var j =i ; j<i+4; j++){
				arr.push(
						'<li>'+
					'<a href="getinlanddiscountShow.html?productid='+data1[j].productId+'">'+
						data1[j].productImg+
					'	<h3>'+data1[j].productName+'</h3>'+
					'	<span>'+data1[j].productPrice+'</span>'+
					'	<p>'+data1[j].productFrom+' | '+data1[j].productTime+'</p>'+
					'</a>'+
					'</li>'
					)
			}
			$('#content ul').append(arr.join(''));
			arr=[];
				// 让 i =j;
			i = j;
			// 重新计算高度;
			height = $('#content').height() - $(document.body).height();

		}
	})

})
function leader(){

	$.get('http://127.0.0.1:3000/api/getinlanddiscount',function(data){
		console.log(data);
		 data1 =data.result;
		for( i =0;i<8;i++){

			arr.push(
					'<li>'+
					'<a href="getinlanddiscountShow.html?productid='+data1[i].productId+'">'+
						data1[i].productImg+
					'	<h3>'+data1[i].productName+'</h3>'+
					'	<span>'+data1[i].productPrice+'</span>'+
					'	<p>'+data1[i].productFrom+' | '+data1[i].productTime+'</p>'+
					'</a>'+
					'</li>'
				)
			
		}
	
			$('#content ul').append(arr.join(''));

			arr = [];
			 scrollTop1 = $(window).scrollTop();
			 height = $("#mm-layout").height()-$(window).height();
			 	console.log($("#mm-layout").height());
				console.log($("body").height());
				console.log(height);
		//预加载
	})
}