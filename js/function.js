$(function(){
    $(window).on('load',function(){
        new WOW().init();
    });
});//wow plugin 초기화


$(function(){


    var $list = $('#cont3>.container>.tab>li>a');
    var $listImg = $('#cont3>.container>.view>li');
    var $viewOpen = $('.viewOpen');
    var $viewClose = $('.viewClose');
    var $viewImg = $('#cont3>.portfolio_bg>.portfolio_img');
    var $view = $('#cont3>.portfolio_bg');


    var nowIdx = 0;

    //portfolio
    $list.on('click',function(event){
        event.preventDefault();
        nowIdx = $list.index(this);

        $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        $listImg.fadeOut();
        $listImg.eq(nowIdx).fadeIn();
    });


    $viewOpen.on('click',function(event){

        event.preventDefault();
        var src = $(this).attr('href');

        $viewImg.find('a').css({
            backgroundImage : 'url('+src+')'
        });

        $viewImg.parent().fadeIn();
    });

    $viewClose.on('click',function(event){
        event.preventDefault();
        $viewImg.scrollTop(0)
        $view.fadeOut();
    });

    $view.on('click',function(){
        $viewImg.scrollTop(0)
        $view.fadeOut();
    });
    //end of portfolio

});//end of section handler


