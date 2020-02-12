$(document).ready(function () {


    //Video======================
    $('.video').parent().on('click', function () {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });



    //Modal======================
    $('.button').click(function () {
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })

    $('#modal-container').click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });



    //Scroll top=======================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {

            $('.menu-trigger').css({
                "left": "20px",
                "margin-left": "0px"
            });

            $('#scroll-top').fadeIn();

        } else {

            $('#scroll-top').fadeOut();
            $('.menu-trigger').css({
                "left": "50%",
                "margin-left": "-22px"
            });
        }
    });
    $("#scroll-top").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    //Mouse leave======================
    $("#oui, #non").on('click', function (e) {
        e.preventDefault();
    });

    $('body').removeClass('modal-active');
    var mouseY = 0;
    var topValue = 0;
    window.addEventListener("mouseout", function (e) {
            mouseY = e.clientY;
            if (mouseY < topValue) {
                $('body').addClass('modal-active');
                $('.two').addClass('in');
                $('#modal-container').removeClass('out');
            }
        },
        false);
});


//Custom selectbox======================

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children("span");
    this.opts = this.dd.find("ul.drop li");
    this.val = "";
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass("active");
        });
        obj.opts
            .on("click", function () {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
                opt.siblings().removeClass("selected");
                opt.filter(':contains("' + obj.val + '")').addClass("selected");
            })
            .change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($("#noble-gases"));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $(".wrap-drop").removeClass("active");
    });
});
