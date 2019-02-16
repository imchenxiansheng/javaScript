//数组去重
Array.prototype.unique = function(){
	var temp ={},
	arr =[],
	len = this.length;		
	for(var i = 0; i< len ; i++){
		if(!temp[this[i]]){			
			temp[this[i]]="a";
			arr.push(this[i]);
		}
	}
	return arr;
}
//-----------------------------------------------------------
//判断数据类型，typeof进阶版
/*
	null
	原始值  String，boolean，number，function，undefined  typeof可以区分出来
	引用值  Array   "[object Array]"
			Object  "[object Object]"
			Number  "[object Number]"
			String  "[object String]"
			Boolean "[object Boolean]"
*/
function type(origin){
	var temp ={
		"[object Array]" : "array-object",
		"[object Object]" : "object-object",
		"[object Number]" : "number-object",
		"[object String]" : "string-object",
		"[object Boolean]" : "boolean-object"
	}
	if(origin == null){
		return null;
	}else if(typeof(origin) == "object"){
		var str = Object.prototype.toString.call(origin);
		return temp[str];
	}else{
		return typeof(origin);
	}
}
//------------------------------------------------------------