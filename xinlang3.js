	var rt=document.getElementsByClassName('rt')[0];
	var apd=getTag('span',footer);
	var active2=getCls('active2')[0],
	footerbox1=getCls('movie-box'),
	footer=getTag('footer')[0],
	ap=getTag('span',footer),
	iconshouye=getCls('icon-shouye')[0];
var keyss=localStorage.getItem('ipts');

var footmenu=getCls('footmenu')[0],
	footmenu1=getCls('footmenu1')[0];
	

//高度监听
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollT>151&&scrollT<3500){
		active2.style.opacity=1;
	}else{
		active2.style.opacity=0	;
	}
	
//返回顶部
	if(scrollT>151){
		footmenu.style.display="block";
		footmenu1.style.display="block";
	}else{
		footmenu.style.display="none";
		footmenu1.style.display="none";
	}
}
footmenu.onclick=function(){
	document.documentElement.scrollTop = 0
	document.body.scrollTop = 0
}
//登录显示
if(keyss!==null){
	$('.icon-shouye').css({'display':'block'})
	$('.icon-wodejuhuasuan').css({'display':'none'})
	
}else{
	$('.icon-shouye').css({'display':'none'})
	$('.icon-wodejuhuasuan').css({'display':'block'})
}


//ajax 
$.ajax({
    url:'https://cre-dp.sina.cn/api/v3/get?cateid=sina_all&cre=tianyi&mod=whv&merge=3&statics=1&length=10&action=0&up=0&timestamp=1496623699514&callback=jsonp_02796854881342763',
    type:'GET',
    dataType:'jsonp',
    jsonp:'callback',
    jsonpCallback:'jsonp_02796854881342763',
     success:function (date){
        console.log(date.data)
        let resultData=date.data;
        var str = '';
        resultData.forEach(function (item,index) {
	    	str += `<div class="movie-box"><img class="ip" src="${item.thumb}" /><div class="tit"><p class="m_video">${item.ltitle}</p><i class="icon-yanjing iconfont"></i><span class="rt"></span></div></div>`;
		})
		document.querySelector('footer').innerHTML = str;
		//随机数设置
		for(var i=0;i<footerbox1.length;i++){
		apd[i].index=i;
		var text = Math.floor(Math.random()*5000);
		apd[i].textContent=text;
		}
}    
})