var ul=getCls('back3-ul')[0],
				li=getTag('li',ul),
				box=getCls('back3-img')[0],
				op=getCls('box3-text2')[0];
			var _index=0;
			var arr1=["img/IMG_0012.JPG","img/IMG_0118.JPG","img/IMG_0183.JPG","img/IMG_0213.JPG","img/IMG_0571.JPG",
			"img/IMG_0573.JPG","img/IMG_0606.JPG","img/IMG_0960.JPG","img/IMG_0996.JPG","img/IMG_0997.JPG","img/IMG_0806.JPG","img/IMG_4159.JPG"];
			var arr2=['-魔理沙-','-酒会装-','-野良神夜斗-','-小优-','-刀剑神域-桐子-','-刀剑神域-桐子2-','-野良神夜斗2-','-夜雨声烦-','-雪村透-','-驱魔少年-','-雪村透2-','-全职高手-']	
			for(var i=0;i<li.length;i++){	
				li[i].index=i;
				li[i].onclick=function(){
					_index=this.index;
					op.textContent=arr2[_index];
					box.src=arr1[_index];
				}
			}
			
			$('#clown').fullpage({
				navigation: true,
				navigationTooltips:['个人主页','相关资料','精彩回忆','前端生活','结束语'],
				menu:'#menu',
				showActiveTooltip:true,
				anchors:['first','second','third','four','five'],
				'onLeave':function(index, nextIndex, direction){
					if(index == 1 && direction =='down'){
						$('#menu a').css('color','#000');
						$('#menu').css('backgroundColor','rgba(255,255,255,.5)');
					}else if(index == 2 && direction =='down'){
							$('#menu a').css('color','#fff');
							$('#menu').css('backgroundColor','rgba(0,0,0,.5)');
							$(function(){
							setTimeout(function(){
								$('.back3-img1').addClass('active');
							},100)
							});
							$(function(){
							setTimeout(function(){
								$('.back3-img2').addClass('active');
							},500)
							});
							$(function(){
							setTimeout(function(){
								$('.back3-img3').addClass('active');
							},100)
							});
							$(function(){
							setTimeout(function(){
								$('.back3-img4').addClass('active');
							},500)
							});
					}else if(index == 3 && direction =='up'){
							$('#menu a').css('color','#000');
							$('#menu').css('backgroundColor','rgba(255,255,255,.5)');
					}else if(index==4&&direction=='up'){
						$(function(){
							setTimeout(function(){
								$('.back3-img1').addClass('active');
							},100)
							});
							$(function(){
							setTimeout(function(){
								$('.back3-img2').addClass('active');
							},500)
							});
							$(function(){
							setTimeout(function(){
								$('.back3-img3').addClass('active');
							},100)
							});
							$(function(){
							setTimeout(function(){
								$('.back3-img4').addClass('active');
							},500)
							});
							}
							else{$('#menu a').css('color','#fff');
									$('#menu').css('backgroundColor','rgba(0,0,0,.5)');
					}
				},
				'afterLoad':function(anchorLink,index){
					if(index==1){
						$('.text1').addClass('active')
						$(function(){
							setTimeout(function(){
								$('.back1-img').addClass('active');
							},2000)
					});
					$(function(){
							setTimeout(function(){
								$('.back1-img1').addClass('active');
							},500)
					})
					$(function(){
							setTimeout(function(){
								$('.back1-img2').addClass('active');
							},600)
					})
					$(function(){
							setTimeout(function(){
								$('.back1-img3').addClass('active');
							},1200)
					})
					$(function(){
							setTimeout(function(){
								$('.back1-img4').addClass('active');
							},100)
					})
					$(function(){
							setTimeout(function(){
								$('.back1-img5').addClass('active');
							},700)
					})
					$(function(){
							setTimeout(function(){
								$('.back1-img6').addClass('active');
							},200)
					})
					$(function(){
							setTimeout(function(){
								$('.back1-img7').addClass('active');
							},500)
					})
					}else if(index==2){
						$('table').addClass('active')
						$('.text1').removeClass('active')
						$('.back1-img').removeClass('active')
					}else if(index==3){
						$('.back-text3-text').addClass('active');
						$(function(){
							setTimeout(function(){
								$('.back3-ul').addClass('active');
							},1000)
						});
						$(function(){
							setTimeout(function(){
								$('.back3-box').addClass('active');
							},1500)
						});
						$(function(){
								setTimeout(function(){
									$('.box3-text2').addClass('active');
								},2000)
						});
					}else if(index==4){
						$(function(){
								setTimeout(function(){
									$('.back4-text').addClass('active');
								},100)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text1').addClass('active');
								},400)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text2').addClass('active');
								},600)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text3').addClass('active');
								},1100)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text4').addClass('active');
								},800)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text5').addClass('active');
								},100)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text6').addClass('active');
								},1200)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text7').addClass('active');
								},1300)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text8').addClass('active');
								},400)
						});
						$(function(){
								setTimeout(function(){
									$('.back4-text9').addClass('active');
								},960)
						});
					}
					else{
						$('.text1').removeClass('active')
						$('.back1-img').removeClass('active')
					}
				},
				slidesNavigation: true,
			})
	
var  back5img=getCls('back5-img')[0],
	back5text=getCls('back5-text')[0];

back5text.onmouseenter=function(){
	back5img.style.opacity="0.8"
}
back5text.onmouseout=function(){
	back5img.style.opacity="0"
}