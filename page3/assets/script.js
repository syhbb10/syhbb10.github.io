$(document).ready(function(){

$(".fam-item").click(function() {
 $("#modal-container").show();
});

$(".fr-item").click(function() {
 $("#modal-container").show();
});

$(".fam-item").hover(function(){
    $(this).css("border", "pink");
    }
});
});
