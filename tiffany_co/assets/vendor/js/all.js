
$(document).ready(function () {
    $('.nav-li').on('click',function(){
        $(this).find('.nav-li').addClass("active")
        $(this).siblings().find('.nav-li').removeClass('active');
        $('.hero-sec').addClass('active');
    })
    $('#drop1').on('click',function(){
        $('#drop01').addClass('active').siblings('.drop').removeClass('active');
    })
    $('#drop2').on('click',function(){
        $('#drop02').addClass('active').siblings('.drop').removeClass('active');;
    })
    $('#drop3').on('click',function(){
        $('#drop03').addClass('active').siblings('.drop').removeClass('active');;
    })
    $('#drop4').on('click',function(){
        $('#drop04').addClass('active').siblings('.drop').removeClass('active');;
    })
    $('#drop5').on('click',function(){
        $('#drop05').addClass('active').siblings('.drop').removeClass('active');;
    })
    $('#drop6').on('click',function(){
        $('#drop06').addClass('active').siblings('.drop').removeClass('active');;
    })
    $('#drop7').on('click',function(){
        $('#drop07').addClass('active').siblings('.drop').removeClass('active');;
    })
    
    $('.menu-toggle').on('click',function(){
        $('.pad_menu').addClass('active')
        $('.main').addClass('active')
        $('.footer').addClass('active')
        $('.navber').addClass('active')
    })

    $('.close').on('click',function(){
        $('.pad_menu').removeClass('active')
        $('.hero-sec').removeClass('active');
        $('.main').removeClass('active')
        $('.footer').removeClass('active')
        $('.navber').removeClass('active')
    })

    $('.back').on('click',function(){
        $('.menu_hum').removeClass('active')
        $('.menu_home').removeClass('active')
    })

    $('.menu_nav-item').on('click',function(){
        $('.menu_home').addClass('active')
    })

    $('#hum1').on('click',function(){
        $('#hum01').addClass('active').siblings('.menu_hum').removeClass('active');
    })
    $('#hum2').on('click',function(){
        $('#hum02').addClass('active').siblings('.menu_hum').removeClass('active');;
    })
    $('#hum3').on('click',function(){
        $('#hum03').addClass('active').siblings('.menu_hum').removeClass('active');;
    })
    $('#hum4').on('click',function(){
        $('#hum04').addClass('active').siblings('.menu_hum').removeClass('active');;
    })
    $('#hum5').on('click',function(){
        $('#hum05').addClass('active').siblings('.menu_hum').removeClass('active');;
    })
    $('#hum6').on('click',function(){
        $('#hum06').addClass('active').siblings('.menu_hum').removeClass('active');;
    })
    $('#hum7').on('click',function(){
        $('#hum07').addClass('active').siblings('.menu_hum').removeClass('active');;
    })
    
})