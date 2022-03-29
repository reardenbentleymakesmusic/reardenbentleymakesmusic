
$(document).ready(function(){

  let counts = Array.from(document.querySelectorAll("[id^='count']"));
  let songs = Array.from(document.querySelectorAll("[id^='songs']"));
  
  $("[id^='songs']").click(function(){
    $(this).hide()
  });
  
  $("[id^='count']").click(function(){
    $(this).click(function(){
      let index = counts.indexOf($(this));
      $(songs[index]).toggle();
    });
  });
  
});
