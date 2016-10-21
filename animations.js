$(document).ready(function(){
  // STEP 2
  $('textarea.tweet-compose').on('click', function(){
    $(this).animate({height: '5em' }, 500);
  });
  /* another way to make textarea double in size.
  $('textarea.tweet-compose').focus(function(){
    $(this).animate({height: '5em' }, 500);
  });*/
  
});
