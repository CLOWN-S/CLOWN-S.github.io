var boxCF=getCls('Carousel-figure')[0],
	box=getCls('box')[0],
	box2=getCls('box2')[0],
	boxu1=getCls('Carousel-figure-ul')[0],
	boxu2=getCls('Carousel-figure-ul2')[0],
	boxli1=getTag('li',boxu1),
	boxli2=getTag('li',boxu2),
	picture=0;

/*定时器函数*/
function maketimer(){
	picture++;
	if(picture<8){
		timers()
		}
	else{
		picture=0;
		timers()
		}
}
/*定义定时器*/
var ontimer=setInterval(maketimer,5000);
/*清除定时器*/
boxCF.onmouseover=function(){
	clearInterval(ontimer);
}
/*重新加载定时器*/
boxCF.onmouseout=function(){
	clearInterval(ontimer);
	ontimer=setInterval(maketimer,5000);
}
for(var i=0;i<boxli1.length;i++){

	boxli2[i].index=i;
	boxli2[i].onclick=function(){
		picture=this.index;
		timers()
	}
}

/*样式封装*/
function abc(){
	for(var j=0;j<boxli1.length;j++){
			boxli2[j].style.background="";
		}
		boxu1.style.marginLeft=-870*picture +'px';
		boxli2[picture].style.background="#fff";
}
/*缓冲动画*/
function mover(obj,attr,target){
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=0;
		current=parseFloat(getStyle(obj,attr));
		speed+=(target-current)/7;
		current+=speed;
		boxu1.style.marginLeft=current+"px";
	},17)
}
/*动画封装*/
function timers(){
	for(var j=0;j<boxli1.length;j++){
		boxli2[j].style.background="";
		}
		target=picture*(-870);
		mover(boxu1,'marginLeft',target);
		boxli2[picture].style.background="#fff";
}

var shopbox=getCls('shop-box')[0],
	shopboxli=getTag('li',shopbox),
	shoptext4=getCls('shop-text4'),
	shopli=getCls('shopli'),
	shopul1=getCls('shopul1')[0],
	shopul1li=getTag('li',shopul1),
	shopul2=getCls('shopul2')[0],
	shopul2li=getTag('li',shopul2);
	for(var h=0; h<shopboxli.length;h++){
		shopboxli[h].index=h;
		shopboxli[h].onmouseover=function(){
			Text4=this.index
			shoptext4[Text4].style.opacity="1"
		}
		shopboxli[h].onmouseout=function(){
			Text4=this.index
			shoptext4[Text4].style.opacity="0"
		}
	}
	for(var k=0;k<shopul1li.length;k++){
		shopul1li[k].index=k
		shopul1li[k].onmouseover=function(){
			_p=this.index
			shopul2li[_p].style.background="#73716f"
			shopul2li[_p].style.color="#fff"
		}
		shopul1li[k].onmouseout=function(){
			_p=this.index
			shopul2li[_p].style.background=""
			shopul2li[_p].style.color=""
		}
	}


//下边栏

var abox=getCls('abox')[00],
	backbtn=getCls('backbtn')[0];

window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollT>500&&scrollT<3500){
		abox.style.opacity="1"
	}else{
		abox.style.opacity="0"
	}
	if(scrollT>500){
		backbtn.style.display="block"
	}else{
		backbtn.style.display="none"
	}
}


//右侧返回顶部

backbtn.onclick=function(){
	GoTop()
	/*document.documentElement.scrollTop = 0
	document.body.scrollTop = 0*/
}
function GoTop(){  
otimer=setInterval("runToTop()",1);  
}  
function runToTop(){  
currentPosition=document.documentElement.scrollTop || document.body.scrollTop; 
currentPosition-=10;  
if(currentPosition>0)  
{  
window.scrollTo(0,currentPosition);  
}  
else  
{  
window.scrollTo(0,0);  
clearInterval(otimer);  
}  
} 

//底部返回顶部
var abox1text3=getCls('abox1-text3')[0];

abox1text3.onclick=function(){
	GoTop()
}


