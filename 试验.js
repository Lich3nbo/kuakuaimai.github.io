
function url(str){
			str = str.split('?')[1].split('&');
			var data ={};
			for(var i =0;i<str.length;i++){
				data[str[i].split('=')[0]] = decodeURI(str[i].split('=')[1])
			}
			return data;
		}
