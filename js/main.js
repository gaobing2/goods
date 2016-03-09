$(function(){
    /*导航栏右边分类点击效果*/
    $('.glyphicon-list').click(function(){
        if($('.detail').css('display') == "block"){
            $('.detail').slideUp();
        }
        else{
            $('.detail').slideDown();
        }
    });

    /*轮播图*/
    $('#myCarousel').carousel({interval:2000});

    /*收藏栏*/
    $('.star').click(function(){
       $(document).scrollTop(0);//回到顶部
       $('.window').fadeIn('slow').fadeOut(2000);
    });
    /*分享按钮*/

    /*参数点击*/
    $('.table a').click(function(){
        $('.table a').removeClass('active');
        $(this).addClass('active');
    });
    /*数量加减*/
    $(function(){
       $('.jian').click(function(){
          var num = $('.num').val();
          var temp = parseInt(num)-1;
          if(temp>=0){
              $('.num').val(temp);
          }
       });
        $('.jia').click(function(){
           var num = $('.num').val();
           var temp = parseInt(num)+1;
           $('.num').val(temp);
        });
    });
});
