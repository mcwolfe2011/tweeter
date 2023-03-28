$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    var charCount = $(this).val().length;
    var charLeft = 140 - charCount;
    $('#charCount').text(charLeft);
  });
});





