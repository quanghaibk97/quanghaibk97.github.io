var num=document.getElementsByClassName("slide-item")[0].clientWidth;
var changeSlide=document.getElementsByClassName("change-slide")[0];
var img=document.getElementsByClassName("slide-item");
var max=num*img.length-num;
var count = 0;
function next () {
	if (count<max) {
		count += num;	
	}
	else{
		count=0;
	}
	changeSlide.style.marginLeft = '-'+count+'px';
}
function pre () {
	if (count==0) {
		count = max;	
	}
	else {
		count -=num;
	}
	changeSlide.style.marginLeft = '-'+count+'px';
}
function move(){
	count = max;
	changeSlide.style.marginLeft = '-'+count+'px';
}
