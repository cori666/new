
    $(document).ready(function() {//실행틀 시작
        
        $('.top').click(function(){
            event.preventDefault();
    
            $("html,body").stop().animate({scrollTop:0});
            });//menu.click() 끝
   
            var a = 1 ;//alert(a)
            $('.link_btn').click(function(){
               if (a == 1) {
                   $(this).addClass('on');
                   $('.small_sel_box').fadeIn();
                   a = 2;
               } else {
                   $(this).removeClass('on'); 
                   $('.small_sel_box').fadeOut();
                   a = 1;
               }
            })         



    });//실행틀 끝
   