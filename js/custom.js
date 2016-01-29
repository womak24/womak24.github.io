// http://codepen.io/Guilh/pen/JLKbn
// https://teamtreehouse.com/community/forum-tip-create-a-sticky-navigation-with-css-and-jquery-2

var  mn = $(".navbar");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});


$(document).ready(function(){
  $('.slider-content').slick({
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: false,
    autoplaySpeed: 6000,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          dots: false,
        }
      }
    ]
  });
    
    
    
  // http://stackoverflow.com/a/23769601/2596452    
  $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("#bs-example-navbar-collapse-1").hasClass("collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});


// http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
$("#navbar-toggle-button-id").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // animate
   $('html, body').animate({
        scrollTop: $("#navbar-toggle-button-id").offset().top
    }, 200); // zeit

});

