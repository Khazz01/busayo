(function ($) {
    "use strict";



    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Clicked link
    let click = true;
    $('.nav-link').click(function(){
       $('.nav-link').css('color', 'white');
      $('.navbar-toggler').addClass('collapsed');
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').attr('aria-expanded', 'false');
  if (click == true)  {  let clicked = $(this).attr('id');
     $('#' + clicked).css('color', '#6EACDA');
     click= false
   }else if (click==false) {
       $('.nav-link').css('color', 'white');
     let clicked = $(this).attr('id');
        $('#' + clicked).css('color', '#6EACDA');
        click= true
   }
 });
    
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Change dataAos depending on media width
    $(document).ready(function() {
           const dataAos = $('.data-aos');
           const odd = $('.odd');
           const even = $('.even');
           const galleryItem = $('.gallery-item');
           const mediaQuery = window.matchMedia("(max-width: 1200px)");
           const copy = $(".copy");
           const mediaQuery2 = window.matchMedia("(max-width: 766px)");

           const currentYear = new Date().getFullYear();
           copy.text("Oluwabusayomi Copywrite @ " + currentYear);

           function dataAosChange(y) {
               if (y.matches) {
                   odd.each(function(i, item) {
                       $(item).attr('data-aos', 'slide-left');
                   });
                   even.each(function(i, item) {
                       $(item).attr('data-aos', 'slide-right');
                   });
                   console.log(odd.eq(1));
               } else {
                   console.log(galleryItem);
                   console.log("ah");
               }
           }

           mediaQuery.addListener(dataAosChange);
           dataAosChange(mediaQuery);

           function dataAosChange2(x) {
               if (x.matches) {
                   galleryItem.each(function(i, item) {
                       $(item).attr('data-aos', 'zoom-in');
                   });
               }
           }

           mediaQuery2.addListener(dataAosChange2);
           dataAosChange2(mediaQuery2);
       });


})(jQuery);
