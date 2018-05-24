/*

 
*/

var c0 = document.getElementById("screen0");
var ctx0 = c0.getContext("2d");
var c1 = document.getElementById("screen1");
var ctx1 = c1.getContext("2d");


function loadBlankFretboard()
{
 ctx0.fillStyle = "#aaaaff";
 ctx0.fillRect(0, 0, 700, 300);

 //ctx0.fillStyle = letterColor;
 ctx0.font = "30px Arial";
 //ctx.fillText(nextLetter , 200, 50);

 
 for (var i = 0, y = 40; i < 6; i++, y += 40) 
 {
  ctx0.fillStyle = "black";
  ctx0.beginPath();
  ctx0.moveTo(30, y);
  ctx0.lineTo(600, y);
  ctx0.stroke();
 }
 
}