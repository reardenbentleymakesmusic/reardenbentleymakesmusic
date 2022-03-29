
$(document).ready(function(){

  $("[id^='songs']").hide();
  
  $("[id^='count']").click(function(){
    let index = $(this).attr('id').substring(5);
    console.log(index);
    let name = "songs" + index;
    console.log(name);
    $(name).toggle();
  });
  
});
