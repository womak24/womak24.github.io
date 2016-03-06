$(document).ready(function () {
    // Affix Navigation set offset depending on mobile or desktop version
    var mq = window.matchMedia( "(min-width: 992px)" );
    if (mq.matches) {
        console.log("Desktop Version");
        $('#navbar').affix({
          offset: {
            top: 75
          }
        })
    } else {
        console.log("Mobile Version");
        $('#navbar').affix({
          offset: {
            top: 175
          }
        })
    }

    // Kick slider in action
    $('.slider-content').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
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

    // Hide Dropdown when clicking somewhere    
    // http://stackoverflow.com/a/23769601/2596452    
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("#bs-example-navbar-collapse-1").hasClass("collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });

    // Move Menu up when clicking it
    // http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
    $("#navbar-toggle-button-id").on('click', function (e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // animate
        $('html, body').animate({
            scrollTop: $("#navbar-toggle-button-id").offset().top
        }, 200); // zeit
    });


    // PREVENTING SCROLL on GoogleMap
    // https://github.com/kylelam/kylelam.github.io/blob/master/iframe.html
    
    // set the mouse events to none when doc is ready
    $('#map').addClass('scrolloff');
    
    // lock it when mouse up
    $('#overlay').on("mouseup",function(){
        //somehow the mouseup event doesn't get call...
        $('#map').addClass('scrolloff'); 
    });

    // when mouse down, set the mouse events free
    $('#overlay').on("mousedown",function(){        
        $('#map').removeClass('scrolloff');
    });

    // becuase the mouse up doesn't work...
    $("#map").mouseleave(function () {

      // set the pointer events to none when mouse leaves the map area             
      $('#map').addClass('scrolloff');            
    });
});