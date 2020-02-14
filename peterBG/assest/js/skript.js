(function($) {
    "use strict"
   
   $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            horizontalOffset: 0,
            hideDistantElements: false, //Elemente sollen nicht verschwinden, 
            //wenn sie aus dem Viewport rauslaufen.
        });
    // menu active 
    $(".menu li").on("click", function() {
        $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
    })
    $(".f_menu li").on("click", function() {
        $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
    })
    $(".fo_menu li").on("click", function() {
        $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
    })

    // text changing 
    var clic_cl = $(".f_menu li a");

    $(clic_cl).on("click", function() {
        var take_text = $(this).text();
        $("#hight_light_text").html(take_text);

    })

    // css remove active-pr
    $(".f_two").on('click', function() {
            $(".f_one li").removeClass("active-pr");
        })
        // css remove active-pr
    $(".f_one").on('click', function() {
            $(".f_two li").removeClass("active-pr");
        })
        // sticky
        // menu fixed
    $(window).scroll(function() {
        var topscrool = $(window).scrollTop();
        if (topscrool > 70) {
            $(".menu-area").addClass("sticky");
            $(".dark").css("display", "block");
            $(".light").css("display", "none");
        } else {
            $(".menu-area").removeClass("sticky");
            $(".light").css("display", "block");
            $(".dark").css("display", "none");

        }

    });
    //      // responsive logo
    //      if (screen.width>=667) {
    //     alert('Less than 960');
    // }
    // else {

    //     alert('More than kom 666px');
    // }
    // down to top
    $(window).scroll(function() {
        // var heighttitle = $('.title_text').offset().top;
        // console.log(heighttitle);
        var top_sc = $(window).scrollTop();
        // console.log(top_sc);
        if (top_sc > 80) {
            $(".top_d").css({ "opacity": "1", "visibility": "visible;", "transition": "0.1s ease-in" });
        } else {
            $(".top_d").css({ "opacity": "0", "visibility": "hidden;", "transition": "0.1s ease-in" });
        }
    })
    var click_U = $(".top_d");
    $(click_U).click(upfunctionn);

    function upfunctionn() {
        $('html,body').animate({ scrollTop: 0 }, 415);
        return false;
    }

    // isotop
    $(".filter_sec").isotope({
        filter: '*'
    });
    $(".f_menu li").on('click', function() {
        var selector = $(this).attr('data-filter');
        $(".filter_sec").isotope({
            filter: selector
        });
    });

    // pakery
    $('.filter_sec').isotope({
        layoutMode: 'packery',
        itemSelector: '.single_team_area',
        percentPosition: true,
        packery: {
            columnWidth: '.single_team_area'
        }
    });
    /*var imageheight = $('.revolation-img').height();
        var textHeight = $('.revolation-content').height();

        var heightM = (imageheight - textHeight) / 2;

        $('.revolation-content').css({
            paddingTop: heightM,
            paddingBottom: heightM
        });*/
    // steller parealx fffect 
    $('#mar_single_content_area').stellar();
    // single member pading top and down
    var heig_img = $(".single_member_img").height();
    var heig_content = $(".sigle_mem_content").height();
    var pad_m = (heig_img - heig_content) / 2;
    $(".sigle_mem_content").css({
        paddingTop: pad_m,
        paddingBottom: pad_m
    })

})(jQuery);