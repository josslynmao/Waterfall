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

	var min = minHeight(height);
	console.log(min);//检验

	for (var i = 0; i < picbox.length; i++) {
		min = minHeight(height);
		if(i > colNum){
			picbox[i].style.position = "absolute";
			picbox[i].style.top = min + "px";
			picbox[i].style.left = (i%colNum) * (picbox[i].offsetWidth ) + "px";
			height[i % colNum] = picbox[i].offsetHeight + min;
			console.log(picbox[i].style.top,picbox[i].style.left);
		}
		console.log(min);
		console.log(height);
	}

}

window.onload = findPosition;

function minHeight(picHeightArray){
	var minHeight = Math.min.apply(Math,picHeightArray);//这个math！！终于改对了。。。
	return minHeight;
}