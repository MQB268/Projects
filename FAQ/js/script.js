// Accordian
let action = "click";
let speed = 500;

//Question handler
$("li.q").on(action, function () {
  //Get next element
  $(this)
    .next()
    .slideToggle(speed)
    //Select all other answer
    .siblings("li.a")
    .slideUp();
  //Get image for active question
  let img = $(this).children("img");
  //Remove the 'rotate' class for all images except the active
  $("img").not(img).removeClass("rotate");
  //Toggle rotate class
  img.toggleClass("rotate");
});
