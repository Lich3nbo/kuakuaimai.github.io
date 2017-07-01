$(function(){
	// getindexmenu菜单
	function leaderNav(data){
		var arr=[],data=data.result;
		$.each(data,function(i,v){
			
			arr.push(
				'<li id="'+v._id+'">'
				+'<a href="'+v.titlehref+'" id="li'+v.indexmenuId+'">'
				+ v.img
				+'<p class="m_top">'+v.name+'</p>'
				+'</a>'
			 	 +'</li>');

			});

		
		var prevList = arr.slice(0,8);
		var nextList = arr.slice(8);
		var flag = true;
		$('#mm-column ul').append(prevList.join(''));
		$('#li7').on("click",function(){
			if(flag){
				$('#mm-column ul').append(nextList);
				flag=false;
			}else{
				$('#mm-column ul li:nth-child(n+9)').remove();
				flag=true;
			}
		})

		$('#li7').get(0).href ="javascript:;";
	}
	function monetCrtl(data){
		var tag="",data = data.result;
		for(var i=0,len=data.length;i<len;i++){
			tag+='<li id='+data[i]._id+'>'
					+	data[i].productImgSm
					+'	<div class="text f_right">'
					+'		<a href="javasctipt:;">'
					+'			<h3>'
					+'				'+data[i].productName+''
					+'				<span>'+data[i].productPinkage+'</span>'
					+'			</h3>'
					+'		</a>'
					+'		<p class="f_left">'
					+'			'+data[i].productFrom+' | '+data[i].productTime+'	'
					+'		</p>'
					+'		<a href="javasctipt:;" class="count f_right">'
					+'			<b></b>'
					+'			<span>'+data[i].productComCount.replace(/\D/g,"")+'</span>'
					+'		</a>'
					+'	</div>'
					+'</li>'
		}
		$('#mm-content ul').html(tag);
		
	}
	// getindexmenu菜单
	$.ajax({
		type:'get',
		url:'http://127.0.0.1:3000/api/getindexmenu',
		dataType:'jsonp',
		success:function(data){
			leaderNav(data)
		}
	})
	// getmoneyctrl 折扣
	$.ajax({
		type:'get',
		url:'http://127.0.0.1:3000/api/getmoneyctrl',
		dataType:'jsonp',
		success:function(data){
			monetCrtl(data);
		}

	})

	//回到顶部
	    console.log('123');
      	
})
/* column　动态添加　结束*/