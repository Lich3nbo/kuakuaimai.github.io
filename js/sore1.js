$(function(){

	function tltData(data){
		var data = data.result,
			arr =[];
				console.log(arr);
		for(var i = 0,len=data.length;i<len;i++){
			 arr.push(
			 	'<li id="'+data[i]._id+'">'+
				'	<h2 id="'+data[i].titleId+'">'+data[i].title+'<b class="f_right">></b></h2>'+
				'</li>'
			 	)

		 	
		}
	
		$('#sore>ul').append(arr.join(''));	

	}
	


	$.get("http://127.0.0.1:3000/api/getcategorytitle",function(data){
				console.log(data);

		tltData(data);
	})

})