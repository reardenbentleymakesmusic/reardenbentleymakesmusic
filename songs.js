
$(document).ready(function(){

  let counts = Array.from(document.querySelectorAll("#count"));
  let songs = Array.from(document.querySelectorAll("#songs"));
  
  forEach(songs) {
    $(this).hide()
  }
  
  forEach(counts) {
    $(this).click(function(){
      let index = counts.indexOf($(this));
      $(songs[index]).toggle();
    });
  }
  
});
