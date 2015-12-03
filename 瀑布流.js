function findPosition(){
	var picbox = document.getElementsByClassName("picbox");
	var colNum = parseInt(document.documentElement.clientWidth/picbox[0].offsetWidth);
	console.log(colNum);//检验
	var container = document.getElementById("container");
	container.style.width = (picbox[0].offsetWidth + 2 * 5) * colNum + "px";//用js的方法获取每个图片的宽度，设置container宽度，从而拖动浏览器不会改变float每行图片列数。2*5是margin。
	console.log(container.style.width);//检验
	var pic = document.getElementsByClassName("pic");
	var height = [];//用来记录四列总高度变化
	for (var i = 0; i < colNum; i++) {
		height[i] = pic[i].offsetHeight;
		console.log(height[i]);//检验
	}
	var min = minHeight(height);
	console.log(min);//检验
	for (var i = 0; i < picbox.length; i++) {
		if(i > colNum){
			picbox[i].style.position = "absolute";
			picbox[i].style.top = min;
			picbox[i].style.left = (i%colNum) * picbox[i].offsetWidth;
			height[i%colNum] = picbox[i].offsetHeight + min;
		}
	}

}

window.onload = findPosition;

function minHeight(picHeightArray){
	var minHeight = Math.min.apply(Math,picHeightArray);//这个math！！终于改对了。。。
	return minHeight;
}