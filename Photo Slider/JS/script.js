//Set options
let speed = 1000; //fade speed
let autoswitch = true; //auto slider options
let autoswitch_speed = 3000; //auto slider speed

// Add initial active class
$(".slide").first().addClass("active");

//Hide all slides
$(".slide").hide();

//Show first slide
$(".active").show();

//Auto slide handler
if (autoswitch) {
  setInterval(nextSlide, autoswitch_speed);
}

$("#next").on("click", nextSlide);

$("#prev").on("click", prevSlide);

function nextSlide() {
  $(".active").removeClass("active").addClass("oldActive"); //B1: Tim thẻ có class="active" xóa class="active" và thêm vào class="oldActive"
  if ($(".oldActive").is(":last-child")) {
    //B2: Nếu thẻ có class="oldActive" là thẻ cuối cùng thì
    $(".slide").first().addClass("active"); // tìm đến class="slide" và thêm vào class="active" cho thẻ con đầu tiên
  } else {
    //Nếu không thì
    $(".oldActive").next().addClass("active"); //tìm đến thẻ kế của thẻ có class="oldActive" và thêm vào class="active" cho thẻ đó
  }
  $(".oldActive").removeClass("oldActive"); //B3: tìm đến các thẻ có class="oldActive" và xóa các class này.
  $(".slide").fadeOut(speed); //B4: tìm đến class="slide" và thay đổi độ hiển thị của các phần tử.
  $(".active").fadeIn(speed);
}

function prevSlide() {
  $(".active").removeClass("active").addClass("oldActive"); //B1: Tim thẻ có class="active" xóa class="active" và thêm vào class="oldActive"
  if ($(".oldActive").is(":first-child")) {
    //B2: Nếu thẻ có class="oldActive" là thẻ cuối cùng thì
    $(".slide").last().addClass("active"); // tìm đến class="slide" và thêm vào class="active" cho thẻ con đầu tiên
  } else {
    //Nếu không thì
    $(".oldActive").prev().addClass("active"); //tìm đến thẻ kế của thẻ có class="oldActive" và thêm vào class="active" cho thẻ đó
  }
  $(".oldActive").removeClass("oldActive"); //B3: tìm đến các thẻ có class="oldActive" và xóa các class này.
  $(".slide").fadeOut(speed); //B4: tìm đến class="slide" và thay đổi độ hiển thị của các phần tử.
  $(".active").fadeIn(speed);
}
