// Check off Specific Todos by Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .remove();
  event.stopPropagation();
});

//Select input text
// Append text to UL when enterBtn(13) is pressed
$("#inputBox").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo from input
    let todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>"
    );
  }
});

$(".fa-bullseye").click(function() {
  $("#inputBox").toggle("slow");
});
