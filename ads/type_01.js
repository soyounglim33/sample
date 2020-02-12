$(document).ready(function(){
  
  //전체메뉴 열기
  $('.all_menu h2 > a').click(function(){
    //메뉴 누르면 나오게
    $('.allmenu_bg').stop().slideToggle();
    $('.all_menu_cont').stop().slideToggle();

    //메뉴 버튼 온오프
    $(this).toggleClass('on');  
  });

  
  //전체메뉴 닫기
  $('.all_menu_close a').click(function(){
    $('.allmenu_bg').slideUp();
    $('.all_menu_cont').slideUp();
  });


  //서브메뉴 열기
  $('.gnb_list > li:nth-child(2) h3 a').click(function(){
    $('.gnb_submenu_bg').slideToggle();
    $(this).parent().siblings('.gnb_sub').stop().slideToggle();
  });

  //서브메뉴 닫기
  $('.gnb_list_close').click(function(){
    $('.gnb_submenu_bg').slideUp();
    $('.gnb_sub').stop().slideUp();
  });
});