function showAlbums()
{
 //alert("Showing albums");
 showDiv("albums");
 hideDiv("books");
 hideDiv("software");
 hideDiv("extras");
}

function showBooks()
{
 //alert("Showing bookss");
 hideDiv("albums");
 showDiv("books");
 hideDiv("software");
 hideDiv("extras");
}

function showSoftware()
{
 //alert("Showing software");
 hideDiv("albums");
 hideDiv("books");
 showDiv("software");
 hideDiv("extras");
}

function showExtras()
{
 //alert("Showing software");
 hideDiv("albums");
 hideDiv("books");
 hideDiv("software");
 showDiv("extras");
}


function showDiv(div) 
{
  var x = document.getElementById(div);
  x.style.display = "block";
}

function hideDiv(div)
{
  var x = document.getElementById(div);
  x.style.display = "none";
}

document.getElementById("portfolioTabButton").addEventListener("click", function(){
    showDiv("portfolioDiv");
    hideDiv("classroomDiv");
    hideDiv("dormDiv");
    hideDiv("shopDiv");
});
