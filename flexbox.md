## flexbox布局  

　　flexbox弹性盒子布局，flexbox布局是伸缩容器container和伸缩项目item组成，可以看文档<http://www.tuicool.com/articles/Yzeu6j7>  

　　**1.1伸缩容器的属性**  

　　1.display:flex　|　inline-flex  
　　　块状伸缩容器　行内伸缩容器  
　　　兼容：

		display: -webkit-box;  /* 老版本语法: Safari,  iOS, Android browser, older WebKit browsers.  */
		display: -moz-box;    /* 老版本语法: Firefox (buggy) */ 
		display: -ms-flexbox;  /* 混合版本语法: IE 10 */
		display: -webkit-flex;  /* 新版本语法： Chrome 21+ */
		display: flex;       /* 新版本语法： Opera 12.1, Firefox 22+ */

　　2.flex-direction  
　　　主轴的方向，默认为row  
　　　flex-direction:row | row-reverse | column | column-reverse  
　　　主轴方向分别为从左到右、从右到左、垂直从上到下、垂直从下到上  

　　3.flex-wrap  
　　　伸缩容器在主轴线方向空间不足的情况下，是否换行以及如何换行，默认为nowrap不换行，此时容器里面元素会收缩宽度  
　　　flex-wrap:nwrap | wrap | wrap-reverse  
　　　伸缩容器在空间不足的情况下分别为不换行，从上到下换行，从下到上换行  

　　4.flex-flow  
　　　flex-direction和flex-wrap的缩写版本，默认值为 row nowrap  

　　5.justify-content  
　　　定义伸缩项目在主轴上的对齐方式，默认值为flex-start
　　　justify-content:flex-start | flex-end | center | space-between | space-around  
　　　伸缩项目在主轴上的对齐方式分别为在主轴线的开始位置，结束位置，居中，在伸缩项目之间留有空白，在伸缩项目之前、之间、之后都留有空白  
　　　兼容：box-pack: start|end|center|justify; 这里旧版语法有4个参数，而新版语法有5个参数，兼容写法新版语法的 space-around 是不可用的：

		/*老版本语法*/
		-webkit-box-pack: justify; 
		-moz-box-pack: justify; 
		/*混合版本语法*/
		-ms-flex-pack: justify; 
		/*新版本语法*/
		-webkit-justify-content: space-between;
		justify-content: space-between;  

　　6.align-items  
　　　定义伸缩项目在交叉轴上的对齐方式，默认值为flex-start  
　　　justify-content:flex-start | flex-end | center | baseline | stretch  
　　　伸缩项目在交叉轴上的对齐方式分别为在交叉轴线的开始位置，结束位置，居中，基准线，拉伸  
　　　兼容：box-align: start | end | center | baseline | stretch;  

		/*老版本语法*/
		-webkit-box-align: center; 
		-moz-box-align: center;
		/*混合版本语法*/
		-ms-flex-align: center; 
		/*新版本语法*/
		-webkit-align-items: center;
		align-items: center;  

　　7.align-content  
　　　用来调整伸缩项目出现换行后在交叉轴上的对其方式:(flex-wrap:wrap | wrap-reverse的情况下)，默认值为stretch  
　　　align-content:flex-satrt | flex-end | space-between | space-around | stretch  


　　**1.2伸缩项目的属性**  

　　1.order  
　　　定义项目的排列顺序，数值越小，排列越靠前，默认值为0 语法为：order:整数值  

　　2.flex-grow  
　　　定义伸缩项目的放大比例，默认值为0，即如果存在剩余空间也不放大  

　　3.flex-shrink  
　　　定义伸缩项目的收缩比例，默认值为1  

　　4.flex-basis  
　　　用来设置伸缩项目的基准值，剩余空间按照比例来收缩  
　　　flex-basis:length | auto，默认值为auto  

　　5.flex  
　　　flex-grow、flex-shrink、flex-basis的缩写，默认值flex:0 1 auto  

　　6.algin-self  
　　　用来设置单独的伸缩项目在交叉轴上的对其方式，会覆盖默认的对其方式  
　　　algin-self:auto | flex-start | flex-end | center | baseline | stretch  


　　







