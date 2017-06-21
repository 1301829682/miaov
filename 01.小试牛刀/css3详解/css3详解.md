#css3详解

## 1.css3课程入门

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
		p:empty{background:red;}
		
	
	