$(document).ready(function(){


$("#link").click(function () {
 if (!$("body").hasClass("modal-container")) {
 $("body").addClass("modal-container");
 }
 else {
  $(".sidebar-container").removeClass("sidebar-active")
 }
});

});