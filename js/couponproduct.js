var URL = decodeURI(location.search);
var ID = getNum(URL);
var arr = [];
var name = URL.split("=")[2];
//保存 所有img图片
var imgArr=[];
	var that;
$(function(){

	$('.back').click(function(event) {
		history.back();	
	});


	requestData(ID);
	
})



function requestData(id){
	$.get("http://127.0.0.1:3000/api/getcouponproduct?couponid="+ID,function(data){
		leader(data);
		console.log(data);
	})
}
function leader(data){
	data = data.result;
	$("#mm-header .tlt h2").html(name+"优惠券");
	for(var i=0;i<data.length;i++){
		arr.push(
				`<li id=li${data[i].couponProductId}>
						${data[i].couponProductImg}
						<div class="text f_right clearfix">
							<a href="javasctipt:;">
								<h3>
									${data[i].couponProductName}
									
								</h3>
								<b>${data[i].couponProductPrice}</b>
							</a>

							<p class="f_left p1">
								${data[i].couponProductTime}	
							</p>
							<a href="javasctipt:;" class="count f_right clearfix">
								
								<span>></span>
							</a>
						</div>
					</li>`
			)
		imgArr.push(data[i].couponProductImg);
	}

	$("#ctn").on("click","li",function(){
		//1.主要思路 点击每个li标签 获取每个li标签的索引;
		//2.将索引用　变量 that 保存起来；

		that = this.id.replace(/\D/g,'')
		//让遮罩显示  获取当前Img图片 克隆 显示到 遮罩中
		$('.mask').css('display',"block");
		var img =$(this).find('img').clone(true);
		$('.imgs').html(img);
		
	})
	$('.mask').click(function(e){
		 e.stopPropagation();
		$(this).css('display',"none");
		// return false;
	});

	$("#ctn").append(arr.join(""));
	//点击左，点击右；
	$(".left").click(function(e){
		//  每次点击让索引--;

		 e.stopPropagation();
		 if(that===0){
		 	return;
		 }
		 that--;
		 $('.imgs').html(imgArr[that]);
	})
	$(".right").click(function(e){
		 e.stopPropagation();
		 if(that>=imgArr.length-1){
		 	return ;
		 }
		 that++;
		 $('.imgs').html(imgArr[that]);
	})
}

// 获取 id;
function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}