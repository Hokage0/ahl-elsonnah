$(function () {

    var he = $(window).height();
    $("#home").height(he);
    $(window).on("resize", function() {
        var he = $(window).height();
        $("#home").height(he);
    })
});
// this for navbar 
$(".navbar-nav .nav-link").click(function () {
    $(".navbar-nav .nav-link").removeClass("ching");
    $(this).addClass("ching");
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("target")).offset().top -65,
    },800);
});




// this for navbar 

// for nav bar move
$(function () {
    $(window).on("scroll", function () {
        let offsetWin = $(this).scrollTop();
        if(offsetWin > 0) {
            $(".navbar").addClass("customNav"),
            $(".navbar-nav .nav-link").css("color" , "black"),
            $(".navbar .navbar-brand a").css("color" , "black"),
            $(".up-btu").fadeIn();
        } else {
            $(".navbar").removeClass("customNav"),
            $(".navbar-nav .nav-link").css("color" , "white"),
            $(".navbar .navbar-brand a").css("color" , "white"),
            $(".up-btu").fadeOut();

        }
    })
});

$(function () {
    $(window).on("scroll", function () {
        let offsetWin = $(this).scrollTop();
        if(offsetWin > 0) { 
            $("#logo2").fadeIn();
            $("#logo").hide();
        }  else {
            $("#logo2").hide();
            $("#logo").fadeIn();
        }
    })
});



// this arrow for up butn
$(".up-btu").click(function () {
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("target")).offset().top -65

    },1400);
});

$(".content-header .arrow a").click(function () {
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("target")).offset().top -65

    },1400);
});



// // this for hover for works section
//  $(".se-works .wor-cont").hover(function () {
//      $(this).css("background-color" , "red");
//  },function() {
//     $(this).css("background-color" , "black")
// });
// // this for hover hava section works backgorund color red
// $(".butn span").click(function () {
//     $(".butn span").removeClass('worksBc');
//     $(this).addClass("worksBc")
// })
// // this for liber hava section works
//  $('.content-item').isotope({
//     // options
//     itemSelector: '.item',
//     layoutMode: 'fitRows'
//   });


//   $(".butn span").click(function() {
//     $(".butn span").removeClass('active');
//     $(this).addClass('active');
   
//     var dt = $(this).attr('data-filter');
//     $('.content-item').isotope({
//         filter: dt
//     });
//     return false;
//   });

// CONTACT FORM ERRORS

$(function () {

    var userError    = true;
    var massageError = true;

    
    $(".user_form").blur(function () {
        if ($(this).val().length <= 3) {
            $(this).parent().find(".red_error").fadeIn();
            userError = true;
        } else {
            $(this).parent().find(".red_error").fadeOut();
            userError = false;
        }
        
    });

    $(".user_city").blur(function () {
        if ($(this).val().length <= 3) {
            $(this).parent().find(".red_error").fadeIn();
            userError = true;
        } else {
            $(this).parent().find(".red_error").fadeOut();
            userError = false;
        }
        
    });

    

    $(".user_massage").blur(function () {
        if ($(this).val().length <= 10) {
            $(this).parent().find(".red_error").fadeIn();
            massageError = true;
        } else {
            $(this).parent().find(".red_error").fadeOut();
            massageError = false;
        }
        
    });

    $(".control-form").submit(function(s) {
        if (userError === true || massageError === true){
            s.preventDefault();
            $(".user_massage, .user_form").blur();
        }
        
    })
})


// /// owl carousel

$(function(){
    $('.owl-carousel').owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})



