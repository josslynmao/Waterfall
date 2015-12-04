function findPosition(){
	var picbox = document.getElementsByClassName("picbox");
	var container = document.getElementById("container");
	var pic = document.getElementsByClassName("pic");

	var colNum = parseInt(document.documentElement.clientWidth/picbox[0].offsetWidth);
	console.log(colNum);//检验
	container.style.width = (picbox[0].offsetWidth) * colNum + "px";//用js的方法获取每个图片的宽度，设置container宽度，从而拖动浏览器不会改变float每行图片列数。2*5是margin。
	console.log(container.style.width);//检验

	var height = [];//用来记录四列总高度变化
	for (var i = 0; i < colNum; i++) {
		height[i] = picbox[i].offsetHeight;
	}
	console.log(height);//检验

	var min = height[minHeight(height)];
	console.log(min);//检验

	var heightColNum = minHeight(height);
	for (var i = 0; i < picbox.length; i++) {
		heightColNum = minHeight(height);
		min = height[heightColNum];
		if(i >= colNum){
			picbox[i].style.position = "absolute";
			picbox[i].style.top = min + "px";
			picbox[i].style.left = minHeight(height) * (picbox[i].offsetWidth ) + "px";
			height[heightColNum] = picbox[i].offsetHeight + min;
			console.log(picbox[i].style.top,picbox[i].style.left);
		}
		console.log(min);
		console.log(height);
		console.log(document.documentElement.clientHeight);
	}

}


function addPic(){
	var pic_onload = [{
		url:["img/a.jpg","img/b.jpg","img/h.jpg","img/f.jpg","img/b.jpg","img/d.jpg","img/e.jpg","img/a.jpg"]
	}
	];
	var picbox = document.getElementsByClassName("picbox");
	var lastpic = picbox[picbox.length-1];
	var lastheight = lastpic.offsetTop;
	var scrollheight = document.body.scrollTop;//竟然！！！不能用documentelement！！！要用body返回文本根目录！！！
	console.log(lastheight);
	console.log(scrollheight);
	if(document.documentElement.clientHeight + scrollheight > lastheight)
	{
		console.log("onload pic");
	}

}

window.onload = function(){
	findPosition();
	window.onscroll = function(){
		addPic();
	}
}

function minHeight(picHeightArray){
	var minHeight = Math.min.apply(Math,picHeightArray);//这个math！！终于改对了。。。
	return picHeightArray.indexOf(minHeight);
}