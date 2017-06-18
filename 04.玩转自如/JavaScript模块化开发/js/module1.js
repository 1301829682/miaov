// 定义模块
define(function(require,exports,module){//define三个参数 : 不允许修改参数名

	function show(){
		alert('定义模块'+1);
	};
	//exports : 对外提供接口的对象
	exports.show = show;
});