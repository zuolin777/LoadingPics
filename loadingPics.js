/*
*图片预加载 zl
*/
function loadingPics(arr,callBack){
	var arrAllImg = [];
	var count = 0;
	if(!(arr instanceof Array)){
		throw new Error(arr + ' is not an Array');
		return;
	}
	for(var i = 0; i < arr.length; i ++){
		var img = new Image();
		img.src = arr[i];
		arrAllImg.push(img);
	}
	for (var i = 0; i < arrAllImg.length; i++) {
		arrAllImg[i].onload = function(){
			count ++;
			if(count == arrAllImg.length){
				if(callBack instanceof Function){
					callBack(arrAllImg);					
				}else{
					throw new Error(callBack + ' is not a function');
				}

			}
		}
	}
}


