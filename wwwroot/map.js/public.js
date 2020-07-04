// JavaScript Document
$(".m-header .close").add(".mask").click(function () {
  $(".m-navs").slideUp();
  $(".mask").fadeOut();
});
$(".m-header .humb").click(function () {
  $(".m-navs").slideDown();
  $(".mask").fadeIn();
});
$(".m-header .lang .icon").click(function () {
  $(this).siblings(".lang-list").slideToggle();
});

//ÉèÖÃµ¼º½ºìÌõ
// setTimeout(function(){
// 	$("header").addClass("b-red")
// },700)

//ËÑË÷
$(".select-fun >span").click(function () {
  $(".select-fun .sub").slideToggle();
});
$(".select-fun .sub span").click(function () {
  $(".select-fun .sub").slideUp();
  $(".select-fun input").val($(this).text());
  $(".select-fun >span").text($(this).text());
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

$(function () {
  var wow = new WOW({
    offset: 30,
  });
  wow.init();
});


