$(document).ready(function(){

  //전체메뉴 눌렀을 때
  $('.all_menu h2 a').click(function(){
    $('.bg__1depth').toggle();
    // $(this).children('.category__2depth').toggle();
    // if(!$('.category__1depth_list > li:nth-child(2)').is('active')){
      // $('.category__1depth_list > li').removeClass('active');
      $('.category__1depth_list > li:nth-child(2)').toggleClass('active');
      $('.category__1depth_list > li:nth-child(2)').children('.category__2depth').toggle();
    // }

    //메뉴 버튼 온오프
    $(this).toggleClass('on');  
  });

  //대메뉴 마우스 올렸을 때
  $('.category__1depth_list > li:nth-child(2),.category__1depth_list > li:nth-child(5)').mouseenter(function(){
    $('.category__1depth_list > li').removeClass('active');
    $('.bg__2depth').show();
    $(this).children('.category__2depth').show();
  });

  //대메뉴 마우스 뗐을 때
  $('.category__1depth_list > li:nth-child(2),.category__1depth_list > li:nth-child(5)').mouseleave(function(){
    $('.category__1depth_list > li').removeClass('active');
    $('.bg__2depth').hide();
    $(this).children('.category__2depth').hide();
  });

  //패키지 눌렀을때
  $('.gnb_list > li').click(function(){
    $('.gnb_sub_img').toggle();
  });


  //슬라이드
  var list = 0;
  var width = $('.panel div').width();
  $('.visual_left').click(function(){
    if(list == 1){
      list = 3;
    }else{
      list = list - 1;
    }
    slide_move();
  });
  $('.visual_right').click(function(){
    if(list == 3){
      list = 1;
    }else{
      list = list + 1;
    }
    slide_move();
  });

  function slide_move(){
    $('.panel').stop().animate({'margin-left': -(list * width)});
  }

});