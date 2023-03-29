$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    var charCount = $(this).val().length;
    var charLeft = 140 - charCount;
    $('#charCount').text(charLeft);
    if (charLeft < 0) {
      $('#charCount').addClass('red');
    } else {
      $('#charCount').removeClass('red');
    }
  });
});









