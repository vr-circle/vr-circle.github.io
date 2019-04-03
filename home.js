function init() {
    var px_change = 200;
    var a1=850;
    var a2=1600;
    window.addEventListener('scroll', function(e){
        if ( $(window).scrollTop() > px_change ) {
            $("header").addClass("headerscroll");
            $("nav").addClass("navscroll");
            $(".topscroll").addClass("topscrollscroll");
            //$(".headlogo").addClass("inv1");
            $(".headsvg").addClass("headsvgscroll");
            $(".list").addClass("changecolor");
            $(".newscontents").fadeIn();
        }else if ( $("header").hasClass("headerscroll") ) {
            $("header").removeClass("headerscroll");
            $("nav").removeClass("navscroll");
            $(".topscroll").removeClass("topscrollscroll");
            //$(".headlogo").removeClass("inv1");
            $(".headsvg").removeClass("headsvgscroll");
            $(".list").removeClass("changecolor");
        }
        if($(window).scrollTop()>a1){
            $(".contactcontents").fadeIn();
        }
        if($(window).scrollTop()>a2){
            $(".moviecontents").fadeIn();
        }
        
    });
    var hum=document.getElementById('humbergerback');
    hum.addEventListener('click',function(){
        if( $(".headopen").hasClass("is-open") ){
            $(".headopen").removeClass("is-open");
            $(".hum1").removeClass("hum1r");
            $(".hum2").removeClass("hum2r");
            $(".hum3").removeClass("hum3r");
            $(".backlist").removeClass("backlist-isopen");
        }
        else{
            $(".headopen").addClass("is-open");
            $(".hum1").addClass("hum1r");
            $(".hum2").addClass("hum2r");
            $(".hum3").addClass("hum3r");
            $(".backlist").addClass("backlist-isopen");
        }
    },false);
}


    var aa=document.getElementById('controlscroll');
    aa.addEventListener('click',function(){
        scrolltarget(0);
    },false);
    function scrolltarget(x){
        window.scrollTo(x,x);
    }

window.onload = init();
