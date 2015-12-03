function findPosition(){
	var picbox = document.getElementsByClassName("picbox");
	var colNum = document.documentElement.clientWidth/picbox[0].offsetWidth;
	console.log(colNum);
	var pic = document.getElementsByClassName("pic");
	for (var i = 0; i < pic.length; i++) {
		pic[i].height = pic[i].offsetHeight;
		console.log(pic[i].height);
	}
}

window.onload = findPosition;

function minHeight(){}