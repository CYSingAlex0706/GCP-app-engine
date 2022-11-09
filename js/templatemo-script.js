$(function() {
    $(".navbar-toggler").on("click", function(e) {
        $(".tm-header").toggleClass("show");
        e.stopPropagation();
      });
    
      $("html").click(function(e) {
        var header = document.getElementById("tm-header");
    
        if (!header.contains(e.target)) {
          $(".tm-header").removeClass("show");
        }
      });
    
      $("#tm-nav .nav-link").click(function(e) {
        $(".tm-header").removeClass("show");
      });
});

$(window).on("load",function(){
  $(".loader-wrapper").fadeIn("2000");
});

setTimeout(function(){
  $(".loader-wrapper").fadeOut('slow');
}, 5000);

setTimeout(function(){
  $("#prediction1").fadeOut('slow');
}, 1);

setTimeout(function(){
  $("#prediction1").fadeIn('slow');
}, 6500);

setTimeout(function(){
  $("#prediction2").fadeOut('slow');
}, 1);

setTimeout(function(){
  $("#prediction2").fadeIn('slow');
}, 7000);

setTimeout(function(){
  $("#prediction3").fadeOut('slow');
}, 1);

setTimeout(function(){
  $("#prediction3").fadeIn('slow');
}, 8000);

setTimeout(() => {
  const genNumber = () => {
  document.querySelector("#number_animation").style.setProperty("--percent", 0.85);
};

setInterval(genNumber, 2000);
setTimeout(genNumber, 2000);
}, 5000);

$("body").on("load", function(){

});

