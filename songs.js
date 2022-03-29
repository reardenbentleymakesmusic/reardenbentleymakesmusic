
$(document).ready(function(){

  $("[id^='songs']").hide();
  
  $("[id^='count']").click(function(){
    let index = $(this).attr('id').substring(5);
    let name = "songs" + index;
    $('name').toggle();
  });
  
});
