var ball = document.getElementById("balltag");
ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";
function setValue(value) {
    return value + "px";
}
window.addEventListener("keydown",function(event){
  var keypress = event.which;
  var top = parseInt(ball.style.top);
  var left = parseInt(ball.style.left);
  if((keypress==39 || keypress==68)&&(window.innerWidth-left-100>5))
  {
      ball.style.left=setValue(left+5);
  }
  else if((keypress==65 || keypress==37) && left>5)
  {
    ball.style.left=setValue(left-5);
  }
  else if((keypress==83 || keypress==40)&&(window.innerHeight-top-100>5))
  {
      ball.style.top=setValue(top+5);
  }
  else if((keypress==87 || keypress==38) && top>5)
  {
      ball.style.top=setValue(top-5);
  }
  

})

