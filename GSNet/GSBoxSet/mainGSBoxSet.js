function showAbout()
{
 showDiv("about");
 hideDiv("albums");
 hideDiv("books");
 hideDiv("software");
 hideDiv("extras");
}

function showAlbums()
{
 hideDiv("about");
 showDiv("albums");
 hideDiv("books");
 hideDiv("software");
 hideDiv("extras");
}

function showBooks()
{
 hideDiv("about");
 hideDiv("albums");
 showDiv("books");
 hideDiv("software");
 hideDiv("extras");
}

function showSoftware()
{
 hideDiv("about");
 hideDiv("albums");
 hideDiv("books");
 showDiv("software");
 hideDiv("extras");
}

function showExtras()
{
 hideDiv("about");
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
