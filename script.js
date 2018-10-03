$(document).ready(function() {
  $(".btn-full").click(function() {
    if ($("#modal--2").css("display") == 'block') {
      $("#modal--2").css({'display':'none'});
    };
    $("#modal--1").show("fast");
  });
  $(".btn-ghost").click(function() {
    if ($("#modal--1").css("display") == 'block') {
      $("#modal--1").css({'display':'none'});
    };
    $("#modal--2").show("fast");
  });

});
