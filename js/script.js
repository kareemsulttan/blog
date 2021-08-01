//Adapted from eclipse2024.org 

$(document).ready(function() {

    $(".swap-icon").hover(function() {
        (src = $(this).find("img:first").attr("src"), i = src.search("inactive"), -1 == i ? src = src.replace("active", "inactive") : src = src.replace("inactive", "active"), $(this).find("img:first").attr("src", src))
    });

    $(".swap-img").hover(function() {
        nextdiv = $(this).children(), nextdiv.hasClass("disabled") || (src = $(this).find("img:first").attr("src"), i = src.search("inactive"), -1 == i ? src = src.replace("active", "inactive") : src = src.replace("inactive", "active"), $(this).find("img:first").attr("src", src))
    })

    //desktop
    $('.news-ticker').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 3000,
        height: '25',
        visible: 0,
        mousePause: true,
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        },
        callbacks: {
            before: false,
            after: false
        }
    });   

    //mobile
    $('.news-ticker-mobile').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 3000,
        height: '55',
        visible: 0,
        mousePause: true,
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        },
        callbacks: {
            before: false,
            after: false
        }
    });  

});