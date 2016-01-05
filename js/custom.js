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