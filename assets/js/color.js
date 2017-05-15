<<<<<<< HEAD
$(document).ready(function(){
  $('.outline-color' ).each(function(index) {
    var color = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var targetBox = document.getElementsByClassName("color")[index];
    targetBox.style.backgroundColor = "#" + color;
    var targetDiv = document.getElementsByClassName("colorlabel")[index];
    targetDiv.innerHTML = "#" + color;
  });
=======





var randomColor = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor1 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor2 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor3 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor4 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor5 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor6 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor7 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

var randomColor8 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor9 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor10 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor11 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
var randomColor12 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
 var randomColor13 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
 var randomColor14 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
 var randomColor15 = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

$(function() {

$("#colorbox").css({
    backgroundColor:'#' + randomColor
});
$("#colorcode").text("#" + randomColor);

$("#colorbox1").css({
  backgroundColor:'#' + randomColor1
});
$("#colorcode1").text("#" + randomColor1);

$("#colorbox2").css({
  backgroundColor:'#' + randomColor2
});
$("#colorcode2").text("#" + randomColor2);

$("#colorbox3").css({
  backgroundColor:'#' + randomColor3
});
$("#colorcode3").text("#" + randomColor3);

$("#colorbox4").css({
    backgroundColor:'#' + randomColor4
});
$("#colorcode4").text("#" + randomColor4);

$("#colorbox5").css({
  backgroundColor:'#' + randomColor5
});
$("#colorcode5").text("#" + randomColor5);

$("#colorbox6").css({
  backgroundColor:'#' + randomColor6
});
$("#colorcode6").text("#" + randomColor6);

$("#colorbox7").css({
  backgroundColor:'#' + randomColor7
});
$("#colorcode7").text("#" + randomColor7);

});

$(function() {
$("#colorbox8").css({
    backgroundColor:'#' + randomColor8
});
$("#colorcode8").text("#" + randomColor8);

$("#colorbox9").css({
  backgroundColor:'#' + randomColor9
});
$("#colorcode9").text("#" + randomColor9);

$("#colorbox10").css({
  backgroundColor:'#' + randomColor10
});
$("#colorcode10").text("#" + randomColor10);

$("#colorbox11").css({
  backgroundColor:'#' + randomColor11
});
$("#colorcode11").text("#" + randomColor11);

$("#colorbox12").css({
    backgroundColor:'#' + randomColor12
});
$("#colorcode12").text("#" + randomColor12);

$("#colorbox13").css({
  backgroundColor:'#' + randomColor13
});
$("#colorcode13").text("#" + randomColor13);

$("#colorbox14").css({
  backgroundColor:'#' + randomColor14
});
$("#colorcode14").text("#" + randomColor14);


$("#colorbox15").css({
  backgroundColor:'#' + randomColor15
});
$("#colorcode15").text("#" + randomColor15);

>>>>>>> 3b8d586f83e00f953e7691702f949f462e836bdc
});
