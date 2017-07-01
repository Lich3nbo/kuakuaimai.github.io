var shopid = 0;
var areaid = 0;
var gsArr = [];

$(function(){
	$('.back').click(function(){
		history.back();
	})
	getGs();

	getArea();

	getProduct(shopid,areaid);
})
// 1
function getGs(){
	$.get("http://127.0.0.1:3000/api/getgsshop",function(data){
		leaderGs(data);
		Ulclick(".gs",".gsChild");
		
	})
}
// 2
function getArea(){
	$.get("http://127.0.0.1:3000/api/getgsshoparea",function(data){
	
		leaderArea(data);
		
		Ulclick(".area",".areaChild");

	})
}
// 3
function getProduct(spId,arId){
	console.log(spId+arId);

	$.get("http://127.0.0.1:3000/api/getgsproduct?shopid="+spId+"&areaid="+arId,function(data){
		
		leaderProduct(data);
				
	})
}
// 1
function leaderGs(data){
	var data = data.result;

	for(var i =0,len=data.length;i<len;i++){
		gsArr.push(
			"<li>"+data[i].shopName+"</li>"
			)	
	}
	$(".gsChild").html(gsArr.join(""));
	gsArr=[];
}
// 2
function leaderArea(data){
	var data = data.result;

	for(var i =0,len=data.length;i<len;i++){
		gsArr.push(
			"<li>"+data[i].areaName+"</li>"
			)	
	}
	$(".areaChild").html(gsArr.join(""));
	gsArr=[];
}
function leaderProduct(data){
	var data = data.result;

	for(var i =0,len=data.length;i<len;i++){
		gsArr.push(
				`<li>
					<a href="javascript:;">
						<img src="${data[i].productImg}">
						<h3>${data[i].productName}</h3>
						<span class="f_left">${data[i].productPrice}</span>
						<div class="coudan f_right">
							去凑单
						</div>
					</a>
				</li>`	

			)	
	}
	$("#content ul").html(gsArr.join(""));
	gsArr=[];
}



function Ulclick(name,name1){
	$(name).click(function(){

		if(!(this.isclick==="true") ){
			$(name1).show();
			$(this).prop("isclick","true");
		}else{
			$(name1).hide();
			$(this).prop("isclick","false");
		}

		
	})
	$(name1).find("li").click(function(e){
			e.stopPropagation();
			
			if(name1 === ".gsChild"){
			 shopid =$(this).index();
			}else{
				areaid = $(this).index();
			}
			$(name1).hide();
			$(name).prop("isclick","false");
			$(name).find("span").html($(this).text());
			getProduct(shopid,areaid);
		})

}
