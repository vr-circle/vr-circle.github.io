function init(){
    var px_change = 200;
    var a1=850;
    var a2=1600;
    window.addEventListener('scroll', function(e){
        if ( $(window).scrollTop() > px_change ){
            $("header").addClass("headerscroll");
            $("nav").addClass("navscroll");
            $(".topscroll").addClass("topscrollscroll");
            $(".headsvg").addClass("headsvgscroll");
            $(".list").addClass("changecolor");//scrollした時navの白文字を黒文字に
            $(".newscontents").fadeIn();
            $(".n_2_list").addClass("liopen");
        }
        else if($("header").hasClass("headerscroll")){
            $("header").removeClass("headerscroll");
            $("nav").removeClass("navscroll");
            $(".topscroll").removeClass("topscrollscroll");
            $(".headsvg").removeClass("headsvgscroll");
            $(".list").removeClass("changecolor");
            $(".n_2_list").removeClass("liopen");
        }
        if($(window).scrollTop()>a1)$(".contactcontents").fadeIn();
        if($(window).scrollTop()>a2)$(".moviecontents").fadeIn();
    },false);

    function openMenu(){
        $(".sidenav").addClass("is-open");
        $(".sideul").addClass("is-open");
        $(".hum1").addClass("hum1r");
        $(".hum2").addClass("hum2r");
        $(".hum3").addClass("hum3r");
        $("body").addClass("notscr");
        $("html").addClass("notscr");
    }
    function closeMenu(){
        $(".sidenav").removeClass("is-open");
        $(".sideul").removeClass("is-open");
        $(".hum1").removeClass("hum1r");
        $(".hum2").removeClass("hum2r");
        $(".hum3").removeClass("hum3r");
        $("body").removeClass("notscr");
        $("html").removeClass("notscr");
        for(var i=0;i<sideli.length;i++){
            if(subnav[i].classList.contains('visible')==true)
                subnav[i].classList.remove('visible');
            if(sideli[i].classList.contains('sideli-click'))
                sideli[i].classList.remove('sideli-click');
        }
    }
    //side navigation
    var switchi;
    function checkPage(){
        if(document.URL.match("about"))switchi=1;
        else if(document.URL.match("product"))switchi=2;
        else if(document.URL.match("archive"))switchi=3;
        else if(document.URL.match("contact"))switchi=4;
        else switchi=0;
    }
    var sideli=document.getElementsByClassName("sideli");
    var subnav=document.getElementsByClassName("subnav");
    var subnavLi=document.getElementsByClassName('subnavLi');
    var points=document.getElementsByClassName('point');
    for(var pi=0;pi<points.length;pi++)
            (function(pp){
                subnavLi[pp].addEventListener('click',function(){
                    closeMenu();
                    points[pp].scrollIntoView(true);
                },false);
            })(pi);
    for(var i=0;i<sideli.length;i++)
        (function(n){
            checkPage();
            if(switchi==n)sideli[n].classList.add('thispage');
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
        })(i);
    
    var hum=document.getElementById('humbergerback');
    hum.addEventListener('click',function(ev){
        if($(".sidenav").hasClass("is-open")) closeMenu();
        else openMenu();
    },false);

    var touchStartX;
    var touchMoveX;
    window.addEventListener("touchstart", function(event) {
        touchStartX = event.touches[0].pageX;
    }, {passive:false});
    window.addEventListener("touchend", function(event) {
        touchMoveX = event.changedTouches[0].pageX;
    if (touchStartX > touchMoveX)
        if ((touchStartX > (touchMoveX + 50)) && ($(".sidenav").hasClass("is-open")))closeMenu();
    else if (touchStartX < touchMoveX)
        if (((touchStartX + 50) < touchMoveX) && (touchStartX<40))openMenu();
    }, false);

    var scrollButton=document.getElementById('controlscroll');
    scrollButton.addEventListener('click',function(){
        window.scrollTo(0,0);
    },false);
}

window.onload = init();
