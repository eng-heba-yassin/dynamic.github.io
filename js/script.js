
$(document).ready(function(){ 
    $(function () { 
        'use strict';
        var NavH = $('.header').height(),
            TitH = $('.title').height(),
            SecH = $('.article-1').height(),
            ArtH = $('.art-2').height(),
            ArttH = $('.pra-1').height(),
            PosiH = $('.article-3').height(),
            x = ArttH + NavH,
            h = x + ArtH,
            z = h + PosiH;
        var anim = $(".title-2"),
            opa = $('.article-2'),
            posi = $('.article-3');
        $(window).scroll(function () { 
            var scroll = $(window).scrollTop(); 

            if (scroll >= NavH && scroll <= SecH) { 
                $('.title').css("opacity","1");
            }
            else { 
                $('.title').css("opacity","0.5"); 
            }
        });
        $(window).scroll(function () { 
            var scroll = $(window).scrollTop(); 

            if (scroll >= x && scroll <= h) {
                $('.title-2').css("transition","2s")
                anim.removeClass('title-2') 
                .addClass("title-2-new");
                opa.removeClass('article-2')
                .addClass("article-2-new");
            } else { 
                anim.removeClass("title-2-new") 
                .addClass('title-2');
                opa.removeClass('article-2-new')
                .addClass("article-2");
            } 
        });
        $(window).scroll(function () { 
            var scroll = $(window).scrollTop(); 

            if (scroll >= h && scroll <= z) {
                $('.about-five').css({'position':'fixed', 'top':'0', 'left':'0', 'width':'50%','height':'100%'});
            } else { 
                $('.about-five').css({"position":"relative", "width":"100%"});
            } 
        });  
    }); 
 });

 


