#css3详解

## 1：css3课程入门

### Css3 选择器 --属性选择器

	兼容性：IE7及以上支持; 

	常见属性选择器：
	E[attr="value"] 指定属性名，并指定了该属性的属性值
		例：p[miaov="leo"]{background:red;}
	E[attr^="value"] 以value开头的选择器
		例：p[miaov^=g]{background:pink;} /*以g开头的p属性选择器*/
	E[attr$="value"] 以value结束的选择器
	E[attr*="value"] 包含了value的选择器
	E[attr|="value"] 属性值是value或者以“value-”开头的选择器

	例子：
	
	

### Css3 选择器 –结构性伪类选择器

	兼容性：IE9及以上支持;
	
	E:nth-child(n)  E父元素中的第n个字节点（就是到父级中查找遍历）
		p:nth-child(odd){background:red}/*匹配奇数行*/
		p:nth-child(even){background:red}/*匹配偶数行*/
		p:nth-child(3n){background:red} /*匹配3或3的倍数*/

	E:nth-last-child(n) 表示E父元素中的第n个字节点，从后向前计算

	E:nth-of-type(n)  表示E父元素中的第n个字节点，且类型为E（E:nth-child(n)不需要节点类型为E，这就是两者的区别。）
	E:nth-last-of-type(n)表示E父元素中的第n个字节点，且类型为E,从后向前计算

	E:first-child/last-child  表示E元素中的第一个子节点/最后一个子节点
	E:first-of-type/last-of-type 表示E父元素中的第一个子节点/最后一个子节点且节点类型是E的

	E:empty 表示E元素中没有子节点
		p:empty{background:red;}匹配的是空的<p></p>

### Css3 选择器 --伪类

	E:disabled 表示不可点击的表单控件
	E:checked 表示已选中的checkbox或radio
	E::before 生成内容在E元素前
	E::after 生成内容在E元素后

### 文字阴影

	text-shadow：x y blur color,

	参数
	-x		横向偏移
	-y		纵向偏移
	-blur	模糊距离
	-color	阴影颜色

	阴影叠加
	text-shadow:2px 2px 0px red, 2px 2px 4px green;
	-先渲染后面的，再渲染前面的

### 盒模型阴影

用法

	box-shadow:[inset] x y blur [spread] color

参数

	-inset：投影方式
		>> inset：内投影
		>> 不给：外投影
	-x、y：阴影偏移
	-blur：模糊半径
	-spread：扩展阴影半径
	-color：阴影颜色

### 自定义文字

格式
	
	定义：
	@font-face {
	  font-family: 'miaov';
	  src: url('111-webfont.eot');
	  src: url('111-webfont.eot?#iefix') format('embedded-opentype'),
	       url('111-webfont.woff') format('woff'),
	       url('111-webfont.ttf') format('truetype'),
	       url('111-webfont.svg#untitledregular') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}

	使用：
	p{font-family:"miaov";}

转换字体格式生成兼容代码 <http://www.fontsquirrel.com/fontface/generator> <http://www.fontconverter.org/>.

## 2：响应式布局

### 响应式布局

媒体类型

	all 所有媒体
	braille 盲文触觉设备
	embossed 盲文打印机
	print 手持设备 
	projection 打印预览
	screen 彩屏设备
	speech '听觉'类似的媒体类型
	tty 不适用像素的设备
	tv  电视

关键字

	and
	not      not关键字是用来排除某种制定的媒体类型
	only     only用来定某种特定的媒体类型

媒体特性
	
	(max-width: 480px)  设备输出宽度
	(orientation:portrait)  竖屏
	(orientation:landscape)	横屏
	(-webkit-min-device-pixel-ratio: 2) 像素比

样式引入
	
	//方法1
	<link rel="stylesheet" type="text/css" href="index.css" media="screen and (min-width:400px) and (max-width:800px)">
	
	//方法2
	@media screen and (min-width:400px) and (max-width:800px) {
		index.css里面的样式	
	}

	//方法3
	@import url("index.css") screen and (min-width:400px) and (max-width:800px);
	

横竖屏引入不同css
	
	<link rel="stylesheet" media="all and (orientation:portrait)" href="indexb.css">
	<link rel="stylesheet" media="all and (orientation:landscape)" href="indexa.css">

### 移动端meta

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

	width [pixel_value | device-height]
	height [pixel_value | device-height]
	user-scalable 是否允许缩放 （no||yes）
	initial-scale 初始比例
	minimum-scale 允许缩放的最小比例
	maximum-scale 允许缩放的最大比例 
	target-densitydpi [dpi_value | device-dpi | high-dpi | medium-dpi | low-dpi] 

## 3：新的UI方案

### 圆角

	border-radius:

	1个：都一样
	- border-radius: 一样
	2个：对角
	- border-radius: 左上&右下    右上&左下
	3个：斜对角
	- border-radius: 左上    右上&左下    右下
	4个：全部，顺时针
	- border-radius: 左上    右上    右下    左下

还分水平和竖直方向：

	border-radius: 1-4个数字 / 1-4个数字
	- 前面是水平，后面是垂直
	- 不给“/”则水平和垂直一样，也就是border-radius: 1-4个数字 

### 线性渐变

线性渐变格式

	linear-gradient( 起始点||<角度>,起始颜色,终点颜色)
	
	只能用在背景上
	- IE filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#ff0000',GradientType='1');
	
	参数
	起始点||<角度>
	-left、top、left top、deg
	起始颜色,终点颜色还可以加上位置
	-black 50%

重复
	
	repeating-linear-gradient 重复线性渐变

### 径向渐变

	radial-gradient( 起始点 ? 形状 || 大小, 起始颜色,终点颜色)  ?为有或者没有

	起始点：可以是关键字（left,top,right,bottom），具体数值或百分比
	形状： ellipse、circle
	大小 :具体数值或百分比，也可以是关键字（最近端，最近角，最远端，最远角，包含或覆盖 (closest-side, closest-corner, farthest-side, farthest-corner, contain or cover)）;

## 4：过渡和2d变换

### Transition过渡

过渡选项

	transition-property  要运动的样式  （all || [attr] || none）
	transition-duration 运动时间
	transition-delay 延迟时间
	transition-timing-function 运动形式 
	 -ease：（逐渐变慢）默认值
	 -linear：（匀速）
	 -ease-in：(加速)
	 -ease-out：（减速）
	 -ease-in-out：（先加速后减速）
	 -cubic-bezier 贝塞尔曲线（ x1, y1, x2, y2 ） 贝塞尔曲线工具http://matthewlein.com/ceaser/

### transitionend事件

过渡完成事件

	Webkit： obj.addEventListener('WebkitTransitionEnd',function(){},false);
	firefox: obj.addEventListener('transitionend',function(){},false);

### 2D变换
	
transform

	rotate()  旋转函数 取值为度数
	  -deg  度数
	  -Transform-origin 旋转的基点
	skew() 倾斜函数 取值为度数 
	  -skewX()
	  -skewY()
	scale() 缩放函数 取值为正数、负数和小数
	  -scaleX()
	  -scaleY()
	translate() 位移函数
	  -translateX()
	  -translateY()

