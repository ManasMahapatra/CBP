$(document).ready(function() {
  $(".button--main--1").click(function() {
    if ($('.btn').css('animation-name') == 'slideLeft') {
      $(".container--db").removeClass('open');
      $(".container--alumni").addClass('open');
    }
    else {
      $(".container--alumni").addClass('open');
    };

    console.log($('.btn').css('animation-name'));
    if ($('.btn').css('animation-name')) {
      console.log("hello start");
      $(".btn").removeClass('slideback');
      $(".btn").addClass('slide');
    }
    $(".btn").addClass('slide');
  });
  $("#close").click(function() {
    $(".container--alumni").removeClass('open');
    if ($('.btn').css('animation-name') == 'slideLeft') {
      console.log("hello world");
      $(".btn").removeClass('slide');
      $(".btn").toggleClass('slideback');
    }
  })
  $(".button--main--2").click(function() {
    if ($('.btn').css('animation-name') == 'slideLeft') {
      $(".container--alumni").removeClass('open');
      $(".container--db").addClass('open');
    }
    else {
      $(".container--db").addClass('open');
    };
    console.log($('.btn').css('animation-name'));
    if ($('.btn').css('animation-name')) {
      $(".btn").removeClass('slideback');
      $(".btn").addClass('slide');
    }
    $(".btn").addClass('slide');
  });
  $("#close--db").click(function() {
    $(".container--db").removeClass('open');
    if ($('.btn').css('animation-name') == 'slideLeft') {
      console.log("hello world");
      $(".btn").removeClass('slide');
      $(".btn").toggleClass('slideback');
    }
  })
});
