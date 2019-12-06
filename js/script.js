$(document).ready(function(){
 // put your code here
 $(".container").click(function() {
     $(this).siblings().fadeTo("slow",.1);
 });
 $(".superButton").click(function() {
     $(".container").fadeTo("slow",1);
 });
 /*$(".theButton").mouseenter(function() {
     $(this).addClass("makeBlack");
 });
 $(".theButton").mouseleave(function() {
     $(this).removeClass("makeBlack");
 });*/
 //will display rgb value of selected panel in the reset panel
 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

   });
});