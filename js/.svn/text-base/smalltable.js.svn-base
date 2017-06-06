var active2=getCls('active2')[0],
	footerbox1=getCls('footer-box'),
	footer=getTag('footer')[0],
	ap=getTag('span',footer),
	iconshouye=getCls('icon-shouye')[0];
var keyss=localStorage.getItem('ipts');

var footmenu=getCls('footmenu')[0],
	footmenu1=getCls('footmenu1')[0];

//高度监听
window.onscroll=function(){
var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
//返回顶部
if(scrollT>151){
	footmenu.style.display="block";
	footmenu1.style.display="block";
}else{
	footmenu.style.display="none";
	footmenu1.style.display="none";
}
footmenu.onclick=function(){
	document.documentElement.scrollTop = 0
	document.body.scrollTop = 0
}
}
//分类
var tiyu=getCls('tiyu')[0];
var Tiyu=getCookie('tiyu');
//console.log(Tiyu)
tiyu.textContent=Tiyu;


//ajax 
$.ajax({
    url:'getPics.php',
    type:'GET',
    success:function (res) {
        var data = JSON.parse(res);
        let resultData = data.result.data;
        var str = '';
        resultData.forEach(function (item,index) {
	    	str += `<div class="footer-box"><img class="footer-img" src="${item.thumbnail_pic_s}" /><p class="footer-text">${item.title}</p><i class="icon-huihua1 iconfont"></i><span class="footer-text2"></span></div><hr />`;
		})
		document.querySelector('footer').innerHTML = str;
		//随机数设置
		for(var i=0;i<footerbox1.length;i++){
		ap[i].index=i;
		var text = Math.floor(Math.random()*500);
		ap[i].textContent=text;
		}
}    
})