$(document).ready(function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed--string',
    typeSpeed: 30,
    showCursor: false,
  });
  $(".button--main").click(function() {
    $("#modal--1").show("fast");
  });
});
