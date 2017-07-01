var URL = decodeURI(location.search);
var ID = getNum(URL);
var name = 	URL.split("=")[2];
var name1= "";
// console.log(name);
$(function(){
	$("h3").text(name+"那个牌子好");
	$('.name').text(name);
	$.get("http://127.0.0.1:3000/api/getbrand?brandtitleid="+ID,function(data){
		tltData(data);
		
		$('.num').get(0).style.background="red";
		$('.num').get(1).style.background="#FF9314";
		$('.num').get(2).style.background="#8ADF5B";
	})
	
})	
	function tltData(data){

		var data = data.result,
			arr =[];
		for(var i = 0,len=data.length;i<len;i++){
			name1= data[i].brandName;
			console.log(name1);
			 arr.push(
			 	`<li>
					<a href="brandProductList.html?id=${ID}&name=${name1}">
						<b class='num'>${i+1}</b>
						<h4>${data[i].brandName}</h4>
						<b class="jt"> > </b>
						<p>${data[i].brandInfo}</p>
					</a>
				
				</li>`);
			 	
		}

		$('#sore>ul').append(arr.join(''));
	}
function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}	
