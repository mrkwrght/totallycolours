
$(document).ready(function(){
  $('.outline-color' ).each(function(index) {
    var color = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var targetBox = document.getElementsByClassName("color")[index];
    targetBox.style.backgroundColor = "#" + color;
    var targetDiv = document.getElementsByClassName("colorlabel")[index];
    targetDiv.innerHTML = "#" + color;
  });
});
