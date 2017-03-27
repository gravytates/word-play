$(document).ready(function() {


  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("#sentence").val();

    var sentences = sentenceInput.split(' ');

// everything above here works well

    var newSentences = sentences.map(function(sentence){
      if (sentence.length >= 3) {
        return sentence
      }
    });

    newSentences.reverse().join(" ");

    $("#result").text(newSentences);

  });
});
