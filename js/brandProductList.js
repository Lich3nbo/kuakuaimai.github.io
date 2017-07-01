var  URL = decodeURI(location.search);
var ID = getNum(URL);
console.log(ID);

var name1 = URL.split('=')[2]; 
console.log(name1);
var page = 4;
var pagesize = 1;
var sum ;
var name;
var flag =true;
$(function(){
	$(".name").text(name1);
	//渲染页面
	leader(page);
	//点击下一页
	$("#right").click(function(){
		if(pagesize<sum){
			page+=4;
			pagesize++;
			console.log(pagesize);
			leader(page);

			if(pagesize==sum){
				return ;
				}
		}

		
	})
	//上一页
	$("#left").click(function(){
		if(pagesize>1){
			page= page-4;
			pagesize--;
			leader(page);
			if(pagesize===1){
				return ;
			}
		}
		console.log(pagesize);
		$('.count').val(pagesize);
		$('.num').val(sum);
	})
	//显示隐藏select	
	$('#select').click(function(){
		if(!this.isClick){
			$(this).find('li:nth-of-type(n+2)').css('display','block');
			$(this).find('li').click(function(){
				var a = this.children[0].innerHTML;
				page = a ;
				leader(a);
			})
			this.isClick = true;
		}else{
			this.isClick = false;
		}
	})
})

function getNum(text) {
    return value = text.replace(/[^0-9]/ig, "");
}
function leader(page){
	var arr =[];
	$.get("http://127.0.0.1:3000/api/getbrandproductlist?brandtitleid="+ID+'&&pagesize='+page,function(data){
		//计算总页数 渲染到页面；
		sum = Math.ceil(data.totalCount/4);
	
		selects(page,sum)

		$('#select li:nth-of-type(1) .count').html(pagesize);
		$('#select .num').html(sum);
		data =data.result;
		for(var i = 0,len=data.length;i<len;i++){
		arr.push(
				'<li>'+
				'	<a href="branProductShow.html?productId='+data[i].productId+'&name='+name1+'&brandtitleid='+ID+'">'+
				'		<div  class="imgs f_left">'+
							data[i].productImg+
				'		</div>'+
				'		<div class="intro f_left">'+
				'			<h2>'
							+data[i].productName+
				'			</h2>'+
				'			<p>'+data[i].productPrice+'</p>'+
				'			<p>'+
				'				<span>'+data[i].productQuote+'</span>'+
				'				<span>'+data[i].productCom+'</span>'+
				'			</p>'+
				'			<div class="xing">★★★★★</div>'+
				'		</div>'+
				'	</a>'+
				'</li>'
			)
		}


		$(this).find('li:nth-of-type('+page+')').css('display','block').siblings('li').css('display','none')

		$('#productlist').html(arr.join(""));
			})
}

//动态创建select option
function selects(p,s){

	var tag ="";
	for(var i=0;i<s;i++){
		 tag +=  '<li><span class="count">'+(i+1)+'</span>/<span class="num">'+s+'</span></li>'
	}
	$('#select').html(tag);
	// console.log(tag);
}