function init() {
    var px_change = 200;
    var a1=850;
    var a2=1600;
    window.addEventListener('scroll', function(e){
        if ( $(window).scrollTop() > px_change )
        {
            $("header").addClass("headerscroll");
            $("nav").addClass("navscroll");

            $(".topscroll").addClass("topscrollscroll");
            
            $(".headsvg").addClass("headsvgscroll");
            
            $(".list").addClass("changecolor");//scrollした時navの白文字を黒文字に

            $(".newscontents").fadeIn();

            $(".n_2_list").addClass("liopen");

        }
        else if ( $("header").hasClass("headerscroll") ) 
        {
            $("header").removeClass("headerscroll");

            $("nav").removeClass("navscroll");

            $(".topscroll").removeClass("topscrollscroll");
            
            $(".headsvg").removeClass("headsvgscroll");
            
            $(".list").removeClass("changecolor");

            $(".n_2_list").removeClass("liopen");
        }
        if($(window).scrollTop()>a1){
            $(".contactcontents").fadeIn();
        }
        if($(window).scrollTop()>a2){
            $(".moviecontents").fadeIn();
        }
        
    },false);


    
    var hum=document.getElementById('humbergerback');
    hum.addEventListener('click',function(ev){
        if( $(".sidenav").hasClass("is-open") )
        {
            $(".sidenav").removeClass("is-open");
            $(".sideul").removeClass("is-open");
            $(".hum1").removeClass("hum1r");
            $(".hum2").removeClass("hum2r");
            $(".hum3").removeClass("hum3r");
            $("body").removeClass("notscr");
            $("html").removeClass("notscr");
        }
        else{
            $(".sidenav").addClass("is-open");
            $(".sideul").addClass("is-open");
            $(".hum1").addClass("hum1r");
            $(".hum2").addClass("hum2r");
            $(".hum3").addClass("hum3r");
            $("body").addClass("notscr");
            $("html").addClass("notscr");
        }
    },false);
    var touchStartX;
    var touchStartY;
    var touchMoveX;
    var touchMoveY;
 
    // 開始時
    window.addEventListener("touchstart", function(event) {
    // 座標の取得
    touchStartX = event.touches[0].pageX;
    touchStartY = event.touches[0].pageY;
    }, {passive:false});
    // 終了時
    window.addEventListener("touchend", function(event) {
        touchMoveX = event.changedTouches[0].pageX;
        touchMoveY = event.changedTouches[0].pageY;
    // 移動量の判定
    if (touchStartX > touchMoveX) {
        if ((touchStartX > (touchMoveX + 50)) && (touchStartY<(touchMoveY+20)) && (touchStartY>(touchMoveY-20)) && ($(".sidenav").hasClass("is-open"))) {
        //右から左に指が移動した場合
        $(".sidenav").removeClass("is-open");
        $(".sideul").removeClass("is-open");
        $(".hum1").removeClass("hum1r");
        $(".hum2").removeClass("hum2r");
        $(".hum3").removeClass("hum3r");
        $("body").removeClass("notscr");
        $("html").removeClass("notscr");
        }
    } else if (touchStartX < touchMoveX) {
        if (((touchStartX + 50) < touchMoveX) && ((touchStartY+20)>touchMoveY) && (touchMoveY>(touchStartY-20))) {
        //左から右に指が移動した場合
        $(".sidenav").addClass("is-open");
        $(".sideul").addClass("is-open");
        $(".hum1").addClass("hum1r");
        $(".hum2").addClass("hum2r");
        $(".hum3").addClass("hum3r");
        $("body").addClass("notscr");
        $("html").addClass("notscr");
        }
    }
    }, false);

    
    var aa=document.getElementById('controlscroll');
    aa.addEventListener('click',function(){
        window.scrollTo(0,0);
    },false);
}



window.onload = init();
