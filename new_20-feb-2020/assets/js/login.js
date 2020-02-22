$(document).ready(function() {
  




    $(".hide").click(function() {
        var src=$(this).attr('src');
        if(src=="assets/images/passwordhide.png")
        {
            $(this).attr("src", "assets/images/passwordshow.png");
        }
        else if(src=="assets/images/passwordshow.png"){
            $(this).attr("src", "assets/images/passwordhide.png");
        }
        var type = $("#password").attr("type");
        if(type == "text") {
            $("#password").attr("type","password");
        } else {
            $("#password").attr("type","text");
        }
        
    });



    $(".login-btn").click(function(e){
        e.preventDefault();
        $("#sorrymsg").attr("style","visibility:visible");
    });

    $(window).scroll(function () {
        var top_sc = $(window).scrollTop();
        if (top_sc > 80) {
            $(".top_d").css({
                "opacity": "1",
                "visibility": "visible",
                "transition": "0.1s ease-in"
            });
        } else {
            $(".top_d").css({
                "opacity": "0",
                "visibility": "hidden",
                "transition": "0.1s ease-in"
            });
        }
    })
    var click_U = $(".top_d");
    $(click_U).click(upfunctionn);
});
function upfunctionn() {
    $('html,body').animate({
        scrollTop: 0
    }, 415);
    return false;
}