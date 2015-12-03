function findPosition(){
	var picbox = document.getElementsByClassName("picbox");
	var colNum = parseInt(document.documentElement.clientWidth/picbox[0].offsetWidth);
	console.log(colNum);
	var container = document.getElementById("container");
	container.style.width = (picbox[0].offsetWidth + 2 * 5) * colNum + "px";//2*5是margin
	console.log(container.style.width);
	var pic = document.getElementsByClassName("pic");
	var height = [];
	for (var i = 0; i < pic.length; i++) {
		height[i] = pic[i].offsetHeight;
		console.log(height[i]);
	}
	var min = minHeight(height);
	console.log(min);
}

window.onload = findPosition;

function minHeight(picHeightArray){
	var minHeight = Math.min.apply(Math,picHeightArray);//这个math！！终于改对了。。。
	return minHeight;
}