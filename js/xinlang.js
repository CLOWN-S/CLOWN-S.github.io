var active2=getCls('active2')[0],
	footerbox1=getCls('footer-box'),
	footer=getTag('footer')[0],
	ap=getTag('span',footer),
	iconshouye=getCls('icon-shouye')[0];
var keyss=localStorage.getItem('ipts');

var footmenu=getCls('footmenu')[0],
	footmenu1=getCls('footmenu1')[0];
	
//轮播图


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
var astb=getCls('swiper-wrapper')[0];
var swipertext1=getCls("swiper-text1")[0],
	swipertext2=getCls("swiper-text2")[0];
var slide ='';
$.ajax({
    url:'getPics.php',
    type:'GET',
    success:function (res) {
        var data = JSON.parse(res);
        //console.log(data.result.data)
        let resultData = data.result.data;
        var str = '';
        var stb = '';
        resultData.forEach(function (item,index) {
		//$.each(data,function (item,index) {
			//for(var j=10;j<footerbox1.length;j++){
			if(index>=9){
				//console.log(index,stb)
				stb += `<div class="swiper-slide"><img  src="${item.thumbnail_pic_s}" /><p style="text-shadow:1px 1px 2px #000000;">${item.title}</p></div>`;
				
			}
			//}
	    	str += `<div class="footer-box"><img class="footer-img" src="${item.thumbnail_pic_s}" /><p class="footer-text">${item.title}</p><i class="icon-huihua1 iconfont"></i><span class="footer-text2"></span></div><hr />`;
    	
		})
        astb.innerHTML = stb;
		document.querySelector('footer').innerHTML = str;
		//随机数设置
		for(var i=0;i<footerbox1.length;i++){
		ap[i].index=i;
		var text = Math.floor(Math.random()*500);
		ap[i].textContent=text;
		}
		//轮播图
		var mySwiper = new Swiper ('.swiper-container', {
	   	loop: true,
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    autoplay:2000,
	    onSlideChangeEnd: function(swiper){
	    	//alert(swiper.activeIndex)
	  		swipertext1.textContent=swiper.activeIndex
	  		swiper.startAutoplay();
	    }
	  	})
	  	//数字设置
	  	swipertext2.textContent="/"+footerbox1.length;
//}
}    
})
window.onload = function() {
}
