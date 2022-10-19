// header_menu 

$('.navbar_gnb,.sub_shadow').on('mouseenter mouseleave',function(aa){
  if($(window).width() > 1169){     
      if(aa.type == 'mouseenter'){ 
          $('.sub').stop().slideDown();
          $('.sub_shadow').stop().fadeIn();
          } else {
          $('.sub').stop().slideUp(200,function(){
              $('.sub').removeAttr('style');
          });
          $('.sub_shadow').stop().fadeOut(200,function(){
              $(this).removeAttr('style');
          });
      }
  }
});

const $mainBtn = $('.navbar_gnb > li > a');  

$mainBtn.click(function(){
    if($(window).width() < 1170){                   
        if(!$(this).parents('li').hasClass('on')){  
            $('.sub').slideUp(300);
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown(300);
            $(this).parents('li').addClass('on');
        } else {  
            $('.sub').slideUp(200);
            $(this).parents('li').removeClass('on');
        }    
    }
});

$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},400);
        $('header').animate({left:-350},400);
    } else {
        $('.gnb').animate({right:-350},300);
        $('header').animate({left:0},300);
    }
});

$(window).resize(function(){
    if($(window).width() > 1169){
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});

// slide


var index = 0;   //이미지에 접근하는 인덱스
  window.onload = function(){
      slideShow();
  }
  
  function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide");  
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";   
  }
  index++;
  if (index > x.length) {
      index = 1;  
  }   
  x[index-1].style.display = "block";  
  setTimeout(slideShow, 4000);  

}
