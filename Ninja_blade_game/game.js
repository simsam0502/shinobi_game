var c=0;
$(document).keypress(function (event){
  if(event.key==="Enter"){
    $("h1").text("Score: "+c);
    if(!$(".ninja").hasClass("jump")){
    $(".ninja").addClass("jump");
    setTimeout(function () { $(".ninja").removeClass("jump");},500);
    c++;
    }
    if(c==1){
      setTimeout(function (){$(".blade").removeClass("hidden").addClass("attack");},500);
    }
    }
});
setInterval(function (){ 
  if(parseInt($(".blade").css("left"))>=425&&parseInt($(".blade").css("left"))<=475&&
  parseInt($(".ninja").css("top"))>=225){
    $("h1").text("Game Over, your Score is "+c);
    $(".blade").removeClass("attack").addClass("hidden");
  }
},1)