// 右侧菜单栏定位判定
var afix=getCls('afix')[0],
	left1=box2.offsetLeft;

window.onload=function(){
	getPoint(box2)
}

window.onresize = function(){
	  getPoint(box2)
}
function getPoint(obj) {
    var l = obj.offsetLeft; 
    while (obj = obj.offsetParent) {// obj = obj.offsetParent;while (obj != undefined)
        l += obj.offsetLeft; 
    }
       afix.style.left=l+1200+'px'
      }


//顶部菜单栏

var menubox=getCls('menubox')[0],
	boxtext3=getCls('box-text3')[0];

boxtext3.onclick=function(){
	menubox.style.display="block"
}
box2.onmouseout=function(){
	menubox.style.display="none"
}


//登录组件

var shopcar=getCls('shopcar')[0],
	formregister=getCls('form-register')[0],
	load=getCls('load')[0],
	abox1text2=getCls('abox1-text2')[0],
	registerbox=getCls('registerbox')[0],
	submitbtn=getCls('submitbtn')[0],
	formtext2=getCls('form-text2')[0],
	formpassword=getCls('form-password')[0],
	registerboxtext=getCls('registerboxtext')[0],
	registerboxpassword=getCls('registerboxpassword')[0],
	loadname=getCls('loadname')[0],
	span2=getCls('span2')[0],
	loaduserbox=getCls('loaduserbox')[0],
	close=getCls('close')[0];
	
formregister.onclick=function(){
	registerbox.style.display="block"
}
abox1text2.onclick=function(){
	registerbox.style.display="block"
}
submitbtn.onclick=function(){
	if(registerboxtext.value==''||registerboxpassword.value==''){
		alert('请输入用户名和密码')
	}else{
	setCookie('text',registerboxtext.value,30);
	setCookie('password',registerboxpassword.value,30);
	registerboxtext.value='';
	registerboxpassword.value='';
	registerbox.style.display="none";
	shopcar.style.display='block';
	getCookie('text,registerboxtext.value,30');
	var ontext=getCookie('text');
	loadname.textContent="欢迎:"+ ontext;
	loadname.style.color="#ff6fa2";
	formregister.style.display="none";
	abox.style.display="none";
	span2.textContent="欢迎:"+ ontext;
	loaduserbox.style.display="block";
	alert('登陆成功')
}}
load.onclick=function(){
		getCookie('text,registerboxtext.value,30');
		getCookie('password,registerboxpassword.value,30');
		var username=getCookie('text')
		var userword=getCookie('password')
		var loadname1=formtext2.value
		var loadword1=formpassword.value
	if(formtext2.value==''||formpassword.value==''){
		alert('请输入用户名和密码')
	}else if(username==loadname1&&userword==loadword1){
		formtext2.value='';
		formpassword.value='';
		shopcar.style.display='block';
		getCookie('text,registerboxtext.value,30');
		loadname.textContent="欢迎:"+ username;
		loadname.style.color="#ff6fa2";
		formregister.style.display="none";
		abox.style.display="none";
		span2.textContent="欢迎:"+ username;
		loaduserbox.style.display="block";
		alert('登陆成功')
	}else{
		alert('用户名或密码错误')
	}
}
close.onclick=function(){
	shopcar.style.display='none';
	loadname.textContent="未登录";
	loadname.style.color="#000";
	abox.style.display="block";
	span2.textContent='';
	loaduserbox.style.display="none";
	formregister.style.display="inline-block";
}

//加入购物车事件

var shoptext4=getCls('shop-text4'),
	shopimg1=getCls('shop-img1'),
	shoptext1=getCls('shop-text1'),
	shoptext3=getCls('shop-text3');
	
for(var i=0;i<shopboxli.length;i++){
	shoptext4[i].index=i;
	shoptext4[i].onclick=function(){
		aindex=this.index
		setCookie('shoptext'+aindex,shoptext1[aindex].textContent,30)
		setCookie('shopname'+aindex,shoptext3[aindex].textContent,30)
		setCookie('shopimg'+aindex,shopimg1[aindex].src,30)
		alert('商品已加入购物车')
	}
}
	