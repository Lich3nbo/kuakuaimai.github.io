 var arr = [];
 
$(function(){
	$('.back').click(function(){
		history.back();
	})
	//获取数据
	requestTltData();
	//nav滑动
	navTouch();
	//商品列表
	requestbaicai(0);
	
	
	
})
// 获取标题id
function requestTltData(){
	$.get('http://127.0.0.1:3000/api/getbaicaijiatitle',function(data){
		leader(data);
	})
}
function requestbaicai(tltid){
	$.get("http://127.0.0.1:3000/api/getbaicaijiaproduct?titleid="+tltid,function(data){
		leaderBc(data);
	})
}
function leader(data){
  	var data = data.result;
  	for(var i =0,len=data.length;i<len;i++){
  		arr.push(
  			'<li id="li'+data[i].titleId+'"><a href="javascript:;">'+data[i].title+'</a></li>'
  			)
  	}
  	$('nav ul').html(arr.join(""));
  	$("nav ul li").on("click",function(){
		var a =this.id.replace(/\D/g,"");
		requestbaicai(a);
	})
}
function leaderBc(data){
	arr=[];
	console.log(data);
	var data =data.result;
	console.log(arr)
	for(var i=0,len=data.length;i<len;i++){
			arr.push(`<li>
						${data[i].productImg}
						<div class="text f_right clearfix">
							<a href="javasctipt:;">
								<h3>
									${data[i].productName}				
									
								</h3>
							</a>
							<p class="f_left">
								${data[i].productPrice}
							</p>
							${data[i].productCouponRemain}
							
							${data[i].productCoupon}
							${data[i].productHref}
						</div>
					</li>`)
	}
	$('#ctn').html(arr.join(""));
	
	$("#ctn li img").error(function(){
		this.src = "images/haitao.png";
	})
	
}
//nav滑动
function navTouch(){
	// nav滑动
	// nav 宽度    ul 宽度  
	var navW = $("nav").width();

	var ulW = $("nav ul").width();

	//lis
	var lis =$("nav ul li");
	//设置最大最小值;
	var maxLeft = 0;
	var minLeft = navW - ulW;
	//最大最小滑动距离
	var maxBounceLeft =maxLeft+100;
    var minBounceLeft = minLeft-100;
	//实现滑动
	var startX,moveX,endX,distanceX,currenX =0;
	$('nav ul')[0].addEventListener("touchstart",function(e){
		startX = e.targetTouches[0].clientX;

	} )
	$('nav ul')[0].addEventListener("touchmove",function(e){
		moveX = e.targetTouches[0].clientX;

		distanceX =moveX-startX;
		if(currenX + distanceX > maxBounceLeft || currenX+distanceX<minBounceLeft){

			return ;
		}
		$("nav ul").css("transition","none");
		$("nav ul").css("left",distanceX+currenX);

	} )
	$('nav ul')[0].addEventListener("touchend",function(e){
	

		if(currenX+distanceX < minLeft){
			currenX = maxLeft;
			$("nav ul").css('transition',"left .5s");
			$("nav ul").css("left",minLeft);
		}
		else if(currenX+distanceX >maxLeft){
			currenX = maxLeft;
			$("nav ul").css('transition',"left .5s");
			$("nav ul").css("left",maxLeft);
		}
		else {
			currenX += distanceX;
		}
		
	} )
}