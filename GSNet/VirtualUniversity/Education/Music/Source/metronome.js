/*

 
*/

var c0 = document.getElementById("screen0");
var ctx0 = c0.getContext("2d");
var c1 = document.getElementById("screen1");
var ctx1 = c1.getContext("2d");

var metronomeSound = new Audio('file:///C:/Users/User/Desktop/GSNet/VirtualUniversity/Education/Music/Resources/Audio/jumpHighSound.ogg');
   
function playMetronomeSound()
{
 metronomeSound.play();
}


function showMetronome()
{	
   
   var bpm = prompt("How many beats per minute?", 300);
   
  
   
   ctx0.fillStyle = "#1234ad";
   ctx0.fillRect(0, 0, 700, 300);

   ctx0.fillStyle = "black";
   ctx0.font = "30px Arial";
   ctx0.fillText("BPM: " + bpm , 100, 50);  
   
   
   setInterval(function() {playMetronomeSound()}, 1000/bpm);
  
}