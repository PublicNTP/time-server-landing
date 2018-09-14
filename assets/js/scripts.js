$(document).ready(function(){
  jQuery('.nav-link--features').click(function(e){
    scrollTo(document.documentElement, elmnt.offsetTop, 275);
    e.preventDefault();
  });

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
  }

});

elmnt = document.getElementById("features");
scrollTo(document.documentElement, elmnt.offsetTop, 600);
