$("#menuButton").click(function () {
  $("#exit").toggle();
  $("#burger").toggle();

});


$('#menuButton').click(function () {
  $('.detailedMenu').toggle('slow', 'linear');
});

$(document).ready(function () {
  if ($(window).width() <= 800) {

    $('#process2').click(function () {
      $('.detailedMenu').toggle();
      $("#exit").toggle();
      $("#burger").toggle();
    });


    $('#work2').click(function () {
      $('.detailedMenu').toggle();
      $("#exit").toggle();
      $("#burger").toggle();
    });


    $('#about-us2').click(function () {
      $('.detailedMenu').toggle();
      $("#exit").toggle();
      $("#burger").toggle();
    });
  }
});

