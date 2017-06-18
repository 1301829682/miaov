//定义模块解决模块之间的依赖

define(function(require,exports,module){
	//require : 模块之间依赖的接口

	var a = require('./module3.js').a;  //当引入的是sea定义的模块的时候，那么require执行完的结果就是exports
	function show(){

		//变量a需要依赖module3.js里面的东西
		alert('依赖模块'+a);
	};
	exports.show = show;
});