var c=0;
$(document).keypress(function (){
  if(event.key=="Enter"){
    if(!$(".ninja").hasClass("jump")){
    $(".ninja").addClass("jump");
    setTimeout(function () { $(".ninja").removeClass("jump");},1000);
    if(c==0){
      setTimeout(function (){$(".blade").addClass("attack");},1000);
      c++;
    }
  }
  }
})
