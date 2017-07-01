$(function(){
	$('.back').click(function(){
		history.back();
	})
	//渲染 
	requestData();
})


function requestData(){
	$.get("http://127.0.0.1:3000/api/getcoupon",function(data){
		leader(data);
		console.log(data);
	})
}
function leader(data){
	var arr =[];
	data= data.result;	
	for(var i=0,len=data.length;i< len;i++){
		arr.push(
					`<li>
					<a href="${data[i].couponLink}?couponId=${data[i].couponId}&name=${data[i].couponTitle}">
						<img src="${data[i].couponImg}" alt="">
						<p>${data[i].couponTitle}</p>
					</a>
					</li>`
			)
	}
	$('#ctn').append(arr.join(""));
}