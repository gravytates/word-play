$(document).ready(function() {


  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();

    $("#result").text(sentence);
  });





});
