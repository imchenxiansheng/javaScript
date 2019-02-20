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

//获取 css元素的属性
function getStyle(ele,prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(ele,null)[prop];
	}else{
		return ele.currentStyle[prop]
	}
}
//---------------------------------------------------------

//一个事件绑定多个函数
function  addEvent(ele,type,func){
	if(ele.addEventListener){
		ele.addEventListener(type,func,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+type,function(){
			func.call(ele);
		});
	}else{
		ele["on" +type] = func;
	}
	
}
//------------------------------------------------------------

//异步 按需加载js
function loadScript(url,callback){
		var script = document.createElement("script");
		script.type = "text/javascript";
		//myjs.js里的代码必须  myjs.js加载完成后才能调用	
		if(script.readyState){		
			script.onreadystatechange = function(){ //就ie能用
				if(script.readyState == "complete" || script.readyState == "loaded"){
					//code
				}
			}
		}else{
			script.onload = function(){//script.onload 非ie浏览可用
				//....
			}
		}		
		script.src = url;		
		document.head.appendChild(script);
	}