$(document).ready(function(){
  // STEP 1 on index.html
  // STEP 2
  $('.tweet-compose').on('click', function(){
    $(this).animate({height: '5em' }, 500);
    $('#tweet-controls').css("display", "block");
  });
  /* another way to make textarea double in size.
  $('textarea.tweet-compose').focus(function(){
    $(this).animate({height: '5em' }, 500);
  });*/

  // STEP 3 & 4
  maxCharacters = 140;
  $('#char-count').text(maxCharacters);
  $('textarea').bind('keyup keydown', function(){
    var characters = $('textarea').val().length;
    if (characters >= (maxCharacters - 10)) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '#999');
    }
    $('#char-count').text(maxCharacters - characters);

    // STEP 5
    if (characters > maxCharacters){
      //$('#tweet-submit').addClass('disabled');
      $('#tweet-submit').prop('disabled', true);
    } else {
      //$('#tweet-submit').removeClass('disabled').;
      $('#tweet-submit').prop('disabled', false);
    }
  });
});
