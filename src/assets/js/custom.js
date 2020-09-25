import jQuery from 'jquery';
import $ from 'jquery';
jQuery( document ).ready(function( $ ) {
    // $("#preloader").animate({
    //     'opacity' : '0'
    // },600,function () {
    //     setTimeout(() => {
    //         $("#preloader").css("visibility", "hidden").fadeOut();
    //     }, 300);
    // })
    
    $(window).scroll(function () {
        //console.log("scrollll :::");
        let scroll = $(window).scrollTop();
        let box = $('.header-text').height();
        let header = $('header').height();
        //console.log(`scrollll= ${scroll} ::: box = ${box} && header = ${header}`);
        if (scroll >= box - header) {
            $("header").addClass("background-header");
        }else {
            $("header").removeClass("background-header");
        }
    });

})

export function changeBg( bool, bg="red") {
    //console.log("change bg  :::: ", bool);
    if (bool === false) {
        //$("#preloader").css("visibility", "hidden").fadeOut();
        $("#preloader").animate({
                'opacity' : '0'
            },600,function () {
                setTimeout(() => {
                    //console.log("change bg inner  :::: ", bool);
                    $("#preloader").css("visibility", "hidden").fadeOut();
                }, 300);
            })
    }
    
    //.css("visibility", "hidden").fadeOut();
}