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
}, 4000);

setTimeout(function(){
  $("#prediction1").fadeOut('slow');
}, 1);

setTimeout(function(){
  $("#prediction1").fadeIn('slow');
}, 5500);

setTimeout(function(){
  $("#prediction2").fadeOut('slow');
}, 1);

setTimeout(function(){
  $("#prediction2").fadeIn('slow');
}, 6000);

setTimeout(function(){
  $("#prediction3").fadeOut('slow');
}, 1);

setTimeout(function(){
  $("#prediction3").fadeIn('slow');
}, 7000);

setTimeout(() => {
  const genNumber = () => {
  document.querySelector("#number_animation").style.setProperty("--percent", 0.85);
};

setInterval(genNumber, 2000);
setTimeout(genNumber, 2000);
}, 5000);

$("body").on("load", function(){

});

//prediction fropdown hide and show the option//
$(document).ready(function(){

  //hides dropdown content
  $(".botton").hide();
  
  //unhides first option content
  $("#Hotel").show();
  
  //listen to dropdown for change
  $("#dataset_select").change(function(){
    //rehide content on change
    $('.botton').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });
  
});

//prediction fropdown hide and show the option//
$(document).ready(function(){

  //hides dropdown content
  
  //unhides first option content
  $(".ppp").show();
  
  //listen to dropdown for change
  $("#fff").change(function(){
    //rehide content on change
    $('.ppp').hide();
    //unhides current item
    $('.gmap_canvas').fadeIn('slow');
  });

  $("#fff").change(function(){
    //rehide content on change
    $('.ppp').hide();
    //unhides current item
    $('.gmap_canvas').fadeIn('slow');
  });
  
});

