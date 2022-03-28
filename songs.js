
$(document).ready(function(){

  let counts = Array.from(document.querySelectorAll("#count"));
  let songs = Array.from(document.querySelectorAll("#songs"));
  
  songs.forEach(function(){
    $(this).hide()
  });
  
  counts.forEach(function(){
    $(this).click(function(){
      let index = counts.indexOf($(this));
      $(songs[index]).toggle();
    });
  });
  
});
