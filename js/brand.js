var name ="";
$(function(){




	$.get("http://127.0.0.1:3000/api/getbrandtitle",function(data){
		tltData(data);

	})
	

	

})	
	function tltData(data){
		var data = data.result,
			arr =[];
			console.log(data);

		for(var i = 0,len=data.length;i<len;i++){
			name =data[i].brandTitle.slice(0,data[i].brandTitle.length-4);
			 arr.push(
			 	'<li id="lis'+data[i].id+'">'+
			 	'<a href="brandList.html?brandTitleId='+data[i].brandTitleId+'&name='+name+'">'+
				'	<h2 id="'+data[i].titleId+'">'+data[i].brandTitle+'<b class="f_right">></b></h2><ul></ul>'+
				'</a>'+
				'</li>'
			 	)

			 	
		}
		$('#sore>ul').append(arr.join(''));
	}
		
