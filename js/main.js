(function ($) {

    "use strict";
    new WOW().init();

    //preloader

    let mainBody = $('body'),
    bodyWrapper=$(".body-content-wrapper"),
    mainPreloader  = $(".preloader"),
    mainStatus  = $(".preloader-status"),
    mainLoader = $('.loader'),
    wHeight = $(window).height(),
    wWidth = $(window).width(),
    i = 0;

   window.onload = function() {

      mainLoader.css("top", wHeight / 2 - 2.5)
   
    if($('html').attr('lang') == 'en'){
      
        mainLoader.css("left",wWidth / 2 - 200)
    }
    else{

      mainLoader.css("right", wWidth / 2 - 200)
    }
    
  do{
    mainLoader.animate({
     width: i
    },10)
    i+=3;
  } while(i <= 400)
  if(i === 402){

    if($('html').attr('lang') == 'en'){
      
      mainLoader.animate({
        left: 0,
        width: '100%',
      })
    }
    else{

      mainLoader.animate({
        right: 0,
        width: '100%',
      })
    }
  mainLoader.animate({
    top: '0',
    height: '100vh'
  })

 
}

  $('.body-content-wrapper').fadeOut();
   mainStatus.delay(2500).fadeOut("slow");   
    setTimeout(function(){
      mainLoader.addClass("loaded");
      mainBody.addClass("loaded");
      bodyWrapper.fadeIn("slow");
    },3700);
    mainPreloader.delay(5200).fadeOut("slow");
    setTimeout(function(){
      mainBody.addClass("overflow")
    },5200);


      // $(".effect-text.active , .effect-image.active").each(function () {

      //   let $this   = $(this),
      //       offsetTop = $this.offset().top;
      //   if (offsetTop) {
      //     $(this).removeClass('active');
      //   }
     
      // });

  }

  //span effect

  $(".nav-link,.carousel-hero button").on('mouseenter', function(e) {
    let parentOffset = $(this).offset(),
       relX = e.pageX - parentOffset.left,
       relY = e.pageY - parentOffset.top;
       $(this).find('.effect').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
     let parentOffset = $(this).offset(),
       relX = e.pageX - parentOffset.left,
       relY = e.pageY - parentOffset.top;
       $(this).find(".effect").css({top:relY, left:relX})
    })

   
     // sticky header
     $(window).on("scroll",function() {
      let stickyheader = $(window).scrollTop();
        if (stickyheader > 50) {
           $("header").addClass("sticky-navbar");
        } else {
          $("header").removeClass("sticky-navbar");
        }
   });


   // navbar collapse


   $(".navbar-toggler").on("click",function(){

       $(this).toggleClass("active");

   })
   let myCollapsible = document.querySelector(".collapse")
    myCollapsible.addEventListener('show.bs.collapse', function () {
 
      $(".navbar-side").addClass("show");
      $("header").addClass("toggle");     


    });
    myCollapsible.addEventListener('hide.bs.collapse', function () {
 

      $(".navbar-side").removeClass("show");
      $("header").removeClass("toggle");

    });



  
   // svg viewbox

   $('.hero-sec svg').each(function () {
     
    if($("html").attr("lang")== "en"){

    $(this).attr('viewBox', '0 0 1100 200');

    }
    else{

      $(this).attr('viewBox', '0 0 1100 380');

    }
  
  });
  $('.work-details-pg-sec svg').each(function () {
     
    if($("html").attr("lang")== "en"){

    $(this).attr('viewBox', '0 0 960 920');

    }
    else{

      $(this).attr('viewBox', '0 0 960 700');

    }
  
  });

// swiper services
// let swiperservices = new Swiper(".swiper-services", {

//   // effect: "coverflow",
//   slidesPerView:3,
//   spaceBetween:0,
//   centeredSlides: true,
//   roundLengths: true,
//   loop: true,
//   speed:2000,
//   mousewheel: {
//     forceToAxis: true,
//     releaseOnEdges: true,
//   },
//   // coverflowEffect: {
//   //   rotate:30,
//   //   stretch: 0,
//   //   depth: 100,
//   //   modifier: 1,
//   //   slideShadows: true,
//   // },
// //   autoplay: {
// //      delay: 1000,
// //       pauseOnMouseEnter:true,
// //       disableOnInteraction: false,
// //  },
// breakpoints: {
//   280: {

//     slidesPerView: 1,

//   },
//   320: {

//     slidesPerView: 1,

//   },
//   375:{

//     slidesPerView:1,

//   },
//   425: {

//     slidesPerView: 1,

//   },
//   575:{

//     slidesPerView:1,

//   },
//   768:{

//     slidesPerView:1,

//   },
//   992:{

//     slidesPerView: 3,
//   },
//   1024: {

//     slidesPerView:3,

//   },
//   1200:{

//     slidesPerView:3,

//   },
//   1316:{

//     slidesPerView: 3,
//   }
// },

// });
// $(".swiper-services .swiper-slide").each(function(){
     
//   if($(this).hasClass("swiper-slide-active")){
//     $(this).find(".image").addClass("effect-image");
//   }

//  })

// easy slider

$('.btn-services').click(function(){
  $('.services-modal').addClass("show").removeClass("hide");
   mainBody.addClass("modal-active");
})

$('.btn-closed').click(function(){
  $(".services-modal").addClass('hide').removeClass("show");
   mainBody.removeClass("modal-active")
});

if($(".slider").length){

   EasySlides('.slider_circle_10',{
  
    'autoplay': false,
    'stepbystep':false,
    'show':7,

   });
    
   EasySlides('.slider_clock',{

     'autoplay': false,
     'stepbystep': false,
     'show':10,

  })

  $(".slider_circle_10 .slide-active").each(function(){
     
    $(this).find(".image").addClass("effect-image");
    $(this).find(".text").addClass("effect-text");
  
  });
   }

// swiper articles
let swiperarticles = new Swiper(".swiper-articles", {

  direction: "vertical",
  slidesPerView:2,
  loop:false,
  speed:3500,
  autoplay: {
    delay:1000,
    pauseOnMouseEnter:true,
   disableOnInteraction: false,
  },
});

// swiper recent articles
let swiperrecentarticles = new Swiper(".swiper-recentarticles", {

  slidesPerView:3,
  spaceBetween:15,
  grabCursor: true,
  loop: true,
  autoplay: {
     delay: 1000,
     pauseOnMouseEnter:true,
    disableOnInteraction: false,
  },
  speed:4000,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    280:{

      slidesPerView: 1,

    },
    320: {
  
      slidesPerView: 1,
  
    },
    375:{
  
      slidesPerView:1,
  
    },
    425: {
  
      slidesPerView: 1,
  
    },
    575:{
  
      slidesPerView:1,
  
    },
    768:{
  
      slidesPerView:1,
  
    },
    991:{
  
      slidesPerView: 2,
    },
    1024: {
  
      slidesPerView:2,
  
    },
    1200:{
  
      slidesPerView:3,
  
    },
    1316:{
  
      slidesPerView: 3,
    }
  },

});

$(swiperrecentarticles).on('mouseover', function () {
  $(this).addClass("stopped");
});
$(swiperrecentarticles).on('mouseout', function () {
  $(this).removeClass("stopped");
});

// swiper work screens
let swiperworkscreens = new Swiper(".swiper-work-screens", {
  slidesPerView: 1,
  spaceBetween:140,
  loop: false,
  speed:4000,
  keyboard: {
      enabled: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

// swiper web gallery
let swiperworkgallery = new Swiper(".swiper-web-gallery", {

  slidesPerView:2,
  spaceBetween:5,
  grabCursor: true,
  loop: true,
  autoplay: {
     delay: 1000,
     pauseOnMouseEnter:true,
    disableOnInteraction: false,
  },
  speed:4000,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    280: {
  
      slidesPerView: 1,
  
    },
    320: {
  
      slidesPerView: 1,
  
    },
    375:{
  
      slidesPerView:1,
  
    },
    425: {
  
      slidesPerView: 1,
  
    },
    575:{
  
      slidesPerView:1,
  
    },
    768:{
  
      slidesPerView:1,
  
    },
    991:{
  
      slidesPerView: 2,
    },
    1024: {
  
      slidesPerView:2,
  
    },
    1200:{
  
      slidesPerView:2,
  
    },
    1316:{
  
      slidesPerView: 2,
    }
  },

});

// swiper mobile gallery
let swiperworkmobilegallery = new Swiper(".swiper-mob-gallery", {

  slidesPerView:4,
  spaceBetween:30,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
     delay: 1000,
     pauseOnMouseEnter:true,
    disableOnInteraction: false,
  },
  speed:4000,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    280: {
  
      slidesPerView: 1,
  
    },
    320: {
  
      slidesPerView: 1,
  
    },
    375:{
  
      slidesPerView:1,
  
    },
    425: {
  
      slidesPerView: 1,
  
    },
    575:{
  
      slidesPerView:1,
  
    },
    768:{
  
      slidesPerView:2,
  
    },
    991:{
  
      slidesPerView: 3,
    },
    1024: {
  
      slidesPerView:3,
  
    },
    1200:{
  
      slidesPerView:4,
  
    },
    1316:{
  
      slidesPerView: 4,
    }
  },

});




//mixitup
if($(".work-mixitup").length){
  
  let mixer = mixitup(".work-mixitup");

}

  // video play
  $('.work-pg-sec video').mouseover(function(){
    $(this).get(0).play();
   }).mouseout(function(){
    $(this).get(0).pause();
   });

   // text switcher
   
   let texts = ($("html").attr("lang")== "en") ? ["A", "B", "C","D"] : ["أ", "ب", "ت","ث"],
    textIndex = 0;

   if( $(".counter").length){

   let counter= window.setInterval(function() {
    
      $(".counter").text(texts[textIndex]);
      textIndex = (textIndex < texts.length - 1) ? textIndex + 1 : 0;
     }, 300);
    }


   // modenizr scroll effect
 
  //  let isTouch = Modernizr.touch;

  //  if (isTouch) { $('.effect-text, .effect-image').addClass('active'); }

   $(window).on('scroll', revealOnScroll);

    function revealOnScroll() {
    var scrolled = $(window).scrollTop(),
     winheightpadded = $(window).height() * 1.1;

   $(".effect-text,.effect-image").each(function () {
     var $this     = $(this),
       offsetTop = $this.offset().top;

   if (scrolled + winheightpadded > offsetTop) {
     if ($this.data('timeout')) {
       window.setTimeout(function(){
         $this.addClass('active');
       }, parseInt($this.data('timeout'),10));
     } 

     else {
       $this.addClass('active');
    
     }
    }
 });


// $(".effect-text.active , .effect-image.active").each(function () {

//    let $this   = $(this),
//        offsetTop = $this.offset().top;
//    if (scrolled + winheightpadded < offsetTop) {
//      $(this).removeClass('active');
//    }

//  });
}
revealOnScroll();   

// anchor prevent default
$("a[href='.']").click(function(event){

  event.stopPropagation();
  event.preventDefault();


})

   // validation
   let forms = document.getElementsByClassName('needs-validation'),
   validation = Array.prototype.filter.call(forms, function(form) {
   form.addEventListener('submit', function(event) {
   if (form.checkValidity() === false) {
     event.preventDefault();
     event.stopPropagation();
   }

   form.classList.add('was-validated');

   }, false);
  });


  //email validation
   $("input[type='email']").on('input',function() {
    var pattern =  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var email = $(this).val();
    if (pattern.test(email)) {
     $(this).parent(".input-effect").find(".invalid-feedback").css("display","none");
      $(this).addClass("is-valid").removeClass("is-invalid");
    }
    else{
     $(this).parent(".input-effect").find(".invalid-feedback").css("display","block")
     if($("html").attr("lang")== "en"){

         $(this).parent(".input-effect").find(".invalid-feedback").html("Invalid Email Address  'info@example.com' ");


     }
     else{

         $(this).parent(".input-effect").find(".invalid-feedback").html("البريد الإلكتروني غير صحيح  'info@example.com' ");

     }
     $(this).addClass("is-invalid").removeClass("is-valid");

    }

   });

    // prevent characters
     $("input[type='tel']").on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    
    // auto complete
    $(".form-control").attr("autocomplete","off");


    $(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})
     

 // scroll to top

 $(window).on('scroll',function(){

  if($(this).scrollTop() > 150) {

    $(".auto-scroll-to-top").removeClass("non-hover");
     $(".auto-scroll-to-top").addClass("visible");
   } else {

    $(".auto-scroll-to-top").addClass("non-hover");
    $(".auto-scroll-to-top").removeClass("visible");
   }
    if($(this).scrollTop() + $(window).height() > $(document).height() - 600) {
      if (window.matchMedia('(min-width: 992px)').matches){

        $(".auto-scroll-to-top").addClass("bottom");
      }
     }
     else if($(this).scrollTop() + $(window).height() > $(document).height() - 850){

      if (window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

        $(".auto-scroll-to-top").addClass("bottom");
      }
     }

     else if($(this).scrollTop() + $(window).height() > $(document).height() - 1000){

      if (window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

        $(".auto-scroll-to-top").addClass("bottom");
      }
     }
     else if($(this).scrollTop() + $(window).height() > $(document).height() - 1200){

      if (window.matchMedia('(max-width: 575px) ').matches){

        $(".auto-scroll-to-top").addClass("bottom");
      }
     }
    
    else{
  
      $(".auto-scroll-to-top").removeClass("bottom");
  
     }
  
});

$('.auto-scroll-to-top').on('click touchend', function() {
  $("html, body").animate({scrollTop: 0}, 500);
});   


 })(jQuery);



 

