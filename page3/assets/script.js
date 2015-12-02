$(document).ready(function(){

$(".fam-item").click(function() {
 $(this).addClass("highlight");
});


$(".fam-item").click(function () {
 if (!$("#modal-container").hasClass("modal-active")) {
 $("#modal-container").addClass("modal-active");
 }
 else {
  $("#modal-container").removeClass("modal-active")
 }
});


$(".fam-item").click(function() {
 $(this).addClass("highlight");
});

});
});
