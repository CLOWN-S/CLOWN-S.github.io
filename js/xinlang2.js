var active2=getCls('active2')[0],
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
var clearfix1=getCls('clearfix1')[0],
	aLi = getTag('li',clearfix1);
var index = 0;
var minHeight = aLi[index].offsetHeight;
var isOpen = true;
if(isOpen){
    isOpen = false;
    getData()
}
function getData(){
$.ajax({
    url:'./getPics1.php',
    type:'GET',
    success:function (res) {
        var data = JSON.parse(res);
        
        show(0)
        function show(i) {
            var img = new Image()
            var item = data[i];
            //console.log(item)
             if(item){
                img.src = item.image;
                img.onload = function () {
                    index = getMinHeightLi(aLi);
                    //console.log(index)
                    var stc = $(aLi).eq(index).html();
                    stc += '<div class="clearfix1-box"><img class="clearfix1-img" src="' + item.image + '"/><p>' + item.title + '</p></div>';
                    $(aLi).eq(index).html(stc);
                }
                    if(i<data.length-1){
                        show(i+1)
                    }
                    isOpen = true;
                }else{
                    isOpen = false;
                }
            }
        },
    })
}

//获取最小高度li
function getMinHeightLi(lists) {
	var minHeight = lists[index].offsetHeight;
	//console.log(minHeight)
	for(var i=0;i<lists.length;i++){
	    if(minHeight > lists[i].offsetHeight){
	        minHeight = lists[i].offsetHeight
	        index = i
	    }
	}
	return index;
}