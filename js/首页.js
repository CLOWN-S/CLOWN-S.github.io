var active2=getCls('active2')[0],
	footerbox=getCls('footer-box'),
	footer=getTag('footer')[0],
	ap=getTag('span',footer);


window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollT>151&&scrollT<3500){
		active2.style.opacity=1;
	}else{
		active2.style.opacity=0	;
	}
}
for(var i=0;i<footerbox.length;i++){
	ap[i].index=i;
	var text = Math.floor(Math.random()*500);
	ap[i].textContent=text;
}