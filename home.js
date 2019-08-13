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

    //side navigation
    var urlstr=window.location.origin;
    var switchi;
    function checkPage(){
        switch(urlstr){
            case "https://vr-circle.github.io":
                switchi=0;
                break;
            case "https://vr-circle.github.io/about.html":
                switchi=1;
                break;
            case "https://vr-circle.github.io/product.html":
                switchi=2;
                break;
            case "https://vr-circle.github.io/archive.html":
                switchi=3;
                break;
            case "https://vr-circle.github.io/contact.html":
                switchi=4;
                break;
        }
    }
    var sideli=document.getElementsByClassName("sideli");
    var subnav=document.getElementsByClassName("subnav");
    for(var i=0;i<sideli.length;i++)
        (function(n){
            checkPage();
            if(switchi==n)sideli[n].classList.add('thispage');
            else{
                sideli[n].addEventListener('click',function(){
                    sideli[n].classList.toggle('sideli-click');
                    for(var si=0;si<sideli.length;si++)
                        if(sideli[si].classList.contains('sideli-click') && !(si==n))
                            sideli[si].classList.remove('sideli-click');
                    subnav[n].classList.toggle("visible");
                    for(var si=0;si<sideli.length;si++)
                        if(subnav[si].classList.contains('visible') && !(si==n))
                            subnav[si].classList.remove('visible');
                },false);
            }
        })(i);
    
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
    var touchMoveX;
    window.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].pageX;
    }, {passive:false});
    window.addEventListener("touchend", function(event) {
        touchMoveX = event.changedTouches[0].pageX;
    if (touchStartX > touchMoveX) {
        if ((touchStartX > (touchMoveX + 50)) && ($(".sidenav").hasClass("is-open"))) {
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
        if (((touchStartX + 50) < touchMoveX) && (touchStartX<40) ) {
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


    var scrollButton=document.getElementById('controlscroll');
    scrollButton.addEventListener('click',function(){
        window.scrollTo(0,0);
    },false);


    //alert(location.pathname);
}



window.onload = init();
