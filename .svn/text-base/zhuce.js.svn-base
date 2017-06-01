var btn=document.querySelector('div[class="btn"]');
 var ipts=document.querySelector('input[type="text"]'),
		    pds=document.querySelector('input[type="password"]');
		    var zhuye=document.getElementById('zhuye');
		   var str1=/[0-9]{6,12}/;
		  var  str2= /^[a-zA-Z]\w{5,17}$/;
			 btn.onclick=function(){
		  	if((str1.test(ipts.value))&&(str2.test(pds.value))){
		  		  localStorage.setItem('ipts',ipts.value);
          		  localStorage.setItem('pds',pds.value);
          		  alert('注册成功');
          		  window.history.back(-2); 
		  	}else{
		  		alert('您输入有误')
		  	}
		
		  };
	
