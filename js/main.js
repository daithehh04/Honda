
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
});

$("#vehicle-list").mCustomScrollbar({
    theme: 'dark'
});

function move(value) {
    $("#vehicle-list").mCustomScrollbar("scrollTo", value, {
        scrollEasing: 'easeOut',
    })
}
$('.vehicle-nav ul li a').click(function () {
    if ($(this).attr('id') === "cars-nav") {
        move("#cars")
    }
    if ($(this).attr('id') === "suv-nav") {
        move("#suv")
    }
    if ($(this).attr('id') === "minivan-nav") {
        move("#minivan")
    }
    if ($(this).attr('id') === "environment-nav") {
        move("#environment")
    }
    if ($(this).attr('id') === "future-nav") {
        move("#future")
    }
});
var count = "";
$('#navbar > a').click(function () {
    if (count === "") {
        count = $(this).attr('id');
        $(this).addClass('active');
        if (count === "vehicles-link") {
            $('#vehicles').removeClass('hide-vehicle');
            $('.vehicle-nav').addClass('animate__fadeInDown');
            $('#vehicle-list').addClass('animate__fadeInUp');
        }
    } else {
        if (count === $(this).attr('id')) {
            $(this).removeClass('active');
            count = "";
            $('.vehicle-nav').addClass('animate__fadeOutUp');
            $('#vehicle-list').addClass('animate__fadeOutDown');
            setTimeout(function () {
                $('#vehicles').addClass('hide-vehicle');
                $('.vehicle-nav').removeClass('animate__fadeOutUp');
                $('#vehicle-list').removeClass('animate__fadeOutDown');
            }, 300);
        } else {
            $('#navbar > a').removeClass('active');
            $(this).addClass('active');
            count = $(this).attr('id');
            if (count !== "vehicles-link") {
                $('.vehicle-nav').addClass('animate__fadeOutUp');
                $('#vehicle-list').addClass('animate__fadeOutDown');
                setTimeout(function () {
                    $('#vehicles').addClass('hide-vehicle');
                    $('.vehicle-nav').removeClass('animate__fadeOutUp');
                    $('#vehicle-list').removeClass('animate__fadeOutDown');
                }, 300);
            } else {
                $('#vehicles').removeClass('hide-vehicle');
                $('.vehicle-nav').addClass('animate__fadeInDown');
                $('#vehicle-list').addClass('animate__fadeInUp');
            }
        }
    }
})

$('#vehicle-close').click(function () {
    $('.vehicle-nav').addClass('animate__fadeOutUp');
    $('#vehicle-list').addClass('animate__fadeOutDown');
    setTimeout(function () {
        $('#vehicles').addClass('hide-vehicle');
        $('.vehicle-nav').removeClass('animate__fadeOutUp');
        $('#vehicle-list').removeClass('animate__fadeOutDown');
    }, 300);
    $('#navbar > a').removeClass('active');
    count = "";
})

$('.vehicle-product').addClass('animate__animated animate__fadeInUp');

$('.carousel-indicators__config li').click(function () {
    $('.carousel-indicators__config li').removeClass('active');
    $(this).addClass('active');
})

$('.indicator-xs-header').click(function () {
    $('.carousel-indicator-xs ol').slideToggle();
    if ($('.indicator-xs-header i').hasClass('transform-rotate')) {
        $('.indicator-xs-header i').removeClass('transform-rotate');
    } else {
        $('.indicator-xs-header i').addClass('transform-rotate');
    }
})
$('.carousel-indicator-xs ol li').click(function () {
    $('.indicator-title span').html($(this).html());
    $('.carousel-indicator-xs ol').slideUp();

})
var count = 0;
$('.carousel-control-prev').click(function () {
    $('.carousel-indicators__config li').removeClass('active');
    if (count == 0) {
        count = 4;
    } else {
        count--;
    }
    $('.carousel-indicators__config li').each(function (i) {
        if (i == count) {
            $(this).addClass('active');
            $('.indicator-title span').html($(this).html());
        }
    })
})

$('.carousel-control-next').click(function () {
    $('.carousel-indicators__config li').removeClass('active');
    if (count == 4) {
        count = 0;
    } else {
        count++;
    }
    $('.carousel-indicators__config li').each(function (i) {
        if (i == count) {
            $(this).addClass('active');
            $('.indicator-title span').html($(this).html());
        }
    })
})
$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
})

function collapse() {
    var width = $(window).width();
    if (width >= 768) {
        $('.collapse-ul').removeClass('collapse');
    }
    if (width > 768 && width < 784) {
        $('.collapse-ul').removeClass('collapse');
    }
    if (width < 768) {
        $('.collapse-ul').addClass('collapse');
    }
}
$(window).resize(function () {
    collapse();
})
$(document).ready(function() {
    collapse();
})