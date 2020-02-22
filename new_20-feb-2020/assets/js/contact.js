$(document).ready(function() {
    $(".submit-button").click(function() {
        // var myform = document.getElementById("contact-us-form");
        // var formdata = new FormData(myform);
        // $.ajax({
        //     url: "[YOUR URL SHOULD BE HERE]",
        //     data: formdata,
        //     cache: false,
        //     processData: false,
        //     contentType: false,
        //     type: 'POST',
        //     success: function (dataofconfirm) {
        //         // do something with the result
        //     }
        // });
        $(".contact-title-wrapper").find(".default-title").hide();
        $(".contact-title-wrapper").find(".thank-you-msg").addClass('blink').show();
        $("#contact-us-form").trigger("reset");
    });

    $(window).scroll(function () {
        var top_sc = $(window).scrollTop();
        if (top_sc > 81) {
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