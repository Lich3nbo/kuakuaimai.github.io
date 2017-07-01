$(function(){

	function tltData(data){
		var data = data.result,
			arr =[];
			console.log(data);

		for(var i = 0,len=data.length;i<len;i++){
			 arr.push(
			 	'<li id="lis'+data[i].id+'">'+
				'	<h2 id="'+data[i].titleId+'">'+data[i].title+'<b class="f_right">></b></h2><ul></ul>'+

				'</li>'
			 	)

			 	
		}
		$('#sore>ul').append(arr.join(''));
		
		// $('#sore>ul>li>h2').prop({
		// 	isClick: 'true'h
		// })
		//找到所有的li标签 ,循环遍历当前的数据
		$('#sore>ul>li>h2').on('click',function(){
		
			var i = this.id.replace(/\D/g,'');
			//获取数据 保存在数组中 点击之后APPEND 到页面
			var that = $(this).parent();
			var tis = $(this);
			if(!this.isClick){
				$.get("http://127.0.0.1:3000/api/getcategory?titleid="+i,function(data){

					var listArr=[];
			 		var list= data.result;
			 		console.log(list);
			 		for(var i = 0,len=list.length;i<len;i++){

		 	 		listArr.push( '<li id="'+list[i]._id+'"><a href="productlist.html?categoryId='+list[i].categoryId+'">'+list[i].category+'</a></li>');
			 		}
					that.find('ul').append(listArr.join(''));
					tis.prop('isClick',true)
	
					
	 	 		})
			}else{
				that.find('li').remove();
					tis.prop('isClick',false);
		

			}

		})
		

	}

	$.get("http://127.0.0.1:3000/api/getcategorytitle",function(data){
		tltData(data);
	})
	

	

})